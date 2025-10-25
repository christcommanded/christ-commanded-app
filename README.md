# Christ Commanded Church

This project is a Vite-powered React application bootstrapped with TypeScript and styled with Tailwind CSS for the Christ Commanded Church.

## Available Scripts

- `npm run dev` – start a development server.
- `npm run build` – create a production build.
- `npm run preview` – preview the production build locally.

## Styling

Tailwind CSS is configured with the Christ Commanded Church brand palette:

- Gold `#D4AF37`
- White `#FFFFFF`
- Deep Blue `#0A2342`

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

## Testing

Run the production build to ensure the project compiles without errors:

```bash
npm run build
```

Preview the optimised build locally to verify styles, focus states, and navigation behaviour:

```bash
npm run preview
```

### Lighthouse checks

After running `npm run build`, you can generate Lighthouse scores for performance, accessibility, best practices, and PWA readiness:

```bash
npx @lhci/cli collect --staticDistDir=dist --numberOfRuns=1
```

The command creates a `.lighthouseci` directory with the HTML reports that can be opened in a browser.

## Deployment

1. Build the application: `npm run build`.
2. Deploy the contents of the `dist` directory to a static hosting provider such as Netlify, Vercel, GitHub Pages, or an S3 bucket.
3. Ensure that the hosting platform is configured to serve `index.html` for unknown routes so client-side navigation continues to work.

For containerised or custom infrastructure, serve the `dist` directory with any static web server (for example `npm install -g serve && serve dist`).
