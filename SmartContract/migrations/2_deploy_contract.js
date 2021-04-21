const Migrations = artifacts.require("Migrations");
const sro = artifacts.require("sro");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(sro);
};