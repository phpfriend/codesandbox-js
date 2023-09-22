let userObj = {
  firstName: "Yogesh",
  lastName: "Tiwari",

  set fullName(updatedName) {
    [this.firstName, this.lastName] = updatedName.split(" ");
  },

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

let adminObj = {
  __proto__: userObj,
  isAdmin: true
};

console.log(adminObj.fullName);
