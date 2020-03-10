//we need to import information from our database.
const connection = require('../config/connection');

//connection to get all burgers
const getBurgers = () => {
  //boilerplate for creating a promise
  return new Promise((resolve, reject) => {
    //create an error callback
    connection.query('SELECT * FROM burgers', (err, burgerData) => {

      //if there is an error
      if (err) {
        console.log(err);
        //this will go to promises.catch()
        return reject(err);
      }
      //this will go to promises.then()
      resolve(burgerData);
    });
  });
};

//create a burger object parameter
const createBurger = (burgerObject) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burgers SET ?', burgerObject, (err, burgerData) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      resolve(burgerData);
    })
  })
}

//update a burger
//burgerObject => {eaten: true} OR (eaten: false)

const updateBurger = (burgerObject, burgerId) => {
  return new Promise((resolve, reject) => {

    connection.query('UPDATE burgers SET ? WHERE id = ?', [burgerObject, burgerId], (err, burgerData) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else if (burgerData.affectedRows === 0) {
        return resolve({ message: "Couldn't find a burger with that id!"});
      }
      resolve({ message: 'Burger updated successfully!'});
    })
  })
};

//eliminate a burger

const eliminateBurger = burgerId => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM burgers WHERE id = ?', [burgerId], (err, burgerData) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else if (burgerData.affectedRows === 0) {
        return resolve({ message: "Couldn't find a burger with that id!", code: 404});
      }
      resolve({ message: 'Burger has been eliminated successfully!', code: 200 });
    });
  });
};

  module.exports = { getBurgers, createBurger, updateBurger, eliminateBurger };