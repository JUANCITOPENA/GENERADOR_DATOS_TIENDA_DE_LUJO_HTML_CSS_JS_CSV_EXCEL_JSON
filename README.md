# 📊 Power BI Learning Hub: Generador de Datos y Simulador de Examen PL-300

Una plataforma web integral y de cero dependencias diseñada para ser el campo de entrenamiento definitivo para cualquier persona que quiera dominar Microsoft Power BI. Este proyecto combina dos herramientas poderosas en una sola interfaz:

1.  **Un Generador de Datos Sintéticos**: Crea datasets de ventas de lujo, personalizables y realistas, listos para ser analizados.
2.  **Una Guía Educativa Completa con un Simulador de Examen**: Aprende los conceptos clave y pon a prueba tus conocimientos con un examen de certificación PL-300 que incluye más de 120 preguntas.

**Ideal para analistas de datos, estudiantes, profesionales de BI y educadores** que necesitan practicar y enseñar Power BI sin depender de datos reales o confidenciales.

![GIF del Proyecto](GENERADOR_DATOS.gif)
*(Sugerencia: Reemplaza la imagen estática con un GIF que muestre tanto el generador como el quiz en acción)*

---

## 🎯 ¿Por Qué Este Proyecto?

En el mundo del análisis de datos, uno de los mayores desafíos es encontrar datasets limpios, relevantes y seguros para practicar. Este proyecto nació para resolver ese problema, proporcionando una solución "todo en uno" que no solo genera los datos, sino que también ofrece un camino de aprendizaje estructurado y una forma de validar las habilidades adquiridas, simulando la experiencia de una certificación oficial.

---

## ✨ Características Clave

Este proyecto se divide en dos módulos principales:

### 1. Módulo de Generación de Datos
- 🎨 **Interfaz Intuitiva y Moderna**: Un diseño limpio y responsivo con una paleta de colores profesional que garantiza una excelente experiencia de usuario (UI/UX).
- ⚙️ **Generación de Datos Personalizable**: Configura y genera miles de registros ajustando parámetros clave como rango de fechas, cantidad de registros, productos y vendedores.
- 👔 **Datos Realistas y Relevantes**: Utiliza nombres de productos de marcas de lujo reales (Louis Vuitton, Gucci, Prada) y una estructura de datos coherente para simular un escenario de negocio auténtico.
- 📦 **Exportación Multifomato**: Descarga tus datasets con un solo clic en los formatos más utilizados:
    - **Excel (.xlsx)**: Gracias a la potente librería `SheetJS`.
    - **CSV**: Para máxima compatibilidad con herramientas de análisis.
    - **JSON**: Perfecto para el consumo de datos desde APIs y aplicaciones web.
- 👤 **Modal Interactivo del Autor**: Un elegante modal presenta al desarrollador, sus servicios y enlaces a sus redes profesionales, añadiendo un toque personal al proyecto.

### 2. Módulo Educativo y de Simulación
- 📚 **Guía Maestra de Power BI**: Una sección educativa integrada que explica desde los conceptos básicos hasta técnicas avanzadas de DAX y modelado de datos.
- 🎓 **Simulador de Examen de Certificación PL-300**: Un completo simulador de examen con:
    - **Banco de 120 preguntas** cubriendo Power Query, DAX, Modelado, Visualización y el Ecosistema Power BI.
    - **Selección Aleatoria**: Cada examen consta de 50 preguntas aleatorias para asegurar una experiencia única en cada intento.
    - **Límite de Tiempo y Puntuación**: Simula las condiciones reales del examen con un temporizador de 30 minutos y un 80% para aprobar.
    - **Revisión y Persistencia**: Guarda el historial de intentos, permite revisar respuestas (correctas e incorrectas) y reanudar un examen detenido.
- 📜 **Generación de Certificados**: Los usuarios que aprueban el examen pueden generar y descargar un certificado de finalización personalizado en formato **PNG o PDF**.

---

## 🚀 Stack Tecnológico

Este proyecto fue construido con un enfoque en la simplicidad y el rendimiento, utilizando tecnologías web fundamentales y sin depender de frameworks de frontend.

| Frontend | Estilos | Lógica | Librerías | Iconos y Fuentes |
| :--- | :--- | :--- | :--- | :--- |
| ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) | ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) | ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) | **SheetJS** (Exportar a Excel) <br> **jsPDF & html2canvas** (Generar Certificados) | **Font Awesome** (Iconos) <br> **Google Fonts** (Tipografía) |

---

## 🛠️ Instalación y Uso

> **No se requiere instalación ni servidor.** Este proyecto es 100% *client-side*.

Simplemente sigue estos pasos:
1.  Clona o descarga este repositorio en tu máquina local.
    ```bash
    git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
    ```
2.  Abre el archivo `index.html` en tu navegador web preferido (Google Chrome, Firefox, etc.).
3.  **Para generar datos**: Ajusta los parámetros en el formulario y haz clic en el botón del formato que desees (**CSV, Excel o JSON**).
4.  **Para el examen**: Navega a la sección del quiz, inicia un nuevo intento y pon a prueba tus conocimientos.

---

## 👤 Autor

Creado con ❤️ por **Juancito Peña**.

¡Conectemos! Siempre estoy abierto a discutir sobre tecnología, desarrollo y nuevas oportunidades.

- **GitHub**: [@JUANCITOPENA](https://github.com/JUANCITOPENA)
- **LinkedIn**: [Juancito Peña](https://www.linkedin.com/in/juancitope%C3%B1a/)
- **YouTube**: [JuancitoDevV](https://www.youtube.com/@JuancitoDevV)

---

## 🤝 ¿Quieres Contribuir?

Las contribuciones son bienvenidas. Si tienes ideas para nuevas funcionalidades, mejoras en las preguntas del quiz o encuentras algún bug, no dudes en abrir un *issue* o enviar un *pull request*.

---

## 📄 Licencia

Este proyecto está distribuido bajo la **Licencia MIT**. Consulta el archivo `LICENSE` para más detalles.
