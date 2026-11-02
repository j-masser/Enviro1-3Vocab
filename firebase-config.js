/* ============================================================
   EDIT THIS FILE to connect the site to your Firebase project.
   ============================================================ */

/* 1. Paste your Firebase web app settings here.
      Firebase console → Project settings (gear icon) → General →
      Your apps → SDK setup and configuration → Config.
      These values are meant to be public; the security rules
      are what protect student data. */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCbLDUyXWOr9Klzz8NEZusx36AXgsOR6j8",
  authDomain: "enviro1-3vocab.firebaseapp.com",
  projectId: "enviro1-3vocab",
  storageBucket: "enviro1-3vocab.firebasestorage.app",
  messagingSenderId: "418205435976",
  appId: "1:418205435976:web:353def3d4e6c488b8cb07d"
};

/* 2. Your class periods, written the way students should see them. */
window.CLASS_PERIODS = ["Period 1", "Period 2", "Period 3", "Period 4", "Period 5", "Period 6", "Period 7"];

/* 3. Teacher accounts that can open the dashboard.
      This must match the email list in your Firestore security rules. */
window.TEACHER_EMAILS = [
  "jennifer_masser@pequeavalley.net",
  "amanda_wolfgang@pequeavalley.net",
  "john_mackay@pequeavalley.net"
];

/* 4. School email domains allowed to sign in. Subdomains count too,
      so "pequeavalley.net" also allows "@students.pequeavalley.net".
      This must match the domain in your Firestore security rules. */
window.ALLOWED_EMAIL_DOMAINS = ["pequeavalley.net"];
