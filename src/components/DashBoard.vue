<template>
    <v-app>
        <v-app-bar app dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-spacer/>
            <v-icon>mdi-logout-variant</v-icon>
        </v-app-bar>
        <v-navigation-drawer
                absolute
                temporary
                v-model="drawer"
        >
            <SideBar/>
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
        methods: {}
    }
</script>

<style scoped>

</style>
