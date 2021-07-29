"use strict";
const _ = require("lodash");
const db = require("./db.js");

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
  const dataAccessMethod = () => {
    // fill me in :)

    const itemsByUser = db.itemsOfUserByUsername;
    const users = [];

    for (const user in itemsByUser) {
      if (itemsByUser[user].includes(item)) {
        users.push(user);
      }
    }

    const arrayUsersById = db.usersById;

    const resultObj = [];

    let found = false;

    for (const user in arrayUsersById) {
      
      if (users.includes(arrayUsersById[user].username)) {
        let i;
        for (i = 0; i < resultObj.length; i++) {
          if (resultObj[i].age === arrayUsersById[user].age) {
            found = true;
            resultObj[i].count++;
          }
        }

        if (!found) {
          resultObj.push({ age: arrayUsersById[user].age, count: 1 });
        }
      }
      found = false;
    }

    return resultObj;
  };
  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
};
