Redux es una forma práctica de compartir información entre componentes, de una manera facil. Se recomienda para proyectos medianos o grandes, ya que React tiene herramientas que pueden simular un store (Context).

Redux trabaja con la modalidad de suscripción, todos los componentes que estén suscriptos a una propiedad del store, siempre estará escuchando cambios en el mismo y se re-renderizará cuando los detecte.

Para modificar datos del store de Redux se hace mediante "Actions creators", estas son funciones que se ejecutan en los componentes, enviando una "Action" al "Reducer" que clasifica la misma según su type, estas pueden cambiar una o más propiedades del store.
