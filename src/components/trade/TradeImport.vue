<template>
    <v-card flat>

        <v-file-input accept=".xlsx" show-size counter label="请上传正确格式的xlsx格式文件" clearable

                      @change="fileChange" ref="file" v-model="fileName"></v-file-input>

        <div class="d-flex justify-center">
            <v-btn color="primary" @click="upload">导入到后台</v-btn>
        </div>

    </v-card>
</template>

<script>
    import {HTTP_HEADER_TOKEN_VAL, HTTP_RESPONSE_SUCCESS_CODE, USER_ID} from "../../const/Constant";

    export default {
        name: "TradeImport",
        data: () => {
            return {
                file: null,
                fileName: null
            }
        },
        methods: {
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
                    this.$http.post("trade/import", params, config).then(function (response) {
                        if (response.data.code === HTTP_RESPONSE_SUCCESS_CODE) {
                            self.$message.success({
                                message: response.data.message,
                                center: true
                            });
                            self.file = null;
                            self.fileName = null;
                        } else {
                            self.$message.error({message:response.data.message,center:true});
                        }
                    }).catch(function (error) {
                        self.$message.error({message:error.message,center:true});
                    })

                } else {
                    this.$message.error({message:'上传文件不能为空，请先选择文件',center:true});
                }

            }
        }
    }
</script>

<style scoped>

</style>
