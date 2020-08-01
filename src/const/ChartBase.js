import ChartConfig from './ChartConst';

const BaseChartSettings = function (options) {
    const baseChartSettings = {
        extend: {
            legend: {
                top: ChartConfig.legendTop
            },
            title: {
                text: options.title || '',
                textStyle: {},
                left: ChartConfig.titleLeft,
                top: ChartConfig.titleTop
            },
            xAxis: {
                axisLabel: {
                    interval: options.axisLabel === 0 ? 0 : options.axisLabel || 2
                }
            },
            series: {
                label: {
                    show: true,
                    position: "top"
                },
                barWidth: options.barWidth || 14,
                lineStyle: {
                    barBorderRadius: 5,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'red'
                        }, {
                            offset: 1, color: 'green'
                        }],
                        global: false
                    }
                },
                itemStyle : {
                    barBorderRadius: 5
                }
            },
        },
    };
    if (options) {
        if (options.dataZoom) {
            baseChartSettings.extend.dataZoom = [
                {
                    type: 'slider',
                    xAxisIndex: [0],
                    filterMode: 'filter',
                    start: options.dataZoom.start || 50,
                    end: options.dataZoom.end || 80,
                    height: 10,
                }
            ]
        }
        if (!options.itemStyleOrigin) {
            baseChartSettings.extend.series.itemStyle = {
                barBorderRadius: 5,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#F06292' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#81D4FA' // 100% 处的颜色
                    }],
                },
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#129902'
                    },
                }
            }

        }

    }
    return baseChartSettings;
};

export default BaseChartSettings;
