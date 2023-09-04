class Number {
  static HongKong(amount) {
    const hongkongCurrency = amount.toLocaleString("en-HK", {
      style: "currency",
      currency: "HKD",
    });
    return hongkongCurrency;
  }

  static generateRandom4Number() {
    const min = 1000; // Minimum four-digit number (inclusive)
    const max = 9999; // Maximum four-digit number (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
  static generateRandom2Number() {
    const min = 10; // Minimum four-digit number (inclusive)
    const max = 99; // Maximum four-digit number (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  static generateRandom9Number() {
    const min = 100000000;
    const max = 999999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  static generateRandomString() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomString = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }

    return randomString;
  }

  static genrateRandom6Number() {
    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
  static generateRandom8Number() {
    const min = 10000000;
    const max = 99999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  static generateRandom7Number() {
    const min = 1000000;
    const max = 9999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  static getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }

  static japanesse(amount) {
    const exchangeRate = 1; // Replace with the actual exchange rate
    const jpyAmount = amount * exchangeRate;
    return jpyAmount
      .toLocaleString("ja-JP", {
        style: "currency",
        currency: "JPY",
      })
      .replace("￥", "");
  }

  static totalamount(amount) {
    let total;
    if (amount <= 29999) total = parseInt(amount) + 0;
    if (amount > 29999) total = parseInt(amount) + 650;
    if (amount >= 50000) total = parseInt(amount) + 1100;
    if (amount >= 70000) total = parseInt(amount) + 1650;
    return this.japanesse(total);
  }

  static calculatefee(amount) {
    let fee;
    if (amount <= 29999) fee = 0;
    if (amount > 29999) fee = 650;
    if (amount >= 50000) fee = 1100;
    if (amount >= 70000) fee = 1650;
    return this.japanesse(fee);
  }

  static hongkongstyle2(amount) {
    const exchangeRate = 1; // Replace with the actual exchange rate
    const hkdAmount = amount * exchangeRate;
    const formattedAmount = hkdAmount.toFixed(2);
    return formattedAmount;
  }

  static brazil(amount) {
    const exchangeRate = 1; // Replace with the actual exchange rate from your source
    const brlAmount = amount * exchangeRate;
    return brlAmount
      .toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
      .replace("R$", "");
  }

  static generate4RandomNumber() {
    const min = 1000;
    const max = 9999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  static generate3RandomNumber() {
    const min = 100;
    const max = 999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
}

export default Number;
