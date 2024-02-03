import { useState } from "react";
import Link from "next/link";
import styles from "./NishiWaseda.module.css";
import Image from "next/image";

export default function NishiWaseda() {
  // Fixed queue times without any logic to decrease them over time
  const queueTime57 = 16;

  const maxQueueTime = 20;
  const progressBarWidth57 = (queueTime57 / maxQueueTime) * 100;
  const progressBarColor57 =
    queueTime57 <= 5 ? "#4CAF50" : queueTime57 <= 14 ? "#FFC107" : "#ff0718";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Waseda Campus/早稲田キャンパス</h1>
      <div className={styles.backButt}>
        <Link href="/">
          <h2>Home</h2>
        </Link>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h2>Okuma Garden Cafeteria</h2>
          <strong>{queueTime57} minutes</strong>
          <div className={styles.progressBarBackground}>
            <div
              className={styles.progressBarFill}
              style={{
                width: `${progressBarWidth57}%`,
                backgroundColor: progressBarColor57,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.mapIm}>
        <Image
          src="/nishiwasedaMap.png"
          width={600}
          height={600}
          alt="nishiMap"
        />
      </div>
    </div>
  );
}
