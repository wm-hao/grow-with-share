<template>
    <v-card flat="">
        <ve-bar :data="chartDataSettings.chartData" :settings="chartDataSettings.chartSettings"
                      :extend="chartDataSettings.extend"
                      :height="chartDataSettings.chartHeight" :data-empty="chartDataSettings.dataEmpty"
                      :data-zoom="chartDataSettings.dataZoom" :loading="chartDataSettings.loading"
                      :mark-line="chartDataSettings.markLine"
        ></ve-bar>
    </v-card>
</template>

<script>
    export default {
        props: ['chartDataSettings'],
        name: "BaseBarChart",
        data: () => ({}),
    }
</script>

<style scoped>

</style>
