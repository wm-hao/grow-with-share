<template>
    <v-card raised="" class="pa-2 ma-2" tile>
        <v-tabs
                background-color="blue-grey lighten-5"
                color="deep-purple accent-4"
                right
        >
            <v-tab v-for="tab in tabs" :key="tab.name" :to="tab.to">
                <v-icon>{{tab.icon}}</v-icon>
                {{tab.name}}
            </v-tab>

        </v-tabs>
        <v-container fluid>
            <router-view/>
        </v-container>
    </v-card>
</template>

<script>

    import RouterPathConst from "../../const/RouterConst";

    export default {
        name: "TradeChartFrequency",
        components: {},
        data: () => ({
            tabs: [
                {
                    icon: 'mdi-chart-arc',
                    name: '日交易',
                    to: RouterPathConst.pathDashBoardChartFrequencyDays
                },
                {
                    icon: 'mdi-chart-arc',
                    name: '年月交易',
                    to: RouterPathConst.pathDashBoardChartFrequencyYearMonth
                }
            ]
        })
    }
</script>

<style scoped>

</style>
