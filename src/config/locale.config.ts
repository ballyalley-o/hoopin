import { GLOBAL } from 'gameover'
import { en, fr, es } from 'locale'

export const locales = { en, fr, es } as const
type   AppLocaleType = keyof typeof locales

const  activeLocale: AppLocaleType = (GLOBAL.LOCALE as AppLocaleType) || 'en'
export const ACTIVE_LOCALE         = locales[activeLocale]