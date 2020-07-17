<template>
    <v-expansion-panels accordion="">
        <v-expansion-panel v-for="(item) in items" :key="item.title">
            <v-expansion-panel-header class="pa-1">
                <v-list-item-content class="pa-2">
                    <v-list-item-title v-text="item.title"
                                       class="text-body-1 font-weight-550 black--text"></v-list-item-title>
                    <v-list-item-subtitle class="text&#45;&#45;black" v-text="item.headline"></v-list-item-subtitle>
                    <!--                    <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>-->
                </v-list-item-content>
                <template v-slot:actions>
                    <v-icon class="mr-2">mdi-arrow-down</v-icon>
                </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-card flat="">
                    <v-card-text class="">
                        {{item.subtitle}}
                    </v-card-text>
                    <v-card-actions class="pa-0">
                        <v-btn
                                color="purple"
                                text
                                class="text-left pa-0"
                                @click.stop="dialog = true"
                                @click="handleEdit(item)"
                        >
                            修改
                        </v-btn>
                        <v-dialog
                                v-model="dialog"
                                max-width="600"
                                scrollable=""
                                persistent
                        >
                            <v-card>
                                <v-card-title>修改日志</v-card-title>

                                <v-card-text>
                                    <v-textarea counter v-model="editItem.subtitle" filled>

                                    </v-textarea>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn
                                            color="red darken-1"
                                            text
                                            @click="handleCancel()"
                                    >
                                        取消
                                    </v-btn>

                                    <v-btn
                                            color="green darken-1"
                                            text
                                            @click="handleSave(item)"
                                    >
                                        保存
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-card-actions>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>


    </v-expansion-panels>
</template>

<script>
    export default {
        name: "JournalRecord",
        data: () => ({
            selected: 1,
            editItem: {},
            items: [
                {
                    action: '15 min',
                    headline: 'Brunch this weekend?',
                    title: 'Ali Connors',
                    subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
                },
                {
                    action: '2 hr',
                    headline: 'Summer BBQ',
                    title: 'me, Scrott, Jennifer',
                    subtitle: "Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.Wish I could come, but I'm out of town this weekend.",
                },
                {
                    action: '6 hr',
                    headline: 'Oui oui',
                    title: 'Sandra Adams',
                    subtitle: 'Do you have Paris recommendations? Have you ever been?',
                },
                {
                    action: '12 hr',
                    headline: 'Birthday gift',
                    title: 'Trevor Hansen',
                    subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
                },
                {
                    action: '18hr',
                    headline: 'Recipe to try',
                    title: 'Britta Holt',
                    subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                },
            ],
            dialog: false
        }),
        methods: {
            handleEdit: function (item) {
                this.editItem = Object.assign({}, item);
                this.dialog = true;
            },
            handleSave: function (item) {
                let itemIdx = this.items.indexOf(item);
                Object.assign(this.items[itemIdx], this.editItem);
                this.dialog = false;

            },
            handleCancel: function () {
                this.dialog = false;
            }
        }
    }
</script>

<style scoped>

</style>
