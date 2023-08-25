const promises = [
    randomDelay("Проміс 1"),
    randomDelay("Проміс 2"),
    randomDelay("Проміс 3"),
    randomDelay("Проміс 4"),
    randomDelay("Проміс 5")
  ];

  
function randomDelay(value) {
    const delay = Math.floor(Math.random() * 4000) + 1000; 
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, delay);
    });
  }
  
 
  Promise.race(promises)
    .then((result) => {
      console.log("Результат найшвидшого проміса:", result);
    })
    .catch((error) => {
      console.error("Помилка під час виконання промісів:", error);
    });
  

    