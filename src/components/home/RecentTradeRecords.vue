<template>
    <v-row class="mx-2 flex-column" style="height: 350px">
        <v-col lg="12">
            <div class="text-lg-h6 pa-2">Recent Trade Records</div>
            <v-data-table
                    :headers="headers"
                    :items="desserts"
                    calculate-widths
                    hide-default-footer
            />
        </v-col>

    </v-row>
</template>
<script>
    export default {
        name: "RecentTradeRecords",
        data: () => ({
            headers: [
                {
                    text: '股票名称',
                    align: 'start',
                    value: 'name',
                },
                {text: '买入时间', value: 'buyTime'},
                {text: '卖出时间', value: 'sellTime'},
                {text: '盈利金额', value: 'profit'},
            ],
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    buyTime: 159,
                    sellTime: 6.0,
                    profit: 24,
                    protein: 4.0,
                    iron: '1%',
                },
                {
                    name: 'Ice cream sandwich',
                    buyTime: 237,
                    sellTime: 9.0,
                    profit: 37,
                    protein: 4.3,
                    iron: '1%',
                },
                {
                    name: 'Eclair',
                    buyTime: 262,
                    sellTime: 16.0,
                    profit: 23,
                    protein: 6.0,
                    iron: '7%',
                },
                {
                    name: 'Cupcake',
                    buyTime: 305,
                    sellTime: 3.7,
                    profit: 67,
                    protein: 4.3,
                    iron: '8%',
                },
                {
                    name: 'Gingerbread',
                    buyTime: 356,
                    sellTime: 16.0,
                    profit: 49,
                    protein: 3.9,
                    iron: '16%',
                },
            ],
        }),
    }
</script>

<style scoped>

</style>
