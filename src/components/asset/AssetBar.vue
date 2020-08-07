<template>
    <v-card raised="">
        <BaseHistogramChart :chart-data-settings="chartDataSettings"/>
    </v-card>
</template>

<script>
    import BaseHistogramChart from "../chart/BaseHistogramChart";
    import ChartConfig from "../../const/ChartConst";
    import BaseChartSettings from "../../const/ChartBase";
    import {balanceQry} from "../../api/balance/balanceRequest";

    export default {
        name: "AssetBar",
        components: {BaseHistogramChart},
        data: () => {
            let base = BaseChartSettings({
                title: '账户资源',
                itemStyleOrigin: true
            });
            return {
                chartDataSettings: {
                    dataZoom: {
                        start: 20,
                        end: 50,
                        type: 'slider',
                        height: 14,
                    },
                    dataEmpty: true,
                    loading: true,
                    chartHeight: ChartConfig.baseHeight,
                    extend: base.extend,
                    chartData: {
                        columns: ['date', 'shareAmount', 'fundAmount', 'cashAmount', 'total'],
                        rows: []
                    },
                    chartSettings: {
                        metrics: ['shareAmount', 'fundAmount', 'cashAmount', 'total'],
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
                        self.chartDataSettings.chartData.rows = json.rows;
                        self.chartDataSettings.dataEmpty = false;
                        self.chartDataSettings.loading = false;
                        self.chartDataSettings.dataZoom.start = (1 - (4 / json.total)) * 100;
                        self.chartDataSettings.dataZoom.end = 100;
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
