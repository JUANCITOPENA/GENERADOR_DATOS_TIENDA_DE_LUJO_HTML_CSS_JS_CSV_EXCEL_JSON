document.addEventListener('DOMContentLoaded', () => {

    // --- BANCO COMPLETO DE 120 PREGUNTAS ---
    const allQuestions = [
        // Categoría: Power Query / ETL (30 Preguntas)
        { question: "¿Qué herramienta se usa en Power BI para limpiar, transformar y dar forma a los datos?", options: ["DAX Studio", "Power Pivot", "Power Query Editor", "Report View"], correctAnswer: 2 },
        { question: "¿Qué operación de Power Query combina dos tablas una al lado de la otra basándose en una columna común?", options: ["Anexar (Append)", "Combinar (Merge)", "Agrupar por (Group By)", "Transponer (Transpose)"], correctAnswer: 1 },
        { question: "Para combinar múltiples archivos de una carpeta en una sola tabla, ¿qué característica de Power Query es la más eficiente?", options: ["Importar cada archivo individualmente", "Usar el conector de Carpeta (Folder)", "Copiar y pegar los datos", "Crear una función personalizada manualmente"], correctAnswer: 1 },
        { question: "La operación 'Anexar Consultas' (Append Queries) en Power Query es equivalente a qué operación de SQL?", options: ["JOIN", "UNION ALL", "GROUP BY", "WHERE"], correctAnswer: 1 },
        { question: "Si tienes una columna con Nombre y Apellido juntos, ¿qué transformación usarías para separarlos en dos columnas?", options: ["Dividir Columna (Split Column)", "Combinar Columnas (Merge Column)", "Columna Condicional", "Extraer Texto"], correctAnswer: 0 },
        { question: "La opción 'Rellenar Hacia Abajo' (Fill Down) en Power Query sirve para:", options: ["Copiar la última celda vacía hacia abajo", "Reemplazar valores nulos con el valor de la celda superior", "Crear una serie de números", "Eliminar filas con valores nulos"], correctAnswer: 1 },
        { question: "¿Qué es el lenguaje 'M' en el contexto de Power BI?", options: ["Un lenguaje para crear visualizaciones", "El lenguaje de fórmulas de Power Query", "Un alias para DAX", "Un lenguaje de modelado de datos"], correctAnswer: 1 },
        { question: "Para convertir una tabla donde los años son columnas a una tabla donde los años son filas, ¿qué transformación aplicarías?", options: ["Pivote (Pivot)", "Anulación de dinamización de columnas (Unpivot)", "Transponer (Transpose)", "Agrupar por (Group By)"], correctAnswer: 1 },
        { question: "La función 'Quitar Duplicados' (Remove Duplicates) en Power Query:", options: ["Elimina solo las filas completamente idénticas", "Se basa en las columnas seleccionadas para determinar la duplicidad", "Solo funciona con columnas de texto", "Requiere una fórmula M personalizada"], correctAnswer: 1 },
        { question: "¿Qué hace la transformación 'Agrupar por' (Group By)?", options: ["Ordena los datos por una columna específica", "Resume las filas en un valor único (suma, promedio, conteo) basado en una o más columnas", "Crea una copia de la tabla", "Filtra las filas que no cumplen una condición"], correctAnswer: 1 },
        { question: "¿Qué hace la opción 'Detectar Tipo de Datos' en Power Query?", options: ["Convierte automáticamente columnas al tipo más adecuado", "Elimina filas duplicadas", "Agrupa columnas similares", "Crea una tabla dinámica"], correctAnswer: 0 },
        { question: "Si quieres crear una columna condicional en Power Query, ¿qué opción usarías?", options: ["Columna a partir de ejemplos", "Columna personalizada", "Columna condicional", "Invocar función personalizada"], correctAnswer: 2 },
        { question: "La transformación 'Transponer' en Power Query sirve para:", options: ["Invertir el orden de las filas", "Convertir filas en columnas y viceversa", "Crear una copia de la tabla", "Filtrar los datos"], correctAnswer: 1 },
        { question: "Para cambiar el formato de una columna de texto a 'Todo en mayúsculas', irías a:", options: ["Transformar > Formato > MAYÚSCULAS", "Agregar Columna > Formato > MAYÚSCULAS", "Vista > Opciones de Vista", "Herramientas > Opciones de columna"], correctAnswer: 0 },
        { question: "¿Cuál es el propósito de los 'Parámetros' en Power Query?", options: ["Almacenar valores estáticos para filtrar", "Crear elementos dinámicos que pueden ser cambiados por el usuario para, por ejemplo, filtrar datos o cambiar la fuente", "Son variables para cálculos DAX", "Solo sirven para documentar el código M"], correctAnswer: 1 },
        { question: "¿Qué hace la opción 'Usar la primera fila como encabezado'?", options: ["Elimina la primera fila de la tabla", "Promueve la primera fila de datos para que se convierta en los nombres de las columnas", "Crea un duplicado de la primera fila", "Filtra la primera fila"], correctAnswer: 1 },
        { question: "Si necesitas extraer el año de una columna de fecha en Power Query, usarías la transformación:", options: ["Fecha > Año > Año", "Texto > Extraer > Año", "Dividir Columna", "Columna Condicional"], correctAnswer: 0 },
        { question: "El panel 'Configuración de la consulta' en Power Query te permite:", options: ["Cambiar el nombre de la consulta y ver/editar los pasos aplicados", "Escribir fórmulas DAX", "Diseñar visualizaciones", "Publicar el informe"], correctAnswer: 0 },
        { question: "¿Para qué sirve el 'Editor Avanzado' en Power Query?", options: ["Para ver y editar el código M completo de una consulta", "Para crear medidas DAX complejas", "Para cambiar los colores del editor", "Para conectarse a fuentes de datos avanzadas"], correctAnswer: 0 },
        { question: "La opción 'Reemplazar valores' en Power Query te permite:", options: ["Solo reemplazar valores numéricos", "Encontrar y reemplazar un valor específico por otro en una columna seleccionada", "Reemplazar toda una columna", "Eliminar filas con ciertos valores"], correctAnswer: 1 },
        { question: "Si una columna tiene errores (p.ej. 'Error'), ¿cómo puedes manejarlos en Power Query?", options: ["No se pueden manejar", "Usando 'Reemplazar errores' o 'Quitar errores'", "Editando manualmente cada celda", "Convirtiendo la columna a tipo texto"], correctAnswer: 1 },
        { question: "¿Qué es un 'Dataflow' (Flujo de datos) en el contexto de Power BI?", options: ["Un informe de Power BI", "Una colección de tablas creadas y administradas en la nube (usando Power Query Online) que pueden ser reutilizadas", "Una visualización personalizada", "Un tipo de licencia"], correctAnswer: 1 },
        { question: "La transformación 'Columna a partir de ejemplos' permite:", options: ["Crear una nueva columna escribiendo los valores deseados, y Power Query infiere la transformación", "Crear una copia exacta de una columna", "Crear una columna con valores aleatorios", "Crear una columna condicional"], correctAnswer: 0 },
        { question: "El rendimiento de Power Query puede ser afectado negativamente por:", options: ["Pasos de ordenación (Sort) aplicados tempranamente en la consulta", "Usar el tipo de dato correcto", "Eliminar columnas innecesarias", "Filtrar datos en el origen"], correctAnswer: 0 },
        { question: "¿Qué significa 'Query Folding' (Plegado de consultas)?", options: ["El proceso de colapsar los pasos en la interfaz de Power Query", "La capacidad de Power Query de traducir las transformaciones a SQL (u otro lenguaje de origen) y ejecutarlas en la base de datos de origen", "Un error en el código M", "Renombrar una consulta"], correctAnswer: 1 },
        { question: "Para agregar un índice numérico a tus filas, usarías la opción:", options: ["Agregar Columna > Columna de índice", "Transformar > Columna de índice", "No es posible agregar un índice", "Agregar Columna > Columna condicional"], correctAnswer: 0 },
        { question: "Si combinas (Merge) dos tablas con una 'Combinación externa izquierda', el resultado contendrá:", options: ["Solo las filas que coinciden en ambas tablas", "Todas las filas de la primera tabla y las filas coincidentes de la segunda", "Todas las filas de ambas tablas", "Solo las filas que no coinciden en ambas tablas"], correctAnswer: 1 },
        { question: "La opción 'Anular dinamización de otras columnas' es útil cuando:", options: ["Quieres convertir todas las columnas seleccionadas en filas", "Quieres mantener las columnas seleccionadas y convertir todas las demás en pares de atributo-valor", "Quieres eliminar las columnas seleccionadas", "Quieres crear una copia de la tabla"], correctAnswer: 1 },
        { question: "El propósito de crear 'Funciones' en Power Query es:", options: ["Documentar el código", "Aplicar un conjunto de transformaciones reutilizables a diferentes consultas o valores", "Crear visualizaciones", "Escribir código DAX"], correctAnswer: 1 },
        { question: "Para ver las dependencias entre tus consultas en Power Query, usarías:", options: ["El Editor Avanzado", "La vista de 'Dependencias de la consulta'", "El panel de Pasos Aplicados", "No es posible ver las dependencias"], correctAnswer: 1 },

        // Categoría: DAX (40 Preguntas)
        { question: "¿Qué función DAX es esencial para modificar el contexto de filtro de un cálculo?", options: ["SUM", "FILTER", "CALCULATE", "ALL"], correctAnswer: 2 },
        { question: "La principal diferencia entre una Columna Calculada y una Medida es:", options: ["Las columnas se calculan en tiempo de consulta, las medidas en la actualización", "Las columnas se calculan al actualizar y ocupan espacio; las medidas se calculan al vuelo y no", "No hay ninguna diferencia", "Las columnas solo aceptan números, las medidas aceptan texto"], correctAnswer: 1 },
        { question: "Para calcular las ventas del mismo periodo del año anterior, la función DAX más robusta es:", options: ["PREVIOUSYEAR", "YEAR(-1)", "DATEADD", "SAMEPERIODLASTYEAR"], correctAnswer: 3 },
        { question: "La función `ALL()` en DAX se utiliza para:", options: ["Sumar todos los valores de una columna", "Eliminar o ignorar los filtros de una tabla o columna para un cálculo", "Seleccionar todas las filas visibles", "Contar todos los registros"], correctAnswer: 1 },
        { question: "Si quieres sumar los valores de una columna 'Ventas' multiplicada por una columna 'Cantidad', ¿qué función iteradora usarías?", options: ["SUM", "SUMX", "CALCULATE", "AVERAGEX"], correctAnswer: 1 },
        { question: "El 'Contexto de Fila' (Row Context) en DAX se refiere a:", options: ["Los filtros aplicados en el informe", "La capacidad de iterar fila por fila en una tabla", "La relación entre dos tablas", "El tipo de dato de una columna"], correctAnswer: 1 },
        { question: "La función `DIVIDE(numerador, denominador, alternativa)` es preferible a usar el operador '/' porque:", options: ["Es más rápida", "Maneja de forma segura la división por cero", "Funciona con texto", "No hay diferencia"], correctAnswer: 1 },
        { question: "Para crear una tabla calculada en DAX que contenga una lista única de productos, ¿qué función usarías?", options: ["VALUES", "LIST", "UNIQUE", "FILTER"], correctAnswer: 0 },
        { question: "La función `RELATED()` en DAX se utiliza para:", options: ["Crear relaciones entre tablas", "Obtener un valor de una tabla relacionada en el lado 'uno' de una relación", "Contar filas relacionadas", "Filtrar una tabla relacionada"], correctAnswer: 1 },
        { question: "La función `RANKX` se utiliza para:", options: ["Clasificar valores en una columna", "Ordenar una tabla", "Crear un ranking basado en una expresión o medida", "Filtrar los valores más altos"], correctAnswer: 2 },
        { question: "¿Qué hace la función `FILTER`?", options: ["Devuelve un valor único", "Devuelve una tabla que ha sido filtrada", "Modifica el contexto de filtro", "Elimina los filtros"], correctAnswer: 1 },
        { question: "La función `USERELATIONSHIP` se usa dentro de `CALCULATE` para:", options: ["Crear una nueva relación", "Activar una relación inactiva para un cálculo específico", "Eliminar una relación", "Cambiar la dirección del filtro"], correctAnswer: 1 },
        { question: "Si quieres contar el número de productos distintos vendidos, ¿qué función usarías?", options: ["COUNT", "COUNTROWS", "DISTINCTCOUNT", "VALUES"], correctAnswer: 2 },
        { question: "El 'Contexto de Transición' (Context Transition) ocurre cuando:", options: ["Se crea una nueva relación", "Una medida es usada dentro de una columna calculada o una función iteradora, convirtiendo el contexto de fila en contexto de filtro", "Se cambia de página en el informe", "Se actualiza el conjunto de datos"], correctAnswer: 1 },
        { question: "La función `KEEPFILTERS` se usa para:", options: ["Eliminar todos los filtros", "Mantener los filtros existentes en lugar de sobrescribirlos al aplicar un nuevo filtro dentro de `CALCULATE`", "Guardar los filtros para usarlos más tarde", "Crear filtros complejos"], correctAnswer: 1 },
        { question: "Para calcular un promedio móvil de 3 días de ventas, ¿qué función de inteligencia de tiempo sería más apropiada?", options: ["SAMEPERIODLASTYEAR", "DATESINPERIOD", "TOTALYTD", "NEXTDAY"], correctAnswer: 1 },
        { question: "La función `SWITCH(TRUE(), ...)` es una forma elegante de escribir:", options: ["Una suma simple", "Una serie de sentencias IF anidadas", "Una función de filtro", "Una función de ranking"], correctAnswer: 1 },
        { question: "La función `VAR` en DAX es útil para:", options: ["Crear variables para almacenar resultados de expresiones y mejorar la legibilidad y el rendimiento", "Crear una tabla de variables", "Conectar a una base de datos", "No existe tal función"], correctAnswer: 0 },
        { question: "¿Cuál es el resultado de `ALLSELECTED`?", options: ["Elimina todos los filtros del modelo", "Respeta los filtros de los segmentadores y visuales, pero ignora los filtros del visual actual", "Es igual que `ALL`", "Selecciona todos los datos de una tabla"], correctAnswer: 1 },
        { question: "La función `CONCATENATEX` es útil para:", options: ["Sumar valores de texto", "Unir los valores de una columna de texto, con un delimitador, para cada fila de una tabla", "Contar caracteres", "Crear una columna concatenada"], correctAnswer: 1 },
        { question: "La función `TREATAS` se utiliza para:", options: ["Convertir un tipo de dato", "Aplicar filtros de una tabla a otra tabla no relacionada, creando una relación virtual", "Crear una tabla de tratamiento", "Formatear un valor"], correctAnswer: 1 },
        { question: "¿Qué hace `CALCULATETABLE`?", options: ["Es igual que `CALCULATE`", "Devuelve una tabla evaluada en un contexto de filtro modificado", "Crea una tabla calculada", "Filtra una tabla existente"], correctAnswer: 1 },
        { question: "Para obtener la fecha del primer día del mes actual, podrías usar:", options: ["STARTOFMONTH(Calendario[Fecha])", "FIRSTDATE(Calendario[Fecha])", "MIN(Calendario[Fecha])", "TODAY()"], correctAnswer: 0 },
        { question: "La función `SELECTEDVALUE` es útil para:", options: ["Sumar los valores seleccionados", "Obtener el valor de una columna solo si hay un único valor seleccionado en el contexto de filtro actual", "Contar selecciones", "Filtrar por el valor seleccionado"], correctAnswer: 1 },
        { question: "Si quieres calcular el total acumulado de ventas a lo largo del año, ¿qué función usarías?", options: ["TOTALYTD", "SUM", "DATESYTD", "CALCULATE"], correctAnswer: 0 },
        { question: "La función `CROSSFILTER` permite:", options: ["Crear una relación cruzada", "Cambiar la dirección del filtro de una relación para un cálculo específico", "Filtrar dos tablas a la vez", "Eliminar filtros"], correctAnswer: 1 },
        { question: "Para obtener el valor de una columna en la fila anterior (en el contexto de una columna calculada), ¿qué función podrías usar?", options: ["PREVIOUS()", "EARLIER()", "LOOKUPVALUE()", "No es posible directamente"], correctAnswer: 1 },
        { question: "¿Qué es una 'Variable de Tabla' en DAX?", options: ["Una tabla física en el modelo", "Una variable declarada con `VAR` que almacena una tabla completa como resultado de una expresión", "Una tabla conectada a una variable", "No existen las variables de tabla"], correctAnswer: 1 },
        { question: "La función `GENERATE` en DAX se utiliza para:", options: ["Generar números aleatorios", "Crear una tabla a partir del producto cartesiano de dos tablas", "Generar una serie de fechas", "Crear una columna calculada"], correctAnswer: 1 },
        { question: "El orden de evaluación en `CALCULATE` es:", options: ["Los modificadores de filtro se aplican primero, luego se evalúa la expresión", "La expresión se evalúa primero, luego se aplican los filtros", "Es aleatorio", "No importa el orden"], correctAnswer: 0 },
        { question: "La función `TOPN` devuelve:", options: ["El valor más alto", "Una tabla con el número N de filas superiores de otra tabla, basado en una expresión", "El ranking de un valor", "Una lista de los N valores más altos"], correctAnswer: 1 },
        { question: "¿Qué hace la función `ADDCOLUMNS`?", options: ["Añade columnas a una tabla física", "Devuelve una tabla con nuevas columnas añadidas", "Suma los valores de varias columnas", "Modifica una tabla existente"], correctAnswer: 1 },
        { question: "Para encontrar el precio de un producto en una tabla de productos no relacionada, usarías:", options: ["RELATED", "VLOOKUP", "LOOKUPVALUE", "SEARCH"], correctAnswer: 2 },
        { question: "La función `ISFILTERED` devuelve TRUE si:", options: ["La columna especificada está siendo filtrada directamente", "Hay algún filtro en el informe", "La tabla está filtrada", "El valor es un filtro"], correctAnswer: 0 },
        { question: "La diferencia entre `SUM` y `SUMX` es:", options: ["No hay diferencia", "`SUM` es más rápida", "`SUM` agrega una columna, `SUMX` es una medida que itera y suma una expresión fila por fila", "`SUMX` solo funciona con números enteros"], correctAnswer: 2 },
        { question: "La función `DATESBETWEEN` devuelve:", options: ["Una tabla que contiene una columna de fechas entre una fecha de inicio y una fecha de fin", "El número de días entre dos fechas", "Una sola fecha", "Un valor booleano"], correctAnswer: 0 },
        { question: "¿Cuál de estas funciones NO es una función de inteligencia de tiempo?", options: ["TOTALYTD", "SAMEPERIODLASTYEAR", "CALCULATE", "DATEADD"], correctAnswer: 2 },
        { question: "Para obtener una lista de valores de una columna que existen en el contexto de filtro actual, usarías:", options: ["VALUES", "ALL", "FILTER", "LIST"], correctAnswer: 0 },
        { question: "El propósito de las 'Time Intelligence Functions' es simplificar cálculos que comparan períodos de tiempo.", options: ["Verdadero", "Falso"], correctAnswer: 0 },
        
        // Categoría: Data Modeling (20 Preguntas)
        { question: "En un modelo de datos, el 'Esquema de Estrella' (Star Schema) consiste en:", options: ["Múltiples tablas de hechos conectadas entre sí", "Una tabla de hechos central rodeada de tablas de dimensiones", "Una sola tabla grande con toda la información", "Tablas conectadas en una cadena larga"], correctAnswer: 1 },
        { question: "La 'Cardinalidad' de una relación se refiere a:", options: ["La dirección del filtro", "La unicidad de los valores en las columnas relacionadas (uno a uno, uno a muchos, etc.)", "La cantidad de columnas en la relación", "Si la relación está activa o inactiva"], correctAnswer: 1 },
        { question: "La tabla que contiene eventos numéricos y medibles (como ventas o costos) se llama:", options: ["Tabla de Hechos (Fact Table)", "Tabla de Dimensiones (Dimension Table)", "Tabla de Búsqueda (Lookup Table)", "Tabla Puente (Bridge Table)"], correctAnswer: 0 },
        { question: "Una 'Tabla de Dimensiones' en un modelo de datos describe:", options: ["Las métricas del negocio", "El contexto del negocio (quién, qué, dónde, cuándo)", "Las relaciones complejas", "Los cálculos DAX"], correctAnswer: 1 },
        { question: "¿Por qué se recomienda evitar relaciones de 'Muchos a Muchos' (*:*) si es posible?", options: ["Porque no están permitidas en Power BI", "Porque pueden crear ambigüedad en los cálculos y afectar el rendimiento", "Porque solo funcionan con DirectQuery", "Porque no se pueden usar con DAX"], correctAnswer: 1 },
        { question: "¿Qué es una 'clave primaria' (primary key) en el contexto de una tabla de dimensiones?", options: ["Cualquier columna de la tabla", "Una columna que identifica de forma única cada fila de la tabla", "Una columna que se usa para medir", "Una columna con valores duplicados"], correctAnswer: 1 },
        { question: "La 'Dirección de Filtro Cruzado' (Cross-filter direction) en una relación determina:", options: ["Qué tabla puede filtrar a la otra", "La cardinalidad de la relación", "Si la relación está activa", "El número de columnas en la relación"], correctAnswer: 0 },
        { question: "Marcar una tabla como 'Tabla de Fechas' en Power BI es importante para:", options: ["Mejorar el diseño visual", "Permitir el uso correcto de las funciones de inteligencia de tiempo de DAX", "Acelerar la carga de datos", "No tiene ningún efecto especial"], correctAnswer: 1 },
        { question: "Un 'Esquema de Copo de Nieve' (Snowflake Schema) es una variación del esquema de estrella donde:", options: ["No hay tablas de hechos", "Las tablas de dimensiones están normalizadas en tablas adicionales", "Todas las tablas están conectadas a todas", "Solo hay una tabla"], correctAnswer: 1 },
        { question: "¿Qué es una 'relación inactiva'?", options: ["Una relación rota", "Una relación adicional entre dos tablas que solo se activa cuando se la invoca con `USERELATIONSHIP`", "Una relación con cardinalidad de muchos a muchos", "Una relación que no filtra datos"], correctAnswer: 1 },
        { question: "La 'granularidad' de una tabla de hechos se refiere a:", options: ["El número de columnas", "El nivel de detalle que representa cada fila (p. ej., venta diaria por producto vs. venta mensual)", "El tamaño de la tabla en MB", "El tipo de datos en la tabla"], correctAnswer: 1 },
        { question: "Una buena práctica en el modelado es ocultar las columnas de clave foránea en la vista de informe.", options: ["Verdadero", "Falso"], correctAnswer: 0 },
        { question: "Una 'Tabla Puente' (Bridge Table) se usa típicamente para resolver relaciones de:", options: ["Uno a uno", "Uno a muchos", "Muchos a muchos", "No se usa para relaciones"], correctAnswer: 2 },
        { question: "La 'Normalización' en el modelado de datos es el proceso de:", options: ["Crear una sola tabla grande", "Organizar las columnas y tablas para minimizar la redundancia de datos", "Sumar todos los valores", "Ocultar columnas"], correctAnswer: 1 },
        { question: "El motor de análisis que impulsa el modelo de datos de Power BI se conoce como:", options: ["Power Query Engine", "SQL Server", "VertiPaq (xVelocity)", "Azure Data Lake"], correctAnswer: 2 },
        { question: "La mejor práctica para organizar el modelo es colocar las tablas de dimensiones arriba y las tablas de hechos abajo.", options: ["Verdadero", "Falso"], correctAnswer: 0 },
        { question: "¿Qué es una 'jerarquía' en un modelo de datos?", options: ["Una relación entre tablas", "Una estructura que define niveles de navegación (ej. Año > Trimestre > Mes)", "Un cálculo DAX complejo", "Un filtro aplicado al informe"], correctAnswer: 1 },
        { question: "Si tienes dos tablas de fechas (Fecha de Pedido y Fecha de Envío) relacionadas con una tabla de hechos, la mejor práctica es:", options: ["Crear dos relaciones activas con la tabla de calendario", "Crear una relación activa (p.ej., con Fecha de Pedido) y una inactiva (con Fecha de Envío) con una única tabla de calendario", "No usar una tabla de calendario", "Combinar las fechas en una sola columna"], correctAnswer: 1 },
        { question: "Las tablas de dimensiones deben ser:", options: ["Anchas y cortas (muchas columnas, pocas filas)", "Estrechas y largas (pocas columnas, muchas filas)", "Generalmente más largas que las tablas de hechos", "La forma no importa"], correctAnswer: 0 },
        { question: "El objetivo final del modelado de datos en Power BI es crear un modelo que sea:", options: ["Lo más complejo posible", "Intuitivo para el usuario, eficiente para los cálculos y fácil de mantener", "Idéntico a la base de datos de origen", "Una sola tabla plana"], correctAnswer: 1 },

        // Categoría: Visualization (15 Preguntas)
        { question: "Para mostrar la contribución de cada categoría al total de ventas, ¿qué visualización sería más apropiada?", options: ["Gráfico de Líneas", "Gráfico de Tarta o Anillo", "KPI", "Tabla"], correctAnswer: 1 },
        { question: "La funcionalidad de 'Drill Through' (Obtención de detalles) en Power BI permite:", options: ["Filtrar todos los gráficos en la página", "Navegar a otra página de informe para obtener detalles de un punto de datos específico", "Crear jerarquías en un gráfico", "Exportar los datos de una visualización"], correctAnswer: 1 },
        { question: "Para aplicar colores a las barras de un gráfico basados en el valor de una medida (ej. verde si el beneficio es positivo, rojo si es negativo), usarías:", options: ["El panel de Temas", "Formato Condicional", "La configuración de color manual", "Una fórmula DAX en la propia barra"], correctAnswer: 1 },
        { question: "Un 'Tooltip' (Información sobre herramientas) personalizado en Power BI te permite:", options: ["Mostrar una página de informe completa al pasar el mouse sobre un punto de datos", "Cambiar el título de un gráfico", "Añadir comentarios a una visualización", "Filtrar el informe"], correctAnswer: 0 },
        { question: "Si quieres comparar las ventas de diferentes productos, ¿cuál de estas visualizaciones es la más efectiva y recomendada?", options: ["Gráfico de Barras o Columnas", "Gráfico de Tarta", "Tarjeta (Card)", "Medidor (Gauge)"], correctAnswer: 0 },
        { question: "La visualización 'Segmentación de datos' (Slicer) se utiliza para:", options: ["Mostrar un KPI importante", "Filtrar los datos en la página del informe", "Mostrar tendencias a lo largo del tiempo", "Crear una tabla"], correctAnswer: 1 },
        { question: "Para mostrar la relación entre dos variables numéricas, la mejor visualización sería un:", options: ["Gráfico de Dispersión (Scatter Chart)", "Gráfico de Barras", "Gráfico de Anillo", "Mapa"], correctAnswer: 0 },
        { question: "La opción de 'Sincronizar Segmentadores' (Sync Slicers) permite:", options: ["Que un segmentador en una página filtre también otras páginas del informe", "Copiar un segmentador a otra página", "Cambiar el formato de todos los segmentadores a la vez", "Eliminar todos los segmentadores"], correctAnswer: 0 },
        { question: "Un 'Bookmark' (Marcador) en Power BI puede guardar el estado de:", options: ["Solo los filtros", "La visibilidad de los objetos, los filtros y la ordenación de un informe", "Solo la página actual", "Solo los datos"], correctAnswer: 1 },
        { question: "La visualización 'Matriz' (Matrix) es similar a una:", options: ["Tabla dinámica (Pivot Table) en Excel", "Gráfico de líneas", "Lista simple", "Tarjeta de KPI"], correctAnswer: 0 },
        { question: "Para mostrar una medida a lo largo del tiempo, como las ventas mensuales, el visual más adecuado es:", options: ["Gráfico de Líneas o Columnas", "Gráfico de Tarta", "Mapa de árbol", "Gráfico de dispersión"], correctAnswer: 0 },
        { question: "El panel de 'Análisis' (Analytics Pane) en una visualización permite añadir:", options: ["Filtros adicionales", "Líneas de referencia como línea de promedio, constante o percentil", "Texto descriptivo", "Imágenes"], correctAnswer: 1 },
        { question: "El 'Tema' (Theme) de un informe de Power BI controla:", options: ["El conjunto de datos", "Los cálculos DAX", "La paleta de colores, fuentes y otras propiedades visuales predeterminadas del informe", "La seguridad del informe"], correctAnswer: 2 },
        { question: "¿Qué visualización usarías para mostrar datos geográficos de ventas por ciudad o país?", options: ["Gráfico de Barras", "Mapa", "Gráfico de líneas", "Tabla"], correctAnswer: 1 },
        { question: "La interacción predeterminada entre visualizaciones en una página de informe es que al seleccionar un punto de datos en un gráfico, las demás se:", options: ["Resaltan (Highlight)", "Filtran (Filter)", "No hacen nada", "Muestran un error"], correctAnswer: 0 },
        
        // Categoría: Power BI Service & Ecosystem (15 Preguntas)
        { question: "¿Cuál es la principal diferencia entre un 'Informe' (Report) y un 'Panel' (Dashboard) en el Servicio Power BI?", options: ["No hay diferencia", "Los informes son interactivos, los paneles no", "Los paneles son una vista de una sola página, a menudo con visuales de múltiples informes; los informes son multipágina y detallados", "Los paneles solo se pueden ver en el móvil"], correctAnswer: 2 },
        { question: "Para programar la actualización automática de un conjunto de datos publicado desde una fuente de datos local, necesitas configurar un:", options: ["Área de trabajo (Workspace)", "Flujo de datos (Dataflow)", "Gateway (Puerta de enlace de datos)", "Paquete de contenido"], correctAnswer: 2 },
        { question: "La 'Seguridad a Nivel de Fila' (Row-Level Security - RLS) se utiliza para:", options: ["Ocultar páginas completas de un informe", "Restringir el acceso a los datos para diferentes usuarios basándose en roles", "Proteger el archivo .pbix con una contraseña", "Encriptar el conjunto de datos"], correctAnswer: 1 },
        { question: "Un 'Área de Trabajo' (Workspace) en el Servicio Power BI es un espacio para:", options: ["Escribir código DAX", "Colaborar con colegas en informes, paneles y conjuntos de datos", "Transformar datos", "Comprar visualizaciones personalizadas"], correctAnswer: 1 },
        { question: "La opción 'Publicar' en Power BI Desktop se utiliza para:", options: ["Guardar el archivo localmente", "Enviar el informe al Servicio Power BI para compartirlo", "Imprimir el informe", "Exportar los datos a Excel"], correctAnswer: 1 },
        { question: "¿Qué tipo de licencia de Power BI se necesita como mínimo para compartir contenido con otros usuarios?", options: ["Power BI Free", "Power BI Pro", "Power BI Premium por Usuario", "Tanto Pro como Premium por Usuario"], correctAnswer: 3 },
        { question: "La funcionalidad 'Preguntas y Respuestas' (Q&A) permite a los usuarios:", options: ["Hacer preguntas sobre los datos en lenguaje natural para obtener respuestas visuales", "Chatear con otros usuarios", "Dejar comentarios en un informe", "Editar las fórmulas DAX"], correctAnswer: 0 },
        { question: "Un 'Conjunto de Datos Certificado' (Certified Dataset) en el Servicio Power BI significa que:", options: ["Es un conjunto de datos muy grande", "La organización lo ha validado como una fuente de datos autorizada y de alta calidad", "Contiene datos confidenciales", "Solo puede ser usado por administradores"], correctAnswer: 1 },
        { question: "Para insertar un informe de Power BI en una página de SharePoint Online o en un sitio web público, usarías la opción de:", options: ["Insertar (Embed)", "Exportar", "Imprimir", "Suscribirse"], correctAnswer: 0 },
        { question: "Las 'Suscripciones' en el Servicio Power BI te permiten:", options: ["Pagar por la licencia", "Recibir una instantánea del informe por correo electrónico de forma programada", "Descargar el archivo .pbix", "Editar el informe en la nube"], correctAnswer: 1 },
        { question: "¿Qué es Power BI Report Server?", options: ["Otro nombre para el Servicio Power BI", "Una solución local (on-premises) para alojar y gestionar informes de Power BI dentro de la red de una organización", "Una aplicación móvil", "Una herramienta para optimizar informes"], correctAnswer: 1 },
        { question: "Un 'App' de Power BI es:", options: ["La aplicación de escritorio", "Un paquete de paneles, informes y conjuntos de datos relacionados que se distribuye a una amplia audiencia", "Una visualización personalizada", "Una aplicación móvil para ver informes"], correctAnswer: 1 },
        { question: "El 'Linaje de Datos' (Data Lineage View) en el Servicio Power BI muestra:", options: ["El historial de actualizaciones del conjunto de datos", "Las relaciones entre los diferentes artefactos (dataflows, datasets, informes, paneles) en un área de trabajo", "Los roles de seguridad", "El código M de las consultas"], correctAnswer: 1 },
        { question: "La diferencia principal entre Power BI Desktop y el Servicio Power BI es:", options: ["Desktop es para crear informes, Service es para consumirlos y compartirlos", "Desktop es gratis, Service es de pago", "Desktop es para Mac, Service es para Windows", "No hay diferencia"], correctAnswer: 0 },
        { question: "¿Qué es Microsoft Fabric?", options: ["Un nuevo tipo de visualización en Power BI", "Una plataforma de análisis unificada de extremo a extremo que integra Power BI con otras cargas de trabajo de datos como Data Factory y Synapse", "Una versión de Power BI para desarrolladores", "Una herramienta para crear temas de informes"], correctAnswer: 1 },
    ];
    
    // --- VARIABLES Y CONSTANTES ---
    const QUIZ_DURATION = 30 * 60;
    const QUESTIONS_PER_QUIZ = 50;
    const PASSING_SCORE_PERCENTAGE = 80;

    let quizQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = QUIZ_DURATION;
    let userAnswers = [];
    let quizState = null;

    // --- REFERENCIAS AL DOM ---
    const quizContainer = document.getElementById('quiz-container');
    const startScreen = document.getElementById('quiz-start-screen');
    const mainScreen = document.getElementById('quiz-main-screen');
    const resultsScreen = document.getElementById('quiz-results-screen');
    const certificateWrapper = document.getElementById('certificate-wrapper');
    const historyScreen = document.getElementById('quiz-history-screen');
    
    // --- LÓGICA DE INICIALIZACIÓN ---
    function initializeQuizView() {
        console.log("✅ Inicializando vista del quiz...");
        if (localStorage.getItem('quizState')) {
            document.getElementById('resume-quiz-btn').style.display = 'inline-block';
            console.log(" Módulo de Reanudar: Activo.");
        }
        const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
        if (history.length > 0) {
            document.getElementById('view-history-btn').style.display = 'inline-block';
            console.log(" Módulo de Historial: Activo.");
        }
    }
    
    // --- NAVEGACIÓN ENTRE PANTALLAS ---
    function showScreen(screenToShow) {
        console.log(` Navegación: Mostrando pantalla -> ${screenToShow.id}`);
        [startScreen, mainScreen, resultsScreen, historyScreen, certificateWrapper].forEach(screen => {
            screen.classList.add('hidden');
        });
        screenToShow.classList.remove('hidden');
    }
    
    // --- LÓGICA DEL QUIZ ---
    function startQuiz() {
        console.log(" Módulo de Quiz: Iniciando nuevo examen...");
        // Mezcla las preguntas de forma aleatoria para cada intento
        const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
        quizQuestions = shuffled.slice(0, Math.min(QUESTIONS_PER_QUIZ, allQuestions.length));
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = new Array(quizQuestions.length).fill(null);
        timeLeft = QUIZ_DURATION;
        showScreen(mainScreen);
        displayQuestion();
        startTimer();
    }
    
    function displayQuestion() {
        if (currentQuestionIndex >= quizQuestions.length) {
            endQuiz();
            return;
        }
        const question = quizQuestions[currentQuestionIndex];
        document.getElementById('quiz-progress').textContent = `Pregunta ${currentQuestionIndex + 1} de ${quizQuestions.length}`;
        document.getElementById('question-text').textContent = question.question;
        const answerOptionsContainer = document.getElementById('answer-options');
        answerOptionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('answer-option');
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectAnswer(index, optionElement));
            answerOptionsContainer.appendChild(optionElement);
        });
    }

    function selectAnswer(selectedIndex, optionElement) {
        const question = quizQuestions[currentQuestionIndex];
        const isCorrect = selectedIndex === question.correctAnswer;
        userAnswers[currentQuestionIndex] = {
            question: question.question,
            options: question.options,
            selected: selectedIndex,
            correct: question.correctAnswer,
            isCorrect: isCorrect
        };
        
        // Deshabilita todas las opciones para prevenir múltiples clics
        Array.from(document.getElementById('answer-options').children).forEach(child => child.classList.add('disabled'));

        if (isCorrect) {
            score++;
            optionElement.classList.add('correct');
        } else {
            optionElement.classList.add('incorrect');
            // Muestra cuál era la respuesta correcta
            document.getElementById('answer-options').children[question.correctAnswer].classList.add('correct');
        }

        // Espera 1.5 segundos antes de pasar a la siguiente pregunta
        setTimeout(() => {
            currentQuestionIndex++;
            displayQuestion();
        }, 1500);
    }
    
    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById('quiz-timer').textContent = `Tiempo: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            if (timeLeft <= 0) {
                console.log("Tiempo agotado. Finalizando examen.");
                endQuiz();
            }
        }, 1000);
    }
    
    function stopQuiz() {
        console.log("Examen detenido por el usuario.");
        clearInterval(timer);
        quizState = {
            questions: quizQuestions,
            currentIndex: currentQuestionIndex,
            score: score,
            answers: userAnswers,
            time: timeLeft
        };
        localStorage.setItem('quizState', JSON.stringify(quizState));
        showScreen(startScreen);
        document.getElementById('resume-quiz-btn').style.display = 'inline-block';
    }

    function resumeQuiz() {
        console.log("Reanudando examen...");
        quizState = JSON.parse(localStorage.getItem('quizState'));
        if (quizState) {
            quizQuestions = quizState.questions;
            currentQuestionIndex = quizState.currentIndex;
            score = quizState.score;
            userAnswers = quizState.answers;
            timeLeft = quizState.time;
            showScreen(mainScreen);
            displayQuestion();
            startTimer();
        } else {
            console.error("No se encontró estado de examen para reanudar.");
        }
    }

    function endQuiz() {
        console.log(" Módulo de Quiz: Examen finalizado. Calculando resultados...");
        clearInterval(timer);
        localStorage.removeItem('quizState');
        document.getElementById('resume-quiz-btn').style.display = 'none';
        const scorePercentage = (quizQuestions.length > 0) ? (score / quizQuestions.length) * 100 : 0;
        const passed = scorePercentage >= PASSING_SCORE_PERCENTAGE;
        console.log(` Resultado: ${passed ? 'Aprobado' : 'No Aprobado'} con ${scorePercentage.toFixed(2)}%`);
        
        document.getElementById('score-summary').innerHTML = `
            <p class="${passed ? 'score-pass' : 'score-fail'}">${passed ? '¡APROBADO!' : 'NO APROBADO'}</p>
            <p>Tu puntuación fue: <strong>${scorePercentage.toFixed(2)}%</strong></p>
            <p>Respuestas Correctas: ${score} de ${quizQuestions.length}</p>
        `;

        if (passed) {
            document.getElementById('certificate-form-container').classList.remove('hidden');
            document.getElementById('retake-quiz-btn').classList.add('hidden');
        } else {
            document.getElementById('certificate-form-container').classList.add('hidden');
            document.getElementById('retake-quiz-btn').classList.remove('hidden');
        }

        showScreen(resultsScreen);
        
        const currentAttempt = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            score: scorePercentage,
            correct: score,
            total: quizQuestions.length,
            passed: passed,
            answers: userAnswers
        };
        const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
        history.push(currentAttempt);
        localStorage.setItem('quizHistory', JSON.stringify(history));
        console.log(" Módulo de Historial: Intento guardado con ID:", currentAttempt.id);
        
        if (history.length > 0) {
            document.getElementById('view-history-btn').style.display = 'inline-block';
        }
    }
    
    function generateCertificate(attemptData, name, lastname) {
        console.log(" Módulo de Certificado: Generando certificado...");
        const { score, correct, total, time } = attemptData;
        
        document.getElementById('cert-user-name').textContent = `${name} ${lastname}`;
        document.getElementById('cert-score').textContent = `${score.toFixed(2)}%`;
        document.getElementById('cert-correct').textContent = correct;
        document.getElementById('cert-incorrect').textContent = total - correct;
        
        if (time !== undefined) {
            const timeTaken = QUIZ_DURATION - time;
            const minutes = Math.floor(timeTaken / 60);
            const seconds = timeTaken % 60;
            document.getElementById('cert-time').textContent = `${minutes}m ${seconds}s`;
        } else {
            document.getElementById('cert-time').textContent = 'N/A';
        }
        showScreen(certificateWrapper);
    }

    function displayHistory(filter = 'all') {
        console.log(` Módulo de Historial: Mostrando historial con filtro '${filter}'`);
        showScreen(historyScreen);
        document.getElementById('history-content').classList.remove('hidden');
        document.getElementById('review-content').classList.add('hidden');

        const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
        if (history.length === 0) {
            document.getElementById('history-content').innerHTML = "<p>Aún no has completado ningún intento.</p>";
            return;
        }

        const filteredHistory = history.filter(attempt => {
            if (filter === 'passed') return attempt.passed;
            if (filter === 'failed') return !attempt.passed;
            return true;
        });

        let tableHTML = `
            <h3>Historial de Intentos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Puntuación</th>
                        <th>Resultado</th>
                        <th class="actions-header">Acciones</th>
                    </tr>
                </thead>
                <tbody>
        `;
        if (filteredHistory.length === 0) {
            tableHTML += `<tr><td colspan="4">No hay intentos que coincidan con este filtro.</td></tr>`;
        } else {
            [...filteredHistory].reverse().forEach(attempt => {
                tableHTML += `
                    <tr>
                        <td>${attempt.date || 'N/A'}</td>
                        <td>${attempt.score.toFixed(2)}%</td>
                        <td class="${attempt.passed ? 'pass' : 'fail'}">${attempt.passed ? 'Aprobado' : 'No Aprobado'}</td>
                        <td class="actions-cell">
                            <button class="action-btn review-attempt-btn" data-attempt-id="${attempt.id}">Revisar</button>
                            ${attempt.passed ? `<button class="action-btn regenerate-cert-btn" data-attempt-id="${attempt.id}">Certificado</button>` : ''}
                        </td>
                    </tr>
                `;
            });
        }
        tableHTML += `</tbody></table>`;
        document.getElementById('history-content').innerHTML = tableHTML;
    }
    
    function reviewAttempt(attemptId) {
        console.log(` Módulo de Historial: Solicitud para revisar intento con ID: ${attemptId}`);
        const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
        const attempt = history.find(a => a.id === attemptId);
        if (!attempt) {
            console.error(" Error: Intento no encontrado en el historial.");
            return;
        }
        document.getElementById('history-content').classList.add('hidden');
        const reviewContent = document.getElementById('review-content');
        reviewContent.classList.remove('hidden');
        let reviewHTML = `<h4>Revisión del Intento de: ${attempt.date}</h4>`;
        attempt.answers.forEach((answer, index) => {
            if (!answer) return;
            reviewHTML += `<div class="review-question"><p>${index + 1}. ${answer.question}</p>`;
            answer.options.forEach((option, optionIndex) => {
                let classes = "review-option";
                if (optionIndex === answer.correct) classes += " correct-answer";
                if (optionIndex === answer.selected && !answer.isCorrect) classes += " wrong-selection";
                reviewHTML += `<span class="${classes}">${option}</span>`;
            });
            reviewHTML += `</div>`;
        });
        reviewContent.innerHTML = reviewHTML;
    }

    function regenerateCertificate(attemptId) {
        console.log(` Módulo de Certificado: Solicitud para regenerar certificado del intento ID: ${attemptId}`);
        const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
        const attempt = history.find(a => a.id === attemptId);
        if (!attempt || !attempt.passed) {
            console.error(" Error: Intento no encontrado o no fue aprobado.");
            return;
        }
        showScreen(resultsScreen);
        document.getElementById('score-summary').innerHTML = `
            <p class="score-pass">¡APROBADO!</p>
            <p>Puntuación: <strong>${attempt.score.toFixed(2)}%</strong></p>
            <p>Respuestas Correctas: ${attempt.correct} de ${attempt.total}</p>
        `;
        document.getElementById('certificate-form-container').classList.remove('hidden');
        document.getElementById('certificate-form').onsubmit = (e) => {
            e.preventDefault();
            console.log(" Formulario de certificado (regenerado) enviado.");
            const name = document.getElementById('user-name').value;
            const lastname = document.getElementById('user-lastname').value;
            const certData = { score: attempt.score, correct: attempt.correct, total: attempt.total, time: undefined };
            generateCertificate(certData, name, lastname);
        };
    }

    function backToStart() {
        console.log(" Navegación: Volviendo a la pantalla de inicio.");
        showScreen(startScreen);
    }

    // --- DELEGACIÓN DE EVENTOS PRINCIPAL (CORREGIDA Y ROBUSTA) ---
    quizContainer.addEventListener('click', (e) => {
        const target = e.target;

        // Pantalla de Inicio
        if (target.id === 'start-quiz-btn') startQuiz();
        if (target.id === 'resume-quiz-btn') resumeQuiz();
        if (target.id === 'view-history-btn') displayHistory('all');

        // Examen en curso
        if (target.id === 'stop-quiz-btn') stopQuiz();
        
        // Pantalla de Resultados
        if (target.id === 'retake-quiz-btn') startQuiz();
        if (target.id === 'review-answers-btn') {
            const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
            if (history.length > 0) {
                const lastAttemptId = history[history.length - 1].id;
                showScreen(historyScreen);
                reviewAttempt(lastAttemptId);
            }
        }
        
        // --- INICIO DE LA CORRECCIÓN ---
        // Pantalla de Historial
        const reviewBtn = target.closest('.review-attempt-btn');
        if (reviewBtn) {
            const attemptId = parseInt(reviewBtn.dataset.attemptId, 10); // FIX: Leer ID del botón
            if (!isNaN(attemptId)) {
                reviewAttempt(attemptId);
            } else {
                console.error("[ERROR] No se pudo obtener el ID del intento desde el botón.");
            }
        }

        const certBtn = target.closest('.regenerate-cert-btn');
        if (certBtn) {
            const attemptId = parseInt(certBtn.dataset.attemptId, 10); // FIX: Leer ID del botón
            if (!isNaN(attemptId)) {
                regenerateCertificate(attemptId);
            } else {
                console.error("[ERROR] No se pudo obtener el ID del intento desde el botón.");
            }
        }
        // --- FIN DE LA CORRECCIÓN ---

        if (target.closest('.history-filters button')) {
            const filter = target.dataset.filter;
            displayHistory(filter);
        }
        if (target.id === 'back-to-start-btn') {
            backToStart();
        }

        // Pantalla del Certificado
        if (target.id === 'back-to-quiz-start-btn') {
            backToStart();
        }
    });

    // --- EVENT LISTENERS PARA FORMULARIOS Y DESCARGAS ---
    document.getElementById('certificate-form').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(" Formulario de certificado enviado.");
        const name = document.getElementById('user-name').value;
        const lastname = document.getElementById('user-lastname').value;
        const certData = {
            score: (score / quizQuestions.length) * 100,
            correct: score,
            total: quizQuestions.length,
            time: timeLeft
        };
        generateCertificate(certData, name, lastname);
    });

    const { jsPDF } = window.jspdf;
    document.getElementById('download-png-btn').addEventListener('click', () => {
        console.log("Descargando certificado como PNG...");
        html2canvas(document.getElementById('certificate'), { useCORS: true }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'certificado-power-bi.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });

    document.getElementById('download-pdf-btn').addEventListener('click', () => {
        console.log("Descargando certificado como PDF...");
        const certElement = document.getElementById('certificate');
        html2canvas(certElement, { useCORS: true }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [canvas.width, canvas.height]
            });
            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save('certificado-power-bi.pdf');
        });
    });

    // --- LLAMADA INICIAL ---
    initializeQuizView();
});