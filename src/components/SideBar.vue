<template>
    <div class="d-flex flex-column align-start">
        <v-list nav class="mb-auto">
            <v-list-item-group
                    v-model="group"
                    active-class="pink--text text--darken-1"
            >
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-home-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Account</v-list-item-title>
                </v-list-item>

            </v-list-item-group>
        </v-list>

        <v-btn color="primary">Logout</v-btn>
    </div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>

</style>
