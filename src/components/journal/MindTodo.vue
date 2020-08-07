<template>
    <v-card flat="">
        <v-expansion-panels accordion="">
            <v-expansion-panel>
                <v-expansion-panel-header class="pa-1">
                    <v-list-item-content class="pa-2">
                        <v-list-item-title
                                class="text-body-1 font-weight-550 black--text">
                            今日感悟
                        </v-list-item-title>
                    </v-list-item-content>
                    <template v-slot:actions>
                        <v-icon class="mr-2">mdi-pencil-plus</v-icon>
                    </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row dense="">
                        <v-col lg="4" sm="12">
                            <v-text-field placeholder="标题" v-model="journal.title"/>
                        </v-col>
                        <v-col lg="4" sm="12">
                            <v-text-field placeholder="副标题" v-model="journal.subTitle"/>
                        </v-col>
                        <v-col lg="4" sm="12">
                            <v-text-field placeholder="标签" v-model="journal.tags"/>
                        </v-col>
                    </v-row>
                    <v-textarea counter rows="2" background-color="grey lighten-5" placeholder="日志"
                                v-model="journal.content"/>
                    <v-btn text="" color="purple" block="" @click="handleSubmit">添加</v-btn>
                </v-expansion-panel-content>
            </v-expansion-panel>

        </v-expansion-panels>
    </v-card>


</template>

<script>
    import {dateFormat} from "../../const/MyUtils";
    import {journalAdd} from "../../api/journal/journalRequest";
    import RouterPathConst from "../../const/RouterConst";

    export default {
        name: "MindTodo",
        data() {
            return {
                journal: {
                    title: '',
                    subTitle: '',
                    tags: '',
                    content: ''
                }
            }
        },
        methods: {
            handleSubmit() {
                let self = this;
                journalAdd(this.journal, (json) => {
                    self.$message.success({
                        message: json.message,
                        center: true
                    });
                    self.reset();
                    self.$router.push({
                        path: RouterPathConst.pathBlank,
                        query: {destUrl: self.$route.path}
                    })
                });
            },
            reset() {
                this.journal = {};
                let date = new Date();
                this.journal.subTitle = '创建于' + dateFormat("YYYY-mm-dd HH:MM:SS", date);
            }
        },
        created() {
            this.reset();
        }
    }
</script>

<style scoped>

</style>
