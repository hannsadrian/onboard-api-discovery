# onboard-api-discovery
**Attempt to discover the spread of onboard apis**, which provide information in the local WiFi of many public transport vehicles.
The tool currently checks your wifi connection for any known onboard information apis.

This repo is intended for two different purposes:

1. Discovering _already known and reverse engineered_ onboard apis (read on)
2. Discovering _new_ onboard apis (see [Going Further](#going-further))

## Motivation

*The following introduction and this project are mainly focused on the situation in Germany and Europe. If you come from another region and have knowledge to share about described onboard information systems there, feel free about creating an issue to get in touch and contribute your research.*

**Public Transport Data as of now**

If you've ever showed interest in using public transport apis for multiple regions at once, you will very likely have noticed the chaos that exists on one hand in the systems used by different public transport companies and on the other hand in the output returned by them (see [public-transport/friendly-public-transport-format](https://github.com/public-transport/friendly-public-transport-format) for a great approach on unifying the format).

The foundation of the Hafas system e. g. was created way back in the 90s for MS-DOS! Since then, a mess of different competing companies emerged their digital systems: [Hafas](https://github.com/public-transport/hafas-client), [EFA](https://github.com/mfdz/efa2gtfs), [TRIAS](https://github.com/public-transport/ideas/issues/18) and a bunch of provider specific apis. Not all of their implementations provide the same interface and feature-set.

**Onboard wifis**

Same can be said about recently upcoming onboard wifi systems. The aim of this project is to document the relatively young (and at the moment evolving) spread of onboard apis which are integrated into the onboard wifi of many public transport vehicles and are **only available when connected to the wifis on the vehicles equipped with these systems**. The apis provide connection, journey and vehicle related information which can be used in many different ways.

Information gained by this tool and guides to reverse engineering apis in general should help documenting as many apis as possible.

All the information you submit will help to eventually create a super-awesome documentation. It'll furthermore help creating an overview of onboard systems under [public-transport/transport-apis](https://github.com/public-transport/transport-apis).

**So whenever you find yourself on a train or other public transport vehicle with inbuilt wifi, please consider searching for onboard data with this tool.**

## Installation

```shell
npm install -g onboard-api-discovery
```

## Usage

After you've followed the installation using npm, you can start a discovery by entering `onboard-api-discovery` in your terminal. This will start a search for known api endpoints and return a json object which looks similiar to the following: (altough hopefully with data in the payload fields)

```js
{
  info: { package: 'onboard-api-discovery', version: '0.0.3' },
  gateway: '10.0.0.1',
  wifi: [
    {
      signal_level: -47,
      ssid: 'CDWiFi',
      ...
    }
  ],
  discoveries: [
    {
      available: false,
      info: { system: 'Icomera', client: 'live-icomera-position' },
      payload: null
    },
    ...
    {
      available: true,
      info: { system: 'Czech Railways', client: 'cd-wifi-client' },
      payload: {
        trainStatus: {
          latitude: 51.000000,
          longitude: 13.000000,
          ...
        },
        wifiStatus: {
          authenticated: true,
          ...
          dataUsage: {
            ...
          }
        },
        wifiConnectivity: {
          version: '1.9',
          online: '1',
          ...
          links: [
            {
              index: '1',
              device_type: 'ethernet',
              ...
            },
            ...
          ]
        }
      }
    }
  ]
}
```

Submitting this output as an [issue](https://github.com/Adwirawien/onboard-api-discovery/issues/new) amongst details about the vehicle you were connected to would help documenting the spread of the already known apis a lot!

## Going further

If you want to reverse engineer onboard-apis yourself, please take a look at [docs/reverse_engineering.md](docs/reverse_engineering.md)<br>
Once you obtained some logs, you can contribute them into `dumps/@<your_username>/` ([@adwirawien/cdwifi](dumps/@adwirawien/cdwifi) is a suggestion on how to structure your logs). This will enable documenting yet unkown apis or help collect more data about apis for further reverse engineering.

## Related

Some already available onboard clients are listed below:

- [derhuerst/live-icomera-position](https://github.com/derhuerst/live-icomera-position) – grab position data from icomera systems that often lay below custom apis
- [derhuerst/wifi-on-ice-portal-client](https://github.com/derhuerst/wifi-on-ice-portal-client) – query information from the WifiOnICE portal in German ICE trains
- [derhuerst/sncf-wifi-portal-client](https://github.com/derhuerst/sncf-wifi-portal-client) – query information from the SNCF WiFi portal in French TGV trains.
- [derhuerst/digital-im-regio-portal-client](https://github.com/derhuerst/digital-im-regio-portal-client) – query information from the Digital im Regio portal in German Regio trains
- [derhuerst/cd-wifi-client](https://github.com/derhuerst/cd-wifi-client) – client for the onboard WiFi portal of České dráhy (Czech Railways) trains

## Contributing

Discovered onboard endpoints that are currently not checked by the tool? Consider creating a pull request containing code to query the endpoints you discovered. 
That'd be really awesome! 🙌
