<template>
    <v-app>
        <v-main class="d-flex flex-row-reverse fill-height elevation-1 pa-0 ma-0">
            <div class="d-flex flex-row-reverse fill-height">
                <v-row>
                    <v-col lg="9" :style="background"></v-col>
                    <v-col lg="3" class="elevation-8 d-flex flex-column justify-center align-center">
                        <v-row style="width: 100%" class="ma-2 d-flex flex-column justify-end align-center pb-2">
                            <v-avatar color="pink" size="66">
                                <v-icon dark large>mdi-account-circle</v-icon>
                            </v-avatar>
                        </v-row>
                        <v-row style="width: 100%" class="ma-2 justify-center">
                            <v-form
                                    ref="form"
                                    v-model="valid"
                                    :lazy-validation="lazy"
                                    style="width: 86%"
                            >
                                <v-text-field
                                        dense
                                        v-model="user.userName"
                                        :rules="nameRules"
                                        label="用户"
                                        required
                                        outlined
                                        placeholder=""
                                ></v-text-field>

                                <v-text-field
                                        dense
                                        v-model="user.password"
                                        :rules="passwordRules"
                                        label="密码"
                                        required
                                        outlined
                                        placeholder=""
                                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                        :type="showPassword ? 'text' : 'password'"
                                        @click:append="showPassword = !showPassword"
                                ></v-text-field>


                                <v-row class="pa-0 ma-0">
                                    <v-col class="ma-0 pa-0 d-flex align-center justify-start" lg="6" sm="12">
                                        <v-checkbox dense v-model="rememberPass" label="记住密码？"></v-checkbox>
                                    </v-col>
                                    <v-col class="ma-0 pa-0 d-flex align-center justify-lg-space-around" lg="6" sm="12">
                                        <span
                                                class="text-body-1 pink--text text--lighten-1 text-decoration-underline mr-2 font-weight-light"
                                                @click="forgetPassword">忘记密码</span>
                                        <v-dialog v-model="dialog" max-width="388px" persistent>
                                            <v-card>
                                                <v-card-title>
                                                    <span class="headline">找回密码</span>
                                                </v-card-title>

                                                <v-card-text class="pt-0">
                                                    <v-container>
                                                        <v-form ref="helpForm"
                                                                v-model="valid"
                                                                :lazy-validation="lazy">
                                                            <v-row dense>
                                                                <v-col cols="12">
                                                                    <v-text-field v-model="help.userName"
                                                                                  :rules="nameRules"
                                                                                  label="用户名称"></v-text-field>
                                                                </v-col>
                                                                <v-col cols="12">
                                                                    <v-text-field v-model="help.email"
                                                                                  :rules="emailRules"
                                                                                  label="邮箱地址"></v-text-field>
                                                                </v-col>
                                                                <v-col cols="6">
                                                                    <v-text-field v-model="help.verifyCode"
                                                                                  label="验证码"></v-text-field>
                                                                </v-col>
                                                                <v-col cols="6"
                                                                       class="d-flex align-center justify-center">
                                                                    <v-btn color="pink" class="white--text"
                                                                           @click="getVerifyCode"
                                                                           :disabled="getCode.disabled">
                                                                        {{getCode.content}}
                                                                    </v-btn>
                                                                </v-col>
                                                            </v-row>
                                                        </v-form>
                                                        <v-form ref="helpExtForm" v-model="valid">
                                                            <v-row dense="">
                                                                <v-col cols="12">
                                                                    <v-text-field v-model="help.newPassword"
                                                                                  :rules="newPasswordRules"
                                                                                  :append-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                                                                  :type="showNewPassword ? 'text' : 'password'"
                                                                                  @click:append="showNewPassword = !showNewPassword"
                                                                                  label="新密码"></v-text-field>
                                                                </v-col>
                                                                <v-col cols="12">
                                                                    <v-text-field v-model="help.newPasswordRepeat"
                                                                                  :rules="newPasswordRepeatRules"
                                                                                  :append-icon="showNewPasswordRepeat ? 'mdi-eye' : 'mdi-eye-off'"
                                                                                  :type="showNewPasswordRepeat ? 'text' : 'password'"
                                                                                  @click:append="showNewPasswordRepeat = !showNewPasswordRepeat"
                                                                                  label="新密码再次输入"></v-text-field>
                                                                </v-col>
                                                            </v-row>
                                                        </v-form>
                                                    </v-container>
                                                </v-card-text>

                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn color="blue darken-1" text @click="close">取消</v-btn>
                                                    <v-btn color="blue darken-1" text @click="save">提交</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </v-col>
                                </v-row>
                                <v-btn
                                        color="pink darken-1"
                                        @click="submit"
                                        block=""
                                        class="white--text mt-2"

                                > 登 录
                                </v-btn>


                            </v-form>
                        </v-row>

                    </v-col>
                </v-row>

            </div>
        </v-main>
    </v-app>


</template>

<script>
    import RouterPathConst from "../../const/RouterConst";
    import {userUpdatePass, userValidate, userVerifyCode} from "../../api/user/userRequest";
    import {HTTP_HEADER_TOKEN_VAL, REMEMBER_PASS, STATUS_CODE_TRUE, USER_ID, USER_NAME} from "../../const/Constant";

    export default {
        name: "UserLogin",
        data: () => {
            return {
                background: {
                    backgroundImage: "url(" + require("../../static/nb.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                },
                valid: true,
                user: {
                    userName: '',
                    password: '',
                },
                nameRules: [
                    v => !!v || '用户名不能为空',
                ],
                passwordRules: [
                    v => !!v || '密码不能为空',
                ],
                emailRules: [
                    v => !!v || '邮箱不能为空',
                    v => /.+@.+\..+/.test(v) || ('邮箱格式不正确')
                ],
                verifyCodeRules: [
                    v => !!v || '验证码不能为空',
                ],
                newPasswordRules: [
                    v => !!v || '新密码不能为空',
                ],
                newPasswordRepeatRules: [
                    v => !!v || '新密码再次输入不能为空',
                ],
                rememberPass: false,
                lazy: true,
                help: {
                    userName: '',
                    email: '',
                    verifyCode: '',
                    newPassword: '',
                    newPasswordRepeat: ''
                },
                dialog: false,
                showPassword: false,
                showNewPassword: false,
                showNewPasswordRepeat: false,
                getCode: {
                    disabled: false,
                    content: '获取验证码',
                    leftTime: 60
                },
                counter: null
            }

        },

        methods: {
            validate() {
                this.$refs.form.validate()
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
            submit() {
                let self = this;
                userValidate(this.user, (json) => {
                    let userId = json.rows[0].id;
                    let token = json.data;
                    sessionStorage.setItem(USER_ID, userId);
                    sessionStorage.setItem(HTTP_HEADER_TOKEN_VAL, token);
                    if (self.rememberPass) {
                        localStorage.setItem(REMEMBER_PASS, STATUS_CODE_TRUE);
                        localStorage.setItem(USER_NAME, self.user.userName);
                        localStorage.setItem(self.user.userName, self.user.password);
                    } else {
                        localStorage.removeItem(REMEMBER_PASS);
                        localStorage.removeItem(USER_NAME);
                        localStorage.removeItem(self.user.userName);
                    }
                    self.$router.push(RouterPathConst.pathBase);
                }, (json) => {
                    self.$message.error({
                        center: true,
                        message: json.message
                    })
                });

            },

            close() {
                this.resetHelpDialog();
            },

            save() {
                let self = this;
                if (!this.help.verifyCode || this.help.verifyCode === '') {
                    this.$message.error({
                        center: true,
                        message: '验证码不能为空'
                    });
                    return;
                }
                if (!this.help.newPassword || this.help.newPassword === '') {
                    this.$message.error({
                        center: true,
                        message: '密码不能为空'
                    });
                    return;
                }
                if (!this.help.newPasswordRepeat || this.help.newPasswordRepeat === '') {
                    this.$message.error({
                        center: true,
                        message: '密码不能为空'
                    });
                    return;
                } else if (this.help.newPasswordRepeat !== this.help.newPassword) {
                    this.$message.error({
                        center: true,
                        message: '两次密码输入不一致'
                    });
                    return;
                }
                if (this.$refs.helpForm.validate()) {
                    console.log('heh');
                }
                this.help.password = this.help.newPassword;
                userUpdatePass(this.help, (json) => {
                    self.$message.success({
                        center: true,
                        message: json.message
                    });
                    self.resetHelpDialog();
                });

            },
            getVerifyCode() {
                let self = this;
                let validate = this.$refs.helpForm.validate();
                if (validate) {
                    userVerifyCode(this.help, (json) => {
                        self.$message.success({
                            center: true,
                            message: json.message
                        });
                        self.getCode.disabled = true;
                        self.getCode.content = this.getCode.leftTime + 's后重新发送';
                        self.counter = setInterval(() => {
                            self.getCode.leftTime--;
                            self.getCode.content = self.getCode.leftTime + 's后重新发送';
                            if (self.getCode.leftTime < 0) {
                                clearInterval(self.counter);
                                self.getCode.content = '重新发送验证码';
                                self.getCode.leftTime = 60;
                                self.getCode.disabled = false;
                            }
                        }, 1000);
                    }, (json) => {
                        self.$message.error({
                            center: true,
                            message: json.message
                        });
                    });
                }
            },
            resetHelpDialog() {
                clearInterval(this.counter);
                this.$refs.helpForm.resetValidation();
                this.$refs.helpForm.reset();
                this.$refs.helpExtForm.resetValidation();
                this.$refs.helpExtForm.reset();
                this.dialog = false;
                this.getCode.content = '获取验证码';
                this.getCode.leftTime = 60;
                this.getCode.disabled = false;
            },
            forgetPassword() {
                this.help.userName = this.user.userName;
                this.dialog = true;
            }
        },
        created() {
            let remember = localStorage.getItem(REMEMBER_PASS);
            if (remember && remember === STATUS_CODE_TRUE) {
                this.rememberPass = true;
                let userName = localStorage.getItem(USER_NAME);
                this.user.userName = userName;
                this.user.password = localStorage.getItem(userName);
                this.help.userName = userName;
            }
        }
    }
</script>

<style scoped>

</style>
