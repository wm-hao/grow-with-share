<template>
    <ve-pie :data="chartData" :height="baseHeight" width="100%" :settings="charSettings"
            :extend="extend"></ve-pie>
</template>

<script>
    import ChartConfig from '../../../const/ChartConst';

    export default {
        name: "Preview",
        data: () => ({
            baseHeight: ChartConfig.baseHeight,
            extend: {
                title: {
                    text: 'Preview',
                    left: ChartConfig.titleLeft
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
