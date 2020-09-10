<template>
    <v-card flat="" class="ma-2">
        <v-row class="ma-0">
            <v-col lg="8" sm="12">
                <v-card raised="">
                    <ve-line :data="chartData" :settings="chartSettings" :height="chartHeight" :extend="extend"
                             :dataZoom="dataZoom" :loading="loading" :mark-line="markLine"></ve-line>
                </v-card>
            </v-col>
            <v-col lg="4" sm="12">
                <v-card raised="" class="pa-2" style="height: 300px">
                    <div class="px-2 mb-4 text-h6 font-weight-bold ">当日消费</div>
                    <div class="my-8 px-4">
                        <el-form :model="consumption" ref="form" label-width="80px">
                            <el-form-item label="消费金额" prop="amount">
                                <el-input v-model="consumption.amount" type="number"></el-input>
                            </el-form-item>
                            <el-form-item label="消费项目" prop="remarks">
                                <el-input v-model="consumption.remarks"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <v-btn color="primary" class="elevation-1" block="" @click="add">提 交</v-btn>
                            </el-form-item>
                        </el-form>
                    </div>
                </v-card>
            </v-col>

        </v-row>
        <v-row class="ma-0">
            <v-data-table

                    :no-data-text="noData"
                    :headers="headers"
                    :items="records"
                    class="elevation-2  ma-2 pa-1"
                    :server-items-length="total"
                    :options.sync="options"
                    :page.sync="page"
                    :items-per-page.sync="perPage"
                    @update:items-per-page="query"
                    @update:page="query"
                    style="width: 100%;"
            >

                <template v-slot:header.date="{ header } ">
                    <span class="text-body-2">{{header.text}}</span>
                </template>
                <template v-slot:header.amount="{ header } ">
                    <span class="text-body-2">{{header.text}}</span>
                </template>
                <template v-slot:header.remarks="{ header } ">
                    <span class="text-body-2">{{header.text}}</span>
                </template>

            </v-data-table>
        </v-row>

    </v-card>
</template>

<script>
    import ChartConfig from "../../../const/ChartConst";
    import {consumptionAdd, consumptionPagination, consumptionQry} from "../../../api/daily/dailyConsumptionRequest";

    export default {
        name: "DailyConsumption",
        data: () => {
            return {
                noData: '暂无数据',
                perPage: 5,
                page: 1,
                total: 0,
                options: {},
                headers: [
                    {
                        text: '日期',
                        align: 'start',
                        value: 'date',
                    },
                    {text: '消费金额/元', value: 'amount'},
                    {text: '消费项目', value: 'remarks'},
                ],
                records: [],
                dataZoom: {
                    type: 'slider',
                    start: 10,
                    end: 100,
                    height: 14,
                },
                dataEmpty: false,
                loading: true,
                markLine: {
                    data: [
                        {
                            type: 'average',
                            name: '平均数',
                            label: {
                                show: true,
                                normal: {
                                    position: 'middle',
                                    formatter: '{b}: {c}'
                                }
                            },
                            lineStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'red' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'yellow' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            }
                        }
                    ]

                },
                chartHeight: ChartConfig.smallHeight,
                extend: {
                    legend: {
                        top: ChartConfig.legendTop
                    },
                    yAxis: {
                        // splitNumber: 7
                    },
                    title: {
                        text: '日消费',
                        left: ChartConfig.titleLeft,
                        top: ChartConfig.titleTop
                    }
                },
                chartData: {
                    columns: ['date', 'amount'],
                    rows: []
                },
                chartSettings: {
                    metrics: ['amount'],
                    yAxisType: ['normal'],
                    dimension: ['date'],
                    labelMap: {
                        date: '日期',
                        amount: '每日花钱',
                    },
                },
                consumption: {
                    amount: null,
                    remarks: ''
                }
            }
        },
        methods: {
            fetchData() {
                let self = this;
                consumptionQry({}, (json) => {
                    self.chartData.rows = json.rows;
                    self.dataEmpty = false;
                    self.loading = false;
                });
            },
            query() {
                let self = this;
                let params = {
                    page: self.page - 1,
                    size: self.perPage
                }
                consumptionPagination(params, (json) => {
                    self.records = json.rows;
                    self.total = json.total;
                });
            },
            add() {
                if (this.consumption.remarks === '') {
                    this.$message.error({
                        center: true,
                        message: '消费项目不能为空'
                    });
                    return;
                }
                if (!this.consumption.amount || this.consumption.amount < 0) {
                    this.$message.error({
                        center: true,
                        message: '消费金额不能小于0'
                    });
                    return;
                }
                let self = this;
                consumptionAdd(this.consumption, (json) => {
                    self.$message.success({
                        center: true,
                        message: json.message
                    });
                    self.fetchData();
                    self.query();
                });
            }
        },
        created() {
            this.fetchData();
            this.query();
        }
    }
</script>

<style scoped>

</style>
