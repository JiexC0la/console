<template>
    <div>
        <fe-layout :sty-config="styConfig">
            <div slot="feTop">
                this is top
            </div>
            <div slot="feMiddle">
                <div>middle</div>
            </div>
            <div slot="feBottom" class="h-100">
                <i-footer></i-footer>
            </div>
        </fe-layout>
    </div>
</template>

<script>

import iFooter from './view/iFooter'

export default {
    name: 'app',
    data() {
        return {
            // 自定义底部和顶部高度
            styConfig: {
                top: '70',
                bottom: '50'
            }
        }
    },
    components: {
        iFooter
    },
    
}
</script>

<style scoped>

</style>

