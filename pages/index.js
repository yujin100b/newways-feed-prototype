import styles from "../styles/Home.module.css";
import Counter from "../app/Counter";

export default function Home() {
  return (
    <div class="container">
      <h1 className={styles.title}>
        내가 뽑은 서강동 정치인<br></br>
        지금 무슨 일을 하고 있지?
      </h1>

      <h2 className={styles.subtitle}>
        우리 동네 정치인이 누군지 몽땅 알려 드려요
      </h2>

      <h3 className={styles.desc}>서울 특별시 마포구 서강동에서 뽑힌 정치인은요</h3>

      <div>
        <Counter />
      </div>
    </div>
  );
}
