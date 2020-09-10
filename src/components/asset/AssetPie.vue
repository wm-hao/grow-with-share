<template>
    <v-card raised="">
        <ve-pie :data="chartData" :height="baseHeight" width="100%" :settings="charSettings"
                :extend="extend" :data-empty="dataEmpty" :loading="loading"></ve-pie>
    </v-card>

</template>

<script>
    import ChartConfig from '../../const/ChartConst';
    import {balanceQry} from "../../api/balance/balanceRequest";

    export default {
        name: "AssetPie",
        data: () => ({
            dataEmpty: true,
            loading: true,
            baseHeight: ChartConfig.baseHeight,
            extend: {
                legend: {
                    top: ChartConfig.legendTop
                },
                title: {
                    text: '资产分类',
                    left: ChartConfig.titleLeft,
                    top: ChartConfig.titleTop
                }
            },
            charSettings: {},
            chartData: {
                columns: ['Category', 'Value'],
                rows: []
            }
        }),
        methods: {
            fetchData: function () {
                let self = this;
                let qryParams = {
                    "page": 0,
                    "size": 1,
                    "timeOrder": "DESC",
                };
                balanceQry(qryParams, (json) => {
                    let balance = json.rows[0];
                    if (balance) {
                        let fundAmount = balance.fundAmount;
                        let cashAmount = balance.cashAmount;
                        let shareAmount = balance.shareAmount;
                        let rows = [
                            {'Category': '股票', 'Value': shareAmount},
                            {'Category': '现金', 'Value': cashAmount},
                            {'Category': '基金', 'Value': fundAmount},
                        ];
                        self.chartData.rows = rows;
                        self.dataEmpty = false;
                        self.loading = false;
                    }
                }, (json) => {
                    self.$message.error({
                            message: json.message,
                            center: true
                        }
                    );
                })
            }
        },
        created() {
            this.fetchData();
        }
    }
</script>

<style scoped>

</style>
