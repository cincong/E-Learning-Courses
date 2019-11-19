# E-Learning-Courses

## Backend  
 
Windows: 

```bash
virtualenv env
\env\Scripts\activate.bat
cd ../..

pip install Django
pip install djangorestframework
pip install django-cors-headers

python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
Para acceder al panel de admin, debes crear un super usuario
```bash
python manage.py createsuperuser
```
Llenas los datos requeridos, puedes saltarte el e-mail

Accede a http://127.0.0.1:8000/admin/


## Frontend 

```bash
npm i
npm start
```



