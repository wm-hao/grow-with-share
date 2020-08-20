<template>
    <v-data-table
            :no-data-text="noData"
            :headers="headers"
            :items="records"
            :server-items-length="total"
            :options.sync="options"
            :page.sync="page"
            :items-per-page.sync="perPage"
            @update:items-per-page="query"
            @update:page="query"
            hide-default-footer
            style="width: 100%;"
    >
        <template v-slot:top>
            <v-row>
                <v-col lg="2" class="ma-2 d-flex align-center">
                    <v-btn color="green" class="white--text" @click.stop="dialog = true">新增猜测</v-btn>
                    <v-dialog v-model="dialog" max-width="600px" persistent>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.shareName"
                                                          label="股票名称"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.shareCode"
                                                          label="股票代码"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.hot" type="number"
                                                          label="概率"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.remarks"
                                                          label="理由"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.tags"
                                                          label="板块\概念"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.initPrice" type="number"
                                                          label="初始价格"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.currentPrice" type="number"
                                                          label="当前价格"></v-text-field>
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
                <v-spacer/>
            </v-row>

        </template>
        <template v-slot:header.shareName="{ header } ">
            <span class="text-body-2">{{header.text}}</span>
        </template>
        <template v-slot:header.hot="{ header } ">
            <span class="text-body-2">{{header.text}}</span>
        </template>
        <template v-slot:header.remarks="{ header } ">
            <span class="text-body-2">{{header.text}}</span>
        </template>
        <template v-slot:header.tags="{ header } ">
            <span class="text-body-2">{{header.text}}</span>
        </template>
        <template v-slot:header.changePercent="{ header } ">
            <span class="text-body-2">{{header.text}}</span>
        </template>
        <template v-slot:header.operations="{ header } ">
            <span class="text-body-2">{{header.text}}</span>
        </template>
        <template v-slot:item.operations="{ item }">
            <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
            >
                mdi-pencil
            </v-icon>
            <v-icon
                    small
                    @click="deleteItem(item)"
            >
                mdi-delete
            </v-icon>
        </template>
        <template v-slot:item.hot="{ item }">
            <v-chip color="white">
                {{item.hot}}
                <v-icon color="red"
                        middle
                >
                    mdi-fire
                </v-icon>
            </v-chip>
        </template>
        <template v-slot:item.changePercent="{ value }">
            <v-chip :color="value.startsWith('-') ? 'green lighten-1' : 'red darken-1'" class="white--text">
                {{value}}
            </v-chip>

        </template>

    </v-data-table>
</template>

<script>
    import {chanceAdd, chancesQryAll, chanceUpdate} from "../../api/chances/chancesRequest";

    export default {
        name: "ChanceList",
        data() {
            return {
                noData: '暂无数据',
                menu: false,
                menu2: false,
                perPage: 5,
                page: 1,
                total: 0,
                options: {},
                currentPage: 1,
                rules: {},
                dialog: false,
                headers: [
                    {
                        text: '股票名称',
                        align: 'start',
                        value: 'shareName',
                    },
                    {text: '概率', value: 'hot'},
                    {text: '标签', value: 'tags'},
                    {text: '理由', value: 'remarks'},
                    {text: '百分比', value: 'changePercent'},
                    {text: '操作', value: 'operations'},
                ],
                records: [],
                editedIndex: -1,
                editedItem: {
                    id: null,
                    shareName: '',
                    shareCode: '',
                    hot: null,
                    tags: null,
                    remarks: null,
                    changePercent: '',
                    initPrice: 0,
                    currentPrice: 0
                },
                defaultItem: {
                    id: null,
                    shareName: '',
                    shareCode: '',
                    hot: null,
                    tags: null,
                    remarks: null,
                    changePercent: '',
                    initPrice: 0,
                    currentPrice: 0
                },
            }
        },
        methods: {
            handleSubmit() {
                this.query();
            },
            resetForm() {

            },
            calculateChangePercent(init, cur) {
                if (init > 0 && cur > 0) {
                    return ((cur - init) / init).toFixed(2) * 100 + '%';
                }
                return '暂无';
            },
            assembleData: function (rows) {
                this.records.splice(0, this.records.length);

                for (let index in rows) {
                    let data = rows[index];
                    data.changePercent = this.calculateChangePercent(data.initPrice, data.currentPrice);
                    this.records.push(data);
                }
            },
            query: function () {
                this.fetchData(this.page, this.perPage);
            },
            fetchData: function (pageNum, pageSize) {
                let self = this;
                let params = {
                    page: pageNum - 1,
                    size: pageSize
                }
                chancesQryAll(params, (json) => {
                    self.assembleData(json.rows);
                    self.total = json.total;
                });
            },
            initialize() {
                this.query();
            },

            editItem(item) {
                this.editedIndex = this.records.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },
            validateParams() {

                if (!this.editedItem.shareCode || this.editedItem.shareCode === "") {
                    this.$message.error("股票代码不能为空");
                    return false;
                }
                if (!this.editedItem.shareName || this.editedItem.shareName === "") {
                    this.$message.error("股票名称不能为空");
                    return false;
                }
                if (!this.editedItem.hot || this.editedItem.hot <= 0) {
                    this.$message.error("概率预测不能小于等于0");
                    return false;
                }
                if (!this.editedItem.tags || this.editedItem.tags === "") {
                    this.$message.error("概念不能为空");
                    return false;
                }
                return true;
            },
            deleteItem(item) {
                let self = this;
                const index = this.records.indexOf(item);
                this.$confirm('你确定想要删除此项记录吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    item.state = 0;
                    chanceUpdate(item, () => {
                        self.$message.success({message: '删除成功', center: true});
                        self.records.splice(index, 1);
                    })
                }).catch(() => {
                    self.$message.info({message: '您取消了删除', center: true})
                });
            },

            close() {
                this.dialog = false;
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem);
                    this.editedIndex = -1;
                }, 300)
            },

            save() {
                let self = this;
                if (this.editedIndex > -1) {
                    chanceUpdate(self.editedItem, (json) => {
                        Object.assign(self.records[self.editedIndex], self.editedItem);
                        self.$message.success({message: json.message, center: true});
                    });
                    this.close()
                } else {
                    if (this.validateParams()) {
                        chanceAdd(self.editedItem, (json) => {
                            self.$message.success({message: json.message, center: true});
                            self.fetchData();
                        });
                        this.close()
                    }

                }
            }
        },
        computed: {
            formTitle() {
                return this.editedIndex === -1 ? '新增记录' : '编辑记录'
            },
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
            records: {
                handler(newValue) {
                    for (let i = 0; i < newValue.length; i++) {
                        let data = newValue[i];
                        data.changePercent = this.calculateChangePercent(data.initPrice, data.currentPrice);
                    }
                },
                deep: true
            }
        },

        created() {
            this.initialize();
        },

    }
</script>

<style scoped>

</style>
