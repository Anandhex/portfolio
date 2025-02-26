"use client";

import { useEffect } from "react";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const FirebaseAnalytics = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if Firebase is already initialized, and only initialize if not
      if (!getApps().length) {
        const firebaseConfig = {
          apiKey: "AIzaSyDT8ynIROJl3AnZ_TQii-wN48QGkEcgGdc",
          authDomain: "contact-form-portfolio-20552.firebaseapp.com",
          projectId: "contact-form-portfolio-20552", // Ensure projectId is here
          storageBucket: "contact-form-portfolio-20552.firebasestorage.app",
          messagingSenderId: "768901717572",
          appId: "1:768901717572:web:73bc35d1e00e4077e3e611",
          measurementId: "G-8HLJYE7JDT",
        };

        // Only initialize Firebase if it hasn't been initialized yet
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

        // Log a custom event (optional)
        logEvent(analytics, "page_view", {
          page_path: window.location.pathname,
        });
      } else {
        // If Firebase is already initialized, get the existing app instance
        const app = getApp();
        const analytics = getAnalytics(app);

        // Log a custom event (optional)
        logEvent(analytics, "page_view", {
          page_path: window.location.pathname,
        });
      }
    }
  }, []); // Only run this effect once on mount

  return null; // This component doesn't render anything visually
};

export default FirebaseAnalytics;
