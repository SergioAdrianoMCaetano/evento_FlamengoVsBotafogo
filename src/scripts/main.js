AOS.init();

//DATA DO FUTURO
const dataDoEvento = new Date("April 28, 2024, 11:00:00");
//RECUPERAR O TEMPO 
const timeStampDoEvento = dataDoEvento.getTime();

//CONTAR O PERÍODO/TEMPO/HORAS
const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    //distância para o EVENTO
    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    //DIAS, HORAS E MINUTOS EM Ms
    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    //CALCULOS PARA DIAS ATÉ O EVENTO
    const diasAteEvento = Math.floor(distanciaAteEvento / diasEmMs);
    //CALCULOS PARA HORAS ATÉ O EVENTO
    const horasAteOEvento = Math.floor((distanciaAteEvento % diasEmMs) / horaEmMs);
    //CALCULOS PARA MINUTOS ATÉ O EVENTO
    const minutosAteEvento = Math.floor((distanciaAteEvento % horaEmMs) / minutoEmMs);
    //CALCULOS PARA SEGUNDOS ATÉ O EVENTO
    const segundosAteEvento = Math.floor((distanciaAteEvento% minutoEmMs) / 1000);

    console.log(diasAteEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteEvento);
    console.log(segundosAteEvento);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteOEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if(diasAteEvento < 0){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);