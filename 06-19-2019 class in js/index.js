function Account(accountNumber, accountHolderName, openingBalance, currentBalance, openDate, status) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.openingBalance = openingBalance;
    this.currentBalance = currentBalance,
    this.openDate = openDate;
    this.status = status;
}

var account = new Account("123-123-3454", "John", 1500, 2220, new Date(), "Open");

console.log(account);
