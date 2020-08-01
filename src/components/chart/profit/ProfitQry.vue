<template>
    <v-data-table
            :no-data-text="noData"
            :headers="headers"
            :items="records"
            class="elevation-4 ma-2 pa-2"
            :server-items-length="total"
            :options.sync="options"
            :page.sync="page"
            :items-per-page.sync="perPage"
            @update:items-per-page="fetchData"
            @update:page="fetchData"
            :search="searchShareName"
    >
        <template v-slot:top>
            <v-text-field v-model="searchShareName" placeholder="输入查询的股票名称" class="ma-2"
            >
                <template v-slot:append>
                    <v-icon @click="fetchData">mdi-text-search</v-icon>
                </template>
            </v-text-field>
        </template>
        <template v-slot:header.shareName="{ header } ">
            <span class="text-body-2">{{header.text}}</span>
        </template>
        <template v-slot:header.shareCode="{ header } ">
            <span class="text-body-2">{{header.text}}</span>
        </template>
        <template v-slot:header.keepCount="{ header } ">
            <span class="text-body-2">{{header.text}}</span>
        </template>
        <template v-slot:header.keepAmount="{ header } ">
            <span class="text-body-2">{{header.text}}</span>
        </template>
        <template v-slot:header.profit="{ header } ">
            <span class="text-body-2">{{header.text}}</span>
        </template>
        <template v-slot:header.payType="{ header } ">
            <span class="text-body-2">{{header.text}}</span>
        </template>
    </v-data-table>
</template>

<script>
    import {profitQry} from "../../../api/profit/profitRequest";

    export default {
        name: "ProfitQry",
        data() {
            return {
                noData: '暂无数据',
                searchShareName: '',
                perPage: 5,
                page: 1,
                total: 0,
                options: {},
                currentPage: 1,
                qryParams: {
                    shareName: '',

                },
                headers: [
                    {
                        text: '股票名称',
                        align: 'start',
                        value: 'shareName',
                    },
                    {text: '股票代码', value: 'shareCode'},
                    {text: '持仓数量/股', value: 'keepCount'},
                    {text: '持仓金额/元', value: 'keepAmount'},
                    {text: '盈利金额', value: 'profit'},
                ],
                records: [],

            }
        },
        methods: {
            handleSubmit() {

            },
            fetchData() {
                let self = this;
                let params = {
                    page: self.page - 1,
                    size: self.perPage,
                    order: 'DESC',
                    shareName: self.searchShareName,
                    showKeep: 'YES'
                };
                profitQry(params, (json) => {
                    self.records = json.rows;
                    self.total = json.total;
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
