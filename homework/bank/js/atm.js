

var checkingBalance = document.getElementById("balance1");
var checkingInput = document.getElementById("checkingAmount");
var checkingDeposit = document.getElementById("checkingDeposit");
var checkingWithdrawal = document.getElementById("checkingWithdraw");



var accounts = {
  checking: {
    balance: 0,
    deposit: function (amount) {
    	amount = parseInt(checkingAmount.value,10);
    	accounts.checking.balance += amount;
    	checkingBalance.innerHTML = "$" + accounts.checking.balance;
    },
    withdraw: function (amount) {
    	amount = parseInt(checkingAmount.value,10);
    	accounts.checking.balance -= amount;
    	checkingBalance.innerHTML = "$" + accounts.checking.balance;
    }
  },

  savings: {
    balance: 0,
    deposit: function (amount) {},
    withdraw: function (amount) {}
  }
};



checkingDeposit.addEventListener('click', accounts.checking.deposit);
checkingWithdrawal.addEventListener('click', accounts.checking.withdraw);
