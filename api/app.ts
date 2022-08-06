import express from 'express';
import { routerV1 } from './src/routes';

const port = 3000;

var app = express();

app.use("/v1", routerV1);

// TODO add logger
app.listen(port, function () {
  console.log(`API started on port: [ ${port} ]. Time started: [ ${new Date()} ]`);
});
