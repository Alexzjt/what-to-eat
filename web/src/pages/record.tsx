import DateRecord from '@/components/DateRecord';
import {useSelector} from "@@/plugin-dva/exports";
import {useMount} from "ahooks";
import {useDispatch} from "react-redux";

export default function () {
  const {list} = useSelector(state => state.record);
  const dispatch = useDispatch();
  useMount(() => dispatch({type: "record/getRecords"}));
  return (
    list?.map(record => <DateRecord key={String(record.id)}></DateRecord>)
  )
}
