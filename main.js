
const nomeCognomeHtml = document.getElementById(`nameSurname`)
const kilometriHtml = document.getElementById(`Km`)
const FasciaEtaHtml = document.getElementById(`eta`)
const bottoneRisultato = document.getElementById(`bottoneGenera`)
const CodiceRandomCarrozza = document.getElementById('numeroCarrozza')
const CodiceCpHtml = document.getElementById('CodiceCp')
const TitoloBiglietto = document.getElementById('titolo')
const BigliettoFinito = document.getElementById('biglietto')
const RisultatoNomeHtml = document.getElementById(`risultatoNome`)
const risultatOffertaHtml = document.getElementById(`risultatOfferta`)
const prezzoRisultatoHtml = document.getElementById(`prezzoRisultato`)




TitoloBiglietto.style.display= "none"
BigliettoFinito.style.display="none"




bottoneRisultato.addEventListener(`click`,function () {
    TitoloBiglietto.style.display= "block"
    BigliettoFinito.style.display="block"

   

    let Codicecarrozza = RandoNumber(0,10)
    let CodiceRandomCp= RandoNumber(50,10000)

    CodiceRandomCarrozza.innerHTML= Codicecarrozza
    CodiceCpHtml.innerHTML=CodiceRandomCp

    RisultatoNomeHtml.innerHTML= nomeCognomeHtml.value


    if(FasciaEtaHtml.value === "minorenne"){
        risultatOffertaHtml.innerHTML="Biglietto scontato del 20% perchè minorenne"
        prezzoRisultatoHtml.innerHTML= ((kilometriHtml.value*0.21)*0.8).toFixed(2) +"€"

    }else if (FasciaEtaHtml.value === "maggiorenne"){
        risultatOffertaHtml.innerHTML="Biglietto Standard"
        prezzoRisultatoHtml.innerHTML= (kilometriHtml.value*0.21).toFixed(2) +"€"

    }else if (FasciaEtaHtml.value === "over"){
        risultatOffertaHtml.innerHTML="Biglietto scontato del 40% perchè Over 65"
        prezzoRisultatoHtml.innerHTML= ((kilometriHtml.value*0.21)*0.6).toFixed(2) +"€"
    }

})
    
function RandoNumber (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}