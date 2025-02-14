Package.describe({
  name: "testlocal:scss",
  version: "1.0.0",
});

Package.onUse(api => {
  api.versionsFrom(["3.1.2"]);

  const impliedPackages = [
    "fourseven:scss@5.0.0-alpha.1"
  ];
  api.use(impliedPackages);
  api.addFiles([
    "client/style_test.scss",
  ], ["client"]);
});
