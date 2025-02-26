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
- Nginx (si quieres replicar el entorno de producción)
