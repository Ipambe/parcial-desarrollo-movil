# Examen 1 - AwesomeProject

## Datos del estudiante

- **Nombre:** Rafael Adolfo Rosa
- **Matrícula:** 2023-1025
- **Respositorio**: [parcial-desarrollo-movil](https://github.com/Ipambe/parcial-desarrollo-movil)
- **Telegram**: [enlace-a-telegram](https://t.me/adolfo_rosa)

## Descripción

Esta aplicación móvil fue desarrollada como parte del Examen 1. Cumple con los siguientes requisitos:

- **Presentación:** Pantalla de inicio con mi foto, nombre y apellido.
- **Tabla de multiplicar:** Vista que acepta un número y muestra la tabla de multiplicar del 1 al 14.
- **Números:** Vista que acepta 3 números y muestra el mayor, el menor y el promedio.

## Tecnología utilizada

- **Framework:** React Native

## Estructura de la aplicación

- `src/screens/HomeScreen.tsx`: Pantalla de presentación con foto, nombre y apellido.
- `src/screens/Tabla.tsx`: Vista para ingresar un número y mostrar su tabla de multiplicar.
- `src/screens/NumerosScreen.tsx`: Vista para ingresar tres números y mostrar el mayor, menor y promedio.
- `src/navigator/Navigator.tsx`: Navegación entre las vistas principales.
- `src/App.tsx`: Configuración principal de la app.

## Comentarios en el código

El código contiene comentarios con mi nombre y matrícula en al menos dos archivos diferentes, como lo solicita la tarea.

## Instalación y ejecución

1. **Clonar el repositorio**

   ```sh
   git clone https://github.com/Ipambe/parcial-desarrollo-movil.git
   cd AwesomeProject
   ```

2. **Instalar dependencias**

   ```sh
   npm install
   ```

3. **Ejecutar en Android**

   - Iniciar un emulador o conectar un dispositivo físico.
   - Ejecutar:
     ```sh
     npm run android
     ```

## Generar APK o instalar en un celular

- Para generar un APK de producción:

  1. Ejecuta:
     ```sh
     cd android
     ./gradlew assembleRelease
     ```
  2. El APK generado estará en `android/app/build/outputs/apk/release/app-release.apk`.
  3. Copia el APK a tu dispositivo y ábrelo para instalar.

## Video

- **Link al video:** [Video](https://youtu.be/M70eirCnebs?si=-vi1X_F9M04tgFKc)
- **QR al video:**
  ![QR del video](video_qr.png)
---

> _Este proyecto fue realizado siguiendo las indicaciones del examen, practicando varias veces antes de grabar el video y explicando cada paso en detalle._
