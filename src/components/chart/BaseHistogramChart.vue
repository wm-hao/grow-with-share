<template>
    <v-card flat="">
        <ve-histogram :data="chartDataSettings.chartData" :settings="chartDataSettings.chartSettings"
                      :extend="chartDataSettings.extend"
                      :height="chartDataSettings.chartHeight" :data-empty="chartDataSettings.dataEmpty"></ve-histogram>
    </v-card>
</template>

<script>
    export default {
        props: ['chartDataSettings'],
        name: "BaseHistogramChart",
        data: () => ({}),
    }
</script>

<style scoped>

</style>
