'use strict';

/**
We have defined an empty class User in class1.js. Create a new variable called user and assign it to a new instance of the class User.
The class User is empty for now, so it doesn't expect any arguments. Feel free to console.log() the new instance so that you can
visualize the returned object in the console.
**/

// Sample usage - do not modify
class User {

  // empty class for now
  constructor(){
    console.log('new contructor')
  }
  age () { 
    console.log('done')
  }
}
let user1= new User()
user1.age()

