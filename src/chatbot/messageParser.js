export default class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(mensaje) {
    const texto = mensaje.toLowerCase();

    if (texto.includes('horario') || texto.includes('abren')) {
      this.actionProvider.handleVerHorarios();
    } else if (texto.includes('contacto')) {
      this.actionProvider.handleContacto();
    } else if (texto.includes('ubicación') || texto.includes('dónde')) {
      this.actionProvider.handleUbicacion();
    } else if (texto.includes('plan') || texto.includes('precio')) {
      this.actionProvider.handlePlanes();
    } else {
      this.actionProvider.handleDesconocido();
    }
  }
}
