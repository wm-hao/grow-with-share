<template>
    <v-card flat class="ma-2 pa-2">
        <v-row class="pa-2">
            <v-col lg="6" sm="12">
                <AssetBar/>
            </v-col>
            <v-col lg="6" sm="12">
                <AssetLine/>
            </v-col>
        </v-row>
        <v-row class="pa-2">
            <v-col lg="4" sm="12">
                <AssetPie/>
            </v-col>
            <v-col lg="5" sm="12">
                <AssetProfitLine/>
            </v-col>
            <v-col lg="3" sm="12">
                <AssetOperation/>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    import AssetBar from "./AssetBar";
    import AssetLine from "./AssetLine";
    import AssetPie from "./AssetPie";
    import AssetProfitLine from "./AssetProfitLine";
    import AssetOperation from "./AssetOperation";

    export default {
        name: "AccountBalance",
        components: {AssetOperation, AssetProfitLine, AssetPie, AssetLine, AssetBar}
    }
</script>

<style scoped>

</style>
