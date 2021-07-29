# let numeros = [index];


    for (let i = 1; i <= index; i++) {

        numeros[i] = i;

        if (i % 3 === 0) {
            numeros[i] = "Geeks";
        }
        if (i % 5 === 0) {
            numeros[i] = "Hubs"
        }

    }

    // numeros.forEach((misNumeros, index, arr) => {

    //     console.log({ misNumeros, index, arr });

    // });



    return numeros;