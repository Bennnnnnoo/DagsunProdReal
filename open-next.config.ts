import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Static site: no incremental cache, queue or tag cache, so there are no R2/D1/Durable
// Object bindings to declare in wrangler.jsonc and nothing to provision in the account.
export default defineCloudflareConfig();
