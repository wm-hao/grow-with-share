<template>
    <v-card flat="" class="pa-2 ma-2">
        <v-row class="pa-2">
            <v-col lg="6" sm="12">
                <TopProfit/>
            </v-col>
            <v-col lg="6" sm="12">
                <TopLoss/>
            </v-col>
            <v-col lg="6" sm="12">
                <TopTradeCount/>
            </v-col>
            <v-col lg="6" sm="12">
                <TopCompare/>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    import TopProfit from "./top/TopProfit";
    import TopLoss from "./top/TopLoss";
    import TopTradeCount from "./top/TopTradeCount";
    import TopCompare from "./top/TopCompare";

    export default {
        name: "TradeChartTop",
        components: {TopCompare, TopTradeCount, TopLoss, TopProfit}
    }
</script>

<style scoped>

</style>
