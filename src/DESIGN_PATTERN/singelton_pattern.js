class DBConnection {
  constructor(conString) {
    this.connection = conString;
  }

  static getInstance(conString) {
    if (!this.instance) {
      this.instance = new DBConnection(conString);
    }
    return this.instance;
  }
}
let con1 = DBConnection.getInstance("mysqldb1");
let con2 = DBConnection.getInstance("mysqldb1");

console.log("con1:" + con1.connection);
console.log("con2:" + con2.connection);
