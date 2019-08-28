new vue({
        el: '#app',
        data: {
            vidaJugador = 100,
            vidaMounstro = 100,
            eventos: []
        },
        computed: {
            mostrarLog(){
                for(let i = 0; i < eventos.length; i++){
                    const entrada = eventos[i];
                    alert(entrada);
                }
            }

        },
        methods: {
            atacar() {
                //El jugador ataca con 1 a 5
                let ataqueJugador = generarRandom(5);
                vidaJugador -= ataqueJugador;
                //El mounstro ataca con 1 a 10
                let ataqueMounstro = generarRandom(10);
                vidaMounstro -= ataqueMounstro;

                alert(vidaJugador + vidaMounstro);
            },
            atacarEspecial() {
                //El jugador ataca con 1 a 8
                let ataqueJugador = generarRandom(8);

                //El mounstro ataca con 1 a 10
                let ataqueMounstro = generarRandom(10);
            },
            generarRandom(valorAtaque) {
                let valor = Math.floor(Math.random() * valorAtaque) + 1;

                return valor;
            }
        }
    })