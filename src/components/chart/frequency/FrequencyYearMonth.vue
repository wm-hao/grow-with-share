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
    import {recordFrequencyQry} from "../../../api/record/recordRequest";

    export default {
        components: {BaseHistogramChart},
        props: ['name'],
        name: "totalYearMonth",
        data: () => {
            let year = BaseChartSettings({title: '年交易频率', axisLabel: 0, barWidth: 8});
            let month = BaseChartSettings({title: '月交易频率', barWidth: 8});
            return {
                chartDataSettings: {
                    month: {
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
                                    }
                                }
                            ]

                        },
                        dataZoom: {
                            type: 'slider',
                            start: 20,
                            end: 80,
                            height: 10
                        },
                        dataEmpty: true,
                        chartHeight: ChartConfig.baseHeight,
                        extend: month.extend,
                        chartSettings: {
                            metrics: ['total'],
                            dimension: ['date'],
                            yAxisType: ['normal'],
                            dataType: {
                                'total': 'normal',
                            },
                            labelMap: {
                                date: '日期',
                                total: '次数',
                            },
                        },
                        chartData: {
                            columns: ['date', 'total'],
                            rows: []
                        }
                    },
                    year: {
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
                                    }
                                }
                            ]

                        },
                        dataEmpty: true,
                        chartHeight: ChartConfig.baseHeight,
                        extend: year.extend,
                        chartSettings: {
                            metrics: ['total'],
                            dimension: ['date'],
                            yAxisType: ['normal'],
                            dataType: {
                                'total': 'normal',
                            },
                            labelMap: {
                                date: '日期',
                                total: '次数',
                            },
                        },
                        chartData: {
                            columns: ['date', 'total'],
                            rows: []
                        }
                    }
                }
            }
        },
        created() {
            let self = this;
            recordFrequencyQry({type: "month"}, (json) => {
                self.chartDataSettings.month.chartData.rows = json.rows;
                self.chartDataSettings.month.dataEmpty = false;
                let start = (20 >= json.total ? 0 : (1 - 20 / json.total) * 100);
                self.chartDataSettings.month.dataZoom.start = start;

            });
            recordFrequencyQry({type: "year"}, (json) => {
                self.chartDataSettings.year.dataEmpty = false;
                self.chartDataSettings.year.chartData.rows = json.rows;
            });
        }
    }
</script>

<style scoped>

</style>
