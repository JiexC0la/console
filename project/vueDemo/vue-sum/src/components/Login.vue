<template>
    <div class="login">
        <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="mt30">
            <el-form-item :label="$t('login.user')" prop="user">
                <el-input
                    v-model="ruleForm.user"
                    clearable>
                </el-input>
            </el-form-item>
            <el-form-item :label="$t('login.pwd')" prop="pwd">
                <el-input
                    type="password"
                    v-model="ruleForm.pwd"
                    show-password
                    clearable>
                </el-input>
            </el-form-item>
            <el-form-item :label="$t('login.comfirm_pwd')" prop="comfirmPwd">
                <el-input
                    type="password"
                    v-model="ruleForm.comfirmPwd"
                    show-password
                    clearable
                    :disabled="ruleForm.comfirmPwdDisabled">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login('ruleForm')">{{$t('login.login')}}</el-button>
                <el-button @click="register">{{$t('login.register')}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                ruleForm: {
                    user: '',
                    pwd: '',
                    comfirmPwd: '',
                    comfirmPwdDisabled: true
                },
                rules: {
                    user: [{
                        validator: function (rule, value, callback) {
                            let reg = /[a-zA-Z0-9]/;
                            let msg = '';
                            if (value === '') {
                                msg = this.$t('validate.not_blank');
                            } else if (!reg.test(value)) {
                                msg = this.$t('validate.username')
                            }
                            msg ? callback(new Error(msg)) : callback();
                        }.bind(this)
                        /*
                        * 保持this的上下文，避免this指向父级对象，而不是全局vue实例
                        * .bind()创建了一个函数，当这个函数在被调用的时候，它的 this 关键词会被设置成被传入的值
                        */
                    }],
                    pwd: [{
                        validator: function (rule, value, callback) {
                            const reg = /[a-zA-Z0-9-_]/;
                            let msg = '';
                            if (value === '') {
                                msg = this.$t('validate.not_blank');
                            } else if (!reg.test(value)) {
                                msg = this.$t('validate.pwd');
                            } else if (value.length < 4) {
                                msg = this.$t('validate.len_less_4');
                            } else if (value.length > 16) {
                                msg = this.$t('validate.len_more_16');
                            }
                            msg ? callback(new Error(msg)) : callback();
                            this.ruleForm.comfirmPwdDisabled = msg ? true : false;
                        }.bind(this)
                    }],
                    comfirmPwd: [{
                        validator: function (rule, value, callback) {
                            let msg = '';
                            if (value === '') {
                                msg = this.$t('validate.not_blank');
                            } else if (value !== this.ruleForm.pwd) {
                                msg = this.$t('validate.pwd_not_same');
                            }
                            (msg && !this.ruleForm.comfirmPwdDisabled) ? callback(new Error(msg)) : callback();
                        }.bind(this)
                    }]
                }
            }
        },
        methods: {
            login (formName) {
                this.$refs[formName].validate(valid => {
                    if (!valid) {
                        return false;
                    }
                    this.$router.push({path: 'main/nounSearch'});
                });
            },
            register () {
                this.$message({
                    message: this.$t('common.not_open'),
                    type: 'warning'
                });
            }
        }
    }
</script>

<style scoped>
    .login {
        margin: auto;
        width: 500px;
        height: 300px;
        display: inline-block;
        border-radius: 5px;
        box-shadow: 0 8px 16px 0 rgb(228, 249, 254);
        background-color: #c4f1f6;
        text-align: center;
    }
    .mt30 {
        margin-top: 30px;
    }
    .el-input {
        width: 300px !important;
        float: left;
    }
    .el-button {
        float: left;
    }
</style>

