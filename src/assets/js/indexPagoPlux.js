window.iniciarDatos = function(dataPago) {
  if (typeof Data !== 'undefined' && Data) {
      Data.init(dataPago);
  } else {
      console.error('Data is not defined or not loaded properly');
  }
};

function reload(data) {
  if (Data) {
    Data.reload(data);
  }
}