import { Component, OnInit } from '@angular/core';
declare var iniciarDatos: any;

@Component({
  selector: 'app-boton',
  standalone: true,
  imports: [],
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css'],  // Corregido 'styleUrls'
})
export class BotonComponent implements OnInit {
  data = {
    /* Requerido. Email de la cuenta PagoPlux del Establecimiento */
    PayboxRemail: 'negocioprueba1ppx@gmail.com',

    /* Requerido. Email del usuario que realiza el pago */
    PayboxSendmail: 'danielrepreuno@gmail.com',

    /* Requerido. Nombre del establecimiento en PagoPlux */
    PayboxRename: 'Negocio Test',

    /* Requerido. Nombre del usuario que realiza el pago */
    PayboxSendname: 'Nombre tarjetahabienten',

    /* Requerido. Monto total de productos o servicios que no aplican impuestos, máximo 2 decimales. Ejemplo: 100.00, 10.00, 1.00 */
    PayboxBase0: '2.0',

    /* Requerido. Monto total de productos o servicios que aplican impuestos, el valor debe incluir el impuesto, máximo 2 decimales. Ejemplo: 100.00, 10.00, 1.00 posee el valor de los productos con su impuesto incluido */
    PayboxBase12: '10.0',

    /* Requerido. Descripción del pago */
    PayboxDescription: 'Descripcion del pago',

    /* Requerido Tipo de Ejecución
    * Production: true (Modo Producción, Se procesarán cobros y se 
      cargarán al sistema, afectará a la tdc)
    * Production: false (Modo Prueba, se realizarán cobros de prueba y no  
      se guardará ni afectará al sistema)
    */
    PayboxProduction: false,

    /* Requerido Ambiente de ejecución
     * prod: Modo Producción, Se procesarán cobros y se cargarán al sistema,   afectará a la tdc.
     * sandbox: Modo Prueba, se realizarán cobros de prueba
     */
    PayboxEnvironment: 'sandbox',

    /* Requerido. Lenguaje del Paybox
     * Español: es | (string) (Paybox en español)
     */
    PayboxLanguage: 'es',

    /*
     * Requerido. dirección del tarjetahabiente
     */
    PayboxDirection: 'Direccion tarjetahabiente',

    /*
     * Requerido. Teléfono del tarjetahabiente
     */
    PayBoxClientPhone: '0998665577',

    /* Opcionales
	  *  Solo aplica para comercios que tengan habilitado pagos 
           internacionales
        */
    PayBoxClientIdentification: '0502395130',

    PayboxExtras: 'campo de extra tres',

    /* SOLO PARA PAGOS RECURRENTES
	   *  Solo aplica para comercios que tengan habilitado pagos 
           recurrentes
        */

    /* Requerido
       True -> en caso de realizar un pago recurrente 
	    False -> si es pago normal
	  */
    PayboxRecurrent: false,

    /* Requerido
    Id o nombre exacto del plan registrado en el comercio en la  
           plataforma de pagoplux
    */
    PayboxIdPlan: '171',

    /**
    * true -> los cobros se realizan de manera automática según la 
           frecuencia del plan asignado en PAGOPLUX
    * false -> los cobros se realizan mediante solicitud 
    */
    PayboxPermitirCalendarizar: true,

    /* Requerido
    * true -> El débito se realiza en el momento del pago
    * false -> El débito se realizará en la fecha de corte según el plan 
      contratado
    */
    PayboxPagoInmediato: true,

    /* Requerido
      true -> si desea realizar un pago de prueba de 1$ y reverso del 
      mismo de manera automática
      NOTA: PayboxPagoImediato debe ser igual false
      false -> no se realizará ningún cobro de prueba
    */
    PayboxCobroPrueba: false,

    //<----ESTAS VARIABLES SE USAN PARA PAGOS RECURRENTES CON MONTO VARIABLES ---->
PayboxAmountVariablePlan : true,
/**
* Frecuencia del plan
"SEM" SEMANAL
"MEN" MENSUAL
"BME" BIMESTRAL
"TME" TRIMESTRAL
"SME" SEMESTRAL
"ANU" ANUAL
*/
PayboxFrequencyPlan:'MEN',
/**
* true ->tiene iva
* false ->no tiene iva
*/
PayboxTieneIvaPlan: true,
/**
* La descripción del plan, no debe superar los 200 caracteres.
*/
PayboxDescriptionPlan:'Descripcion plan',
/**
PayboxEnvironment: 'sandbox',
/**
* Se usa en TRUE cuando se necesita enlazar el paybox a un botón ya
existente en el sitio del cliente, caso contrario FALSE o NULL
* */
PayboxPagoPlux: true,
/**
* Identificador del botón o elemento en el comercio del cliente
* */
PayboxIdElement: 'idElementoTest',

    onAuthorize: (response: any) => {
      if (response.status === 'succeeded') {
        response.amount,
        response.deferred,
        response.interest,
        response.interestValue,
        response.amountWoTexes,
        response.cardInfo,
        response.cardIssuer,
        response.cardType,
        response.clientID,
        response.clientName,
        response.fecha,
        response.id_transaccion,
        response.state,
        response.token,
        response.tipoPago

        console.log(response);
      }
    } 
  };

  ngOnInit() {

    iniciarDatos(this.data)
    
  }
}
