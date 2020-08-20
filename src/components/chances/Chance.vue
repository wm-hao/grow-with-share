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
        name: "Chance",
        data: () => {
            return {
                tabs: [
                    {
                        icon: 'mdi-table',
                        name: '机会列表',
                        to: RouterPathConst.pathDashBoardChanceList
                    },
                    {
                        icon: 'mdi-file-document',
                        name: '文件操作',
                        to: RouterPathConst.pathDashBoardChanceFile
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>
