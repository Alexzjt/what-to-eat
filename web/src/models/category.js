import {getCategoriesWithDishes} from "@/services";

export default {
  namespace: 'category',
  state: {
    withDishes: [],
    currentCategory: {}
  },
  reducers: {
    setWithDishes(state, action) {
      return {
        ...state,
        withDishes: action.payload
      };
    },
    setCurrentCategory(state, action) {
      return {
        ...state,
        currentCategory: action.payload
      }
    }
  },
  effects: {
    *getCategoriesWithDishes(action, { put, call }) {
      const result = yield call(getCategoriesWithDishes);
      yield put({type: 'setWithDishes', payload: result});
      yield put({type: "setCurrentCategory", payload: result[0] || {id: 0}});
    }
  }
}
