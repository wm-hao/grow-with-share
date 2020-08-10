<template>

    <v-card raised="" tile class="ma-2 pa-2">
        <v-row :key="book.id" v-for="book in books">
            <v-col lg="2" class="d-flex align-center justify-center">
                <span
                        class="d-inline-block text-truncate text-left"
                        style="width: 168px;"
                >《{{book.name}}》</span>
            </v-col>
            <v-col lg="8" class="d-flex align-center justify-center">
                <v-progress-linear
                        v-model="book.progress"
                        height="12"
                        striped
                        :color="getProgressColor(book.progress)"
                        rounded
                        style="width: 100%"
                >
                    <template v-slot="{ value }">
                        <span class="text-body-2">{{ Math.ceil(value) }}%</span>
                    </template>
                </v-progress-linear>
            </v-col>
            <v-col lg="2" class="d-flex align-center justify-center">
                <v-btn color="primary" @click="saveProgress(book)" style="height: 24px">保存进度</v-btn>
                <v-btn @click="book.edit = !book.edit" class="ml-8" color="secondary" style="height: 24px">添加书评</v-btn>
            </v-col>
            <v-col cols="12" v-if="book.edit">
                <v-textarea counter rows="2" placeholder="添加书评" class="mx-4 my-1 px-4" background-color="grey lighten-5"
                            v-model="book.note"/>
                <v-btn text="" color="purple" block="" @click="addNote(book)">添加</v-btn>

            </v-col>
        </v-row>
    </v-card>

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
                    id: 1,
                    name: '早起的奇迹',
                    progress: 60,
                    edit: false
                },
                {
                    id: 2,
                    name: '财富自由',
                    progress: 1,
                    edit: false
                },
                {
                    id: 3,
                    name: '止损',
                    progress: 0,
                    edit: false
                },
                {
                    id: 4,
                    name: '怒滚啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
                    progress: 0,
                    edit: false
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
            },
            saveProgress(item) {
                console.log(item);
            },
            addNote(item) {
                console.log(item);
                
            },
            getProgressColor(val) {
                if (val <= 20) {
                    return 'blue lighten-2';
                } else if (val <= 40) {
                    return 'teal lighten-2';
                } else if (val <= 60) {
                    return 'light-green darken-1';
                } else if (val <= 80) {
                    return 'orange darken-2';
                } else if (val <= 95) {
                    return 'deep-orange accent-3';
                } else if (val <= 100) {
                    return 'green darken-1';
                }
                return 'grey darken-1';
            },

        },

    }
</script>

<style scoped>

</style>
