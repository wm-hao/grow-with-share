<template>
    <v-list nav style="width: 100%">
        <v-list-item-group
                active-class="pink--text text--darken-1"
        >

            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>系统首页</v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-clipboard-list</v-icon>
                </v-list-item-icon>
                <v-list-item-title>交易记录</v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon> mdi-notebook</v-icon>
                </v-list-item-icon>
                <v-list-item-title>交易日志</v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-account-box</v-icon>
                </v-list-item-icon>
                <v-list-item-title>账户信息</v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>个人信息</v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-chart-bar</v-icon>
                </v-list-item-icon>
                <v-list-item-title>图表分析</v-list-item-title>
            </v-list-item>
        </v-list-item-group>
    </v-list>

</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>

</style>
