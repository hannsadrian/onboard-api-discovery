const iceAvailable = require("./ice")

const checkKnownEndpoints = async () => {
  const checks = [iceAvailable]
  const results = []

  for (let i = 0; i < checks.length; i++) {
    const res = await checks[i]()
    results.push(res)
  };

  return results
}

module.exports = checkKnownEndpoints
