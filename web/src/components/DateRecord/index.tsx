import styles from "./index.less";
import dayjs from "dayjs";

export default function (props) {
  const {record} = props;
  return (
    <div className={styles.container}>
      <div className={styles.header}>{dayjs(record.eatTime).format('YYYY年MM月DD日')}</div>
      <div className={styles.dishContainer}>
        {
          record.dishes.map(d => <span key={d.id} className={styles.dishName}>{d.name}</span>)
        }
      </div>
    </div>
  )
}
