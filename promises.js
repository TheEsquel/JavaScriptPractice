window.onload = function() {

   let promise = new Promise((resolve, reject) => {
       this.setTimeout(()=>{
            //  если успех
        resolve('Promise works!');
            //  если ошибка
            

       }, 3000 );
   });

   promise
        .then(result => {
            console.log('resolve()', result);
        },
        error => {
            console.log('reject()', error);
        },
    );

}