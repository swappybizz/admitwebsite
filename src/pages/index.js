import React from "react"
import Template from "../templates/Template"
import Hero from "../components/Hero"
// import TopMiddleBottomText from "../components/TopMiddleBottomText"
import Circles from "../components/Circular"
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import Counter from "../components/Counter"
import Outro from "../components/Outro"
import BlogHome from "../components/BlogHome"
// import FullPageImage from "../components/FullPageImage"

const toptext = {
  top: "fremtidsrettet forretningsutvikling",
  middle: "Vi er  endringsarkitekter",
  bottom:
    "Den økonomiske og teknologiske omstillingsfasen som pågår, gjør at næringslivet utforsker nye muligheter og markeder. Både samfunn og forbrukere har nye sett med forventninger, og det kan være utfordrende å vite hvor en skal starte.",
}
const midtext = {
  top: "DETTE SKJER",
  middle: "Aktuelt",
  bottom:
    "Bli med på våre events der kompetansedeling og samhandling står i fokus.",
}

const tmbttext = {
  top: "DIGITAL MEDARBEIDER",
  middle: "Admit Avatar",
  bottom:"Admit Avatar er vår samhandlingsplattform ut mot kunde. En digital medarbeider som gir umiddelbar tilgang til relevant og ønsket kompetanse.Avlaster og frigir verdifull tid i en hektisk hverdag. Aldri mer enn et tastetrykk unna.", 
   
  button1: "LES MER",
  button2: "SE VIDEO",
}


export default function Home() {
  return (
    <>

      <Template>
        <Hero />
        <ThreeMiddleTextTwoButton props={toptext} />
        <Circles />
        <ThreeMiddleTextTwoButton props={midtext} />
        {/* <Stories/> */}
        <BlogHome/>
        <ThreeMiddleTextTwoButton props={tmbttext} />
        <Counter />
        {/* <FullPageImage/> */}
        
        <Outro/>
      </Template>
    </>
  )
}
