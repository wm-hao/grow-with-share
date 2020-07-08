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
                    interval: options.axisLabel || 2
                }
            },
            series: {
                label: {
                    show: true,
                    position: "top"
                },
                barWidth: 14,
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
    };
    if (options && options.dataZoom) {
        baseChartSettings.extend.dataZoom = [
            {
                // id: 'dataZoomX',
                type: 'slider',
                xAxisIndex: [0],
                filterMode: 'filter',
                start: options.dataZoom.start || 50,
                end: options.dataZoom.end || 80,
                height: 14,
                // fillerColor: 'rgba(216,27,96, 0.8)'
            }
        ]
    }
    return baseChartSettings;
};

export default BaseChartSettings;
