/// <reference path="../typings/tsd.d.ts" />
import Hapi = require('hapi');
import ServerRoutes = require('./routes/ServerRoutes');
let HapiAuthCookie: any = require('hapi-auth-cookie');

// creating the hapi server instance
let server: Hapi.Server = new Hapi.Server();

// adding a new connection that can be listened on
server.connection({
  port: 3000,
  host: 'localhost',
  labels: ['web'],
  routes: {
    cors: true
  }
});

// enable hapi-auth-cookie
server.register(HapiAuthCookie, function(error: any): void {
  server.auth.strategy('session', 'cookie', false, {
    password: 'secret',
    cookie: 'sid-example',
    redirectTo: '/login',
    isSecure: false
  });
});

// defining our routes
ServerRoutes.RegisterRoutes(server);

// starting the server
server.start(function (err: any): void {
  if (err) {
    throw err;
  }
  console.log('hapi server started');
});