let user = {
  "name": "Dmitry",
  "birthDay": ""
}

let today = new Date();
let nameOfUser;
let birthDayOfUser;

let firstArr = [];
let secondArr = [];

let newUser = { };

user.birthDay = today.toISOString();
console.log(user);

function copyKeys(obj) {
  for (key in user) {
    obj[key] = "";
  }
}

function fillObj(obj, arr) {
  let i = 0;
  for (key in obj) {
    obj[key] = arr[i];
    i++;
  }
}

copyKeys(newUser);

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    firstArr.push(user.name);
    resolve('success');
  }, 1000)
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    firstArr.push(user.birthDay);
    resolve('success');
  }, 5000)
});

Promise.all([promise1, promise2]).then(results => {
  fillObj(newUser, firstArr);
  console.log('Promises: \n', newUser);
});

let anotherUser = {};

copyKeys(anotherUser);

function copyNameWithTimeout() {
  return new Promise(resolve => {
    setTimeout (() => {
      secondArr.push(user.name);
      resolve('result');
    }, 1000);
  })
}

function copyBirthDayWithTimeout() {
  return new Promise(resolve => {
    setTimeout(() => {
      secondArr.push(user.birthDay);
      resolve('result');
    }, 5000);
  })
}

async function commonFunc() {
  const await1 = await copyNameWithTimeout();
  const await2 = await copyBirthDayWithTimeout();
  fillObj(anotherUser, secondArr);
}

commonFunc().then(
  (res) => { console.log('async: \n ', anotherUser) }
)
