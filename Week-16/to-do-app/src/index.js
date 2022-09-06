import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from "./App";

Sentry.init({
    dsn: "https://66ffd62a322b4068ae96bcb33bc091a8@o1397470.ingest.sentry.io/6722827",
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
