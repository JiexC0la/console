import Vue from 'vue'

const ChildComponent = {
    template: `
        <div>child</div>
    `,
    inject: ['yeye'],
    mounted () {
        console.log(this.yeye)
    }
}

const component = {
    name: 'comp',
    components: {
        ChildComponent
    },
    template:`
        <div :style="style">
            <slot :value="value"></slot>
            <child-component></child-component>
        </div>
    `,
    data () {
        return {
            style: {
                width: '200px',
                height: '200px',
                border: '1px solid #ccc'
            },
            value: '456'
        }
    }
}


new Vue({
    components: {
        CompOne: component
    },
    provide () {
        return {
            yeye: this
        }
    },
    el: '#root',
    data () {
        return {
            value: '123'
        }
    },
    template: `
        <div>
            <comp-one ref="comp">
                <span slot-scope="props">{{props.value}}</span>
            </comp-one>
        </div>
    `,
    mounted () {
        console.log(this.$refs.comp, this.$refs.span)
    }
})