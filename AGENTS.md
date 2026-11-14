<!-- YASH:BEGIN -->
> [!IMPORTANT]
> This project is maintained by Yash. Keep the branch in a clean, tested, and working state.
> Do not expose private secrets, credentials, or `.env` variables.

## Project Guidelines

- **Database & Schemas:** Maintain clean data contracts.
- **AI Gateway & APIs:** Keep API keys server-side; do not expose private keys in browser code.
- **Secrets:** Use secure environment variables. Do not put secret values in the repo.
<!-- YASH:END -->

## Project rules
- All real business copy, industry data, FAQs and blog posts live in `src/lib/site.ts`; pages render from it so content stays in one audited place. Illustrative visitor scenes (one per journey stage) live in `src/lib/scenes.ts`; keep their order and count matched to each industry's stages.
- The live demo and contact form call the existing production API (envoy.weyoux.com `/api/demo/crawl`, `/api/contact`) with the original payloads; `src/lib/envoy-client.ts` tries the browser first and falls back to the server pass-through in `envoy-api.functions.ts` when CORS blocks it. Never add mock responses or new endpoints.
- Legacy `.html` URLs are 301-redirected in `src/server.ts` to keep search rankings from the original static site.
- Industry pages get their own colour personality via `data-theme` overrides in `src/styles.css`.
- Homepage photo backgrounds use the homepage-only HomePhotoSection wrapper; keep their motion and overlays isolated so industry pages and the opening remain unchanged.
