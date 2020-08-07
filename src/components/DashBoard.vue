<template>
    <v-app>
        <v-app-bar app color="pink darken-1" clipped-left="">
            <v-app-bar-nav-icon @click="drawer = true" color="white"></v-app-bar-nav-icon>
            <v-spacer/>

            <v-btn icon @click="handleGoHome" class="">
                <v-icon color="white">mdi-home</v-icon>
            </v-btn>
            <v-btn icon @click="handleLogout">
                <v-icon color="white">mdi-logout-variant</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer
                app
                clipped=""
                temporary=""
                v-model="drawer"
        >
            <SideBar/>
        </v-navigation-drawer>
        <v-main>
            <v-container fluid class="my-2 px-4 py-1">
                <router-view/>
            </v-container>
        </v-main>

        <v-footer app class="d-flex flex-column justify-center">
            <Copyright/>
        </v-footer>
    </v-app>
</template>

<script>

    import Copyright from "./Copyright";
    import SideBar from "./SideBar";
    import RouterPathConst from "../const/RouterConst";
    import {userLogout} from "../api/user/userRequest";
    import {profitQryTotal} from "../api/profit/profitRequest";

    export default {
        name: "DashBoard",
        components: {SideBar, Copyright},
        data: () => ({
            drawer: false
        }),
        methods: {
            handleLogout: function () {
                let self = this;
                this.$confirm('您将要退出本系统?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    userLogout({}, (json) => {
                        sessionStorage.clear();
                        self.$message({
                            type: 'success',
                            message: json.message || '您已成功退出!',
                            center: true
                        });
                        self.$router.push(RouterPathConst.pathLogin);
                    });

                }).catch(() => {

                });
            },
            handleGoHome: function () {
                let curPath = this.$route.path;
                if (curPath !== RouterPathConst.pathDashBoardIndex) {
                    this.$router.push(RouterPathConst.pathDashBoardIndex);
                }
            }
        },
        created() {
            let self = this;
            this.$confirm('幻想让你遍体鳞伤?', '', {
                confirmButtonText: '你只能接受',
                cancelButtonText: '拒绝',
                type: 'error',
                showCancelButton: false,
                closeOnClickModal: false,
                closeOnHashChange: false,
                closeOnPressEscape: false,
                distinguishCancelAndClose: true,
                showClose: false,
                callback: (action) => {
                    if (action === 'cancel') {
                        self.$message.info({
                            message: "真是个傻X",
                            center: true
                        });
                    } else if (action === 'confirm') {
                        profitQryTotal({}, (json) => {
                            self.$notify({
                                title: '提示',
                                message: '截止当前，您共盈利' + parseInt((json.rows[0].amount || 0) - 2000) + '元',
                                duration: 2000,
                            });
                        })
                    }
                }
            }).then(() => {

            }).catch(() => {

            });
        }
    }
</script>

<style scoped>

</style>
