import Image from "next/image";
import styles from '../../styles/Home.module.css'


export default function ReikiSection() {
    return (
        <div className={styles.presentation}>
        <div
          className={styles.presentation_content}
        >
          <h5 className={styles.title}>
         Das minhas mãos para o teu coração. <br></br>
          </h5>
          <h5 className={styles.title}>

O Primeiro aplicativo de sessão de Reiki do Brasil na palma da sua mão 
</h5>

          <h5 className={styles.subtitle}>
            Conecte-se a Fonte baixando agora nosso app{" "}
          </h5>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "15px",
              with: "100%",
              justifyContent: "space-arround",
            }}
          >
            <div
              style={{
                width: "150px",
                height: "40px",
                position: "relative",
                marginTop: "10px",
              }}
            >
              <Image
                src="/apple-store.png"
                alt={"image"}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div
              style={{
                width: "150px",
                height: "50px",
                position: "relative",
                marginTop: "05px",
              }}
            >
              <Image
                src="/play-store.png"
                alt={"image"}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
      
        </div>
      </div>
    )
}