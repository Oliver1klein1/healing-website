# Healing Website

A modern, responsive website built with Next.js and Tailwind CSS.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Deployment to IONOS

1. Push your code to GitHub
2. In IONOS control panel:
   - Create a new Git repository
   - Connect it to your GitHub repository
   - Set up the following build settings:
     - Build command: `npm run build`
     - Start command: `npm start`
     - Node.js version: 18.x or higher

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SITE_URL=your-site-url
```

## Build and Export

```bash
# Build the application
npm run build

# Export static files
npm run export
```

The exported files will be in the `out` directory. 