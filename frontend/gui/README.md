
## Funcionamiento

Al acceder al puerto http://localhost:3000/ lo que se despliega al inicio es la lista de todos los cursos creados, e incluso debajo de los cursos existe un formulario, en el cual, mediante el método POST es capaz de crear nuevos cursos através de la página y desplegarlos al darle click en "Crear".

Para acceder a los cursos de manera individual se necesita escribir http://localhost:3000/1/, siendo 1 el curso con el id número 1, en esta página se muestra el curso con su descripción, además de tener un formulario, en el cual, mediante el método PUT es capaz de actualizar el curso con el id que accedimos.

La idea de agregar lessons era que através de la siguiente liga http://localhost:3000/1/lessons/, esta mostrará en una lista las lecciones que se encuentran en el curso con el id = 1 , en este caso en particular, pero en lugar de eso despliega todas las lecciones creadas de todos los cursos

En http://localhost:3000/1/lessons/2/ depliega el título de la lección, y muestra una sección en donde se deberían registrar las preguntas y poder seleccionar la respuesta, pero los ultimos no son funcionales.
