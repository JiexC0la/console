<template>
    <div>
        <el-form label-width="80px">
            <el-form-item label="数据类型">
                <el-input style="width:100px;margin-right:40px;"></el-input>
                <!-- <div v-popover:popover3 @click="handleCommand('a')">123</div> -->
                <el-dropdown trigger="click" :hide-on-click="true" @command="handleCommand">
                    <span class="el-dropdown-link">
                        <el-button>
                            浏览
                        </el-button>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="a">我的资源</el-dropdown-item>
                        <el-dropdown-item command="b">本地资源</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-popover
                    title="标题"
                    width="200"
                    trigger="click"
                    ref="popover3"
                    placement="bottom"
                    popper-class="myclass">
                    <el-table>
                        <el-table-column width="150" property="date" label="日期"></el-table-column>
                        <el-table-column width="100" property="name" label="姓名"></el-table-column>
                        <el-table-column width="300" property="address" label="地址"></el-table-column>
                    </el-table>
                </el-popover>
                <div style="display:inline-block;width:1px;" v-popover:popover3 id="myLink"></div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible2: false
        }
    },
    methods: {
        handleCommand(command) {
            if (command === 'a') {
                document.getElementById('myLink').click()
            }
        }
    }
}
</script>

<style>
.myclass {
    margin-top: 20px !important;
    margin-left: -15px !important;
}
</style>