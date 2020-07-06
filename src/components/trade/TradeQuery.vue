<template>
    <v-card flat="">
        <v-row class="ma-2">
            <div class="ma-2" style="width: 100%">
                <v-sheet color="blue-grey lighten-5" class="pa-2 my-2 grey--text">查询条件</v-sheet>
            </div>

            <v-card raised="" tile class="pa-2 ma-2" size="small" style="width: 100%">
                <v-row>
                    <v-col lg="11">
                        <el-form :model="qryParams" :rules="rules" ref="qryParams" size="small" :inline="true"
                                 label-width="120">
                            <el-form-item label="股票名称" prop="name" size="small">
                                <el-input v-model="qryParams.name" style="width: 200px"></el-input>
                            </el-form-item>
                            <el-form-item label="股票代码" prop="code" size="small">
                                <el-input v-model="qryParams.code" style="width: 200px"></el-input>
                            </el-form-item>
                            <el-form-item label="股票别名" prop="alias" size="small">
                                <el-input v-model="qryParams.alias" style="width: 200px"></el-input>
                            </el-form-item>


                            <el-form-item label="盈利状态" prop="profit" size="small">
                                <el-select v-model="qryParams.profit" placeholder="请选择盈亏状态" style="width: 200px">
                                    <el-option label="盈利" value="Y"></el-option>
                                    <el-option label="亏损" value="N"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="时间排序" prop="asc" size="small">
                                <el-select v-model="qryParams.asc" placeholder="请选择时间排序方式" style="width: 200px">
                                    <el-option label="由远到近" value="Y"></el-option>
                                    <el-option label="由近到远" value="N"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="开始日期" prop="startDate" size="small">
                                <el-date-picker type="date" v-model="qryParams.startDate" style="width: 200px"/>
                            </el-form-item>

                            <el-form-item label="结束日期" prop="endDate" size="small">
                                <el-date-picker type="date" v-model="qryParams.endDate" style="width: 200px"/>
                            </el-form-item>
                        </el-form>
                    </v-col>
                    <v-col lg="1">
<!--                        <v-row class="mb-1">-->
<!--                            <el-button type="primary" @click="handleSubmit('qryParams')" size="medium" class="my-1"-->
<!--                                       style="width: 88px">查询-->
<!--                            </el-button>-->
<!--                        </v-row>-->
                        <v-row>
                            <el-button @click="resetForm('qryParams')" size="medium" class="my-1" style="width: 88px">
                                重置
                            </el-button>
                        </v-row>

                    </v-col>
                </v-row>

            </v-card>


            <v-data-table
                    :no-data-text="noData"
                    style="width: 100%;overflow-y: auto;overflow-x: hidden"
                    :headers="headers"
                    :items="records"
                    class="elevation-4 ma-2 pa-2"
                    :server-items-length="total"
                    :options.sync="options"
                    :page.sync="page"
                    :items-per-page.sync="perPage"
                    @update:items-per-page="query"
                    @update:page="query"
            >
                <template v-slot:top>
                    <v-row>
                        <v-col lg="1" class=" ma-2">
                            <v-btn color="pink darken-1" block="" class="white--text" @click="handleSubmit('qryParams')">查询记录</v-btn>
                        </v-col>
                        <v-spacer/>
                        <v-col lg="1" class="ma-2">
                            <v-btn color="primary" class="white--text" @click.stop="dialog = true">新增记录</v-btn>
                            <v-dialog v-model="dialog" max-width="600px" persistent>
                                <!--                                    <template v-slot:activator="{ on }">-->
                                <!--                                        <v-btn color="primary" class="ma-2" v-on="on">新增记录</v-btn>-->
                                <!--                                    </template>-->
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">{{ formTitle }}</span>
                                    </v-card-title>

                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.name"
                                                                  label="股票名称"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.alias"
                                                                  label="股票别名"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.code"
                                                                  label="股票代码"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.buyPrice"
                                                                  label="买入价格"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.sellPrice"
                                                                  label="卖出价格"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.buyTime"
                                                                  label="买入时间"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.sellTime"
                                                                  label="卖出时间"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.buyCount"
                                                                  label="交易数量/股"></v-text-field>
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

                </template>
                <template v-slot:item.actions="{ item }">
                    <v-icon small class="mr-2" @click="editItem(item)">
                        mdi-pencil
                    </v-icon>
                    <v-icon small @click="deleteItem(item)">
                        mdi-delete
                    </v-icon>
                </template>
            </v-data-table>
        </v-row>
    </v-card>
</template>

<script>

    export default {
        name: "TradeQuery",
        components: {},
        data() {
            return {
                noData: '暂无数据',
                menu: false,
                menu2: false,
                tableData: [],
                perPage: 10,
                page: 1,
                total: 0,
                options: {},
                currentPage: 1,
                qryParams: {
                    profit: '',
                    endDate: '',
                    startDate: '',
                    asc: 'N',
                    code: '',
                    name: '',
                    alias: ''
                },
                profitStates: [
                    {
                        value: 'Y',
                        text: '盈利'
                    }, {
                        value: 'N',
                        text: '亏损'
                    }
                ],
                orderBys: [
                    {
                        value: 'Y',
                        text: '由远到近'
                    }, {
                        value: 'N',
                        text: '由近到远'
                    }
                ],
                rules: {},
                dialog: false,
                headers: [
                    {
                        text: '股票名称',
                        align: 'start',
                        sortable: false,
                        value: 'name'
                    },
                    {text: '股票别名', value: 'alias'},
                    {text: '股票代码', value: 'code'},
                    {text: '买入价格', value: 'buyPrice'},
                    {text: '卖出价格', value: 'sellPrice'},
                    {text: '买入时间', value: 'buyTime'},
                    {text: '卖出时间', value: 'sellTime'},
                    {text: '交易数量/股', value: 'buyCount'},
                    {text: '操作', value: 'actions'}
                ],
                records: [],
                editedIndex: -1,
                editedItem: {
                    id: null,
                    name: '',
                    alias: '',
                    code: '',
                    buyPrice: null,
                    sellPrice: null,
                    buyCount: null,
                    buyTime: '',
                    sellTime: ''
                },
                defaultItem: {
                    id: null,
                    name: '',
                    alias: '',
                    code: '',
                    buyPrice: null,
                    sellPrice: null,
                    buyCount: null,
                    buyTime: '',
                    sellTime: ''
                },
            }
        },
        methods: {
            handleSubmit() {
                console.log('submit!');
            },
            resetForm() {

            },
            assembleData: function (rows) {
                this.records.splice(0, this.records.length);
                for (let index in rows) {
                    this.records.push(rows[index]);
                }
            },
            query: function () {
                this.fetchData(this.page, this.perPage);
            },
            fetchData: function (pageNum, pageSize) {
                console.log(pageNum + pageSize);
                // let self = this;
                // this.qryParams.pageSize = pageSize;
                // this.qryParams.pageNum = pageNum;
                // historyQryPagination(this.qryParams, (json) => {
                //     self.assembleData(json.rows);
                //     self.total = json.total;
                // }, (json) => {
                //     self.$toast.error(json.message);
                // });
            },
            initialize() {
                this.query();
            },

            editItem(item) {
                this.editedIndex = this.records.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem(item) {
                // let self = this;
                const index = this.records.indexOf(item)
                if (confirm('你确定想要删除此项记录吗?')) {
                    this.records.splice(index, 1);
                    // recordDelete({id: item.id}, (json) => {
                    //     self.$toast.success(json.message);
                    // }, ((json) => {
                    //     self.$toast.error(json.message);
                    // }))
                }

            },

            close() {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem);
                    this.editedIndex = -1;
                }, 300)
            },

            save() {
                // let self = this;
                if (this.editedIndex > -1) {
                    // recordUpdate(self.editedItem, (json) => {
                    //     Object.assign(self.records[self.editedIndex], self.editedItem);
                    //     self.$toast.success(json.message);
                    // }, (json) => {
                    //     self.$toast.error(json.message);
                    // });

                } else {
                    // recordSave(self.editedItem, (json) => {
                    //     self.records.push(self.editedItem);
                    //     self.$toast.success(json.message);
                    // }, (json) => {
                    //     self.$toast.error(json.message);
                    // });

                }
                this.close()
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
        },

        created() {
            this.initialize();
        },
    }
</script>

<style scoped>
    .el-form-item el-form-item--small {
        margin-bottom: 0;
    }

    .col-lg-3 col {
        padding-top: 0;
        padding-bottom: 0;
    }
</style>
