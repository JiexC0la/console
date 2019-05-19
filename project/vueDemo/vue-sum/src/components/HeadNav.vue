<template>
    <el-menu :default-active="activeIndex"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="switchLang">
        <el-submenu index="1">
            <template slot="title">{{curLang}}</template>
            <el-menu-item index="1-1">{{$t('headNav.lang_zh')}}</el-menu-item>
            <el-menu-item index="1-2">{{$t('headNav.lang_en')}}</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        data () {
            return {
                activeIndex: '1',
                curLang: this.$t('headNav.lang_zh')
            };
        },
        methods: {
            switchLang (key) {
                let curKey = key.split('-')[1];
                this.curLang = curKey === '1' ? this.$t('headNav.lang_zh') : this.$t('headNav.lang_en');
                this.$i18n.locale = curKey === '1' ? 'zh' : 'en';
            }
        }
    }
</script>

<style scoped>
    .fr {
        float: right;
    }
</style>