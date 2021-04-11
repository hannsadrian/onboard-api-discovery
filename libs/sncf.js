const portal = require('sncf-wifi-portal-client')

const info = {
  system: "SNCF WiFi (TGV)",
  client: "sncf-wifi-portal-client"
}

const isAvailable = async () => {
  try {
    const payload = {}
    payload.connectionStatus = await portal.connectionStatus()
    payload.connectionStatistics = await portal.connectionStatistics()
    payload.food = await portal.food()
    payload.bar = await portal.bar()
    payload.gps = await portal.gps()
    payload.trip = await portal.trip()
    payload.tripPolyline = await portal.tripPolyline()
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