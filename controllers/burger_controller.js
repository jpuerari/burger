//we need to import information from our database.
const connection = require('../config/connection');

//connection to get all burgers
const getBurgers = () => {
  //boilerplate for creating a promise
  return new Promise((resolve, reject) => {
    //create an error callback
    connection.query('SELECT * FROM burgers', (err, burgerdata) => {

      //if there is an error
      if (err) {
        console.log(err);
        //this will go to promises.catch()
        return reject(err);
      }
      //this will go to promises.then()
      resolve(burgerdata);
    });
  });
};

//create a burger object parameter
const createBurger = burgerObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burgers SET ?', burgerObj, (err, burgerdata) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      resolve(burgerdata);
    });
  });
};

//update a burger
//burgerObject => {eaten: true} OR (eaten: false)

const updateBurger = (burgerObj, burgerId) => {
  return new Promise((resolve, reject) => {

    connection.query('UPDATE burgers SET ? WHERE id = ?', [burgerObj, burgerId], (err, burgerdata) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else if (burgerdata.affectedRows === 0) {
        return resolve({ message: "Couldn't find a burger with that id!", code: 404 });
      }
      resolve({ message: 'Burger updated successfully!', code: 200});
    });
  });
};

//eliminate a burger

const deleteBurger = burgerId => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM burgers WHERE id = ?', [burgerId], (err, burgerdata) => {
      if (err) {
        console.log(err);
        return reject(err);
      } else if (burgerdata.affectedRows === 0) {
        return resolve({ message: "Couldn't find a burger with that id!"});
      }
      resolve({ message: 'Burger is toast!'});
    });
  });
};

  module.exports = { getBurgers, createBurger, updateBurger, deleteBurger };