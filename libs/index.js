const icomeraAvailable = require("./icomera")
const iceAvailable = require("./ice")
const sncfAvailable = require("./sncf")
const regioAvailable = require("./regio")
const cdAvailable = require("./cd")

const checkKnownEndpoints = async () => {
  const checks = [icomeraAvailable, iceAvailable, sncfAvailable, regioAvailable, cdAvailable]
  const results = []

  for (let i = 0; i < checks.length; i++) {
    const res = await checks[i]()
    results.push(res)
  };

  return results
}

module.exports = checkKnownEndpoints
