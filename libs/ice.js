const portal = require('wifi-on-ice-portal-client')

const info = {
  system: "WIFIonICE",
  client: "wifi-on-ice-portal-client"
}

const isAvailable = async () => {
  try {
    const payload = await portal.status()
    return {
      available: true,
      info: info,
      payload: payload
    }
  } catch {
    return {
      available: false,
      info: info,
      payload: null
    }
  }
}

module.exports = isAvailable
