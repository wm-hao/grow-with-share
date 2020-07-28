<template>
    <v-card raised="">
        <ve-line :data="chartData" :settings="chartSettings" :height="chartHeight" :extend="extend"
                 :dataZoom="dataZoom"></ve-line>
    </v-card>
</template>

<script>
    import ChartConfig from "../../const/ChartConst";
    import {balanceQry} from "../../api/balance/balanceRequest";

    export default {
        name: "AssetProfitLine",
        data: () => {
            return {
                dataZoom: {
                    type: 'slider',
                    start: 0,
                    end: 100,
                    height: 14,
                },
                dataEmpty: true,
                chartHeight: ChartConfig.baseHeight,
                extend: {
                    legend: {
                        top: ChartConfig.legendTop
                    },
                    yAxis: {},
                    title: {
                        text: '利润曲线',
                        left: ChartConfig.titleLeft,
                        top: ChartConfig.titleTop
                    }
                },
                chartData: {
                    columns: ['date', 'profit'],
                    rows: []
                },
                chartSettings: {
                    metrics: ['profit'],
                    dimension: ['date'],
                    labelMap: {
                        date: '日期',
                        profit: '利润'
                    },
                    area: true
                }
            }
        },
        methods: {
            fetchData: function () {
                let self = this;
                let qryParams = {
                    "page": 0,
                    "size": 1000,
                    "timeOrder": "ASC",
                    "reverse": "N"
                };
                balanceQry(qryParams, (json) => {
                    if (json.total > 0) {
                        self.chartData.rows = json.rows;
                        self.dataEmpty = false;
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
