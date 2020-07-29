<template>
    <v-card raised="">
        <BaseBarChart :chart-data-settings="chartDataSettings"/>
    </v-card>
</template>

<script>
    import BaseBarChart from "../BaseBarChart";
    import ChartConfig from "../../../const/ChartConst";
    import BaseBarChartSettings from "../../../const/ChartBar";

    export default {
        name: "TopLoss",
        components: {BaseBarChart},
        data: () => {
            let options = {
                title: '亏损榜10',
                barWidth: 5,
                reverse: true
            };
            const baseChartSettings = BaseBarChartSettings(options);
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
                    dataEmpty: false,
                    loading: false,
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
                            profit: '亏损/元',
                        },
                    },
                    chartData: {
                        columns: ['shareName', 'profit'],
                        rows: [
                            {
                                "shareName": '科达利',
                                "profit": -10000
                            },
                            {
                                "shareName": '天味食品',
                                "profit": -5000
                            }
                        ]
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
