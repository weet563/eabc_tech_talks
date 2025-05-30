AOS.init();

const dataDoEvento = new Date("Jun 14, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;

    const diasEvento = parseInt(distanciaEvento / diaEmMS);
    const horasEvento = parseInt((distanciaEvento % diaEmMS) / horasEmMs);
    const minutosEvento = parseInt((distanciaEvento % horasEmMs) / minutosEmMS);
    const segundosEvento = parseInt((distanciaEvento % minutosEmMS) / 1000);

    console.log(diasEvento , horasEvento, minutosEvento, segundosEvento);

    document.getElementById('contador').innerText = `${diasEvento}d ${horasEvento}h ${minutosEvento}m ${segundosEvento}s`;

    if (distanciaEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerText = "EVENTO EXPIRADO";
    }
}, 1000);

