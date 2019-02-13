//  принимает на первый параметр   сагу  ,  должна отрабатывать на каждый диспатч

function* saga () {
    yield  takeEvery('ACTION_TYPE', fetchSomething);
}


const takeEvery = (saga, ...args) =>  fork(function*() {
   while(true){
     const action = yield take(saga)
     yield fork (saga, ...args.concat(action))
   }
})

yield delay(5);


const delay =async (sec) =>  { 
   yield call(test, sec);
} 

async function test (sec) {
   return await new Promise (function (resolve, reject){
      
       setTimeout(()=> resolve(), sec*1000);
   })
}

// Промис ходит за файлом и показывает console.log()

// Написать промисы без async который ходит за файлом  file.jpg, если запрос успешным то идет за файлов file2.jpg, если ок, то пишет console.log('ok')

// промис который принимает файл, ждет 5 секунд и потом идет за файлом, возвращает результат получения файла

// промис который кидает ошибку через N секунд

const errorPromise = new Promise(function(resolve, reject){
    setTimeout(() => reject(new Error('error')))
})
errorPromise()