var orm = require("../config/orm")

var burger = {
    all: function(cb) {
      orm.selectall("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.insertone("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.updateone("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb){
      orm.deleteone("burgers", condition, function(res){
        cb(res);
      });
    }
  };



module.exports = burger;