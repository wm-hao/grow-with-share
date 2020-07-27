<template>
    <v-card raised="" class="d-flex flex-column" style="height: 350px">
        <div class="text-lg-h6 font-weight-bold pa-2">最近交易</div>
        <v-data-table
                :headers="headers"
                :items="records"
                calculate-widths
                hide-default-footer
                :no-data-text="noDataText"
        >
            <template v-slot:header.shareName="{ header } ">
                <span class="text-body-2">{{header.text}}</span>
            </template>
            <template v-slot:header.payTime="{ header } ">
                <span class="text-body-2">{{header.text}}</span>
            </template>
            <template v-slot:header.payCount="{ header } ">
                <span class="text-body-2">{{header.text}}</span>
            </template>
            <template v-slot:header.payAmount="{ header } ">
                <span class="text-body-2">{{header.text}}</span>
            </template>
            <template v-slot:header.payType="{ header } ">
                <span class="text-body-2">{{header.text}}</span>
            </template>
            <template v-slot:item.payType="{ item }">
                <v-chip :color="getPayTypeColor(item.payType)"> {{ convertPayType(item.payType) }}</v-chip>
            </template>
        </v-data-table>

    </v-card>
</template>
<script>
    import {historyQryPagination} from "../../api/record/recordRequest";

    export default {
        name: "RecentTradeRecords",
        data: () => ({
            noDataText: '暂无数据',
            headers: [
                {
                    text: '股票名称',
                    align: 'start',
                    value: 'shareName',
                },
                {text: '交易时间', value: 'payTime'},
                {text: '交易数量/股', value: 'payCount'},
                {text: '交易金额/元', value: 'payAmount'},
                {text: '交易类型', value: 'payType'},
            ],
            records: [],
        }),
        methods: {
            assembleData: function (rows) {
                this.records.splice(0, this.records.length);
                for (let index in rows) {
                    this.records.push(rows[index]);
                }
            },
            fetchData: function () {
                let self = this;
                let qryParams = {
                    "page": 0,
                    "size": 5
                };
                historyQryPagination(qryParams, (json) => {
                    self.assembleData(json.rows);
                }, (json) => {
                    self.$message.error(json.message);
                });
            },
            getPayTypeColor: (payType) => {
                if (payType === 'SELL') {
                    return 'green lighten-1'
                } else if (payType === 'BUY') {
                    return 'red lighten-4'
                } else if (payType === 'BONUS') {
                    return 'orange darken-1'
                }
                return "grey";
            },
            convertPayType: (payType) => {
                if (payType === 'SELL') {
                    return '卖出'
                } else if (payType === 'BUY') {
                    return '买入'
                } else if (payType === 'BONUS') {
                    return '红利'
                }
                return "";
            }

        },
        created() {
            this.fetchData();
        }

    }
</script>


<style scoped>
</style>
