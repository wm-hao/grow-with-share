<template>
    <v-card raised="" tile class="pa-1" style="height: 350px">
        <div class="pl-2 text-h6 font-weight-bold ">当日数据</div>
        <div class="my-2 px-2">
            <el-form :model="form" :rules="rules" ref="form" size="small" label-width="80px">
                <el-form-item label="当日盈亏" prop="profit">
                    <el-input v-model="form.profit" type="number"></el-input>
                </el-form-item>
                <el-form-item label="股票持仓" prop="shareAmount">
                    <el-input v-model="form.shareAmount" type="number"></el-input>
                </el-form-item>
                <el-form-item label="基金持仓" prop="fundAmount">
                    <el-input v-model="form.fundAmount" type="number"></el-input>
                </el-form-item>
                <el-form-item label="剩余现金" prop="cashAmount">
                    <el-input v-model="form.cashAmount" type="number"></el-input>
                </el-form-item>
            </el-form>
            <v-row class="d-flex justify-sm-center">
                <v-col sm="12" lg="6">
                    <v-btn color="primary" class="elevation-1" block="" @click="handleSubmit">提 交</v-btn>
                </v-col>
            </v-row>
        </div>
    </v-card>
</template>

<script>
    import {balanceToadyQry, balanceToadyUpdate} from "../../api/balance/balanceRequest";

    export default {
        name: "AssetOperation",
        data: () => {
            return {
                form: {
                    profit: 0,
                    cashAmount: 0,
                    fundAmount: 0,
                    shareAmount: 0
                },
                rules: {}
            }
        },
        methods: {
            handleSubmit() {
                let self = this;
                balanceToadyUpdate(this.form, (json) => {
                    self.$message.success({
                        center: true,
                        message: json.message
                    });
                });
            }
        },
        created() {
            balanceToadyQry({}, (json) => {
                this.form = json.rows[0];
            })
        }
    }
</script>

<style scoped>

</style>
