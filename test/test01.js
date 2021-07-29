const geekshubs = (index) => {

    let numeros = []



    for (let i = 1; i <= index; i++) {

        numeros[i] = i;
        if (i % 3 === 0) {
            numeros[i] = "Geeks";
        } else if (i % 5 === 0) {
            numeros[i] = "Hubs"
        }

    }
    numeros.splice(0, 1);

    // numeros.forEach((misNumeros, index, arr) => {

    //     console.log({ misNumeros, index, arr });

    // });
    let resultado = numeros.join("\n").toString();
    //console.log(resultado);



    return resultado;
}





module.exports = { geekshubs };