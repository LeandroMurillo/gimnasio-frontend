export default class ActionProvider {
  constructor(crearMensajeBot, setStateFunc) {
    this.crearMensajeBot = crearMensajeBot;
    this.setState = setStateFunc;

    this.info = null;

    this.handleVerHorarios = this.handleVerHorarios.bind(this);
    this.handleContacto = this.handleContacto.bind(this);
    this.handleUbicacion = this.handleUbicacion.bind(this);
    this.handlePlanes = this.handlePlanes.bind(this);
    this.handleDesconocido = this.handleDesconocido.bind(this);
    this.agregarMensaje = this.agregarMensaje.bind(this);
    this.obtenerInfoGimnasio = this.obtenerInfoGimnasio.bind(this);
  }

  async obtenerInfoGimnasio() {
    if (!this.info) {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/configuracion/default`); // Cambiá por tu URL real si es distinta
      if (!res.ok) throw new Error('No se pudo obtener la información');
      this.info = await res.json();
    }
    return this.info;
  }

  handleVerHorarios() {
    const mensaje = this.crearMensajeBot('Estamos abiertos de lunes a sábados de 6 a 22hs.');
    this.agregarMensaje(mensaje);
  }

  async handleContacto() {
    try {
      const info = await this.obtenerInfoGimnasio();
      const mensaje = this.crearMensajeBot(
        `Podés contactarnos por nuestro whatsapp al ${info.telefono} o por nuestra cuenta de Instagram a @gimnasio_rolling.`
      );
      this.agregarMensaje(mensaje);
    } catch {
      const mensaje = this.crearMensajeBot(
        'No se pudo obtener la información de contacto en este momento.'
      );
      this.agregarMensaje(mensaje);
    }
  }

  async handleUbicacion() {
    try {
      const info = await this.obtenerInfoGimnasio();
      const mensaje = this.crearMensajeBot(`Estamos en ${info.direccion}, ${info.ciudad}.`);
      this.agregarMensaje(mensaje);
    } catch {
      const mensaje = this.crearMensajeBot('No se pudo obtener la ubicación del gimnasio.');
      this.agregarMensaje(mensaje);
    }
  }

  handlePlanes() {
    const mensaje = this.crearMensajeBot(
      'Nuestros planes varían entre $6.000 y $30.000 por mes, dependiendo si es solo musculación o incluye clases y extras.'
    );
    this.agregarMensaje(mensaje);
  }

  handleDesconocido() {
    const mensaje = this.crearMensajeBot('Lo siento, no entendí la pregunta. ¿Podés reformularla?');
    this.agregarMensaje(mensaje);
  }

  agregarMensaje(mensaje) {
    this.setState((anterior) => ({
      ...anterior,
      messages: [...anterior.messages, mensaje]
    }));
  }
}
