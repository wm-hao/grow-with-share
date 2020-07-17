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

    export default {
        components: {AssetPie, RecentTradeRecords, Recent10DaysAnalysis},
        data: () => ({})
    }
</script>

<style scoped>
    .card_height_first_row {
        /*height: 350px;*/
    }

    .MuiTypography-colorPrimary {
        /*color: #1976d2;*/
        font-size: 1.25rem;
        font-family: "Roboto", Helvetica, Arial, sans-serif;
        font-weight: 600;
        line-height: 1.6;
        letter-spacing: .0075em;
    }
</style>
