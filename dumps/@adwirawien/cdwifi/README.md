# Logs for České dráhy train

EC 378 from Dresden to Berlin, August 2021

## Output from onboard-api-discovery

```js
{
  info: { package: 'onboard-api-discovery', version: '0.0.3' },
  gateway: '10.0.0.1',
  wifi: [
    {
      signal_level: -47,
      quality: 106,
      security: 'none',
      security_flags: [],
      ssid: 'CDWiFi',
      channel: '11',
      frequency: 2462
    }
  ],
  discoveries: [
    {
      available: false,
      info: { system: 'Icomera', client: 'live-icomera-position' },
      payload: null
    },
    {
      available: false,
      info: { system: 'WIFIonICE', client: 'wifi-on-ice-portal-client' },
      payload: null
    },
    {
      available: false,
      info: { system: 'SNCF WiFi (TGV)', client: 'sncf-wifi-portal-client' },
      payload: null
    },
    {
      available: false,
      info: {
        system: 'Digital im Regio',
        client: 'digital-im-regio-portal-client'
      },
      payload: null
    },
    {
      available: true,
      info: { system: 'Czech Railways', client: 'cd-wifi-client' },
      payload: {
        trainStatus: {
          latitude: 51.000000,
          longitude: 13.000000,
          altitude: 100,
          speed: 48,
          delay: null
        },
        wifiStatus: {
          authenticated: true,
          id: null,
          clientIpAddress: '10.0.0.168',
          clientMacAddress: null,
          dataUsage: {
            used: 47495538,
            limit: 209715200,
            speedLimit: false,
            region: 'DE2'
          }
        },
        wifiConnectivity: {
          version: '1.9',
          online: '1',
          bundleid: '84105730616',
          bundleip: '10.3.24.1',
          links: [
            {
              index: '1',
              device_type: 'ethernet',
              device_state: 'down',
              link_state: 'disconnected',
              ethernet_info: { ip: '0.0.0.0', netmask: '0.0.0.0', mode: 'dhcp' }
            },
            {
              index: '102',
              device_type: 'modem',
              device_subtype: 'sierra-7710',
              device_state: 'down',
              link_state: 'disconnected',
              rssi: '-105',
              technology: 'unknown',
              operator_id: '-1',
              apninfo: 'cd-internet,-1,-1',
              umts_info: { net_status: '2', lac: '0000', cellid: '00000000' }
            },
            {
              index: '103',
              device_type: 'modem',
              device_subtype: 'sierra-7710',
              device_state: 'down',
              link_state: 'disconnected',
              rssi: '-1',
              technology: 'unknown',
              operator_id: '-1',
              apninfo: 'internet.t-mobile.cz,wap,wap',
              umts_info: { net_status: '2', lac: '0000', cellid: '00000000' }
            },
            {
              index: '104',
              device_type: 'modem',
              device_subtype: 'sierra-7710',
              device_state: 'up',
              link_state: 'available',
              rssi: '-57',
              technology: 'lte',
              operator_id: '26201',
              apninfo: 'railnet.telekom,-1,-1',
              umts_info: { net_status: '1', lac: 'FFFE', cellid: '01F00302' }
            },
            {
              index: '105',
              device_type: 'modem',
              device_subtype: 'sierra-7710',
              device_state: 'up',
              link_state: 'available',
              rssi: '-74',
              technology: 'lte',
              operator_id: '26202',
              apninfo: 'fv1.deutschebahn.com,-1,-1',
              umts_info: { net_status: '1', lac: 'FFFE', cellid: '0077B513' }
            },
            {
              index: '106',
              device_type: 'modem',
              device_subtype: 'unavailable',
              device_state: 'down',
              link_state: 'disconnected',
              rssi: '-1',
              technology: '-1',
              operator_id: '-1',
              apninfo: '-1,-1,-1',
              umts_info: { net_status: '-1', lac: '-1', cellid: '-1' }
            }
          ]
        }
      }
    }
  ]
}
```

## Structure

Files in /unauthorized are pcap's from api requests before the terms were accepted,
/authorized contains logs after the terms were accepted.

Some requests failed with a 404 which could maybe be related to features that are only available while the train is driving in the czech republic

The dashboard provided by the onboard-wifi (cdwifi.cz) repeatedly sent the following requests:
- authorized/2_vehicle_gateway_user.http
- authorized/3_advertisement_type.http
- authorized/5_area_poi.http
- authorized/6_vehicle_realtime.http
