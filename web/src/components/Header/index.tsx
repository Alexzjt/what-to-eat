import styles from "./index.less";
import {useEffect, useState} from "react";

export default function Header() {
  const [dishName, setDishName] = useState(null);
  useEffect(() => {
    fetch("/api/random").then(async response => {
      const responseBody = await response.json();
      setDishName(responseBody.name);
    })
  }, []);

  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>吃什么</h1>
      {dishName && <span>今天推荐：{dishName}</span>}
    </div>
  );
}
