<template>
    <v-card flat="">
        <div class="grey--text text-center">功能暂未开放</div>

        <div>
            <el-table
                    :data="tableDates"
                    size="small"
                    border
                    empty-text="暂无数据"
                    style="width: 100%">
                <el-table-column
                        prop="itemCode"
                        label="物料编码"
                        show-overflow-tooltip
                        width="auto"
                        align="center">
                    <template slot-scope="scope">
                        <el-input
                                v-model="scope.row.itemCode"
                                type="text"
                                placeholder="物料名称"
                        ></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="itemName"
                        label="物料名称"
                        width="auto"
                        align="center">
                    <template slot-scope="scope">
                        <el-input
                                v-model="scope.row.itemName"
                                type="text"
                                placeholder="物料名称"
                        ></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="norms"
                        label="型号"
                        width="auto"
                        align="center">
                    <template slot-scope="scope">
                        <el-input
                                v-model="scope.row.norms"
                                type="text"
                                placeholder="型号"
                        ></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="unit"
                        label="单位"
                        width="auto"
                        align="center">
                    <template slot-scope="scope">
                        <el-input
                                v-model="scope.row.unit"
                                type="text"
                                placeholder="单位"
                        ></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="outSum"
                        label="退料数量"
                        width="auto"
                        align="center">
                    <template slot-scope="scope">
                        <el-input
                                type="number"
                                v-model="scope.row.outSum"
                                placeholder="退料数量"
                        ></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="reason"
                        label="退料原因"
                        show-overflow-tooltip
                        width="auto"
                        align="center">
                    <template slot-scope="scope">
                        <el-input
                                v-model="scope.row.reason"
                                type="text"
                                placeholder="退料原因"
                        ></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="remarks"
                        label="备注"
                        width="auto"
                        align="center">
                    <template slot-scope="scope">
                        <el-input
                                v-model="scope.row.remarks"
                                type="text"
                                placeholder="备注"
                        ></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="160"
                        align="center">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="danger"
                                plain
                                @click.native="delRow(scope.$index,tableDates)"
                                title="删除">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <v-row class="d-flex justify-center">
                <el-button type="primary" @click.native="addRow" class="mt-3" size="small" icon="el-icon-plus">新 增
                </el-button>
                <el-button type="success" @click.native="submitForm" class="mt-3" size="small">确 定</el-button>
            </v-row>

        </div>


    </v-card>
</template>

<script>
    export default {
        name: "TradeInsert",
        data() {
            return {
                tableDates: [],
            };
        },
        components: {},
        methods: {
            //数据的新增
            addRow() {
                let j = {
                    itemCode: "",
                    itemName: "",
                    norms: "",
                    unit: "",
                    outSum: "",
                    reason: "",
                    remarks: "",
                    inventoryId: '',
                };
                this.tableDates.push(j);
            },
            // 数据的删除
            delRow(index, rows) {
                rows.splice(index, 1)
            },
            //保存
            submitForm() {
                let _this = this;
                let data = {
                    list: _this.tableDates,
                }
                console.log(data)
            },
        },
        mounted() {

        },
    }
</script>

<style scoped>

</style>
