export interface Reserva {
    nombreCliente: string,
    apellidoCliente: string,
    telefono: number,
    fechaInicio: Date,
    fechaFinal: Date,
    numeroPersonas: number,
    idHabitacionReserva: string,
    costoReserva: number
}

// El interfaz tiene los datos del modelo de datos que viene del backend