<template>
    <v-card flat="">
        <v-row class="ma-2">
            <div class="ma-2" style="width: 100%">
                <v-sheet color="blue-grey lighten-5" class="pa-2 my-2 grey--text">查询条件</v-sheet>
            </div>

            <v-card raised="" tile class="pa-2 ma-2" style="width: 100%">
                <v-row>
                    <v-col lg="10" sm="12" class="d-flex justify-center align-center">
                        <div>
                            <el-form :model="qryParams" :rules="rules" ref="qryParams" size="small" :inline="true"
                                     label-width="120">
                                <el-form-item label="股票名称" prop="shareName" size="small">
                                    <el-input v-model="qryParams.shareName" style="max-width: 168px"></el-input>
                                </el-form-item>
                                <el-form-item label="股票代码" prop="shareCode" size="small">
                                    <el-input v-model="qryParams.shareCode" style="max-width: 168px"></el-input>
                                </el-form-item>
                                <el-form-item label="股票别名" prop="alias" size="small">
                                    <el-input v-model="qryParams.alias" style="max-width: 168px"></el-input>
                                </el-form-item>


                                <el-form-item label="交易类型" prop="payType" size="small">
                                    <el-select v-model="qryParams.payType" placeholder="请选择交易类型"
                                               style="max-width: 168px">
                                        <el-option label="卖出" value="SELL"></el-option>
                                        <el-option label="买入" value="BUY"></el-option>
                                        <el-option label="红利" value="BOUNS"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="时间排序" prop="timeOrder" size="small">
                                    <el-select v-model="qryParams.timeOrder" placeholder="请选择时间排序方式"
                                               style="max-width: 168px">
                                        <el-option label="由远到近" value="ASC"></el-option>
                                        <el-option label="由近到远" value="DESC"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="开始日期" prop="startTime" size="small">
                                    <el-date-picker type="datetime" v-model="qryParams.startTime"
                                                    value-format="yyyy-MM-dd HH:mm:ss" style="max-width: 168px"/>
                                </el-form-item>

                                <el-form-item label="结束日期" prop="endTime" size="small">
                                    <el-date-picker type="datetime" v-model="qryParams.endTime"
                                                    value-format="yyyy-MM-dd HH:mm:ss" style="max-width: 168px"/>
                                </el-form-item>
                            </el-form>
                        </div>

                    </v-col>
                    <v-col lg="2" class="d-flex align-center justify-center">
                        <v-btn class="elevation-2 white--text pink darken-1" @click="handleSubmit">查询记录</v-btn>
                    </v-col>
                </v-row>

            </v-card>


            <v-data-table
                    :no-data-text="noData"
                    :headers="headers"
                    :items="records"
                    class="elevation-4 ma-2 pa-2"
                    :server-items-length="total"
                    :options.sync="options"
                    :page.sync="page"
                    :items-per-page.sync="perPage"
                    @update:items-per-page="query"
                    @update:page="query"
                    hide-default-header=""
                    style="width: 100%;"
            >
                <template v-slot:top>
                    <v-row>
                        <v-col lg="2" class="ma-2 d-flex align-center">
                            <v-btn color="green" class="white--text" @click.stop="dialog = true">新增记录</v-btn>
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
                                                    <v-text-field v-model="editedItem.alias"
                                                                  label="股票别名"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.shareCode"
                                                                  label="股票代码"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.unitPrice"
                                                                  label="交易价格"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.payCount"
                                                                  label="交易数量"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.payAmount"
                                                                  label="交易金额"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-select v-model="editedItem.payType" :items="payTypes"
                                                              label="交易类型"></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field v-model="editedItem.payTime"
                                                                  label="交易时间"></v-text-field>
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
                <template v-slot:header="{ props: { headers } }">
                    <thead>
                    <tr>
                        <th v-for="header in headers" :key="header.value">
                            <span class="text-body-2">{{header.text}}</span>
                        </th>
                    </tr>
                    </thead>
                </template>
                <template v-slot:item.payType="{ item }">
                    {{ getPayType(item.payType) }}
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

    import {historyQryPagination, recordSave, recordUpdate} from "../../api/record/recordRequest";

    export default {
        name: "TradeQuery",
        components: {},
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
                qryParams: {
                    shareName: '',
                    startTime: '',
                    endTime: '',
                    alias: '',
                    shareCode: '',
                    payType: '',
                    page: '',
                    size: '',
                    timeOrder: ''
                },
                payTypes: [
                    {
                        value: 'SELL',
                        text: '卖出'
                    }, {
                        value: 'BUY',
                        text: '买入'
                    }, {
                        value: 'BONUS',
                        text: '红利'
                    }
                ],
                timeOrder: [
                    {
                        value: 'DESC',
                        text: '倒序'
                    }, {
                        value: 'ASC',
                        text: '正序'
                    }
                ],
                rules: {},
                dialog: false,
                headers: [
                    {
                        text: '股票名称',
                        align: 'start',
                        value: 'shareName',
                    },
                    {text: '股票别名', value: 'alias'},
                    {text: '股票代码', value: 'shareCode'},
                    {text: '每股单价/元', value: 'unitPrice'},
                    {text: '交易数量/股', value: 'payCount'},
                    {text: '交易金额/元', value: 'payAmount'},
                    {text: '交易类型', value: 'payType'},
                    {text: '交易时间', value: 'payTime'},
                ],
                records: [],
                editedIndex: -1,
                editedItem: {
                    id: null,
                    shareName: '',
                    alias: '',
                    shareCode: '',
                    payTime: null,
                    payCount: null,
                    payAmount: null,
                    payType: '',
                    unitPrice: ''
                },
                defaultItem: {
                    id: null,
                    shareName: '',
                    alias: '',
                    shareCode: '',
                    payTime: null,
                    payCount: null,
                    payAmount: null,
                    payType: '',
                    unitPrice: ''
                },
            }
        },
        methods: {
            getPayType(payType) {
                if (payType === 'SELL') {
                    return '买入'
                } else if (payType === 'BUY') {
                    return '卖出'
                } else if (payType === 'BONUS') {
                    return '红利'
                }
            },
            handleSubmit() {
                this.query();
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
                let self = this;
                self.qryParams.page = pageNum - 1;
                self.qryParams.size = pageSize;
                historyQryPagination(this.qryParams, (json) => {
                    self.assembleData(json.rows);
                    self.total = json.total;
                }, (json) => {
                    self.$message.error(json.message);
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
                let self = this;
                if (this.editedIndex > -1) {
                    recordUpdate(self.editedItem, (json) => {
                        Object.assign(self.records[self.editedIndex], self.editedItem);
                        self.$toast.success(json.message);
                    }, (json) => {
                        self.$toast.error(json.message);
                    });

                } else {
                    recordSave(self.editedItem, (json) => {
                        self.records.push(self.editedItem);
                        self.$toast.success(json.message);
                    }, (json) => {
                        self.$toast.error(json.message);
                    });

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

    .th > text-start {
        background: green ! important;
        color: red;
    }
</style>
