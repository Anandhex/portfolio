"use client";

import { useEffect } from "react";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const FirebaseAnalytics = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if Firebase is already initialized, and only initialize if not
      if (typeof window !== "undefined") {
        console.log("Running on client-side");
        console.log("Initialized Firebase Apps:", getApps());

        try {
          // Check if a Firebase app already exists
          const app = getApp(); // get the default app, should already exist if initialized
          const analytics = getAnalytics(app);
          logEvent(analytics, "page_view", {
            page_path: window.location.pathname,
          });
        } catch (error) {
          // If no Firebase app exists, initialize it
          console.log("Initializing Firebase...");
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
          logEvent(analytics, "page_view", {
            page_path: window.location.pathname,
          });
        }
      }
    }
  }, []); // Only run this effect once on mount

  return null; // This component doesn't render anything visually
};

export default FirebaseAnalytics;
