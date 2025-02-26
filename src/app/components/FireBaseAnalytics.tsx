"use client";

import { useEffect } from "react";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const FirebaseAnalytics = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure Firebase is only initialized once on the client side
      if (!getApps().length) {
        const firebaseConfig = {
          apiKey: "AIzaSyDT8ynIROJl3AnZ_TQii-wN48QGkEcgGdc",
          authDomain: "contact-form-portfolio-20552.firebaseapp.com",
          projectId: "contact-form-portfolio-20552",
          storageBucket: "contact-form-portfolio-20552.firebasestorage.app",
          messagingSenderId: "768901717572",
          appId: "1:768901717572:web:73bc35d1e00e4077e3e611",
          measurementId: "G-8HLJYE7JDT",
        };

        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

        // Log a custom event (optional)
        logEvent(analytics, "page_view", {
          page_path: window.location.pathname,
        });
      } else {
        const app = getApp();
        const analytics = getAnalytics(app);

        // Log a custom event (optional)
        logEvent(analytics, "page_view", {
          page_path: window.location.pathname,
        });
      }
    }
  }, []);

  return null; // This component doesn't render anything visually
};

export default FirebaseAnalytics;
