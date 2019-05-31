import Vue from 'vue'

const component = {
    template: `
        <div>
            <input type="text" v-model="text" />
            <span v-show="active">see me active</span>
            <span>{{propOne}}</span>
        </div>
    `,
    data () {
        return {
            text: 0
        }
    },
    props: {
        active: Boolean,
        propOne: String
    }
}

const CompVue = Vue.extend(component)

new CompVue({
    el: '#root',
    data: {
        text: 123
    },
    propsData: {
        propOne: 'text'
    }
})