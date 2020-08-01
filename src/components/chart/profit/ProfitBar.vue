<template>
    <v-card raised="" tile>
        <!--        <BaseHistogramChart :chart-data-settings="chartDataSettings"/>-->
        <ve-histogram :data="chartDataSettings.chartData" :settings="chartDataSettings.chartSettings"
                      :extend="chartDataSettings.extend"
                      :height="chartDataSettings.chartHeight" :data-empty="chartDataSettings.dataEmpty"
                      :data-zoom="chartDataSettings.dataZoom" :loading="chartDataSettings.loading"
                      :mark-line="chartDataSettings.markLine"
        ></ve-histogram>
    </v-card>
</template>

<script>
    import BaseChartSettings from "../../../const/ChartBase";
    import ChartConfig from "../../../const/ChartConst";
    import {profitQry} from "../../../api/profit/profitRequest";

    export default {
        name: "ProfitBar",
        components: {},
        data: () => {
            let options = {
                title: '盈利数据',
                barWidth: 10,
                itemStyleOrigin: true
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
                        start: 0,
                        end: 20
                    },
                    dataEmpty: true,
                    chartHeight: ChartConfig.baseHeight,
                    extend: baseChartSettings.extend,
                    chartSettings: {
                        metrics: ['profit'],
                        dimension: ['shareName'],
                        yAxisType: ['normal'],
                        dataType: {
                            'profit': 'normal',
                        },
                        labelMap: {
                            shareName: '股票名称',
                            profit: '金额',
                        },
                        area: true,
                    },
                    chartData: {
                        columns: ['shareName', 'profit'],
                        rows: []
                    }
                }
            }
        }
        ,
        created() {
            let self = this;
            let params = {
                page: 0, size: 20000, order: 'ASC', shareName: '',
                showKeep: ''
            };
            profitQry(params, (json) => {
                self.chartDataSettings.dataEmpty = false;
                self.chartDataSettings.chartData.rows = json.rows;
            })
        }
    }
</script>

<style scoped>

</style>
