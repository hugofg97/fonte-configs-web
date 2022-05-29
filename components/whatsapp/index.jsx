import Image from "next/image";



export default function WhatsappIcon() {
    return (
        <div
        style={{
          right: 20,
          position: "fixed",
          bottom: 10,
          zIndex: 999,
          padding: "5px",
          height: "60px",
        }}
      >
        <div
          style={{
            width: 50,
            height: 50,
            marginLeft: "10px",
            position: "relative",
          }}
        >
          <Image
            src="/whatsapp.png"
            alt={"image"}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    )
}