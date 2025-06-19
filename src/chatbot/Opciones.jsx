import { Button } from 'react-bootstrap';

export default function Opciones({ setState, actionProvider }) {
  const opciones = [
    {
      texto: 'Ver horarios',
      handler: function () {
        manejarClick('Ver horarios', actionProvider.handleVerHorarios);
      },
      id: 1
    },
    {
      texto: 'Ubicación',
      handler: function () {
        manejarClick('Ubicación', actionProvider.handleUbicacion);
      },
      id: 2
    },
    {
      texto: 'Contacto',
      handler: function () {
        manejarClick('Contacto', actionProvider.handleContacto);
      },
      id: 3
    },
    {
      texto: 'Planes',
      handler: function () {
        manejarClick('Planes', actionProvider.handlePlanes);
      },
      id: 4
    }
  ];

  function crearMensajeUsuario(texto) {
    setState(function (anterior) {
      return {
        ...anterior,
        messages: [
          ...anterior.messages,
          {
            id: Math.random(),
            message: texto,
            type: 'user'
          }
        ]
      };
    });
  }

  function manejarClick(texto, accion) {
    crearMensajeUsuario(texto);
    accion();
  }

  return (
    <div className="d-flex flex-column mt-2">
      {opciones.map(function ({ id, texto, handler }) {
        return (
          <Button key={id} onClick={handler} variant="dark" className="mb-2">
            {texto}
          </Button>
        );
      })}
    </div>
  );
}
