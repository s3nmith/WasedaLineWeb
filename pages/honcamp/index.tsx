import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./NishiWaseda.module.css";
import Image from "next/image";

// replace this with actual data from an API
const mockData = [{ name: "Okuma Garden Cafeteria", queue: 20 }];

type Cafeteria = {
  name: string;
  queue: number;
};

export default function NishiWaseda() {
  const [cafeterias, setCafeterias] = useState<Cafeteria[]>([]);

  useEffect(() => {
    // Fetch data from an API or use mock data
    setCafeterias(mockData);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Waseda Campus/早稲田キャンパス</h1>
      <div className={styles.backButt}>
        <Link href="/">
          <h2>Home</h2>
        </Link>
      </div>

      <div className={styles.grid}>
        {cafeterias.map((cafeteria, index) => (
          <div key={index} className={styles.cafeteriaCard}>
            <h2 className={styles.cafeteriaName}>{cafeteria.name}</h2>
            <p>
              Current Waiting Time:{" "}
              <span className={styles.fontBold}>{cafeteria.queue}</span> minutes
            </p>
          </div>
        ))}
      </div>
      <div className={styles.mapIm}>
        <Image src="/wasedaMap.png" width={500} height={500} alt="nishiMap" />
      </div>
    </div>
  );
}
