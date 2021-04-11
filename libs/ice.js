const portal = require('wifi-on-ice-portal-client')

const info = {
  system: "WIFIonICE",
  client: "wifi-on-ice-portal-client"
}

const isAvailable = async () => {
  try {
    const payload = {}
    payload.status = await portal.status()
    payload.journey = await portal.journey()
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
