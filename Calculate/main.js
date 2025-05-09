let nevCantidad = document.getElementById("nevCantidad");
let nevConsumo = document.getElementById("nevConsumo");
let nevTime = document.getElementById("nevTime");
let btnNev = document.getElementById("btnNev");
let totalNev = document.getElementById("totalNev");
let totalNevPag = document.getElementById("totalNevPag");
let tvCantidad = document.getElementById("tvCantidad");
let tvConsumo = document.getElementById("tvConsumo");
let tvTime = document.getElementById("tvTime");
let btnTv = document.getElementById("btnTv");
let totalTv = document.getElementById("totalTv");
let totalTvPag = document.getElementById("totalTvPag");
let cafCantidad = document.getElementById("cafCantidad");
let cafConsumo = document.getElementById("cafConsumo");
let cafTime = document.getElementById("cafTime");
let btnCaf = document.getElementById("btnCaf");
let totalCaf = document.getElementById("totalCaf");
let totalCafPag = document.getElementById("totalCafPag");
let micCantidad = document.getElementById("micCantidad");
let micConsumo = document.getElementById("micConsumo");
let micTime = document.getElementById("micTime");
let btnMic = document.getElementById("btnMic");
let totalMic = document.getElementById("totalMic");
let totalMicPag = document.getElementById("totalMicPag");
let lavCantidad = document.getElementById("lavCantidad");
let lavConsumo = document.getElementById("lavConsumo");
let lavTime = document.getElementById("lavTime");
let btnLav = document.getElementById("btnLav");
let totalLav = document.getElementById("totalLav");
let totalLavPag = document.getElementById("totalLavPag");
let venCantidad = document.getElementById("venCantidad");
let venConsumo = document.getElementById("venConsumo");
let venTime = document.getElementById("venTime");
let btnVen = document.getElementById("btnVen");
let totalVen = document.getElementById("totalVen");
let totalVenPag = document.getElementById("totalVenPag");
let licCantidad = document.getElementById("licCantidad");
let licConsumo = document.getElementById("licConsumo");
let licTime = document.getElementById("licTime");
let btnLic = document.getElementById("btnLic");
let totalLic = document.getElementById("totalLic");
let totalLicPag = document.getElementById("totalLicPag");
let carCantidad = document.getElementById("carCantidad");
let carConsumo = document.getElementById("carConsumo");
let carTime = document.getElementById("carTime");
let btnCar = document.getElementById("btnCar");
let totalCar = document.getElementById("totalCar");
let totalCarPag = document.getElementById("totalCarPag");
let porCantidad = document.getElementById("porCantidad");
let porConsumo = document.getElementById("porConsumo");
let porTime = document.getElementById("porTime");
let btnPor = document.getElementById("btnPor");
let totalPor = document.getElementById("totalPor");
let totalPorPag = document.getElementById("totalPorPag");
let plaCantidad = document.getElementById("plaCantidad");
let plaConsumo = document.getElementById("plaConsumo");
let plaTime = document.getElementById("plaTime");
let btnPla = document.getElementById("btnPla");
let totalPla = document.getElementById("totalPla");
let totalPlaPag = document.getElementById("totalPlaPag");
let bomCantidad = document.getElementById("bomCantidad");
let bomConsumo = document.getElementById("bomConsumo");
let bomTime = document.getElementById("bomTime");
let btnBom = document.getElementById("btnBom");
let totalBom = document.getElementById("totalBom");
let totalBomPag = document.getElementById("totalBomPag");
let btnRes = document.getElementById("btnRes");
let totalRes = document.getElementById("totalRes");
let totalResPag = document.getElementById("totalResPag");
let consumos = document.getElementById("consumos");
let precio = document.getElementById("precio");

btnNev.addEventListener("click", () => {
    if (nevCantidad.value.trim() === "" || nevConsumo.value.trim() === "" || nevTime.value.trim() === "") {
        alert("Por favor ingresa todos los valores de la nevera.");
        return;
    }

    const numPrecio = Number(precio.value);
    const numConsumos = Number(consumos.value);
    const numNevCant = Number(nevCantidad.value);
    const numNevCons = Number(nevConsumo.value) / 1000;
    const numNevTime = Number(nevTime.value);

    const resultado = numNevCant * (numNevCons * (numNevTime * numConsumos));
    totalNev.value = `${resultado.toFixed(2)} kWh`;
    const pagar = resultado * numPrecio;
    totalNevPag.value = `${pagar.toFixed(2)} COP`;
});

btnTv.addEventListener("click", () => {
    if (tvCantidad.value.trim() === "" || tvConsumo.value.trim() === "" || tvTime.value.trim() === "") {
        alert("Por favor ingresa todos los valores del televisor.");
        return;
    }

    const numPrecio = Number(precio.value);
    const numConsumos = Number(consumos.value);
    const numTvCant = Number(tvCantidad.value);
    const numTvCons = Number(tvConsumo.value) / 1000;
    const numTvTime = Number(tvTime.value);

    const resultado = numTvCant * (numTvCons * (numTvTime * numConsumos));
    totalTv.value = `${resultado.toFixed(2)} kWh`;
    const pagar = resultado * numPrecio;
    totalTvPag.value = `${pagar.toFixed(2)} COP`;
});

btnCaf.addEventListener("click", () => {
    if (cafCantidad.value.trim() === "" || cafConsumo.value.trim() === "" || cafTime.value.trim() === "") {
        alert("Por favor ingresa todos los valores de la cafetera.");
        return;
    }

    const numPrecio = Number(precio.value);
    const numConsumos = Number(consumos.value);
    const numCafCant = Number(cafCantidad.value);
    const numCafCons = Number(cafConsumo.value) / 1000;
    const numCafTime = Number(cafTime.value);

    const resultado = numCafCant * (numCafCons * (numCafTime * numConsumos));
    totalCaf.value = `${resultado.toFixed(2)} kWh`;
    const pagar = resultado * numPrecio;
    totalCafPag.value = `${pagar.toFixed(2)} COP`;
});

btnMic.addEventListener("click", () => {
    if (micCantidad.value.trim() === "" || micConsumo.value.trim() === "" || micTime.value.trim() === "") {
        alert("Por favor ingresa todos los valores del microondas.");
        return;
    }

    const numPrecio = Number(precio.value);
    const numConsumos = Number(consumos.value);
    const numMicCant = Number(micCantidad.value);
    const numMicCons = Number(micConsumo.value) / 1000;
    const numMicTime = Number(micTime.value);

    const resultado = numMicCant * (numMicCons * (numMicTime * numConsumos));
    totalMic.value = `${resultado.toFixed(2)} kWh`;
    const pagar = resultado * numPrecio;
    totalMicPag.value = `${pagar.toFixed(2)} COP`;
});

btnLav.addEventListener("click", () => {
    if (lavCantidad.value.trim() === "" || lavConsumo.value.trim() === "" || lavTime.value.trim() === "") {
        alert("Por favor ingresa todos los valores de la lavadora.");
        return;
    }

    const numPrecio = Number(precio.value);
    const numConsumos = Number(consumos.value);
    const numLavCant = Number(lavCantidad.value);
    const numLavCons = Number(lavConsumo.value) / 1000;
    const numLavTime = Number(lavTime.value);

    const resultado = numLavCant * (numLavCons * (numLavTime * numConsumos));
    totalLav.value = `${resultado.toFixed(2)} kWh`;
    const pagar = resultado * numPrecio;
    totalLavPag.value = `${pagar.toFixed(2)} COP`;
});

btnVen.addEventListener("click", () => {
    if (venCantidad.value.trim() === "" || venConsumo.value.trim() === "" || venTime.value.trim() === "") {
        alert("Por favor ingresa todos los valores del ventilador.");
        return;
    }

    const numPrecio = Number(precio.value);
    const numConsumos = Number(consumos.value);
    const numVenCant = Number(venCantidad.value);
    const numVenCons = Number(venConsumo.value) / 1000;
    const numVenTime = Number(venTime.value);

    const resultado = numVenCant * (numVenCons * (numVenTime * numConsumos));
    totalVen.value = `${resultado.toFixed(2)} kWh`;
    const pagar = resultado * numPrecio;
    totalVenPag.value = `${pagar.toFixed(2)} COP`;
});

btnLic.addEventListener("click", () => {
    if (licCantidad.value.trim() === "" || licConsumo.value.trim() === "" || licTime.value.trim() === "") {
        alert("Por favor ingresa todos los valores de la licuadora.");
        return;
    }

    const numPrecio = Number(precio.value);
    const numConsumos = Number(consumos.value);
    const numLicCant = Number(licCantidad.value);
    const numLicCons = Number(licConsumo.value) / 1000;
    const numLicTime = Number(licTime.value);

    const resultado = numLicCant * (numLicCons * (numLicTime * numConsumos));
    totalLic.value = `${resultado.toFixed(2)} kWh`;
    const pagar = resultado * numPrecio;
    totalLicPag.value = `${pagar.toFixed(2)} COP`;
});

btnCar.addEventListener("click", () => {
    if (carCantidad.value.trim() === "" || carConsumo.value.trim() === "" || carTime.value.trim() === "") {
        alert("Por favor ingresa todos los valores del cargador.");
        return;
    }

    const numPrecio = Number(precio.value);
    const numConsumos = Number(consumos.value);
    const numCarCant = Number(carCantidad.value);
    const numCarCons = Number(carConsumo.value) / 1000;
    const numCarTime = Number(carTime.value);

    const resultado = numCarCant * (numCarCons * (numCarTime * numConsumos));
    totalCar.value = `${resultado.toFixed(2)} kWh`;
    const pagar = resultado * numPrecio;
    totalCarPag.value = `${pagar.toFixed(2)} COP`;
});

btnPor.addEventListener("click", () => {
    if (porCantidad.value.trim() === "" || porConsumo.value.trim() === "" || porTime.value.trim() === "") {
        alert("Por favor ingresa todos los valores del portatil.");
        return;
    }

    const numPrecio = Number(precio.value);
    const numConsumos = Number(consumos.value);
    const numPorCant = Number(porCantidad.value);
    const numPorCons = Number(porConsumo.value) / 1000;
    const numPorTime = Number(porTime.value);

    const resultado = numPorCant * (numPorCons * (numPorTime * numConsumos));
    totalPor.value = `${resultado.toFixed(2)} kWh`;
    const pagar = resultado * numPrecio;
    totalPorPag.value = `${pagar.toFixed(2)} COP`;
});

btnPla.addEventListener("click", () => {
    if (plaCantidad.value.trim() === "" || plaConsumo.value.trim() === "" || plaTime.value.trim() === "") {
        alert("Por favor ingresa todos los valores de la plancha.");
        return;
    }

    const numPrecio = Number(precio.value);
    const numConsumos = Number(consumos.value);
    const numPlaCant = Number(plaCantidad.value);
    const numPlaCons = Number(plaConsumo.value) / 1000;
    const numPlaTime = Number(plaTime.value);

    const resultado = numPlaCant * (numPlaCons * (numPlaTime * numConsumos));
    totalPla.value = `${resultado.toFixed(2)} kWh`;
    const pagar = resultado * numPrecio;
    totalPlaPag.value = `${pagar.toFixed(2)} COP`;
});

btnBom.addEventListener("click", () => {
    if (bomCantidad.value.trim() === "" || bomConsumo.value.trim() === "" || bomTime.value.trim() === "") {
        alert("Por favor ingresa todos los valores del bombillo.");
        return;
    }

    const numPrecio = Number(precio.value);
    const numConsumos = Number(consumos.value);
    const numBomCant = Number(bomCantidad.value);
    const numBomCons = Number(bomConsumo.value) / 1000;
    const numBomTime = Number(bomTime.value);

    const resultado = numBomCant * (numBomCons * (numBomTime * numConsumos));
    totalBom.value = `${resultado.toFixed(2)} kWh`;
    const pagar = resultado * numPrecio;
    totalBomPag.value = `${pagar.toFixed(2)} COP`;

});

btnRes.addEventListener("click", () => {
    const numBom = parseFloat(totalBom.value) || 0;
    const numCaf = parseFloat(totalCaf.value) || 0;
    const numCar = parseFloat(totalCar.value) || 0;
    const numLav = parseFloat(totalLav.value) || 0;
    const numLic = parseFloat(totalLic.value) || 0;
    const numMic = parseFloat(totalMic.value) || 0;
    const numNev = parseFloat(totalNev.value) || 0;
    const numPla = parseFloat(totalPla.value) || 0;
    const numPor = parseFloat(totalPor.value) || 0;
    const numTv  = parseFloat(totalTv.value)  || 0;
    const numVen = parseFloat(totalVen.value) || 0;

    const numBomPag = parseFloat(totalBomPag.value) || 0;
    const numCafPag = parseFloat(totalCafPag.value) || 0;
    const numCarPag = parseFloat(totalCarPag.value) || 0;
    const numLavPag = parseFloat(totalLavPag.value) || 0;
    const numLicPag = parseFloat(totalLicPag.value) || 0;
    const numMicPag = parseFloat(totalMicPag.value) || 0;
    const numNevPag = parseFloat(totalNevPag.value) || 0;
    const numPlaPag = parseFloat(totalPlaPag.value) || 0;
    const numPorPag = parseFloat(totalPorPag.value) || 0;
    const numTvPag  = parseFloat(totalTvPag.value)  || 0;
    const numVenPag = parseFloat(totalVenPag.value) || 0;

    const resultado =   numBom + numCaf + numCar +
                        numLav + numLic + numMic +
                        numNev + numPla + numPor +
                        numTv + numVen;
    totalRes.value = `${resultado.toFixed(2)} kWh`;
    const pagar =       numBomPag + numCafPag + numCarPag +
                        numLavPag + numLicPag + numMicPag +
                        numNevPag + numPlaPag + numPorPag +
                        numTvPag + numVenPag;
    totalResPag.value = `${pagar.toFixed(2)} COP`;
});