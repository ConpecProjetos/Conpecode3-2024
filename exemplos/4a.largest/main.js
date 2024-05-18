   const largest = (lista) => {
        var maior = 0;
        let comprimento = lista.length;
        for (i = 0; i < comprimento; i = i + 1) {
            if (lista[i] > maior) {
                maior = lista[i];
            }
        }
        return maior;
    }

    console.log(largest([3, 4, 5, 1, 5]));