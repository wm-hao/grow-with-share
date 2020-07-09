<template>
    <v-app>
        <v-app-bar app color="pink darken-1" clipped-left>
            <v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>
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
                clipped
                v-model="drawer"
        >
            <SideBar/>
            <!-- <template v-slot:append>
                 <div class="pa-4">
                     <v-btn block class="text-center" text>退出</v-btn>
                 </div>
             </template>-->
        </v-navigation-drawer>
        <v-main>
            <v-container fluid class="my-2 px-4 py-1">
                <router-view/>
            </v-container>
        </v-main>

        <v-footer app color="#f5f5f5" class="d-flex justify-center">
            <Copyright/>
        </v-footer>
    </v-app>
</template>

<script>

    import Copyright from "./Copyright";
    import SideBar from "./SideBar";
    import RouterPathConst from "../const/RouterConst";

    export default {
        name: "DashBoard",
        components: {SideBar, Copyright},
        data: () => ({
            drawer: false
        }),
        methods: {
            handleLogout: function () {
                this.$confirm('您将要退出本系统?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '您已成功退出!'
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
        }
    }
</script>

<style scoped>

</style>
