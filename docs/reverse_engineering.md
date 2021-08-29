# Reverse Engineering APIs

_The following guide is just a small overview for now._

Reverse engineering web apis essentially just consists of logging the requests, that a website or app sends to their api. Once the structure of the api endpoints is apparent, we can start sending those requests from our own app or website (although this can be limited by [CORS](https://de.wikipedia.org/wiki/Cross-Origin_Resource_Sharing)).

Multiple methods exist for logging requests, for example Postman has a nice [guide](https://learning.postman.com/docs/sending-requests/capturing-request-data/capturing-http-requests/#built-in-proxy) on the topic.
However, with their proxy requests cannot be saved as easy as they can with the [Burp Suite](https://portswigger.net/burp/communitydownload). This software is intended for web security testing and it's functionality goes even beyond what is needed for simple api reverse engineering. 

Once you've installed Burp Suite, you have to tell your OS to use Burp Suite's proxy. They have documentation on [how to setup your browser](https://portswigger.net/burp/documentation/desktop/tools/proxy/using), but you can also change the [proxy for your entire os](https://www.avast.com/c-how-to-set-up-a-proxy). Furthermore, even your phone can use the proxy of your computer. This is practical when reverse engineering a proprietary app.

## Gathering logs

By default, the Burp Suite proxy is setup to intercept requests. This means that every request that your computer sends is halted, until you forward or drop it. You can disable that by clicking on `Intercept is on` under *Proxy > Intercept*. Now you can check the `HTTP history` tab in the proxy category. Try opening e.g. google.com. If the proxy is setup correctly, entries should appear here.

Simply copy/paste the output of the displayed request and response for a selected entry into a `<name>.http` file. To get syntax highlighting for .http files, you can use the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension for VS Code.
