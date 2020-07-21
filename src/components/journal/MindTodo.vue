<template>
    <v-card flat="">
        <v-expansion-panels accordion="">
            <v-expansion-panel>
                <v-expansion-panel-header class="pa-1">
                    <v-list-item-content class="pa-2">
                        <v-list-item-title
                                class="text-body-1 font-weight-550 black--text">
                            今日所感
                        </v-list-item-title>
                    </v-list-item-content>
                    <template v-slot:actions>
                        <v-icon class="mr-2">mdi-pencil-plus</v-icon>
                    </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-textarea counter rows="2" background-color="grey lighten-5"/>
                    <v-btn text="" color="purple" block="">添加</v-btn>
                </v-expansion-panel-content>
            </v-expansion-panel>

        </v-expansion-panels>
    </v-card>


</template>

<script>
    export default {
        name: "MindTodo",
        data() {
            return {
                radioGroup: 1,
                checked: false,
                text: '测试',
                type: ""
            }
        },
    }
</script>

<style scoped>

</style>
