import styles from "./index.less";

export default function () {

  return (
    <div className={styles.container}>
      <div className={styles.header}>2022年2月22日</div>
      <div className={styles.dishContainer}>
        <span className={styles.dishName}>水煮肉片</span>
        <span className={styles.dishName}>水煮肉片</span>
        <span className={styles.dishName}>水煮肉片</span>
        <span className={styles.dishName}>水煮肉片</span>
        <span className={styles.dishName}>水煮肉片</span>
      </div>
    </div>
  )
}
