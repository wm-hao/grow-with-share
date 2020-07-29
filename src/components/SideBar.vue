<template>
    <v-list>

        <v-list-item-group v-for="item in items" :key="item.id">

            <v-list-group
                    :prepend-icon="item.icon"
                    v-if="item.hasSecond"
            >
                <template v-slot:activator>
                    <v-list-item-title>{{item.name}}</v-list-item-title>
                </template>

                <v-list-item active-class="pink--text text--darken-1" v-for="child in item.children" :key="child.id"
                             :to="child.to" class="ml-8">
                    <v-list-item-icon>
                        <v-icon>{{child.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{child.name}}</v-list-item-title>
                </v-list-item>
            </v-list-group>
            <v-list-item v-else :to="item.to" active-class="pink--text text--darken-1">
                <v-list-item-icon>
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item>
        </v-list-item-group>


    </v-list>

</template>

<script>
    import RouterPathConst from "../const/RouterConst";

    export default {
        name: "SideBar",
        data: () => (
            {
                items: [
                    {
                        id: '1',
                        name: '系统首页',
                        icon: 'mdi-home',
                        to: RouterPathConst.pathDashBoardIndex
                    },
                    {
                        id: '2',
                        name: '交易记录',
                        icon: 'mdi-clipboard-list',
                        hasSecond: true,
                        children: [
                            {
                                id: '2-1',
                                name: '记录查询',
                                icon: 'mdi-table-search',
                                to: RouterPathConst.pathDashBoardTradeQuery
                            },
                            {
                                id: '2-2',
                                name: '记录新增',
                                icon: 'mdi-table-edit',
                                to: RouterPathConst.pathDashBoardTradeImport
                            },
                        ]
                    },
                    {
                        id: '3',
                        name: '交易日志',
                        icon: 'mdi-notebook',
                        to: RouterPathConst.pathDashBoardJournal
                    },
                    {
                        id: '4',
                        name: '资产信息',
                        icon: 'mdi-wallet',
                        to: RouterPathConst.pathDashBoardAsset
                    },
                    {
                        id: '5',
                        name: '个人信息',
                        icon: 'mdi-account-box',
                    },
                    {
                        id: '6',
                        name: '图表分析',
                        icon: 'mdi-chart-bar',
                        hasSecond: true,
                        children: [
                            {
                                id: '6-1',
                                name: '交易频率',
                                icon: 'mdi-chart-bell-curve-cumulative',
                                to: RouterPathConst.pathDashBoardChartFrequencyDays
                            },
                            {
                                id: '6-2',
                                name: '榜单数据',
                                icon: 'mdi-chart-gantt',
                                to: RouterPathConst.pathDashBoardChartTop,
                            },
                            {
                                id: '6-3',
                                name: '盈利分析',
                                icon: 'mdi-chart-line',
                                to: '/dashboard/chart/top',
                            },
                            {
                                id: '6-4',
                                name: '持股时长',
                                icon: 'mdi-chart-timeline',
                                to: '/dashboard/chart/top',
                            },
                        ]
                    },
                    {
                        id: '7',
                        name: '书籍列表',
                        icon: 'mdi-book',
                    }

                ]
            }
        )
    }
</script>

<style scoped>

</style>
