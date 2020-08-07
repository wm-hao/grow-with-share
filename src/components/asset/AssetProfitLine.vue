<template>
    <v-card raised="">
        <ve-line :data="chartData" :settings="chartSettings" :height="chartHeight" :extend="extend"
                 :dataZoom="dataZoom" :loading="loading" :mark-line="markLine"></ve-line>
    </v-card>
</template>

<script>
    import ChartConfig from "../../const/ChartConst";
    import {balanceQry} from "../../api/balance/balanceRequest";

    export default {
        name: "AssetProfitLine",
        data: () => {
            return {
                dataZoom: {
                    type: 'slider',
                    start: 0,
                    end: 100,
                    height: 14,
                },
                dataEmpty: true,
                loading: true,
                chartHeight: ChartConfig.baseHeight,
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
                            },
                            lineStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'red' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'yellow' // 100% 处的颜色
                                    }],
                                    global: false // 缺省为 false
                                }
                            }
                        }
                    ]

                },
                extend: {
                    legend: {
                        top: ChartConfig.legendTop
                    },
                    yAxis: {},
                    title: {
                        text: '利润曲线',
                        left: ChartConfig.titleLeft,
                        top: ChartConfig.titleTop
                    }
                },
                chartData: {
                    columns: ['date', 'profit'],
                    rows: []
                },
                chartSettings: {
                    metrics: ['profit'],
                    dimension: ['date'],
                    labelMap: {
                        date: '日期',
                        profit: '利润'
                    },
                    area: true
                }
            }
        },
        methods: {
            fetchData: function () {
                let self = this;
                let qryParams = {
                    "page": 0,
                    "size": 1000,
                    "timeOrder": "ASC",
                    "reverse": "N"
                };
                balanceQry(qryParams, (json) => {
                    if (json.total > 0) {
                        self.chartData.rows = json.rows;
                        self.dataEmpty = false;
                        self.loading = false;
                    }
                })
            }
        },
        created() {
            this.fetchData();
        }
    }
</script>

<style scoped>

</style>
