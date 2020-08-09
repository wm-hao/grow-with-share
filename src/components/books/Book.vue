<template>

    <v-data-table
            :no-data-text="noData"
            :items="books"
            :headers="headers"
            class="elevation-4 ma-2 pa-2"
            :server-items-length="total"
            :page.sync="page"
            :items-per-page.sync="perPage"
            @update:items-per-page="query"
            @update:page="query"
            hide-default-header
            hide-default-footer
            style="width: 100%;"
            :calculate-widths="calculate"
    >

        <template v-slot:item.name="{ item }">
            <span style="width: 100px">{{item.name}}</span>
        </template>
        <template v-slot:item.progress="{ item }">
            <v-progress-linear
                    v-model="item.progress"
                    height="14"
                    striped
                    color="deep-orange"
                    rounded
                    style="width: 800px"
            >
                <template v-slot="{ value }">
                    {{ Math.ceil(value) }}%
                </template>
            </v-progress-linear>
        </template>


    </v-data-table>
<!--    <v-expansion-panels>-->
<!--        <v-expansion-panel>-->
<!--            <v-expansion-panel-header>-->
<!--                <v-list-item-content class="pa-2">-->
<!--                    <v-list-item-title v-text="title"-->
<!--                                       class="text-body-1 font-weight-550 black&#45;&#45;text"></v-list-item-title>-->
<!--                    <v-list-item-subtitle class="text&#45;&#45;black pt-1">-->

<!--                    </v-list-item-subtitle>-->
<!--                </v-list-item-content>-->
<!--                <template v-slot:actions>-->
<!--                    <v-icon class="mr-2">mdi-arrow-down</v-icon>-->
<!--                </template>-->

<!--            </v-expansion-panel-header>-->
<!--            <v-expansion-panel-content>-->
<!--                aa-->
<!--            </v-expansion-panel-content>-->
<!--        </v-expansion-panel>-->
<!--    </v-expansion-panels>-->
</template>

<script>
    export default {
        name: "Book",
        data: () => ({
            skill: 20,
            calculate: true,
            noData: '暂无书籍信息',
            total: 1,
            page: 1,
            perPage: 1,
            books: [
                {
                    id:1,
                    name: '<<早起的奇迹>>',
                    progress: 60
                }
            ],
            headers: [
                {
                    text: '书籍名称',
                    align: 'start',
                    value: 'name',
                },
                {text: '阅读进度', value: 'progress'},
                {text: '操作', value: 'operations'},
            ],
        }),
        methods: {
            query() {
                console.log("")
            }
        }
    }
</script>

<style scoped>

</style>