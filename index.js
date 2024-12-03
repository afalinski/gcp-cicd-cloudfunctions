//-----------------------------------------------------------------------------
// NodeJS App for GCP Cloud Functions deployed via GCP Cloud Build Triggers
// Copyleft (c) by Denis Astahov
//-----------------------------------------------------------------------------

exports.helloWorld = (req, res) => {
  const message="<font color='blue'>PROD - Сloud Function of Andrei Falinski!</font><br><b>App Version 1.2</b>";
  res.status(200).send(message);
};
