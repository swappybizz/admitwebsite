import React from "react"
import Template from "../templates/Template"
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import WeAdmit from "../components/WeAdmit"
const text1 = {
  top: "Få oversikt over mulighetene",
  middle: "Markedsføring",
  bottom:"I dagens jungel av salgs- og markedsføringskanaler, kan det være vanskelig å velge ut de mest relevante for sin bedrift og produktportefølje. Den viktigste forutsetningen for å lykkes er å ha en gjennomarbeidet bedriftsstrategi i bunnen, som følges opp av digital strategi og  markedsplan."
}

const text2 = {
  middle: "Markedsavdeling",
  bottom:"Vår markedsavdeling består av både inhouse-kompetanse og eksterne leverandører. Til sammen dekker vi  fagfelt som digital annonsering, søkemotoroptimalisering, tekstredigering, webdesign, sosiale medier, videoredigering, grafisk design etc.."
}

const text3 = {
  middle: "Admit Studio",
  bottom:"Bruksområdene for Admit Studio er mange. En arena for produksjon av profesjonelt medieinnhold for dine markedsføringskanaler. Livestreaming av webinar, innspilling av forklaringsvideoer, salgsmøter, intern opplæring osv..",

  button1: "TA KONTAKT",
}

const marketing = () => {
  return (
    <Template>
      <ThreeMiddleTextTwoButton props={text1} />
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      <ThreeMiddleTextTwoButtonSmall props={text3} />
      <WeAdmit />
    </Template>
  )
}

export default marketing
