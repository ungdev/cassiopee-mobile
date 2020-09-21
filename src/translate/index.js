import i18n from 'i18n-js'
import * as Localization from 'expo-localization'

i18n.locale = Localization.locale
i18n.fallbacks = true
i18n.translations = {
  en: require('./en.json'),
  fr: require('./fr.json'),
  de: require('./de.json'),
  es: require('./es.json'),
  it: require('./it.json'),
  zh: require('./zh.json'),
}
i18n.defaultLocale = 'en'

export default i18n
