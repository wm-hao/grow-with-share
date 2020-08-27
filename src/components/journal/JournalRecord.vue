<template>
    <v-card flat="">
        <v-expansion-panels accordion="" class="elevation-4">
            <v-expansion-panel v-for="(item) in items" :key="item.id" :class="getColor(item)">
                <v-expansion-panel-header class="pa-1 ">
                    <v-list-item-content class="pa-2">
                        <v-list-item-title v-text="item.title"
                                           class="text-body-1 font-weight-550 black--text"></v-list-item-title>
                        <v-list-item-subtitle class="text--black pt-1"
                                              v-text="getSubTitle(item)"></v-list-item-subtitle>
                    </v-list-item-content>
                    <template v-slot:actions>
                        <v-icon class="mr-2">mdi-arrow-down</v-icon>
                    </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-card flat="" :class="getColor(item)">
                        <v-card-text class="">
                            {{item.content}}
                        </v-card-text>
                        <v-card-actions class="pa-0">
                            <v-btn
                                    color="purple"
                                    text
                                    class="text-left pa-0"
                                    @click.stop="dialog = true"
                                    @click="handleEdit(item)"
                            >
                                修改
                            </v-btn>
                            <v-dialog
                                    v-model="dialog"
                                    max-width="600"
                                    scrollable=""
                                    persistent
                            >
                                <v-card>
                                    <v-card-title>修改日志</v-card-title>

                                    <v-card-text>
                                        <v-text-field v-model="editItem.tags"/>
                                        <v-textarea counter v-model="editItem.content" filled>

                                        </v-textarea>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>

                                        <v-btn
                                                color="red darken-1"
                                                text
                                                @click="handleCancel()"
                                        >
                                            取消
                                        </v-btn>

                                        <v-btn
                                                color="green darken-1"
                                                text
                                                @click="handleSave(item)"
                                        >
                                            保存
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-card-actions>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <v-pagination
                v-if="pagination"
                class="mt-4"
                v-model="page"
                :circle="circle"
                :disabled="disabled"
                :length="showLength"
                @next="fetchData"
                @input="fetchData"
                @previous="fetchData"
                :page="page"
                :total-visible="totalVisible"
        ></v-pagination>
    </v-card>
</template>

<script>
    import {journalQry, journalUpdate} from "../../api/journal/journalRequest";

    export default {
        name: "JournalRecord",
        data: () => ({
            editItem: {},
            circle: false,
            disabled: false,
            showLength: 0,
            nextIcon: 'navigate_next',
            nextIcons: ['mdi-chevron-right', 'mdi-arrow-right', 'mdi-menu-right'],
            prevIcon: 'navigate_before',
            prevIcons: ['mdi-chevron-left', 'mdi-arrow-left', 'mdi-menu-left'],
            page: 1,
            size: 6,
            totalVisible: 10,
            items: [],
            dialog: false,
            pagination: false
        }),
        methods: {
            handleEdit: function (item) {
                this.editItem = Object.assign({}, item);
                this.dialog = true;
            },
            handleSave: function (item) {
                let itemIdx = this.items.indexOf(item);
                Object.assign(this.items[itemIdx], this.editItem);
                let self = this;
                journalUpdate(this.editItem, (json) => {
                    self.$message.success({
                        message: json.message,
                        center: true
                    });
                });
                this.dialog = false;

            },
            handleCancel: function () {
                this.dialog = false;
            },
            fetchData() {
                let params = {
                    page: this.page - 1,
                    size: this.size
                };
                let self = this;
                journalQry(params, (json) => {
                    self.showLength = (json.total / self.size) + 1;
                    if (json.total > self.size) {
                        self.pagination = true;
                    }
                    self.items = json.rows;
                })
            },
            getSubTitle(journalRecord) {
                if (journalRecord) {
                    return journalRecord.tags + " " + journalRecord.subTitle;
                }
                return "";
            },
            getColor(item) {
                const colors = ['teal lighten-4', 'lime lighten-3', 'green lighten-4', 'blue lighten-5', 'orange lighten-4'];
                return colors[item.title.length % colors.length];
            }
        },
        created() {
            this.fetchData();
        }
    }
</script>

<style scoped>

</style>
