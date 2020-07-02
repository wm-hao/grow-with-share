<template>
    <v-app>
        <v-app-bar app color="green"
                   clipped-left
        >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer app
                             clipped
                             :mini-variant.sync="drawer"
        >
        </v-navigation-drawer>
        <v-main>
            <v-container fluid class="mx-4 my-4">
                <v-btn @click="handleDrawerToggle">Click me</v-btn>
            </v-container>
        </v-main>

        <v-footer app color="#f5f5f5" class="d-flex justify-center">
            <Copyright/>
        </v-footer>
    </v-app>
</template>

<script>

    import Copyright from "./Copyright";

    export default {
        name: "DashBoard",
        components: {Copyright},
        data: () => ({
            drawer: false
        }),
        methods:{
            handleDrawerToggle: function () {
                this.drawer = !this.drawer;
            }
        }
    }
</script>

<style scoped>

</style>
