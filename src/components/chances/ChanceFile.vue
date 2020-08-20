<template>
    <v-card flat="" class="ma-0">
        <v-row class="d-flex align-center">

            <v-col sm="8">
                <v-file-input accept=".txt" show-size counter label="请上传正确格式的txt格式文件" clearable
                              @change="fileChange" ref="file" v-model="fileName"></v-file-input>

            </v-col>
            <v-col sm="2" class="d-flex justify-center">
                <v-btn class="white--text pink darken-1" @click="upload" style="width:88%">导入记录</v-btn>
            </v-col>
            <v-col sm="2" class="d-flex justify-center ">
                <v-btn color="green" class="white--text" @click="download" style="width:88%">导出记录</v-btn>
            </v-col>
        </v-row>


    </v-card>
</template>

<script>
    import {HTTP_HEADER_TOKEN_VAL, HTTP_RESPONSE_SUCCESS_CODE, USER_ID} from "../../const/Constant";

    export default {
        name: "ChanceFile",
        data: () => {
            return {
                file: null,
                fileName: null,
            }
        },
        methods: {
            download() {
                window.location.href = 'http://localhost:8090/chance/export?createTime=2020-08-19' + '&userId=' + sessionStorage.getItem(USER_ID);
            },
            fileChange: function (files) {
                this.file = files;
            },
            upload: function () {
                if (this.file !== null) {
                    let self = this;
                    let params = new FormData();
                    params.append('file', this.file);
                    params.append("userId", sessionStorage.getItem(USER_ID));
                    let config = {
                        //添加请求头
                        headers: {
                            "Content-Type": "multipart/form-data",
                            "Access-Control-Allow-Origin": '*',
                            HTTP_HEADER_TOKEN_KEY: sessionStorage.getItem(HTTP_HEADER_TOKEN_VAL) || ''
                        }
                    };
                    this.$http.post("chance/import", params, config).then(function (response) {
                        if (response.data.code === HTTP_RESPONSE_SUCCESS_CODE) {
                            self.$message.success({
                                message: response.data.message,
                                center: true
                            });
                            self.file = null;
                            self.fileName = null;
                        } else {
                            self.$message.error(response.data.message);
                        }
                    }).catch(function (error) {
                        self.$message.error(error.message);
                    })

                } else {
                    this.$message.error('上传文件不能为空，请先选择文件');
                }

            }
        }
    }
</script>

<style scoped>

</style>
