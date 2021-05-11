



import ru from './ru.json'
import ua from './ua.json'
import Vue from 'vue'

const locales = {
  'ru': ru,
  'ua': ua
};


export function toUSD(locale, value) {
  return locales[locale][value] || `[localize error]: key ${value} not found`;
}

const filters = { toUSD }

export default Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

