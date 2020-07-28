<template>
    <v-card flat="">
        <BaseHistogramChart :chart-data-settings="chartDataSettings"/>
    </v-card>
</template>

<script>
    import ChartConfig from '../../../const/ChartConst';
    import BaseHistogramChart from "../BaseHistogramChart";
    import BaseChartSettings from "../../../const/ChartBase";

    export default {
        name: "FrequencyDays",
        components: {BaseHistogramChart},
        data: () => {
            let options = {
                title: '日交易频率',
                dataZoom: {
                },
                barWidth: 7
            };
            const baseChartSettings = BaseChartSettings(options);
            return {
                chartDataSettings: {
                    dataEmpty: true,
                    chartHeight: ChartConfig.baseHeight,
                    extend: baseChartSettings.extend,
                    chartSettings: {
                        metrics: ['Frequency'],
                        dimension: ['Date'],
                        yAxisType: ['normal'],
                        dataType: {
                            'Frequency': 'normal',
                        },
                        labelMap: {
                            Date: '日期',
                            Frequency: '次数',
                        },
                        area: true,
                    },
                    chartData: {
                        columns: ['Date', 'Frequency'],
                        rows: []
                    }
                }
            }
        }
        ,
        mounted() {
            let self = this;
            setTimeout(function () {
                self.chartDataSettings.chartData.rows = [
                    {
                        "Date": "2018-07-04",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-07-31",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-08-15",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-08-16",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-09-13",
                        "Frequency": 2
                    },
                    {
                        "Date": "2018-09-14",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-09-18",
                        "Frequency": 4
                    },
                    {
                        "Date": "2018-09-19",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-09-26",
                        "Frequency": 3
                    },
                    {
                        "Date": "2018-09-27",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-10-09",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-10-11",
                        "Frequency": 2
                    },
                    {
                        "Date": "2018-10-22",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-10-23",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-10-25",
                        "Frequency": 3
                    },
                    {
                        "Date": "2018-11-05",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-11-06",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-11-07",
                        "Frequency": 2
                    },
                    {
                        "Date": "2018-11-08",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-11-09",
                        "Frequency": 3
                    },
                    {
                        "Date": "2018-11-15",
                        "Frequency": 2
                    },
                    {
                        "Date": "2018-11-16",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-11-20",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-11-29",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-11-30",
                        "Frequency": 2
                    },
                    {
                        "Date": "2018-12-05",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-12-06",
                        "Frequency": 2
                    },
                    {
                        "Date": "2018-12-11",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-12-17",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-12-18",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-12-19",
                        "Frequency": 2
                    },
                    {
                        "Date": "2018-12-20",
                        "Frequency": 3
                    },
                    {
                        "Date": "2018-12-25",
                        "Frequency": 1
                    },
                    {
                        "Date": "2018-12-28",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-01-02",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-01-03",
                        "Frequency": 3
                    },
                    {
                        "Date": "2019-01-07",
                        "Frequency": 4
                    },
                    {
                        "Date": "2019-01-09",
                        "Frequency": 6
                    },
                    {
                        "Date": "2019-01-11",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-01-14",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-01-15",
                        "Frequency": 3
                    },
                    {
                        "Date": "2019-01-17",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-01-18",
                        "Frequency": 3
                    },
                    {
                        "Date": "2019-01-22",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-01-23",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-02-11",
                        "Frequency": 3
                    },
                    {
                        "Date": "2019-02-12",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-02-19",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-02-26",
                        "Frequency": 3
                    },
                    {
                        "Date": "2019-02-27",
                        "Frequency": 6
                    },
                    {
                        "Date": "2019-03-04",
                        "Frequency": 4
                    },
                    {
                        "Date": "2019-03-06",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-03-11",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-03-13",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-03-15",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-03-18",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-03-19",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-03-20",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-03-21",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-03-26",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-04-04",
                        "Frequency": 4
                    },
                    {
                        "Date": "2019-04-09",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-04-10",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-04-12",
                        "Frequency": 4
                    },
                    {
                        "Date": "2019-04-17",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-04-19",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-04-23",
                        "Frequency": 4
                    },
                    {
                        "Date": "2019-04-25",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-05-10",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-05-15",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-05-16",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-05-20",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-05-22",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-05-23",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-05-28",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-05-29",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-06-13",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-06-24",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-06-27",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-07-15",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-07-16",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-07-30",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-08-19",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-08-22",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-08-27",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-09-03",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-09-10",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-09-17",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-09-19",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-09-27",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-10-11",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-10-15",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-10-21",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-10-24",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-11-05",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-11-08",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-11-11",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-11-13",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-11-20",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-12-04",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-12-06",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-12-13",
                        "Frequency": 2
                    },
                    {
                        "Date": "2019-12-16",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-12-17",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-12-20",
                        "Frequency": 1
                    },
                    {
                        "Date": "2019-12-26",
                        "Frequency": 3
                    },
                    {
                        "Date": "2019-12-27",
                        "Frequency": 3
                    },
                    {
                        "Date": "2020-01-06",
                        "Frequency": 2
                    },
                    {
                        "Date": "2020-01-09",
                        "Frequency": 1
                    },
                    {
                        "Date": "2020-01-13",
                        "Frequency": 1
                    },
                    {
                        "Date": "2020-01-22",
                        "Frequency": 3
                    },
                    {
                        "Date": "2020-02-04",
                        "Frequency": 1
                    },
                    {
                        "Date": "2020-02-14",
                        "Frequency": 2
                    },
                    {
                        "Date": "2020-02-19",
                        "Frequency": 1
                    },
                    {
                        "Date": "2020-02-21",
                        "Frequency": 1
                    },
                    {
                        "Date": "2020-02-27",
                        "Frequency": 1
                    },
                    {
                        "Date": "2020-03-03",
                        "Frequency": 1
                    },
                    {
                        "Date": "2020-03-04",
                        "Frequency": 1
                    },
                    {
                        "Date": "2020-03-05",
                        "Frequency": 1
                    },
                    {
                        "Date": "2020-03-10",
                        "Frequency": 1
                    },
                    {
                        "Date": "2020-03-11",
                        "Frequency": 1
                    },
                    {
                        "Date": "2020-03-18",
                        "Frequency": 2
                    },
                    {
                        "Date": "2020-03-19",
                        "Frequency": 1
                    },
                    {
                        "Date": "2020-03-27",
                        "Frequency": 1
                    },
                    {
                        "Date": "2020-04-01",
                        "Frequency": 1
                    }
                ];
                self.chartDataSettings.dataEmpty = false;
            }, 10);

        }
    }
</script>

<style scoped>

</style>
