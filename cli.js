#!/usr/bin/env node
"use strict";

const mri = require("mri");
const ora = require("ora");
const updateNotifier = require("update-notifier");
const pkg = require("./package.json");
const getReportLog = require(".")
const checkKnownEndpoints = require("./libs");
const util = require("util")

updateNotifier({ pkg }).notify();

const argv = mri(process.argv.slice(2), {
  boolean: ["help", "h", "version", "v"],
});

if (argv.help || argv.h) {
  process.stdout.write(`
Usage:
  onboard-api-discovery [options]
    Check your current wifi for any known onboard information apis
Options:
  n/a at the moment
\n`);
  process.exit(0);
}

if (argv.version || argv.v) {
  process.stdout.write(`v${pkg.version}\n`);
  process.exit(0);
}

(async () => {
  const spinner = ora('Searching for endpoints').start();
  const report = await getReportLog(await checkKnownEndpoints())
  spinner.stop()
  console.log(util.inspect(report, false, null, true))
})();
