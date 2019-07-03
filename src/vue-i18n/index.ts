import VueI18n from 'vue-i18n'
import { Vue } from 'vue-property-decorator'
import zh_CN from '@/locale/zh_CN'
import en_GB from '@/locale/en_GB'
import { getLocalStorage } from '@/utils/localStorage'

Vue.use(VueI18n)

const messages = {
    zh: {
        language: zh_CN
    },
    en: {
        language: en_GB
    }
}

const i18n = new VueI18n({
    locale: getLocalStorage('locale') || 'zh',
    messages
})

export default i18n