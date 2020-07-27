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
    import {USER_ID} from "../../const/Constant";

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
                        showLine: ['total']
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
                }, (json) => {
                    self.$message.error(json.message);
                })

            }

        },
        created() {
            sessionStorage.setItem(USER_ID, "1");
            this.fetchData();
        }

    }
</script>

<style scoped>

</style>
