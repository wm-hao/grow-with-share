<template>
    <v-card flat class="ma-2">
        <v-row class="ma-2">
            <v-col lg="7" sm="12">

                <Recent10DaysAnalysis/>
            </v-col>
            <v-col lg="5" sm="12">
                <AssetPie/>
            </v-col>
        </v-row>
        <v-row class="ma-2" sm="12">
            <v-col lg="12">
                <RecentTradeRecords/>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
    import Recent10DaysAnalysis from "./Recent10DaysAnalysis";
    import RecentTradeRecords from "./RecentTradeRecords";
    import AssetPie from "../asset/AssetPie";
    import {balanceToadyQry} from "../../api/balance/balanceRequest";
    import {HAS_PROMPTED, STATUS_CODE_TRUE} from "../../const/Constant";

    export default {
        components: {AssetPie, RecentTradeRecords, Recent10DaysAnalysis},
        data: () => ({}),
        methods: {
            qryProfit() {
                let self = this;
                balanceToadyQry({}, (json) => {
                    self.$notify({
                        title: '提示',
                        message: '截止当前，您共盈利' + parseFloat((json.rows[0].profit || 0) - 6710.4) + '元',
                        duration: 2000,
                    });
                })
            }
        },
        created() {
            let self = this;
            let hasPrompt = sessionStorage.getItem(HAS_PROMPTED);
            if (hasPrompt && hasPrompt === STATUS_CODE_TRUE) {
                this.qryProfit();
            } else {
                this.$confirm('幻想让你遍体鳞伤?', '', {
                    confirmButtonText: '你只能接受',
                    cancelButtonText: '拒绝',
                    type: 'error',
                    showCancelButton: false,
                    closeOnClickModal: false,
                    closeOnHashChange: false,
                    closeOnPressEscape: false,
                    distinguishCancelAndClose: true,
                    showClose: false,
                    callback: (action) => {
                        if (action === 'cancel') {
                            self.$message.info({
                                message: "真是个傻X",
                                center: true
                            });
                        } else if (action === 'confirm') {
                            self.$confirm('记住你的目标?', '', {
                                confirmButtonText: '赚到10,000,000元',
                                cancelButtonText: '拒绝',
                                type: 'success',
                                showCancelButton: false,
                                closeOnClickModal: false,
                                closeOnHashChange: false,
                                closeOnPressEscape: false,
                                distinguishCancelAndClose: true,
                                showClose: false,
                            }).then(() => {
                                sessionStorage.setItem(HAS_PROMPTED, STATUS_CODE_TRUE);
                                self.qryProfit();
                            })
                        }
                    }
                }).then(() => {

                }).catch(() => {

                });
            }
        }
    }
</script>

<style scoped>

</style>
