Package.describe({
  name: "testlocal:scss",
  version: "1.0.0",
});

Package.onUse(api => {
  api.versionsFrom(["3.1.2"]);

  const impliedPackages = [
    "illusionfield:scss"
  ];
  api.use(impliedPackages);
  api.addFiles([
    "client/style_test.scss",
  ], ["client"]);

  api.addFiles('client/style_test_import.scss', 'client', { isImport: true });
  api.addFiles('client/style_test_import_global.scss', 'client', { isImport: true });

});
