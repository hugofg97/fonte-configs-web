import Image from "next/image";



export default function SocialMedia() {
    return (
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent:'center',
          alignContent: 'center',
          padding: "16px",
          width: "100%",
          fontSize: "12px",
          backgroundColor: "rgba(104,132,109,1)",
        }}
      >
        <h1 style={{ color: "white", textAlign: "center" }}>
          Gostou? Conecte-se a FONTE
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "15px",
            with: "100%",
            position:'relative',
            justifyContent: "center",
            alignContent: 'center'
          }}
        >
          <div
            style={{
              width: "90px",
              height: "40px",
              marginRight: '20px',
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
              width: "100px",
              height: "50px",
              marginLeft: '20px',
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
    )
}