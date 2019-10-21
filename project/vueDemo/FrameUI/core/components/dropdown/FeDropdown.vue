<template>
    <div class="fe-dropdown">
        <div class="title">
            <div class="select-label" v-html="defaultLabel"></div>
            <i class="icon"></i>
        </div>
        <div class="content" v-show="showContent">
            <div class="item" v-for="item in options" :key="item.id">
                <div class="label" v-html="item.label"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeDropdown',
    props: {
        // 源数据
        options: {
            type: Array,
            default: () => []
        },
        // 默认选中
        defaultId: {
            type: String,
            default: ''
        },
        // 触发方式
        trigger: {
            type: String,
            default: 'hover'
        }
    },
    data() {
        return {
            // 是否显示下拉框
            showContent: false,
            // 默认值
            defaultLabel: '',
            // 监听事件id
            hoverId: '',
            clickId: ''
        }
    },
    watch: {
       
    },
    methods: {
        // 修改默认值
        setDefaultLabel() {
            let _this = this;
            let defaultItem = this.options.filter(item => {
                return item.id === _this.defaultId;
            });
            this.defaultLabel = defaultItem.length ? defaultItem[0].label : '';
        },
        // hover触发
        hoverTrigger() {
            const dom = document.getElementsByClassName('select-label')[0];
            let _this = this;
            if (dom) {
                this.hoverId = dom.addEventListener('mouseover', () => {
                    _this.showContent = true;
                });
            }
        },
        clickTrigger() {

        }
    },
    mounted() {
        this.setDefaultLabel();
        this.trigger === 'hover' ? this.hoverTrigger() : this.clickTrigger();
    },
    destory() {
        // 事件销毁
    }
}
</script>

<style scoped>
.fe-dropdown .title {
    height: 14px;
    color: #fff;
    display: flex;
}
.fe-dropdown .title:hover {
    color: #00c2ff;
}
.fe-dropdown .title .select-label {
    height: 14px;
    margin-right: 10px;
}
.fe-dropdown .title .icon {
    width: 14px;
    height: 14px;
    background: url('../../assets/images/dropdown/down.png');
}
</style>
