<template>
    <v-row class="mx-2 pa-2" style="height: 350px">

        <div class="text-lg-h6">Today</div>

    <v-form>
        <v-text-field type="number" label="金额" style="height: 60px"/>

        <v-switch v-model="profitState" color="red" label="盈利"/>


        <v-btn color="pink darken-1" block="" class="white--text">提交</v-btn>

    </v-form>

    </v-row>
</template>

<script>
    export default {
        name: "TodayOperation",
        data: () => ({
            profitState: true
        })
    }
</script>

<style scoped>

</style>
