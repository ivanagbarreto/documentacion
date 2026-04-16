let numero;
const deposito = 100;
numero = deposito;

function funcion1() {}

class Account {
  owner;
  balance = 0;

  constructor(ownerParams, balanceParams) {
    this.owner = ownerParams;
    this.balance = balanceParams;
  }

  getBalance() {
    return this.balance;
  } //funcion antigua
  deposit = (amount) => {
    this.balance += amount;
  };
  //   getBalance = () => {
  //     return this.balance;
  //   }; funcion moderna
}

const cuenta1 = new Account("Helena", 100);
cuenta1.deposit(300);
console.log(cuenta1.getBalance());

const cuenta2 = new Account("Tom", 100);
cuenta2.deposit(200);
console.log(cuenta2.getBalance());

console.log(cuenta1)
console.log(typeof cuenta1)
console.log(typeof Account)