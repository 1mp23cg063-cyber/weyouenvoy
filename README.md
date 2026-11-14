# weYou enVoy

> AI communication system for business: WhatsApp, Voice, Email, Web Chat, and App connected directly to your CRM.

Maintained by **Yash**.

## Features

- **Omnichannel Communication**: Connect WhatsApp Business API, Voice AI, Email, Web Chat, and mobile apps.
- **CRM & Workflow Integration**: Live bidirectional sync with CRM, Calendar, HMS/PMS, and Billing.
- **Multilingual Support**: Out-of-the-box conversational intelligence across English, Kannada, Hindi, and more.
- **Enterprise-Ready**: Fast 4-second response times, 24/7 availability, and automated journey escalation.

## Development

```sh
# Install dependencies
npm install

# Start local development server
npm run dev

# Run test suite
npm run test

# Production build
npm run build
```

## Production Architecture

- **Framework**: TanStack Start with React 19 & Nitro SSR
- **Styling**: Tailwind CSS v4 & Motion animations
- **Routing**: File-based routes under `src/routes/`
- **Content Single-Source-of-Truth**: `src/lib/site.ts`
