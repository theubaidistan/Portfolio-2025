import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://def89de62185ea5ba120a497fefac078@o4509973404123136.ingest.us.sentry.io/4509973405302784",
  integrations: [
    Sentry.feedbackIntegration({
      colorScheme: "dark", // or "light"
      autoInject: true, // adds floating button automatically
      // optional customization:
      formTitle: "Report a Bug",
      // submitButtonLabel: "Send Feedback",
    }),
  ],
  tracesSampleRate: 1.0,
});
