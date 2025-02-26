# Descripción

Este proyecto es una aplicación web de catálogo de productos que incluye un sistema de autenticación para usuarios. Los productos se muestran con precios solo a los usuarios autenticados. Además, los usuarios pueden descargar una ficha técnica en formato PDF de los productos.

## Características principales:
- **Catálogo de productos**: Visualización de productos con nombre, precio e imagen.
- **Acceso condicional al precio**: Los precios son visibles solo para usuarios autenticados.
- **Sistema de autenticación**: Registro e inicio de sesión de usuarios.
- **Descarga de ficha técnica en PDF**: Los usuarios autenticados pueden descargar PDFs de los productos, mientras que los no autenticados deben ingresar su correo electrónico.

## Tecnologías utilizadas

### Frontend:
- Angular
- Tailwind CSS

### Backend:
- Node.js con Express
- TypeScript

### Base de datos:
- MongoDB

### Servidor:
- EC2 (AWS)

### Servidor web:
- Nginx
- Certbot

### Autenticación:
- JSON Web Token (JWT)

### Otros:
- Generación de PDF: jsPDF

## Requisitos

Para ejecutar este proyecto localmente, necesitas tener instalados los siguientes programas:

- Node.js
- MongoDB
- Angular CLI
- PNPM
- Nginx (si quieres replicar el entorno de producción)

## Uso
## Pasos para ejecutar el proyecto

### 1. Clonar el repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/dkevlas/test-app.git
```

### 2. Configuración del backend (Node.js)
1. Navega al directorio `server`:
```bash
cd server
```
2. Instala las dependencias usando `pnpm`:
```bash
pnpm install
```
3. Inicia el servidor de desarrollo:
```bash
pnpm run dev
```
Esto iniciará el servidor backend en el puerto configurado (3010).

### 3. Configuración del frontend (Angular)
1. Navega al directorio `client`:
```bash
cd client
```
2. Instala las dependencias usando `pnpm`:
```bash
pnpm install
```
3. Inicia el servidor de desarrollo de Angular:
```bash
ng serve
```
Esto iniciará la aplicación en el puerto configurado (4000).

### 4. Acceder a la aplicación
Una vez que tanto el backend como el frontend estén corriendo, podrás acceder a la aplicación en:

- Frontend: http://localhost:4000
- Backend: http://localhost:3010 

### 5. Importar la colección de productos con MONGO-DB

Para visualizar los productos en tu entorno local, sigue estos pasos:

1. **Descarga el archivo `products.json`** desde la raíz del repositorio.
   
2. **Asegúrate de tener MongoDB instalado** en tu máquina local.

3. **Crea la base de datos** local (si no la tienes) ejecutando:
```bash
mongo
use my_db-mongo
```
4. **Importa la colección de productos** usando el siguiente comando:
```bash
mongoimport --uri="mongodb://localhost:27017" --db=my_db-mongo --collection=products --file=products.json --jsonArray
```
El archivo `products.json` se debe encontrar en la raíz del repositorio. Si deciden moverlo a otro directorio, actualiza la ruta en el comando de importación para que apunte a la ubicación correcta del archivo.


5. **¡Listo!** Ahora podrás ver los productos en tu aplicación local.
