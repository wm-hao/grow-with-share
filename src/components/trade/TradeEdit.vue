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
    export default {
        name: "TradeEdit",
        components: {},
        data: () => ({
            tabs: [
                // {
                //     icon: 'mdi-table-edit',
                //     name: '手工录入',
                //     to: '/dashboard/trade/edit/insert'
                // },
                {
                    icon: 'mdi-file-excel',
                    name: '文件导入',
                    to: '/dashboard/trade/edit/import'
                }
            ]
        })
    }
</script>

<style scoped>

</style>
