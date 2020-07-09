<template>
    <v-row class="pa-2">
        <v-col lg="6" sm="12" class="pa-2">
            <BaseHistogramChart :chart-data-settings="chartDataSettings.month"/>
        </v-col>
        <v-col lg="6" sm="12" class="pa-2">
            <BaseHistogramChart :chart-data-settings="chartDataSettings.year"/>
        </v-col>
    </v-row>

</template>

<script>
    import ChartConfig from '../../../const/ChartConst';
    import BaseHistogramChart from "../BaseHistogramChart";
    import BaseChartSettings from "../../../const/ChartBase";

    export default {
        components: {BaseHistogramChart},
        props: ['name'],
        name: "FrequencyYearMonth",
        data: () => {
            let year = BaseChartSettings({title: '年交易频率'});
            let month = BaseChartSettings({title: '月交易频率'});
            return {
                chartDataSettings: {
                    month: {
                        dataEmpty: true,
                        chartHeight: ChartConfig.baseHeight,
                        extend: month.extend,
                        chartSettings: {
                            metrics: ['Frequency'],
                            dimension: ['Date'],
                            // axisSite: {right: ['Percent']},
                            yAxisType: ['normal'],
                            dataType: {
                                'Frequency': 'normal',
                            },
                            // yAxisName: ['金额/元', '比率/%'],
                            labelMap: {
                                Date: '日期',
                                Frequency: '次数',
                            },
                            area: true,
                            // showLine: ['Percent']
                        },
                        chartData: {
                            columns: ['Date', 'Frequency'],
                            rows: []
                        }
                    },
                    year: {
                        dataEmpty: true,
                        chartHeight: ChartConfig.baseHeight,
                        extend: year.extend,
                        chartSettings: {
                            metrics: ['Frequency'],
                            dimension: ['Date'],
                            // axisSite: {right: ['Percent']},
                            yAxisType: ['normal'],
                            dataType: {
                                'Frequency': 'normal',
                            },
                            // yAxisName: ['金额/元', '比率/%'],
                            labelMap: {
                                Date: '日期',
                                Frequency: '次数',
                            },
                            area: true,
                            // showLine: ['Percent']
                        },
                        chartData: {
                            columns: ['Date', 'Frequency'],
                            rows: []
                        }
                    }
                }
            }
        },
        mounted() {
            let self = this;
            setTimeout(function () {
                self.chartDataSettings.month.chartData.rows = [
                    {
                        "Date": "2018-07",
                        "Frequency": 10
                    },
                    {
                        "Date": "2018-08",
                        "Frequency": 20
                    },
                    {
                        "Date": "2018-09",
                        "Frequency": 4
                    },
                    {
                        "Date": "2018-11",
                        "Frequency": 12
                    },
                    {
                        "Date": "2019-09",
                        "Frequency": 25
                    },
                    {
                        "Date": "2020-02",
                        "Frequency": 13
                    },
                    {
                        "Date": "2020-03",
                        "Frequency": 3
                    },
                    {
                        "Date": "2020-06",
                        "Frequency": 8
                    },
                ]
                ;
                self.chartDataSettings.month.dataEmpty = false;
            }, 2000);
            setTimeout(function () {
                self.chartDataSettings.year.chartData.rows = [
                    {
                        "Date": "2018",
                        "Frequency": 33
                    },
                    {
                        "Date": "2019",
                        "Frequency": 167
                    },
                    {
                        "Date": "2020",
                        "Frequency": 49
                    },
                ]
                ;
                self.chartDataSettings.year.dataEmpty = false;
            }, 2000);
        }
    }
</script>

<style scoped>

</style>
