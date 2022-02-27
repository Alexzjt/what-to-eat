import {getCategoriesWithDishes} from "@/services";

export default {
  namespace: 'category',
  state: {
    withDishes: [],
    currentCategory: {},
    trolley: []
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
    },
    addDishToTrolley(state, action) {
      const {trolley} = state;
      if (trolley.find(d => d.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        trolley: trolley.concat(action.payload)
      }
    },
    removeDishFromTrolley(state, action) {
      const {trolley} = state;
      if (action.payload < 0) {
        return state;
      }
      trolley.splice(action.payload,1);
      return {
        ...state,
        trolley: trolley.slice()
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
