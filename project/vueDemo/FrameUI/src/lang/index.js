// 引用服务词条
import zh from './zh'
import en from './en'

import Vue from 'vue'
import VueI18n from 'vue-i18n'

// 引用组件词条
import FeZh from '../../core/lang/zh'
import FeEn from '../../core/lang/en'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'zh',
    messages: {
        'zh': Object.assign(zh, {
            fe: FeZh
        }),
        'en': Object.assign(en, {
            fe: FeEn
        })
    }
})