import { useI18n } from 'vue-i18n'

export function useLocale() {
  const { t, availableLocales, getLocaleMessage, setLocaleMessage } = useI18n({ useScope: 'global' })

  // await import('src/i18n/' + state.localInfo.locale).then((messages) => {
  //   i18n.global.setLocaleMessage(state.localInfo.locale, messages.default)
  // })

  // availableLocales.forEach((locale) => {
  //   console.log(`${locale} locale messages`, getLocaleMessage(locale))
  // })

  return {
    t,
  }
}
