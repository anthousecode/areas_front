export const state = () => ({
  language: 'ru',
  postId: null,
  basePath: 'https://api.martovariverside.com',
  dynamicPageRu: '',
  dynamicPageUa: '',
  slug: '',
  currentUserName: null,
  isFirstLoadingIndex: false
});
export const mutations = {
  SET_RUS_LANGUAGE(state) {
    state.language = 'ru'
  },
  SET_FIRST_LOADING(state, payload) {
    state.isFirstLoadingIndex = payload
  },
  SET_SLUG(state, slug) {
    state.slug = slug
  },
  SET_UA_LANGUAGE(state) {
    state.language = 'ua'
  },
  SET_POST_ID(state, id) {
    state.postId = id
  },
  SET_DYNAMIC_PAGE_RU(state, page) {
    state.dynamicPageRu = page
  },
  SET_USER_NAME(state, name) {
    state.currentUserName = name
  },
  SET_DYNAMIC_PAGE_UA(state, page) {
    state.dynamicPageUa = page
  }
};
export const actions = {
  // async fetch({commit}){
  //   const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users');
  //   commit('setUsers', users)
  // }
};

export const getters = {
  language: s => s.language,
  postId: s => s.postId,
  basePath: s => s.basePath,
  dynamicPageRu: s => s.dynamicPageRu,
  dynamicPageUa: s => s.dynamicPageUa,
  slug: s => s.slug,
  currentUserName: s => s.currentUserName,
  isFirstLoadingIndex: s => s.isFirstLoadingIndex,
};
