##Funcionamiento

Para la parte de Django se crearon los modelos de Cursos,Lecciones,Preguntas y Respuestas, estas estan relacionadas através de la llaver primaria, 
al ingresar http://127.0.0.1:8000/admin/ se puede apreciar la interación de estos modelos y el funcionamiento de la llave primaria.

En la carpeta api se encuentran la creación de las vistas, tanto de las vistas de Assignment como las de Lessons, podemos ingresar a cualquier de ellas
mediante las siguientes urls:

```python
Assignment List: http://127.0.0.1:8000/api/
Assignment Details: http://127.0.0.1:8000/api/1
Assignment Create: http://127.0.0.1:8000/api/create/
Assignment Update: http://127.0.0.1:8000/api/1/update/
Assignment Delete: http://127.0.0.1:8000/api/1/delete/
```
```python
Lessons List: http://127.0.0.1:8000/api/
Lessons Details: http://127.0.0.1:8000/api/1
Lessons Create: http://127.0.0.1:8000/api/create/
```




