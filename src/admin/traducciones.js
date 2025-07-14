import spanishMessages from 'ra-language-spanish';

export default {
  ...spanishMessages,
  ra: {
    ...spanishMessages.ra,
    navigation: {
      ...spanishMessages.ra?.navigation,
      no_results: 'No se encontraron resultados',
      page_out_of_boundaries: 'Página fuera de los límites',
      page_out_from_end: 'No se puede ir más allá de la última página',
      page_out_from_begin: 'No se puede ir antes de la primera página',
      page_rows_per_page: 'Filas por página',
      next: 'Siguiente',
      previous: 'Anterior'
    },
    pagination: {
      page: 'Página',
      page_range_info: '%{offsetBegin}-%{offsetEnd} de %{total}',
      next: 'Siguiente',
      previous: 'Anterior'
    },
    action: {
      ...spanishMessages.ra?.action,
      edit: 'Editar',
      delete: 'Borrar',
      confirm: 'Confirmar',
      show: 'Ver',
      list: 'Lista',
      save: 'Guardar',
      create: 'Crear',
      cancel: 'Cancelar',
      refresh: 'Actualizar',
      search: 'Buscar',
      export: 'Exportar',
      unselect: 'Deseleccionar'
    },
    message: {
      ...spanishMessages.ra?.message,
      yes: 'Sí',
      no: 'No'
    },
    sort: {
      ASC: 'Ascendente',
      DESC: 'Descendente'
    },
    configurable: {
      customize: 'Personalizar'
    },
    menu: {
      usuarios: 'Usuarios',
      clases: 'Clases',
      mensajes: 'Mensajes'
    }
  }
};
