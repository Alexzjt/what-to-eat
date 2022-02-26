import {getCategories, getDishes, getRecords, postCategories, postDishes, postRecords} from "@/services";
import {manageTypeList} from "@/utils";

export default {
  namespace: 'manage',
  state: {
    currentType: manageTypeList[0],
    records: [],
    dishes: [],
    categories: [],
  },
  reducers: {
    setCurrentType(state, action) {
      return {
        ...state,
        currentType: action.payload
      }
    },
    setRecords(state, action) {
      return {
        ...state,
        records: action.payload
      }
    },
    setDishes(state, action) {
      return {
        ...state,
        dishes: action.payload
      }
    },
    setCategories(state, action) {
      return {
        ...state,
        categories: action.payload
      }
    }
  },
  effects: {
    *getRecords(action, {put, call}) {
      const result = yield call(getRecords);
      yield put({type: 'setRecords', payload: result})
    },
    *getDishes(action, {put, call}) {
      const result = yield call(getDishes);
      yield put({type: 'setDishes', payload: result})
    },
    *getCategories(action, {put, call}) {
      const result = yield call(getCategories);
      yield put({type: 'setCategories', payload: result})
    },
    *postDishes(action, {put, call}) {
      const result = yield call(postDishes, action.payload);
      yield put({type: 'getDishes'});
    },
    *postCategories(action, {put, call}) {
      const result = yield call(postCategories, action.payload);
      yield put({type: 'getCategories'});
    },
    *postRecords(action, {put, call}) {
      const result = yield call(postRecords, action.payload);
      yield put({type: 'getRecords'});
    }
  }
}
