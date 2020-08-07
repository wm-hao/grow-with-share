<template>
    <v-card raised="">
        <ve-line :data="chartData" :settings="chartSettings" :height="chartHeight" :extend="extend"
                 :dataZoom="dataZoom" :loading="loading"></ve-line>
    </v-card>
</template>

<script>
    import ChartConfig from "../../const/ChartConst";
    import {balanceQry} from "../../api/balance/balanceRequest";

    export default {
        name: "AssetLine",
        data: () => {
            return {
                dataZoom: {
                    type: 'slider',
                    start: 18,
                    end: 100,
                    height: 14,
                },
                dataEmpty: false,
                loading: true,
                chartHeight: ChartConfig.baseHeight,
                extend: {
                    legend: {
                        top: ChartConfig.legendTop
                    },
                    yAxis: {
                        splitNumber: 7
                    },
                    title: {
                        text: '资产分类',
                        left: ChartConfig.titleLeft,
                        top: ChartConfig.titleTop
                    }
                },
                chartData: {
                    columns: ['date', 'shareAmount', 'fundAmount', 'cashAmount', 'total'],
                    rows: []
                },
                chartSettings: {
                    metrics: ['shareAmount', 'fundAmount', 'cashAmount', 'total'],
                    axisSite: {right: ['total', 'shareAmount']},
                    yAxisType: ['normal', 'KMB'],
                    dimension: ['date'],
                    labelMap: {
                        date: '日期',
                        shareAmount: '股票',
                        fundAmount: '基金',
                        cashAmount: '现金',
                        total: '总计'
                    },
                }
            }
        },
        methods: {
            fetchData: function () {
                let self = this;
                let qryParams = {
                    "page": 0,
                    "size": 20000,
                    "timeOrder": "ASC",
                    "reverse": "N"
                };
                balanceQry(qryParams, (json) => {
                    if (json.total > 0) {
                        self.chartData.rows = json.rows;
                        self.dataEmpty = false;
                        self.loading = false;
                    }
                })
            }
        },
        created() {
            this.fetchData();
        }
    }
</script>

<style scoped>

</style>
