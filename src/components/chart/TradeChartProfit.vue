<template>
    <v-card flat="" class="pa-2 ma-2">

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
        name: "TradeChartProfit",
        data: () => ({
            tabs: [
                {
                    icon: '',
                    name: '盈利查询',
                    to: RouterPathConst.pathDashBoardChartProfitQry
                },
                {
                    icon: '',
                    name: '可视化视图',
                    to: RouterPathConst.pathDashBoardChartProfitView
                }
            ]
        })
    }
</script>

<style scoped>

</style>
