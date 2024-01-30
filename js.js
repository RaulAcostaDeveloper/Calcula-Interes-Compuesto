const dataAnual = document.getElementById('cantidad');
const dataPorcentaje = document.getElementById('porcentaje');
const anios = document.getElementById('anios');
const aniadirAnual = document.getElementById('aniadirAnual');
const container = document.getElementById('container');

const calcula = () => {
    let htmlString = ``;
    const cantidadInicial = Number(dataAnual.value);
    let anualidadIncremental = cantidadInicial;
    let  cantidadGananciaAnual = 0;

    for (let index = 1; index < Number(anios.value) + 1; index++) {
        anualidadIncremental = parseInt(anualidadIncremental + cantidadGananciaAnual + (index > 1 ? Number(aniadirAnual.value) : 0));
        cantidadGananciaAnual = parseInt((anualidadIncremental / 100) * Number(dataPorcentaje.value));
        const cantidadGananciaMensual = parseInt(cantidadGananciaAnual / 12);
        const cantidadGananciaDiaria = parseInt(cantidadGananciaAnual / 365);

        htmlString += `
            <h3>Años sin sacar dinero ${index}</h3>
            <p>Cantidad en tarjeta: <b>${anualidadIncremental}</b></p>
            <p>Ganancia anual: <b>${cantidadGananciaAnual}</b></p>
            <p>Ganancia mensual: <b>${cantidadGananciaMensual} </b></p>
            <p>Ganancia diaria: <b>${cantidadGananciaDiaria} </b></p>
            <p>Cantidad inyectada: <b>${aniadirAnual.value} </b></p>
        `;
        
    }
    container.innerHTML = htmlString;
}