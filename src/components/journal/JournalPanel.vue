<template>
    <v-card flat="" class="ma-2">
        <v-row class="pa-2">
            <v-col lg="9" sm="12">
                <JournalRecord/>
            </v-col>
            <v-col lg="3" sm="12">
                <MindTodoList/>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    import JournalRecord from "./JournalRecord";
    import MindTodoList from "./MindTodoList";

    export default {
        name: "JournalPanel",
        components: {MindTodoList, JournalRecord}
    }
</script>

<style scoped>

</style>
