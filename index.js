const wifi = require("node-wifi");
const pkg = require("./package.json");
const network = require("network");

const getReportLog = async (discoveries) => {
  wifi.init({
    iface: null,
  });

  let wifiConnections = [];
  await wifi.getCurrentConnections().then((currentConnections) => {
    currentConnections.forEach((con) => {
      // delete private, device-associated information
      delete con.bssid;
      delete con.mac;
    });
    wifiConnections = currentConnections;
  });

  const ip = await new Promise((resolve) => network.get_gateway_ip(function (err, ip) {
    resolve(err || ip);
  }));

  return {
    info: {
      package: pkg.name,
      version: pkg.version,
    },
    gateway: ip,
    wifi: wifiConnections,
    discoveries: discoveries,
  };
};

module.exports = getReportLog;
