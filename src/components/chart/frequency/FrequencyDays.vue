<template>
    <v-card flat="">
        <BaseHistogramChart :chart-data-settings="chartDataSettings"/>
    </v-card>
</template>

<script>
    import ChartConfig from '../../../const/ChartConst';
    import BaseHistogramChart from "../BaseHistogramChart";
    import BaseChartSettings from "../../../const/ChartBase";
    import {recordFrequencyQry} from "../../../api/record/recordRequest";

    export default {
        name: "totalDays",
        components: {BaseHistogramChart},
        data: () => {
            let options = {
                title: '日交易频率',
                barWidth: 10
            };
            const baseChartSettings = BaseChartSettings(options);
            return {
                chartDataSettings: {
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
                        height: 15,
                        start: 80,
                        end: 100
                    },
                    dataEmpty: true,
                    chartHeight: ChartConfig.middleHeight,
                    extend: baseChartSettings.extend,
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
                        area: true,
                    },
                    chartData: {
                        columns: ['date', 'total'],
                        rows: []
                    }
                }
            }
        }
        ,
        created() {
            let self = this;
            recordFrequencyQry({type: ""}, (json) => {
                self.chartDataSettings.chartData.rows = json.rows;
                self.chartDataSettings.dataZoom.start = (1 - 30 / json.total) * 100;
                self.chartDataSettings.dataEmpty = false;
            })
        }
    }
</script>

<style scoped>

</style>
