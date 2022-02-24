import {getRecords} from "@/services";

export default {
  namespace: 'record',
  state: {
    list: []
  },
  reducers: {
    setList(state, action) {
      return {
        ...state,
        list: action.payload
      }
    }
  },
  effects: {
    *getRecords(action, {put, call}) {
      const result = yield call(getRecords);
      yield put({type: 'setList', payload: result})
    }
  }
}
