<template>
    <v-card raised="" class="pa-2 d-flex flex-column justify-center">
        <v-radio-group v-model="type" row="" dense class="pt-4 ma-0">
            <v-radio label="猜想" value="guess" class="pa-0 ma-0"></v-radio>
            <v-radio label="日志" value="mind" class="pa-0 ma-0"></v-radio>
        </v-radio-group>

        <v-textarea counter rows="8" background-color="grey lighten-5"/>

        <v-btn text="" color="purple">添加</v-btn>

    </v-card>

</template>

<script>
    export default {
        name: "MindTodo",
        data() {
            return {
                radioGroup: 1,
                checked: false,
                text: 'asdasds',
                type: ""
            }
        },
    }
</script>

<style scoped>

</style>
