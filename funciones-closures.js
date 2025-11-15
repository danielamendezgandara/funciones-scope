console.log("=== DEMOSTRACIÓN DE FUNCIONES Y CLOSURES ===\n");
console.log("=== SIMULACIÓN DE GESTIÓN DE TAREAS CON CLOSURES ===\n");

// 1. Simulador de gestión de tareas con closures
function sistemaGestionTareas() {
    let tareas = [];
    let total = 0;

    return {
        agregarTarea: function (descripcion, estado = 'pendiente') {
            let completadaTarea = estado.toLowerCase() == 'completada' ? true : false;
            let estadoValido = (estado.toLowerCase() != 'completada' && estado.toLowerCase() != 'pendiente') ? 'pendiente' : estado.toLocaleLowerCase();
            let existe = tareas.some(tarea => tarea.descripcion === capitalizar(descripcion));
            if (!existe) {
                tareas.push({ descripcion: capitalizar(descripcion), estado: estadoValido, completada: completadaTarea });
                total++;
                console.log(`✅ Tarea agregada : ${capitalizar(descripcion)}, estado : ${estadoValido}`);
            } else {
                console.log(`❌ Tarea no ingresada: ${capitalizar(descripcion)}, ya existe en la lista`);
            }


        },

        removerTarea: function (descripcion) {
            const index = tareas.findIndex(tarea => tarea.descripcion === capitalizar(descripcion));
            if (index !== -1) {
                tareas.splice(index, 1);
                total--;
                console.log(`❌ Tarea removida: ${capitalizar(descripcion)}`);
            } else {
                console.log(`❌ Tarea : ${capitalizar(descripcion)} no removida , no está en la lista`);
            }
        },

        obtenerTotalTareas: () => total,
        mostrarTareas: () => tareas.map(t => t.descripcion).join(", "),
        marcarCompletada: function (descripcion) {
            const index = tareas.findIndex(tarea => tarea.descripcion === capitalizar(descripcion));
            if (index !== -1) {
                tareas[index].estado = 'completada';
                tareas[index].completada = true;
                console.log(`✅  Tarea completada: ${capitalizar(descripcion)}`);
            }
        },

        filtrarTareasEstado: function (estado) {
            if (estado.toLowerCase() == 'completada' || estado.toLowerCase() == 'pendiente') {
                let tareasFiltradas = tareas.filter(tarea => tarea.estado === estado);
                console.log(`Tareas con estado ${estado}:`);
                tareasFiltradas.forEach(tarea => { console.log(`✔️ ${tarea.descripcion}`); });
            } else {
                console.log(`El estado ${estado.toLowerCase()} no existe, por favor buscar por completada o pendiente.`);
            }
        },

        contarEstados: () => {
            return tareas.reduce(
                (acc, t) => {
                    t.completada ? acc.completadas++ : acc.pendientes++;
                    return acc;
                },
                { completadas: 0, pendientes: 0 }
            );
        },

        mostrarEstadisticas: function () {
            let { completadas, pendientes } = this.contarEstados();
            console.log("Estadísticas:");
            console.log(`📌 Total tareas : ${total}`);
            console.log(`📌 Tareas completadas: ${completadas}`);
            console.log(`📌 Tareas pendientes:  ${pendientes}`);
        }

    };

};
// Función capitalizar
function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

// Uso del sistema de gestión de tareas 
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
console.log(`Total actual de tareas en la lista: ${tareas.obtenerTotalTareas()}`);
console.log(`Tareas:${tareas.mostrarTareas()}`)
tareas.marcarCompletada("Hacer compras en el supermercado");
tareas.marcarCompletada("laVar ROpa");
tareas.filtrarTareasEstado('completada');
tareas.filtrarTareasEstado('pendiente');
tareas.filtrarTareasEstado('en progreso');
tareas.mostrarEstadisticas();
