import type { NextConfig } from "next";

// Cache Components / Partial Prefetching are disabled on purpose:
// @opennextjs/cloudflare cannot run Next.js 16 Cache Components staged renders on workerd yet.
// With `cacheComponents: true` runtime prefetches hang the Worker with
// "The Workers runtime canceled this request because it detected that your Worker's code had
// hung and would never generate a response" and the isolate stays wedged.
// See opennextjs-cloudflare#1450, vercel/next.js#94880, and the fix in
// opennextjs-cloudflare#1318 (unreleased as of 1.20.13).
// `partialPrefetching` requires `cacheComponents`, so it is removed as well.
// This site uses no `use cache` / `cacheLife` / `cacheTag` / Suspense, so nothing is lost:
// every route prerenders as static. Re-enable both once #1318 ships.
const nextConfig: NextConfig = {};

export default nextConfig;
