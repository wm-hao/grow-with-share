<template>
    <v-app>
        <v-app-bar app dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-spacer/>
            <v-btn icon @click="handleLogout">
                <v-icon>mdi-logout-variant</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer
                absolute
                temporary
                v-model="drawer"
        >
            <SideBar/>
            <template v-slot:append>
                <div class="pa-4">
                    <v-btn block class="text-center" >退出</v-btn>
                </div>
            </template>
        </v-navigation-drawer>
        <v-main>
            <v-container fluid class="mx-4 my-4">
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

    export default {
        name: "DashBoard",
        components: {SideBar, Copyright},
        data: () => ({
            drawer: false
        }),
        methods: {
            handleLogout: function () {

            }
        }
    }
</script>

<style scoped>

</style>
