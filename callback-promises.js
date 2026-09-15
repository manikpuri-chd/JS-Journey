function getData(dataId, newData) {
  setTimeout(() => {
    console.log("Data = ", dataId);
    if (newData) {
      newData();
    }
  }, 2000);
}
//callback hell

getData(1, () => {
  getData(2, () => {
    getData(3);
  });
});

//promise
let promise1 = data();

function data(dataNum, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data = ", dataNum);
      resolve("sucess");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}

// more in promises

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a Promise");
    resolve("Done");
  });
};

let promise2 = getPromise();
promise2.then((res) => {
  console.log("Promise is Fulfilled", res);
});

//promise chain

function asyncfun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("sucess");
    }, 4000);
  });
}

function asyncfun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("sucess");
    }, 4000);
  });
}

console.log("fetching data1 .....");

asyncfun1()
  .then((res) => {
    console.log(res);
    console.log("fetching data2....");
    return asyncfun2();
  })
  .then((res) => {
    console.log(res);
  });

// async-await

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    },2000);
  });
}

async function getWeatherData(){
    await api();
    await api();
}

getWeatherData();