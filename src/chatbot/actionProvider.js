import gimnasioInfo from "../gimnasioInfo.js";

export default class ActionProvider {
  constructor(crearMensajeBot, setStateFunc) {
    this.crearMensajeBot = crearMensajeBot;
    this.setState = setStateFunc;

    this.handleVerHorarios = this.handleVerHorarios.bind(this);
    this.handleContacto = this.handleContacto.bind(this);
    this.handleUbicacion = this.handleUbicacion.bind(this);
    this.handlePlanes = this.handlePlanes.bind(this);
    this.handleDesconocido = this.handleDesconocido.bind(this);
    this.agregarMensaje = this.agregarMensaje.bind(this);
  }

  handleVerHorarios() {
    const mensaje = this.crearMensajeBot(
      'Estamos abiertos de lunes a viernes de 7 a 22hs y sábados de 9 a 14hs.'
    );
    this.agregarMensaje(mensaje);
  }

  handleContacto() {
    const mensaje = this.crearMensajeBot(
      `Podés contactarnos al ${gimnasioInfo.telefono} o por Instagram: ${gimnasioInfo.redes.instagram_cuenta}.`
    );
    this.agregarMensaje(mensaje);
  }

  handleUbicacion() {
    const mensaje = this.crearMensajeBot(`Estamos en ${gimnasioInfo.direccion}, ${gimnasioInfo.ciudad}.`);
    this.agregarMensaje(mensaje);
  }

  handlePlanes() {
    const mensaje = this.crearMensajeBot('Ofrecemos planes mensuales desde $5.000.');
    this.agregarMensaje(mensaje);
  }

  handleDesconocido() {
    const mensaje = this.crearMensajeBot('Lo siento, no entendí la pregunta. ¿Podés reformularla?');
    this.agregarMensaje(mensaje);
  }

  agregarMensaje(mensaje) {
    this.setState(function (anterior) {
      return {
        ...anterior,
        messages: [...anterior.messages, mensaje]
      };
    });
  }
}
