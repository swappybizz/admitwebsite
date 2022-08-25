import React from "react"
import Template from "../templates/Template"
import Hero from "../components/Hero"
import TopMiddleBottomText from "../components/TopMiddleBottomText"
import Circles from "../components/Circles"

const toptext = {
  top: "fremtidsrettet forretningsutvikling",
  middle: "Vi er  endringsarkitekter",
  bottom:
    "Den økonomiske og teknologiske omstillingsfasen som pågår, gjør at næringslivet utforsker nye muligheter og markeder. Både samfunn og forbrukere har nye sett med forventninger, og det kan være utfordrende å vite hvor en skal starte.",
}

export default function Home() {
  return (
    <>
      <Template>
        <Hero />
        <TopMiddleBottomText props={toptext} />
        <Circles/>
      </Template>
    </>
  )
}
