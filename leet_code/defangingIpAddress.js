function defangingIPAddress(address) {
  let addy = address.split('');
  for (let i = 0; i < addy.length; i++) {
    if (addy[i] === ".") {
      addy[i] = "[.]";
    }
  }

  return addy.join('');
}
address = "1.1.1.1"
console.log(defangingIPAddress(address))