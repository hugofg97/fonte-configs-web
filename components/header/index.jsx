import Image from "next/image";
import styles from "../../styles/Home.module.css";



export default function Header() {
  return (
    <div className={styles.header}>
      <div
        className={styles.header_logo}
      >
        <Image
          src="/icon-logo.png"
          alt={"image"}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        style={{
        
        }}
      >
        <a href="https://app.fontereiki.com.br/" target="_blank ">

        <button
         className={styles.header_buttons}
        >
          Login
        </button>
        </a>
      </div>
    </div>
  );
}
