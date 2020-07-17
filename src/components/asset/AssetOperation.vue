<template>
    <v-card raised="" tile class="pa-1" style="height: 350px">
        <div class="pl-2 text-h6 font-weight-bold ">当日数据</div>
        <div class="my-2 px-2">
            <el-form :model="form" :rules="rules" ref="form" size="small" label-width="80px">
                <el-form-item label="账户总额" prop="total">
                    <el-input v-model="form.total"></el-input>
                </el-form-item>
                <el-form-item label="股票持仓" prop="share">
                    <el-input v-model="form.share"></el-input>
                </el-form-item>
                <el-form-item label="基金持仓" prop="fund">
                    <el-input v-model="form.fund"></el-input>
                </el-form-item>
                <el-form-item label="剩余现金" prop="cash">
                    <el-input v-model="form.cash"></el-input>
                </el-form-item>
            </el-form>
            <v-row class="d-flex justify-sm-center">
                <v-col sm="12" lg="6">
                    <v-btn color="primary" class="elevation-1" block="">提 交</v-btn>
                </v-col>
            </v-row>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "AssetOperation",
        data: () => {
            return {
                form: {
                    total: 0,
                    cash: 0,
                    fund: 0,
                    share: 0,
                    profit: 0
                },
                rules: {}
            }
        }
    }
</script>

<style scoped>

</style>
