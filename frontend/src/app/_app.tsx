import { AppProps } from "next/app";
import { useEffect } from "react";
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker registered:", registration);
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });

        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/service-worker.js').then(
            (registration) => {
              console.log('Service Worker registered with scope:', registration.scope);
            },
            (error) => {
              console.log('Service Worker registration failed:', error);
            }
          );
        });
    }
  }, []);

  return <Component {...pageProps} />;
}


export default MyApp;
