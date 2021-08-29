# onboard-api-discovery
**Attempt to discover the spread of onboard apis**, which provide information in the local WiFi of many public transport vehicles.
The tool currently checks your wifi connection for any known onboard information apis.

## Installation

```shell
npm install -g onboard-api-discovery
```

## Motivation

*The following introduction and this project are mainly focused on the situation in Germany and Europe. If you come from another region and have knowledge to share about described onboard information systems there, feel free about creating an issue to get in touch and contribute your research.*

If you've ever showed interest in using public transport apis for multiple regions at once, you will very likely have noticed the chaos that exists on one hand in the systems used by different public transport companies and on the other hand in the output returned by them (see [public-transport/friendly-public-transport-format](https://github.com/public-transport/friendly-public-transport-format) for a great approach on unifying the format).

The foundation of the Hafas system e. g. was created way back in the 90s for MS-DOS! Since then, a mess of different competing companies emerged their digital systems: [Hafas](https://github.com/public-transport/hafas-client), [EFA](https://github.com/mfdz/efa2gtfs), [TRIAS](https://github.com/public-transport/ideas/issues/18) and a bunch of provider specific apis. Not all of their implementations provide the same interface and feature-set.

Same can be said about recently upcoming onboard wifi systems. The aim of this project is to document the relatively young (and at the moment evolving) spread of onboard apis which are integrated into the onboard wifi of many public transport vehicles and are **only** available when connected to the wifis on the vehicles equipped with these systems. The apis provide connection, journey and vehicle related information which can be used in many different ways.

Information gained by this tool and guides to reverse engineering apis in general should help documenting as many apis as possible.

All the information you submit will help to eventually create a nice documentation. It'll furthermore help creating an overview of onboard systems under [public-transport/transport-apis](https://github.com/public-transport/transport-apis).

**So whenever you find yourself on a train or other public transport vehicle with inbuilt wifi, please consider searching for onboard data with this tool.**

## Usage

After you've followed the installation using npm, you can start a discovery by entering `onboard-api-discovery` in your terminal. This will start a search for known api endpoints and return a json object which looks similiar to the following: (altough hopefully with data in the payload fields)

```json
{
  "info": { "package": "onboard-api-discovery", "version": "0.0.2" },
  "gateway": "192.168.1.1",
  "wifi": [
    {
      "signal_level": -69,
      "quality": 62,
      "security": "wpa2-psk",
      "security_flags": [],
      "ssid": "xxx",
      "channel": "48,80",
      "frequency": 5240
    }
  ],
  "discoveries": [
    {
      "available": false,
      "info": { "system": "Icomera", "client": "live-icomera-position" },
      "payload": null
    },
    {
      "available": false,
      "info": { "system": "WIFIonICE", "client": "wifi-on-ice-portal-client" },
      "payload": null
    },
    {
      "available": false,
      "info": { "system": "SNCF WiFi (TGV)", "client": "sncf-wifi-portal-client" },
      "payload": null
    },
    {
      "available": false,
      "info": { "system": "Digital im Regio", "client": "digital-im-regio-portal-client" },
      "payload": null
    },
    {
      "available": false,
      "info": { "system": "Czech Railways", "client": "cd-wifi-client" },
      "payload": null
    }
  ]
}
```

Submitting this output as an [issue](https://github.com/Adwirawien/onboard-api-discovery/issues/new) amongst details about the train, bus or wifi you were connected to would help documenting the spread of the already known apis a lot!

## Going further

If you want to reverse engineer onboard-apis yourself, this repo will soon contain some helpful guides on how to do just that.<br>
Contributions with guides about api reverse engineering are very much appreciated 🎭

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
