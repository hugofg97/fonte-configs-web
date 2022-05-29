import Image from "next/image";
import styles from "../../styles/Home.module.css";
import SlideApp from "../SlideApp";
import SlideTeraphy from "../SlideTeraphy";

export default function AppSection() {
  return (
    <div className={styles.meditation}>
      <h1>O que é reiki?</h1>
      <br></br>
      <p>
        Reiki é uma técnica de origem japonesa que é o resultado da fusão da
        energia Primordial do Universo e da energia Vital.<br></br>
        Rei = Energia Universal Ki = Energia Vital
        <br></br>O Reiki é reconhecido pela O.M.S (Organização Mundial de Saúde)
        desde 1962. Como terapia auxiliar no processo de cura. Sendo usada em
        hospitais e clínicas.
        <br></br>O Reiki é uma prática terapêutica de alinhamento energético,
        sem nenhum vínculo religioso. A energia Reiki é canalizado e aplicada
        através da imposição das mãos e atua de forma holística, ou seja, atua a
        nível físico, a nível emocional, a nível mental e espiritual, onde
        promove a reposição de energia Vital, sendo distribuída de forma
        inteligente de acordo com a necessidade de cada um, deixando em
        equilíbrio todos os níveis .
      </p>
      <h1>Quais são seus beneficios</h1>A prática do Reiki é segura e não gera
      nenhum efeito colateral, podendo usar e abusar heheh A realização do Reiki
      envolve a transferência de energia que faz com que o corpo fique em
      equilíbrio, gerando sensação de bem-estar, melhorando o humor e promovendo
      saúde física. Alguns de muitos benefícios são:
      <h4>Diminui sintomas de estresse e ansiedade</h4>
      <p>
        Devido a sensação de relaxamento, o reiki é um excelente alido para esse
        tratamento.
      </p>
      <h4>Ajuda no tratamento da depressão</h4>
      <p>
        É possível alinhar a energia vital do corpo e reduzir os sintomas
        provocadas, como tristeza, cansaço físico, perda de energia e falta de
        interesse em qualquer atividade.
      </p>
      <h4>Reduz dores crônicas</h4>
      <p>
        Com o relaxamento produzido durante a prática, contribuir para a
        diminuição das dores crônicas, pois é capaz de reduzir as tensões e
        fadiga muscular e podem ser sentidos nas primeiras sessões.
      </p>
      <h4>Alivia os sintomas da insônia</h4>
      <p>
        A sensação do bem-estar provocada pela realização do Reiki é capaz de
        aumentar a liberação de hormônios como serotonina e endorfina, que são
        excelentes aliados para afastar a insônia..
      </p>
      <h4>Melhora a qualidade de Vida</h4>
      <p>
        O Reiki gera na pessoa sentimentos de esperança, paz, bem-estar,
        alegria, amor, autoconfiança e isso faz com que seja possível realizar o
        dia-a-dia com mais facilidade e mais ânimo.
      </p>
   
      <section className={styles.reiki_Principles}>

      <h1>Princípios do Reiki</h1>
      Esses princípios são usados para ajudar a
      pessoa a seguir um caminho espiritual, levando-a a refletir, se observar e
      mudar aos poucos os comportamentos negativos. Eles são 5 princípios: :
      <p>Só por hoje, não me preocupo</p>
      <p>Só por hoje, não me irrito e nem crítico</p>
      <p>Só por hoje, agradeço minhas benções e sou humilde</p>

      <p>Só por hoje, ganho a vida honestamente</p>
      <p>Só por hoje, sou gentil e amável com todos os seres vivos</p>
      </section>
      <div className={styles.we_app}>
        <h1>Nosso aplicativo</h1>
        <div className={styles.info_app}>
          {/* <h4>Marque consultas e faça terapias online</h4> */}
          <div style={{ maxWidth: "400px" }}>
            <p className={styles.paragraphy_info_app}>
              Um jeito inovador no mercado mundial, onde você pode ter acesso a
              sessões de Reiki na palma de sua mão onde estiver. Criado para que
              juntos possamos cada dia que passe a ter mais consciência da
              verdadeira essência divina, da verdadeira conexão com o Eu Sou,
              com a nossa Fonte Criadora de tudo que é. A Fonte está disponível
              hoje para que juntos possamos harmonizar traumas, bloqueios,
              crenças, sentimentos negativos, pensamentos negativos, entre outros.
            </p>
          
          </div>
          
          <SlideApp />
          
        </div>
        <h5 className={styles.subtitle} style={{  textAlign:'center',  
}}>
            Desejo me conectar a Fonte{" "}
          </h5>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "15px",
              with: "100%",
              justifyContent: "center",
              marginBottom: '15px'
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
        {/* <h1 style={{ textAlign: "center" }}>
          Atendimento presencial ou a distância
        </h1> */}
        {/* <div className={styles.call_content}>
          <h4>Veja todo o processo e nosso ambiente.</h4>
          <p style={{ maxWidth: "700px" }}>
          Nosso sala de atendimento está anexo ao espaço terapêutico Refúgio da Consciência que
fica localizado em Gaspar - SC <br></br>
Um ambiente acolhedor, onde a paz e a harmonia se faz presente, todo feito com muito
amor e carinho para recebê-lo.<br></br>
Agende um horário e venha nos visitar!

          </p>
          <h5 className={styles.subtitle} style={{marginBottom: '20px'}}>
            Agende sua consulta presencial pelo{" "}
            <button
              style={{
                background: "rgb(104,182,109)",
                fontSize: "15px",
                padding: "6px",
                marginTop: "10px",
                marginRight: "10px",
                borderRadius: "5px",
                margin: "auto",
                border: "none",
                color: "white",
              }}
            >
              <img src="whatsapp.png" width="15" height="15"></img> Whatsapp
            </button>
          </h5>
          <SlideTeraphy />
        
        </div> */}
      </div>
      <h1 style={{ textAlign: "center" }}>Fundadora</h1>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "40%",
            height: 300,
            marginLeft: "10px",
            position: "relative",
          }}
        >
          <Image
            src="/terapeuta.png"
            alt={"image"}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div style={{ width: "60%", padding: "10px" }}>
          <h4>Caroline Hernandez </h4>
          <p>
            Olá meu amores, eu sou a Mestre Carolina Hernandez <br></br> Estudei Reiki e
            Karuna com vários mestres renomados no Brasil em distintas
            linhagens.<br></br>- Reiki Usui, Tibetano, Osho e Kahuna
            <br></br>- Karuna
          </p>
          <p className={styles.doctor_info_desktop}>
            Sou Terapeuta Holística em mais de 14 formações holisticas,
            incluindo a radiestesia, cromoterapia e apometria, todos
            direcionados como complemento para a técnica Reiki. Sou fundadora do
            App Fonte, onde meu principal objetivo é alcançar mais pessoas para
            que todas tenham acesso aos incríveis benefícios do reiki de forma
            rápida, prática e acessível.
          </p>
        </div>
      </div>
      <p className={styles.doctor_info_mobile}>
        Sou Terapeuta Holística em mais de 14 formações holisticas, incluindo a
        radiestesia, cromoterapia e apometria, todos direcionados como
        complemento para a técnica Reiki. Sou fundadora do App Fonte, onde meu
        principal objetivo é alcançar mais pessoas para que todas tenham acesso
        aos incríveis benefícios do reiki de forma rápida, prática e acessível.
      </p>
    </div>
  );
}
