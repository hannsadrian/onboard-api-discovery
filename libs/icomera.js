const { fetchPosition } = require("live-icomera-position");

const info = {
  system: "Icomera",
  client: "live-icomera-position",
};

const isAvailable = async () => {
  try {
    const payload = {};
    payload.status = await fetchPosition();
    return {
      available: true,
      info: info,
      payload: payload,
    };
  } catch {
    return {
      available: false,
      info: info,
      payload: null,
    };
  }
};

module.exports = isAvailable;
