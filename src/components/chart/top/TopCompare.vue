<template>
    <v-card raised="">
        <ve-pie :data="chartData" :height="baseHeight" width="100%" :settings="charSettings"
                :extend="extend" :data-empty="dataEmpty" :loading="loading"></ve-pie>
    </v-card>

</template>

<script>


    import {USER_ID} from "../../../const/Constant";
    import ChartConfig from "../../../const/ChartConst";
    import {profitQryCompare} from "../../../api/profit/profitRequest";

    export default {
        name: "TopCompare",
        data: () => ({
            dataEmpty: true,
            loading: true,
            baseHeight: ChartConfig.baseHeight,
            extend: {
                legend: {
                    top: ChartConfig.legendTop
                },
                title: {
                    text: '交易胜率',
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
                let qryParams = {};
                profitQryCompare(qryParams, (json) => {
                    let success = json.rows.length === 3;
                    if (success) {
                        let rows = [
                            {'Category': '盈利', 'Value': json.rows[2].total},
                            {'Category': '平衡', 'Value': json.rows[1].total},
                            {'Category': '亏损', 'Value': json.rows[0].total},
                        ];
                        self.chartData.rows = rows;
                        self.dataEmpty = false;
                        self.loading = false;
                    }
                }, (json) => {
                    self.$message.error(json.message);
                })
            }
        },
        created() {
            sessionStorage.setItem(USER_ID, "1");
            this.fetchData();
        }
    }
</script>

<style scoped>

</style>
