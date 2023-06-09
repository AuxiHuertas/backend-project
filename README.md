## Proyecto Backend

## Tecnologías utilizadas

Node.js: Entorno de ejecución para JavaScript.
Express: Framework de Node.js utilizado para construir la API.
Slonick: Base de datos relacional utilizada para almacenar los datos.
Docker: Herramienta de contenerización utilizada para simplificar el despliegue del proyecto.
npm: Gestor de paquetes utilizado para instalar y administrar las dependencias del proyecto.
Morgan: Middleware utilizado para el registro de logs de las peticiones HTTP.
SQL: Lenguaje de consulta utilizado para interactuar con la base de datos.
Herramientas de pruebas y visualización
Postman: Herramienta utilizada para realizar pruebas de los endpoints de la API.
Adminer: Herramienta de administración de bases de datos que permite visualizar y gestionar las tablas en la base de datos.

## Estructura del proyecto
Estructura MVC: El proyecto sigue una estructura Modelo-Vista-Controlador (MVC) para una mejor organización y modularidad del código.

## Base de datos y tablas
El proyecto utiliza tres tablas relacionadas entre sí para almacenar la información de las visitas turísticas:

Tabla "Country": Contiene información de todos los países existentes, incluyendo algunos datos principales.

Tabla "Cities": Relaciona el ID de cada país con las ciudades visitadas por los usuarios.

Tabla "Tourism": Relaciona el ID de la ciudad visitada con datos turísticos, incluyendo actividades realizadas por los usuarios. Esta tabla incluye cuatro columnas de datos booleanos que definen el tipo de actividad realizada, junto con una columna descriptiva para indicar y describir las actividades.

## Endpoints
El proyecto incluye los siguientes endpoints:

### Endpoint GET en "Country":

<!-- GET /country: --> Consulta todos los países existentes.
<!--GET /country/:country--> Consulta un país específico.
<!--GET /country/:country/activity--> Consulta las actividades turísticas realizadas por el usuario en un país específico.

### Endpoints POST en "Cities":

<!-- POST /cities --> Permite al usuario enviar las ciudades visitadas y relacionarlas con un país específico mediante el id_country.

En el objeto dentro de body de Postman, debería ir de la siguiente manera:

```js
{
    "id_country" : "id consultado en la tabla de Country o cities." ,
    "cities_name" : "Nombre de la ciudad que el usuario haya visitado." 
}
```  
<!--GET /cities/cities --> Permite consultar todas las ciudades añadidas por el usuario . 


### Endpoints POST en "Tourism":

<!--POST /tourism: --> Permite al usuario enviar información sobre las actividades turísticas realizadas en una ciudad específica.
Por ejemplo,

```js
{
"id_cities": " id en el que el usuario quiere añadir una actividad, consultado con el endpoint de cities",
"art_or_culture": "Dato booleano, según tipo de actividad",
"heritage":"Dato booleano, según tipo de actividad",
"nature":"Dato booleano, según tipo de actividad",
"name_activity_done": "campo de texto para describir el nombre de la actividad"
}
``` 


## Autenticación
El proyecto cuenta con un sistema de autenticación que incluye los siguientes endpoints:

<!--POST /signup--> : Permite a los usuarios registrarse en el sistema.
<!--POST /signin--> : Permite a los usuarios iniciar sesión.
<!--POST /signout--> : Permite a los usuarios cerrar sesión. 

Se ha utilizado la biblioteca "simple-stateless-auth-library" y JSON Web Tokens (JWT) para implementar la autenticación.

    ## Tablas
    1º Importar creation.sql
    2º Importar insert_country.sql
    3º Importar insertion.sql
    

    ## Ruta de pruebas de todos los Endpoints :

    1º Consultas los datos del país y coges el dato de "id_country", puedes hacer la consulta de dos formas: 
    <!-- GET /country -->  Ves todos los países disponibles, 
    <!--GET /country/:country--> Puedes visualizar solo un país, 

    2º Creas una ciudad asociada al país utilizando el "id_country" que se ha tomado en el endpoint anterior, enviando el siguiente objeto: 
    <!-- POST /cities -->
    {
        "id_country" : "id consultado en la tabla de Country o cities." ,
        "cities_name" : "Nombre de la ciudad que el usuario haya visitado." 
    }

    3º Consultas y coges el id_cities creado automáticamente con el endpoint anterior, 
    <!--GET /cities/cities --> 

    3º Creas la actividad turística realizada en la ciudad creada , utilizando el id_cities y enviando el siguiente objeto:
    <!--POST /tourism: -->

    {
    "id_cities": "id en el que el usuario quiere añadir una actividad, consultado con el endpoint de  cities",
    "art_or_culture": "Dato booleano, según tipo de actividad",
    "heritage":"Dato booleano, según tipo de actividad",
    "nature":"Dato booleano, según tipo de actividad",
    "name_activity_done": "campo de texto para describir el nombre de la actividad"
    }

    4º Puedes consultar todas las ciudades visitadas y actividades realizadas en cada país:
    <!--GET /country/:country/activity-->



 


