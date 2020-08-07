<template>
    <ve-pie :data="chartData" :height="baseHeight" width="100%" :settings="charSettings"
            :extend="extend"></ve-pie>
</template>

<script>
    import ChartConfig from '../../const/ChartConst';
    import {balanceQry} from "../../api/balance/balanceRequest";

    export default {
        name: "Preview",
        data: () => ({
            baseHeight: ChartConfig.baseHeight,
            extend: {
                title: {
                    text: 'Preview',
                    left: ChartConfig.titleLeft
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
                    let fundAmount = balance.fundAmount;
                    let cashAmount = balance.cashAmount;
                    let shareAmount = balance.shareAmount;
                    var rows = [
                        {'Category': '股票', 'Value': shareAmount},
                        {'Category': '现金', 'Value': cashAmount},
                        {'Category': '基金', 'Value': fundAmount},
                    ]
                    self.chartData.rows = rows;
                }, (json) => {
                    self.$message.error(json.message);
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
