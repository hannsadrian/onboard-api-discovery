const fetchStatus = require('digital-im-regio-portal-client')

const info = {
  system: "Digital im Regio",
  client: "digital-im-regio-portal-client"
}

const isAvailable = async () => {
  try {
    const payload = {}
    payload.status = await fetchStatus()
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
