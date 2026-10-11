
import { betterAuth } from "better-auth/minimal";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { db } from "./mongodb";

const isProduction = process.env.NODE_ENV === "production";

const productionURL = "https://bazardorbdaily.vercel.app";

const baseURL =
  process.env.BETTER_AUTH_URL ||
  (isProduction ? productionURL : "http://localhost:3000");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    transaction: false,
  }),

  baseURL,

  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },

  account: {
    // Store OAuth state in a short-lived cookie.
    storeStateStrategy: "cookie",

    // Allow linking trusted OAuth providers to existing accounts.
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "github"],
    },
  },

  advanced: {
    useSecureCookies: isProduction,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    },

    github: {
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    },
  },

  trustedOrigins: [
    baseURL,
    productionURL,
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ],
});
