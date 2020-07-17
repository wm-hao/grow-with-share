<template>
    <v-card raised="">
        <ve-pie :data="chartData" :height="baseHeight" width="100%" :settings="charSettings"
                :extend="extend"></ve-pie>
    </v-card>

</template>

<script>
    import ChartConfig from '../../const/ChartConst';

    export default {
        name: "AssetPie",
        data: () => ({
            baseHeight: ChartConfig.baseHeight,
            extend: {
                legend: {
                    top: ChartConfig.legendTop
                },
                title: {
                    text: '资产分类',
                    left: ChartConfig.titleLeft,
                    top: ChartConfig.titleTop
                }
            },
            charSettings: {},
            chartData: {
                columns: ['Category', 'Value'],
                rows: [
                    {'Category': '股票', 'Value': 14000},
                    {'Category': '现金', 'Value': 13030},
                    {'Category': '基金', 'Value': 498},
                ]
            }
        })
    }
</script>

<style scoped>

</style>
