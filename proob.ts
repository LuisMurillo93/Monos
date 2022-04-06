function calcularVT(array) {
    let len = array.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum = sum + array[i].cantidades*array[i].valor_unitario

    };
    return sum;

};

let prendas = [{
        tipo: "Jean",
        referencia: "Caro",
        cantidades: 9,
        valor_unitario: 20000,
    },
    {
        tipo: "sudadera",
        referencia: "ligera",
        cantidades: 4,
        valor_unitario: 12000,
    },
];


console.log(calcularVT(prendas));