<template>
    <v-card flat class="ma-2">
        <v-row class="ma-2">
            <v-col lg="7" sm="12">

                <Recent10DaysAnalysis/>
            </v-col>
            <v-col lg="5" sm="12">
                <AssetPie/>
            </v-col>
        </v-row>
        <v-row class="ma-2" sm="12">
            <v-col lg="12">
                <RecentTradeRecords/>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    import Recent10DaysAnalysis from "./Recent10DaysAnalysis";
    import RecentTradeRecords from "./RecentTradeRecords";
    import AssetPie from "../asset/AssetPie";
    import {profitQryTotal} from "../../api/profit/profitRequest";
    import {USER_ID} from "../../const/Constant";

    export default {
        components: {AssetPie, RecentTradeRecords, Recent10DaysAnalysis},
        data: () => ({}),
        created() {
            sessionStorage.setItem(USER_ID, "1");
            let self = this;
            profitQryTotal({}, (json) => {
                self.$notify({
                    title: '提示',
                    message: '截止当前，您共盈利' + parseInt((json.rows[0].amount || 0) - 2000) + '元',
                    duration: 0,
                });
            })

        }
    }
</script>

<style scoped>

</style>
