<template>
    <div class="fe-layout">
        <div class="fe-top" :style="{height: styConfig.top ? styConfig.top + 'px' : 60 +'px'}">
            <slot name="feTop" class=""></slot>
        </div>
        <div class="fe-middle" :style="{top: styConfig.top ? styConfig.top + 'px' : 60 + 'px', 
            bottom: styConfig.bottom ? styConfig.bottom + 'px' : 60 + 'px'}">
            <slot name="feMiddle"></slot>
        </div>
        <div class="fe-bottom" :style="{height: styConfig.bottom ? styConfig.bottom + 'px' : 60 + 'px'}">
            <slot name="feBottom"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeLayout',
    data() {
        return {
            styTop: '',
            styBottom: ''
        }
    },
    props: {
        styConfig: {
            type: Object,
            default: function () {
                return {}
            }
        }
    }
}
</script>
<style scoped>
.fe-layout {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.fe-layout .fe-top {
    width: 100%;
    background: #666;
    border-bottom: 1px solid #333;
    position: absolute;
    left: 0;
    top: 0;
    height: 60px;
}
.fe-layout .fe-middle {
    width: 100%;
    position: absolute;
    top: 60px;
    bottom: 60px;
    overflow: auto;
}
.fe-layout .fe-bottom {
    width: 100%;
    background: #666;
    border-top: 1px solid #333;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 60px;
}
</style>