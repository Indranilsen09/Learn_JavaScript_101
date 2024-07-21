/* Here we're creating an Object with new Keyword */
// New Keyword is used to create object via constructor
//Dot or Quotes can be used to assign  properties of the objects.
var person = new Object();

person.name = "Indra";
person["age"] = 24;
person.eat = function(){ console.log(`${this.name} is of this age ${this.age} and is eating`);};

person.eat();