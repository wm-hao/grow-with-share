<template>
    <v-card raised="">
        <BaseBarChart :chart-data-settings="chartDataSettings"/>
    </v-card>
</template>

<script>
    import BaseBarChart from "../BaseBarChart";
    import ChartConfig from "../../../const/ChartConst";
    import BaseBarChartSettings from "../../../const/ChartBar";
    import {recordTopQry} from "../../../api/record/recordRequest";

    export default {
        name: "TopTradeCount",
        components: {BaseBarChart},
        data: () => {
            let options = {
                title: '操作次数榜10',
                barWidth: 5,
                itemStyleOrigin: true
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
                        metrics: ['total'],
                        dimension: ['shareName'],
                        yAxisType: ['normal'],
                        dataType: {
                            'total': 'normal',
                        },
                        labelMap: {
                            shareName: '股票名称',
                            total: '',
                        },
                    },
                    chartData: {
                        columns: ['shareName', 'total'],
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
            };
            recordTopQry(params, (json) => {
                self.chartDataSettings.dataEmpty = false;
                self.chartDataSettings.loading = false;
                self.chartDataSettings.chartData.rows = json.rows.reverse();
            });
        }
    }
</script>

<style scoped>

</style>
