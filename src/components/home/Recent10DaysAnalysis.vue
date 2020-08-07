<template>
    <v-card raised="">
        <BaseHistogramChart :chart-data-settings="chartDataSettings"/>
    </v-card>

</template>

<script>
    import ChartConfig from '../../const/ChartConst';
    import BaseChartSettings from "../../const/ChartBase";
    import BaseHistogramChart from "../chart/BaseHistogramChart";
    import {balanceQry} from "../../api/balance/balanceRequest";

    export default {
        name: "Recent10DaysAnalysis",
        components: {BaseHistogramChart},
        data: () => {
            let options = {
                title: '近10日数据总览',
                axisLabel: 1,
                itemStyleOrigin: true
            };
            const baseChartSettings = BaseChartSettings(options);
            return {
                chartDataSettings: {
                    loading: true,
                    dataEmpty: true,
                    chartHeight: ChartConfig.baseHeight,
                    extend: baseChartSettings.extend,
                    chartSettings: {
                        metrics: ['profit', 'total'],
                        dimension: ['date'],
                        axisSite: {right: ['total']},
                        yAxisType: ['normal', 'total'],
                        dataType: {
                            'profit': 'normal',
                            'total': 'normal',
                        },
                        labelMap: {
                            date: '日期',
                            profit: '利润',
                            total: '总计'
                        },
                        showLine: ['total'],
                    },
                    chartData: {
                        columns: ['date', 'profit', 'total'],
                        rows: []
                    }
                }
            }
        },
        methods: {
            fetchData: function () {
                let self = this;
                let qryParams = {
                    "page": 0,
                    "size": 10,
                    "timeOrder": "DESC",
                    "reverse": "Y"
                };
                balanceQry(qryParams, (json) => {
                    self.chartDataSettings.chartData.rows = json.rows;
                    if (json.rows.length > 0) {
                        self.chartDataSettings.dataEmpty = false;
                        self.chartDataSettings.loading = false;
                    }
                }, (json) => {
                    self.$message.error(json.message);
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
