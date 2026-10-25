import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Static site: no incremental cache, queue or tag cache, so there are no R2/D1/Durable
// Object bindings to declare in wrangler.jsonc and nothing to provision in the account.
const config = {
  ...defineCloudflareConfig(),
  // `npm run build` runs the adapter, and the adapter builds the Next.js app by running
  // the `build` script - which would recurse. Point it at the plain Next.js build
  // instead; the adapter still enables standalone mode for it (NEXT_PRIVATE_STANDALONE).
  buildCommand: "npm run build:next",
};

export default config;
