<template>
    <div class="header">
        <div class="dropdown">
            <fe-dropdown
                :options="lang"
                :defaultId="defaultLang">
            </fe-dropdown>
        </div>
    </div>
</template>

<script>

export default {
    name: 'iHeader',
    data() {
        return {
            // 语言集合
            lang: [{
                id: 'zh',
                label: this.$t('lang_zh')
            }, {
                id: 'en',
                label: this.$t('lang_en')
            }],
            // 默认语言
            defaultLang: 'zh'
        }
    },
    mounted() {
        this.defaultLang = 'zh'
    }
}
</script>

<style scoped>
.header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 50px;
}
</style>
