<template>
    <v-sheet class="my-1 justify-center elevation-0 text-center" color="#f5f5f5">
        Copyright © {{year}}
    </v-sheet>
</template>

<script>
    export default {
        name: "Copyright",
        data: () => ({
            year: new Date().getFullYear()
        })
    }
</script>

<style scoped>

</style>
