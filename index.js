const promises = [
    delayedPromise("Проміс 1", 2000),
    delayedPromise("Проміс 2", 1500),
    delayedPromise("Проміс 3", 3000),
    delayedPromise("Проміс 4", 1000),
    delayedPromise("Проміс 5", 2500)
  ];

  
function delayedPromise(value, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  
 
  Promise.all(promises)
    .then((results) => {
      console.log("Результати вирішення промісів:", results);
    })
    .catch((error) => {
      console.error("Помилка під час виконання промісів:", error);
    });
  