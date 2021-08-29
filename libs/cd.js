const { fetchTrainStatus, fetchWifiStatus, fetchWifiConnectivity } = require('cd-wifi-client')

const info = {
  system: 'Czech Railways',
  client: 'cd-wifi-client'
}

const isAvailable = async () => {
  try {
    const payload = {}
    payload.trainStatus = await fetchTrainStatus()
    payload.wifiStatus = await fetchWifiStatus()
    payload.wifiConnectivity = await fetchWifiConnectivity()
    return {
      available: true,
      info: info,
      payload: payload
    }
  } catch (err) {
    return {
      available: false,
      info: info,
      payload: null
    }
  }
}

module.exports = isAvailable
