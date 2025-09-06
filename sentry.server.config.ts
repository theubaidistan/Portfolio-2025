// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://def89de62185ea5ba120a497fefac078@o4509973404123136.ingest.us.sentry.io/4509973405302784",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
