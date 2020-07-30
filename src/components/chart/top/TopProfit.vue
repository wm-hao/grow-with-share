<template>
    <v-card raised="">
        <BaseBarChart :chart-data-settings="chartDataSettings"/>
    </v-card>
</template>

<script>
    import BaseBarChart from "../BaseBarChart";
    import ChartConfig from "../../../const/ChartConst";
    import BaseBarChartSettings from "../../../const/ChartBar";
    import {profitQryTop} from "../../../api/profit/profitRequest";

    export default {
        name: "TopProfit",
        components: {BaseBarChart},
        data: () => {
            let options = {
                title: '盈利榜10',
                barWidth: 5
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
                    dataEmpty: true,
                    loading: true,
                    chartHeight: ChartConfig.baseHeight,
                    extend: baseChartSettings.extend,
                    chartSettings: {
                        metrics: ['amount'],
                        dimension: ['shareName'],
                        yAxisType: ['normal'],
                        dataType: {
                            'amount': 'normal',
                        },
                        labelMap: {
                            shareName: '股票名称',
                            amount: '利润/元',
                        },
                    },
                    chartData: {
                        columns: ['shareName', 'amount'],
                        rows: []
                    }
                }
            }
        },
        created() {
            let self = this;
            let params = {
                page: 0,
                size: 10,
                type: 'profit'
            };
            profitQryTop(params, (json) => {
                self.chartDataSettings.dataEmpty = false;
                self.chartDataSettings.loading = false;
                self.chartDataSettings.chartData.rows = json.rows.reverse();
            });
        }
    }
</script>

<style scoped>

</style>
