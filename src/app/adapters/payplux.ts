export interface createTransactionWhasapResource {
    montoCero:   number;
    monto12:     number;
    whatsapp:    string;
    descripcion: string;
    ci:          string;
    direccion:   string;
    nombrePago:  string;
    emailPago:   string;
    telefono:    string;
}


export interface PagoPlux {
    code:        number;
    description: string;
    detail:      Detail;
    status:      string;
}

export interface Detail {
    respuest: Respuest;
}

export interface Respuest {
    id_establecimiento:      number;
    monto:                   string;
    fecha_transaccion:       string;
    descripcion:             string;
    id_transaccion:          string;
    valor_catalogo_estado:   string;
    respuesta:               string;
    voucher:                 string;
    adquirente:              string;
    valor_base0:             string;
    valor_base12:            string;
    valor_iva:               string;
    numero_lote:             string;
    propina:                 string;
    banco:                   string;
    emisor_tarjeta:          string;
    numero_cuotas:           number;
    proveedor_servicio_pago: string;
    tipo_credito:            string;
    meses_gracia:            number;
    interes:                 number;
    valor_interes:           string;
    extras:                  string;
    Marca:                   string;
    catalogos:               Catalogos;
    ciente:                  Ciente;
    detalle:                 Detalle;
    tipo_pago:               string;
    items:                   any[];
}

export interface Catalogos {
    nombre_catalogo: string;
}

export interface Ciente {
    nombres:               string;
    numero_identificacion: string;
}

export interface Detalle {
    numero_tarjeta: string;
}
