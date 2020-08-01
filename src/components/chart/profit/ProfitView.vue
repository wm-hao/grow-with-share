<template>
    <v-card flat="" class="pa-2 ">
        <v-row class="pa-1">
            <v-col lg="12" sm="12">
                <ProfitBar/>
            </v-col>
            <v-col lg="12" sm="12">
                <ProfitPort/>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    import ProfitBar from "./ProfitBar";
    import ProfitPort from "./ProfitPort";
    export default {
        name: "ProfitView",
        components: {ProfitPort, ProfitBar}
    }
</script>

<style scoped>

</style>
