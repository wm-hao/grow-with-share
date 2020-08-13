<template>

    <v-card raised="" tile class="ma-2 pa-4">
        <v-row :key="book.id" v-for="book in books" class="ma-2 pa-1">
            <v-col lg="2" class="d-flex align-center justify-center">
                <v-badge
                        :color="getReadCountsColor(book.readCounts)"
                        :content="getReadCountsMsg(book.readCounts)"
                >
                    <span
                            class="d-inline-block text-truncate text-left "
                            @click="addReadCounts(book)"
                    >《{{book.name}}》</span>
                </v-badge>

            </v-col>
            <v-col lg="8" class="d-flex align-center justify-center">
                <v-progress-linear
                        v-model="book.progress"
                        height="12"
                        striped
                        :color="getProgressColor(book.progress)"
                        rounded
                        style="width: 100%"
                >
                    <template v-slot="{ value }">
                        <span class="text-body-2">{{ Math.ceil(value) }}%</span>
                    </template>
                </v-progress-linear>
            </v-col>
            <v-col lg="2" class="d-flex align-center justify-center">
                <v-btn color="primary" @click="updateBook(book)" style="height: 24px">保存</v-btn>
                <v-btn @click="book.edit = !book.edit" class="ml-8" color="secondary" style="height: 24px">{{book.note
                    && book.note !== '' ?
                    '修改书评':'添加书评'}}
                </v-btn>
            </v-col>
            <v-col cols="12" v-if="book.edit">
                <v-textarea counter rows="2" placeholder="添加书评" class="mx-4 my-1 px-4" background-color="grey lighten-5"
                            v-model="book.note"/>
                <v-btn text="" color="purple" block="" @click="updateBook(book)">{{book.note && book.note !== '' ?
                    '完成修改':'完成编辑'}}
                </v-btn>

            </v-col>

        </v-row>
        <v-row class="ma-2 pa-1">
            <v-col sm="12" class="d-flex align-center justify-center">
                <v-btn color="green" style="height: 30px" class="white--text" @click.stop="dialog = true">添加书籍计划</v-btn>
                <v-dialog v-model="dialog" max-width="600px" persistent>
                    <v-card>
                        <v-card-title>
                            <span class="headline">添加一条新的阅读计划吧</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="newBookPlan.name" placeholder="书籍名称"
                                                      label="书籍名称"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="newBookPlan.progress" type="number"
                                                      placeholder="阅读进度"
                                                      label="阅读进度"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="newBookPlan.totalPages" type="number" placeholder="总页数"
                                                      label="总页数"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea v-model="newBookPlan.note" rows="2" counter
                                                    label="评论想法"></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">取消</v-btn>
                            <v-btn color="blue darken-1" text @click="save">保存</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </v-card>

</template>

<script>
    import {bookAdd, bookQry, bookUpdate} from "../../api/book/bookRequest";

    export default {
        name: "Book",
        data: () => ({
            dialog: false,
            books: [],
            newBookPlan: {
                name: '',
                progress: 0,
                note: '',
                totalPages: 0,
                readCounts: 1
            },
            defaultBook: {
                name: '',
                progress: 0,
                note: '',
                totalPages: 0,
                readCounts: 1
            }
        }),
        methods: {
            updateBook(item) {
                bookUpdate(item);
            },
            getProgressColor(val) {
                if (val <= 20) {
                    return 'blue lighten-2';
                } else if (val <= 40) {
                    return 'teal lighten-2';
                } else if (val <= 60) {
                    return 'light-green darken-1';
                } else if (val <= 80) {
                    return 'orange darken-2';
                } else if (val <= 95) {
                    return 'deep-orange accent-3';
                } else if (val <= 100) {
                    return 'green darken-1';
                }
                return 'grey darken-1';
            },
            getReadCountsColor(val) {
                if (val == 0) {
                    return 'lime'
                } else if (val <= 1) {
                    return 'green'
                } else if (val <= 2) {
                    return 'orange'
                } else if (val <= 3) {
                    return 'pink'
                } else {
                    return 'red'
                }
            },
            getReadCountsMsg(val) {
                if (val === 0) {
                    return '正在阅读';
                }
                return '读了' + val + '遍';
            },
            close() {
                this.dialog = false;
                setTimeout(() => {
                    this.newBookPlan = Object.assign({}, this.defaultBook);
                }, 300);
            },
            addReadCounts(book) {
                book.readCounts = book.readCounts + 1;
            },
            query() {
                let self = this;
                bookQry({}, (json) => {
                    let rows = json.rows;
                    for (let i in rows) {
                        rows[i].edit = false;
                    }
                    self.books = rows;
                })
            },
            save() {
                let self = this;
                let book = this.newBookPlan;
                if (book.name === '') {
                    this.errorMsg('书籍名称不能为空');
                    return;
                }
                if (book.totalPages <= 0) {
                    this.errorMsg('书籍总页数不能小于等于0页');
                    return;
                }
                if (book.progress > 100) {
                    this.errorMsg('阅读进度不能超过100%');
                    return;
                }
                bookAdd(book, (json) => {
                    self.$message.success({
                        center: true,
                        message: json.message
                    });
                    self.query();
                    self.close();
                })
            },
            errorMsg(msg) {
                this.$message.error({
                    center: true,
                    message: msg
                })
            }
        },
        created() {
            this.query();
        }
    }
</script>

<style scoped>

</style>
