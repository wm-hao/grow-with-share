<template>
    <v-card raised="">
        <BaseHistogramChart :chart-data-settings="chartDataSettings"/>
    </v-card>

</template>

<script>
    import ChartConfig from '../../const/ChartConst';
    import BaseChartSettings from "../../const/ChartBase";
    import BaseHistogramChart from "../chart/BaseHistogramChart";

    export default {
        name: "Recent10DaysAnalysis",
        components: {BaseHistogramChart},
        data: () => {
            let options = {
                title: '近10日数据总览',
                axisLabel: 0,
            };
            const baseChartSettings = BaseChartSettings(options);
            return {
                chartDataSettings: {
                    chartHeight: ChartConfig.baseHeight,
                    extend: baseChartSettings.extend,
                    charSettings: {
                        metrics: ['Profit', 'Percent'],
                        dimension: ['Date'],
                        axisSite: {right: ['Percent']},
                        yAxisType: ['normal', 'percent'],
                        dataType: {
                            'Profit': 'normal',
                            'Percent': 'percent',
                            'Total': 'KMB',
                        },
                        // yAxisName: ['金额/元', '比率/%'],
                        labelMap: {
                            Date: '日期',
                            Profit: '当日盈亏',
                            Percent: '盈亏比',
                            Total: '持仓总额'
                        },
                        // area: true,
                        showLine: ['Percent']
                    },
                    chartData: {
                        columns: ['Date', 'Profit', 'Percent'],
                        rows: [
                            {'Date': '06-22', 'Profit': 1000, 'Percent': 0.01, 'Total': 15},
                            {'Date': '06-23', 'Profit': 200, 'Percent': 0.012, 'Total': 20},
                            {'Date': '06-24', 'Profit': 323, 'Percent': 0.023, 'Total': 25000},
                            {'Date': '06-25', 'Profit': -30, 'Percent': -0.028, 'Total': 21000},
                            {'Date': '06-26', 'Profit': 498, 'Percent': 0.033, 'Total': 30000},
                            {'Date': '06-29', 'Profit': 78, 'Percent': 0.01, 'Total': 15},
                            {'Date': '06-30', 'Profit': 100, 'Percent': 0.012, 'Total': 20},
                            {'Date': '07-01', 'Profit': 323, 'Percent': 0.023, 'Total': 25000},
                            {'Date': '07-02', 'Profit': -478, 'Percent': -0.028, 'Total': 21000},
                            {'Date': '07-03', 'Profit': 498, 'Percent': 0.033, 'Total': 30000},
                        ],
                    }
                }
            }
        }

    }
</script>

<style scoped>

</style>
