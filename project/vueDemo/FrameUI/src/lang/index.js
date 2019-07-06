import zh from './zh'
import en from './en'

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'zh',
    messages: {
        'zh': zh,
        'en': en
    }
})