<template>
    <v-card raised="">
        <ve-line :data="chartData" :settings="chartSettings" :height="chartHeight" :extend="extend"></ve-line>
    </v-card>
</template>

<script>
    import ChartConfig from "../../const/ChartConst";

    export default {
        name: "AssetProfitLine",
        data: () => {
            return {
                dataEmpty: false,
                chartHeight: ChartConfig.baseHeight,
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
                    columns: ['Date', 'Profit'],
                    rows: [
                        {
                            'Date': '2020-07-06',
                            'Profit': 143
                        },
                        {
                            'Date': '2020-07-07',
                            'Profit': 871.6
                        },
                        {
                            'Date': '2020-07-08',
                            'Profit': 456
                        },
                        {
                            'Date': '2020-07-09',
                            'Profit': 189.1
                        },
                        {
                            'Date': '2020-07-10',
                            'Profit': -106.5
                        },
                        {
                            'Date': '2020-07-13',
                            'Profit': 198
                        },
                        {
                            'Date': '2020-07-14',
                            'Profit': 520
                        },
                        {
                            'Date': '2020-07-15',
                            'Profit': 390
                        },
                        {
                            'Date': '2020-07-16',
                            'Profit': 923
                        },
                        {
                            'Date': '2020-07-17',
                            'Profit': 823
                        },
                    ]
                },
                chartSettings: {
                    metrics: ['Profit'],
                    dimension: ['Date'],
                    labelMap: {
                        Date: '日期',
                        Profit: '利润'
                    },
                }
            }
        }
    }
</script>

<style scoped>

</style>
