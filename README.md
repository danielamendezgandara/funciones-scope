# 📝 Sistema de Gestión de Tareas con Closures (JavaScript)

Este proyecto implementa un **gestor de tareas tipo To-Do List**, utilizando **closures** para mantener el estado privado dentro de una función.  
Incluye operaciones de agregado, eliminación, filtrado, conteo y estadísticas, así como validación de estado y capitalización de texto.

Todo está desarrollado usando:
- Closures  
- Arrow functions  
- Métodos funcionales (`map`, `filter`, `reduce`)  
- Validación de entradas  
- Buenas prácticas de JavaScript ES6+  

---

## 🚀 Funcionalidades Implementadas

### ➕ **Agregar tarea**
Permite agregar una nueva tarea con una descripción y un estado opcional.  
Si el estado no es válido, se asigna automáticamente **"pendiente"**.  
También evita duplicados mediante `some()`.

```js
agregarTarea(descripcion, estado)
```

---

### ❌ **Remover tarea**
Elimina una tarea por su descripción si existe.

```js
removerTarea(descripcion)
```

---

### ✔️ **Marcar tarea como completada**
Actualiza una tarea existente y la mueve a estado `"completada"`.

```js
marcarCompletada(descripcion)
```

---

### 🔍 **Filtrar tareas por estado**

Filtra y muestra tareas según su estado:

- `"completada"`
- `"pendiente"`

```js
filtrarTareasEstado(estado)
```

Valida que el estado ingresado sea correcto.

---

### 📋 **Mostrar todas las tareas**
Devuelve una lista de descripciones formateada:

```js
mostrarTareas()
```

---

### 📊 **Contar tareas completadas y pendientes**
Utiliza `reduce()` para obtener estadísticas en una sola pasada:

```js
contarEstados()
```

Salida ejemplo:

```js
{ completadas: 3, pendientes: 2 }
```

---

### 📈 **Mostrar estadísticas completas**
Incluye:
- Total de tareas
- Cantidad de completadas
- Cantidad de pendientes

```js
mostrarEstadisticas()
```

---

## 🔒 Closures — Estado Privado

El sistema encapsula las variables:

- `tareas`  
- `total`

dentro del closure principal `sistemaGestionTareas()`, lo que impide su manipulación desde afuera.

Esto garantiza un diseño más seguro y modular.

---

## 🧠 Función Auxiliar: Capitalizar

Convierte la primera letra en mayúscula y el resto en minúsculas:

```js
function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}
```

---

## 🧪 Ejemplo de Uso Real

```js
const tareas = sistemaGestionTareas();

tareas.agregarTarea("Lavar ropa", 'pendiente');
tareas.agregarTarea("Hacer compras en el supermercado");
tareas.agregarTarea("Ir al banco", 'pendiente');
tareas.agregarTarea("Ir al gimnasio", 'completada');

tareas.removerTarea("Ir al banco");

tareas.agregarTarea("Comprar el pan");
tareas.agregarTarea("Hacer tarea matemáticas", 'pendiente');
tareas.agregarTarea("Preparar la cena", "Iniciada"); 
tareas.agregarTarea("comprar el pan", "completada"); 
tareas.agregarTarea("Pasear a mi perrito", "Completada");
tareas.agregarTarea("eSTUdIAR JAVASCRIPT", "Iniciada");

tareas.removerTarea("Comprar el pan");

console.log(`Total actual de tareas: ${tareas.obtenerTotalTareas()}`);
console.log(`Tareas: ${tareas.mostrarTareas()}`);

tareas.marcarCompletada("Hacer compras en el supermercado");
tareas.marcarCompletada("laVar ROpa");

tareas.filtrarTareasEstado('completada');
tareas.filtrarTareasEstado('pendiente');
tareas.filtrarTareasEstado('en progreso');

tareas.mostrarEstadisticas();
```

---


---

## ▶️ Cómo ejecutar el proyecto

Este proyecto se ejecuta directamente con **Node.js**.

1. Verifica que Node esté instalado:
   ```bash
   node -v
   ```

2. Abre la terminal en la carpeta del proyecto.

3. Ejecuta el archivo principal:
   ```bash
   node funciones-closures.js
   ```

Esto iniciará la demostración completa del sistema de gestión de tareas implementado con closures.

## 📦 Conceptos Destacados

- ✔️ Encapsulamiento con closures  
- ✔️ Métodos funcionales (`map`, `filter`, `reduce`, `some`, `findIndex`)  
- ✔️ Normalización de texto  
- ✔️ Prevención de duplicados  
- ✔️ Validación de estado  
- ✔️ Diseño modular  

---

## 🧡 Autora

Proyecto desarrollado por **Daniela Méndez** como práctica avanzada de funciones, closures y programación funcional en JavaScript.
