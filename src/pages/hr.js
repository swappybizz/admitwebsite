import React from "react"
import Template from "../templates/Template"
import ThreeMiddleTextTwoButton from "../components/ThreeMiddleTextTwoButton"
import ThreeMiddleTextTwoButtonSmall from "../components/ThreeMiddleTextTwoButtonSmall"
import WeAdmit from "../components/WeAdmit"
const text1 = {
  top: "PLIKTER OG RETTIGHETER",
  middle: "HR/HMS ",
  bottom:"For oss i Admit handler HR og HMS om å bygge sterke og velfungerende team, sett i sammenheng med systemtenkning. Et av de områdene vi jobber aktivt med er å få mennesker til å snakke sammen.  Gjennom å fasilitere prosesser der det er rom for å sitte ned med enkeltpersoner eller i grupper, for å sette fokus på samarbeidsutfordringer, ønsker vi å være med på å vedlikeholde og utvikle arbeidsmiljøet og bedriftene."
  }

const text2 = {
  middle: "Sticos",
  bottom:"Vi er Sticos-partner og kan bistå ved implementering av dette.Sticos er et digitalt personalsystem som gjør oppfølging av ansatte enklere og i hhld til oppdatert regelverk. Bidrar til enkel håndtering av lovpålagt HMS-arbeid, og har integrasjon mot de fleste regnskapssystem."
  
}
const text3 = {
  middle: "Helse Miljø Sikkerhet",
  bottom:"Godt arbeidsmiljøarbeid handler om å redusere risiko for farer og ulykker. Samtidig må en aktivt rette søkelyset mot de positive og helsefremmende faktorene i arbeidsmiljøet."
  
}
const text4 = {
  middle: "Systematisk HMS-arbeid",
  bottom:"Vi leverer systematisk helse, miljø og sikkerhetsarbeid (internkontroll) til bedrifter, inkludert kursing og opplæring. Link systemtenkning",
  
  button1: "TA KONTAKT",
}
const hr = () => {
  return (
    <Template>
      <ThreeMiddleTextTwoButton props={text1} />
      <ThreeMiddleTextTwoButtonSmall props={text2} />
      <ThreeMiddleTextTwoButtonSmall props={text3} />
      <ThreeMiddleTextTwoButtonSmall props={text4} />
      <WeAdmit />
    </Template>
  )
}

export default hr