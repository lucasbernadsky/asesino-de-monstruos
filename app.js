new Vue({
  el: "#app",
  data: {
    vidaJugador: 100,
    vidaMounstro: 100,
    eventos: []
  },
  computed: {
    mostrarLog() {
      for (let i = 0; i < eventos.length; i++) {
        const entrada = eventos[i];
      }
    }
  },
  methods: {
    atacar() {
      //El jugador ataca con 1 a 6
      let ataqueJugador = this.generarRandom(6);
      //El mounstro ataca con 1 a 10
      let ataqueMounstro = this.generarRandom(10);

      this.vidaJugador -= ataqueMounstro;
      this.vidaMounstro -= ataqueJugador;

      console.log("vida jugador: " + this.vidaJugador);
      console.log("Vida mounstro " + this.vidaMounstro);

      return true;
    },
    atacarEspecial() {
      //El jugador ataca con 1 a 8
      let ataqueJugador = this.generarRandom(8);

      //El mounstro ataca con 1 a 8
      let ataqueMounstro = this.generarRandom(8);

      this.vidaJugador -= ataqueMounstro;
      this.vidaMounstro -= ataqueJugador;

      console.log("vida jugador: " + this.vidaJugador);
      console.log("Vida mounstro " + this.vidaMounstro);
      return true;
    },
    generarRandom(valorAtaque) {
      let valor = Math.floor(Math.random() * valorAtaque) + 1;
      return valor;
    },
    empezarNuevo() {
      this.vidaJugador = 100;
      this.vidaMounstro = 100;
    },
    curar() {
      //Aumenta la vida entre 1 y 15
      this.vidaJugador + this.generarRandom(15) >= 100
        ? (this.vidaJugador = 100)
        : (this.vidaJugador += this.generarRandom(15));
    }
  }
});
