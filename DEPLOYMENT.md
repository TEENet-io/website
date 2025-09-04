# Deployment Guide for TEENet Landing Page

## Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)
```bash
# Deploy directly
npx vercel

# Or connect GitHub repo at vercel.com for auto-deployment
```

### Option 2: Netlify
```bash
# Build and deploy
npm run build
npx netlify-cli deploy --prod --dir=out
```

### Option 3: GitHub Pages
```bash
# Build static site
npm run build

# Deploy to gh-pages branch
./deploy-gh-pages.sh
```

Then enable GitHub Pages in repo settings → Pages → Source: gh-pages branch

### Option 4: Traditional Web Hosting
```bash
# Build static files
npm run build

# Upload the 'out' folder to your web server
```

## Environment Setup

### For Static Export (GitHub Pages, traditional hosting)
The `next.config.ts` is already configured for static export:
```typescript
{
  output: 'export',
  images: {
    unoptimized: true
  }
}
```

### For Dynamic Hosting (Vercel, Netlify)
Remove the `output: 'export'` line from `next.config.ts` for better optimization.

## Custom Domain Setup

### Vercel
1. Go to project settings
2. Add domain under "Domains"
3. Follow DNS configuration instructions

### Netlify
1. Go to site settings
2. Add custom domain
3. Configure DNS records

### GitHub Pages
1. Create `CNAME` file in `public/` directory with your domain
2. Configure DNS with your provider:
   - A records: 185.199.108-111.153
   - CNAME: yourname.github.io

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server (if not using static export)
npm start

# Analyze bundle size
npm run build -- --analyze
```

## Deployment Checklist

- [ ] Test locally with `npm run build && npm start`
- [ ] Update meta tags and SEO information
- [ ] Configure analytics (if needed)
- [ ] Set up error tracking (optional)
- [ ] Configure custom domain
- [ ] Set up SSL certificate (automatic on most platforms)
- [ ] Test on multiple devices and browsers
- [ ] Set up monitoring and alerts

## Troubleshooting

### Build Errors
- Clear cache: `rm -rf .next out`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### 404 Errors on Refresh
- For static hosting, ensure all routes are properly exported
- For SPAs, configure redirects to index.html

### Slow Performance
- Enable compression on your server
- Use CDN for static assets
- Optimize images before uploying