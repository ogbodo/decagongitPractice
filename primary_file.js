var Accounting = {};

Accounting.client = function() {
  //private fields
  var _address = "";
  var _phone = 0;

  //data property
  this.token = "";

  //privilledged getters and setters
  Object.defineProperty(this, "address", {
    set: function(address) {
      _address = address;
      if (console) console.log("Setting Your address as " + this._address);
    },
    get: function() {
      if (console) console.log("getting Your address as " + this._address);
      return this._address;
    }
  });

  Object.defineProperty(this, "phone", {
    set: function(phone) {
      _phone = phone;
      if (console) console.log("Setting Your Phone Number as " + this._phone);
    },
    get: function() {
      if (console) console.log("getting Your Phone Number as " + this._phone);
      return this._phone;
    }
  });
};
