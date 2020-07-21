<template>
    <v-card flat="" class="ma-2">
        <v-card flat="" class="ma-2 pa-2">
            <MindTodo/>
        </v-card>
        <v-card flat="" class="ma-2 pa-2">
            <JournalRecord/>
        </v-card>

    </v-card>
</template>

<script>
    import JournalRecord from "./JournalRecord";
    import MindTodo from "./MindTodo";

    export default {
        name: "JournalPanel",
        components: {MindTodo, JournalRecord}
    }
</script>

<style scoped>

</style>
