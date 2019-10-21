<template>
    <div>
        <fe-layout :sty-config="styConfig">
            <div slot="feTop" class="h-100">
                <i-header></i-header>
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
import iHeader from './view/iHeader'

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
        iFooter,
        iHeader
    },
    
}
</script>

<style scoped>

</style>

