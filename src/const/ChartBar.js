import ChartConfig from './ChartConst';

const BaseBarChartSettings = function (options) {

    const baseChartSettings = {
        extend: {
            legend: {
                top: ChartConfig.legendTop
            },
            xAxis: {
                axisLabel: {
                    interval: options.axisLabel === 0 ? 0 : options.axisLabel || 2
                }
            },
            title: {
                text: options.title || '',
                textStyle: {},
                left: ChartConfig.titleLeft,
                top: ChartConfig.titleTop
            },
            series: {
                label: {
                    show: true,
                    position: "top"
                },
                barWidth: options.barWidth || 8,
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
        if(options.reverse) {
            baseChartSettings.extend.xAxis.inverse = true;
        }
        if (!options.itemStyleOrigin) {
            let colorStops = [{
                offset: 0, color: 'red' // 0% 处的颜色
            }, {
                offset: 1, color: 'pink' // 100% 处的颜色
            }];
            if (options.reverse) {
                colorStops = [{
                    offset: 0, color: 'teal' // 0% 处的颜色
                }, {
                    offset: 1, color: 'green' // 100% 处的颜色
                }];
            }
            baseChartSettings.extend.series.itemStyle = {
                barBorderRadius: 5,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: colorStops
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

export default BaseBarChartSettings;
