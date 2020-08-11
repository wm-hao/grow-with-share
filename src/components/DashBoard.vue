<template>
    <v-app>
        <v-app-bar app color="pink darken-1" clipped-left="">
            <v-app-bar-nav-icon @click.stop="mini = !mini" color="white"></v-app-bar-nav-icon>
            <v-spacer/>
            <v-btn icon @click="handleRefresh" class="">
                <v-icon color="white">mdi-refresh</v-icon>
            </v-btn>
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
                permanent
                v-model="drawer"
                :mini-variant.sync="mini"
                mini-variant-width="68"
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

    export default {
        name: "DashBoard",
        components: {SideBar, Copyright},
        data: () => ({
            drawer: true,
            mini: true
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
            },
            handleRefresh() {
                this.$router.push({
                    path: RouterPathConst.pathBlank,
                    query: {destUrl: this.$route.path}
                })
            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>
