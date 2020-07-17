<template>
    <v-card raised="">
        <ve-line :data="chartData" :settings="chartSettings" :height="chartHeight" :extend="extend"></ve-line>
    </v-card>
</template>

<script>
    import ChartConfig from "../../const/ChartConst";

    export default {
        name: "AssetLine",
        data: () => {
            return {
                dataEmpty: false,
                chartHeight: ChartConfig.baseHeight,
                extend: {
                    legend: {
                        top: ChartConfig.legendTop
                    },
                    yAxis: {
                        splitNumber: 7
                    },
                    title: {
                        text: '资产分类',
                        left: ChartConfig.titleLeft,
                        top: ChartConfig.titleTop
                    }
                },
                chartData: {
                    columns: ['Date', 'Share', 'Fund', 'Cash', 'Total'],
                    rows: [
                        {
                            'Date': '2020-07-06',
                            'Share': 20163,
                            'Fund': 490,
                            'Cash': 7956.92,
                            'Total': 28466.92
                        },
                        {
                            'Date': '2020-07-07',
                            'Share': 19529.6,
                            'Fund': 500.6,
                            'Cash': 9445.58,
                            'Total': 29475.18
                        },
                        {
                            'Date': '2020-07-08',
                            'Share': 19988,
                            'Fund': 904.8,
                            'Cash': 9043.12,
                            'Total': 29935.92
                        },
                        {
                            'Date': '2020-07-09',
                            'Share': 25615,
                            'Fund': 923,
                            'Cash': 3576,
                            'Total': 30114.9
                        },
                        {
                            'Date': '2020-07-10',
                            'Share': 25515,
                            'Fund': 917,
                            'Cash': 3568.12,
                            'Total': 30000.52
                        },
                    ]
                },
                chartSettings: {
                    metrics: ['Share', 'Fund', 'Cash', 'Total'],
                    dimension: ['Date'],
                    labelMap: {
                        Date: '日期',
                        Share: '股票',
                        Fund: '基金',
                        Cash: '现金',
                        Total: '总计'
                    },
                }
            }
        }
    }
</script>

<style scoped>

</style>
