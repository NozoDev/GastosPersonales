# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


#Documentación de Requisitos para el Frontend
1. Introducción
1.1 Objetivo

"La aplicación de gastos tiene como objetivo ayudar a los usuarios a gestionar y controlar sus gastos diarios de manera eficiente y organizada."
1.2 Alcance

"La aplicación permitirá a los usuarios registrar, categorizar y analizar sus gastos, así como establecer presupuestos y objetivos financieros."
2. Requisitos Funcionales
2.1 Home y Autenticación

Requisito 2.1.1: Página de Inicio

    Descripción: La página de inicio debe proporcionar una breve información sobre la aplicación y sus beneficios.
    Funcionalidades:
        Mostrar un mensaje de bienvenida y una breve descripción de la aplicación.
        Incluir un párrafo que indique que es necesario registrarse para usar la aplicación.

Requisito 2.1.2: Botones de Login y Registro

    Descripción: La página de inicio debe tener dos botones, uno para el login y otro para el registro.
    Funcionalidades:
        Botón de Login: Redirige al usuario a la página de inicio de sesión utilizando React Router.
        Botón de Registro: Redirige al usuario a la página de registro utilizando React Router.

Requisito 2.1.3: Autenticación de Usuarios

    Descripción: Los usuarios deben autenticarse para acceder a la aplicación.
    Funcionalidades:
        Registro:
            El usuario debe poder registrarse con un correo electrónico y una contraseña.
            Validar que el correo electrónico no esté ya registrado.
            Enviar un correo de confirmación para verificar la cuenta.
        Login:
            El usuario debe poder iniciar sesión con su correo electrónico y contraseña.
            Mostrar mensajes de error si las credenciales son incorrectas.
        Recuperación de Contraseña:
            Permitir al usuario restablecer su contraseña en caso de olvido.

2.2 Interfaz Principal

Requisito 2.2.1: Dashboard de Gastos

    Descripción: La interfaz principal debe mostrar un resumen de los gastos y otras métricas financieras.
    Funcionalidades:
        Suma de Gastos Diarios:
            Mostrar la suma total de los gastos realizados en el día actual.
        Cuentas por Pagar:
            Mostrar una lista de cuentas por pagar con sus fechas de vencimiento.
        Ahorros:
            Mostrar la cantidad de dinero ahorrada y el objetivo de ahorro.
        Gastos Personales:
            Mostrar cuánto dinero queda disponible para gastar en lo que el usuario desee.

Requisito 2.2.2: Gestión de Gastos

    Descripción: Los usuarios deben poder añadir, editar y eliminar gastos.
    Funcionalidades:
        Añadir Gasto:
            Permitir al usuario añadir un nuevo gasto especificando la cantidad, categoría, fecha y una descripción opcional.
        Editar Gasto:
            Permitir al usuario editar gastos existentes.
        Eliminar Gasto:
            Permitir al usuario eliminar gastos que ya no sean relevantes.

3. Requisitos No Funcionales
3.1 Usabilidad

    Requisito 3.1.1: La interfaz de usuario debe ser intuitiva y fácil de usar.
    Requisito 3.1.2: La aplicación debe ser accesible desde dispositivos móviles y de escritorio.

4. Requisitos Técnicos

Requisito 4.1.1: Plataforma y Tecnología

    Frontend:
        Utilizar React para el desarrollo de la interfaz de usuario.
        Utilizar Tailwind CSS para el diseño y estilización de la interfaz.
        Utilizar React Router Dom para la navegación entre páginas.