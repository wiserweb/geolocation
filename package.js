Package.describe({
  name: "wiserweb:geolocation",
  summary: "Provides reactive geolocation with configurable options for desktop and mobile.",
  version: "1.4.0"  
});

Cordova.depends({
  "cordova-plugin-geolocation": "2.1.0"
});

Package.on_use(function (api) {
  api.use(["reactive-var"]);
  api.versionsFrom("METEOR@1.2");
  api.use("isobuild:cordova@5.2.0");
  api.add_files(["geolocation.js"], "client");
  api.export("Geolocation", "client");
});
