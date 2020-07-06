<template>
    <v-row class="pa-2">
        <v-col lg="6" class="pa-2">
            <ve-histogram :data="chartData" :settings="chartSettings" :extend="extend"
                          :height="chartHeight" :data-empty="dataEmpty"></ve-histogram>
        </v-col>
        <v-col lg="6" class="pa-2">
            <ve-histogram :data="chartData" :settings="chartSettings" :extend="extend"
                          :height="chartHeight" :data-empty="dataEmpty"></ve-histogram>
        </v-col>
    </v-row>

</template>

<script>
    import ChartConfig from '../../../../const/ChartConst';

    export default {
        props: ['name'],
        name: "FrequencyYearMonth",
        data: () => ({
            dataEmpty: true,
            chartHeight: ChartConfig.baseHeight,
            chartData: [],
            chartSettings: {},
            extend: {}
        })
    }
</script>

<style scoped>

</style>
