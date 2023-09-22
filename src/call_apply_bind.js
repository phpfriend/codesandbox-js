const person1 = { firstName: "Rohit", lastName: "Sharma" };
const person2 = { firstName: "Virat", lastName: "Kohli" };

function say(greetings) {
  const message = greetings + "  " + this.firstName + "  " + this.lastName;
  console.log(message);
}

say.call(person1, "Hello");
say.call(person2, "Hi");

say.apply(person1, ["Hi"]);
say.apply(person2, ["Hello"]);

const myfunc1 = say.bind(person1, "Hello");
const myfunc2 = say.bind(person2, "Hi");
myfunc1();
myfunc2();
