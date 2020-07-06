<template>
    <ve-histogram :data="chartData" :settings="charSettings" :extend="extend"
                  :height="chartHeight"></ve-histogram>
</template>

<script>
    import ChartConfig from '../../../const/ChartConst';
    export default {
        name: "Recent10DaysAnalysis",
        data: () => ({
            chartHeight: ChartConfig.baseHeight,
            extend: {
                title: {
                    text: 'Recent 10 Days Analyse',
                    textStyle: {
                    },
                    left: ChartConfig.titleLeft
                },
                xAxis: {
                    axisLabel: {
                        interval: 0
                    }
                },
                series: {
                    label: {
                        show: true,
                        position: "top"
                    },
                    barWidth: 10,
                    lineStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#f9bf6b'
                            }, {
                                offset: 1, color: 'red'
                            }],
                            global: false
                        }
                    },
                    itemStyle: {
                        barBorderRadius: 1,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#FF80AB' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#4FC3F7' // 100% 处的颜色
                            }],
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#222222'
                            },
                            formatter: function (params) {
                                if (params.value == 0) {
                                    return '';
                                } else {
                                    return params.value + '元';
                                }
                            }
                        }
                    }
                },
            },
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
        })
    }
</script>

<style scoped>

</style>
