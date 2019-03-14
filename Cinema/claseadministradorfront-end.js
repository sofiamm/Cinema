class _adm {
   constructor(  _ID,
         _NOMBRE,
    _CLAVE,
        _EMAIL,
     _ESTADO,
         _IMAGEN) {
this.ID = _ID;
       this.NOMBRE=_NOMBRE ;
     this.CLAVE=_CLAVE;
         this.EMAIL=_EMAIL;
        this.ESTADO= _ESTADO;
     this.IMAGEN = _IMAGEN;
        
   }
Guardar() {
   var objetoaenviar = this;

  return new Promise(function(resolve, reject) {

       
      try {

          
          
          
          
               var xhr = new XMLHttpRequest();
xhr.open('POST', '/api/nuevoadm');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
      
     
    

  });
    
}
    

    
    Login() {
         var objetoaenviar = this;
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
      
      try {
           var xhr = new XMLHttpRequest();
xhr.open('POST', '/api/loginadm');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar)); 
}
catch(err) {
     reject(err.message);

}
      
     
    

  });
    
    
}
    
   
}