# Ahlam Junk Removal - Premium Junk Removal Website

A modern, fully responsive website for Ahlam Junk Removal - a premium junk removal and waste disposal service company operating across all 7 emirates of the UAE.

## Features

- 🎨 Ultra-modern, luxury design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with Next.js 14 and optimized images
- 🎭 Smooth scroll animations using Framer Motion
- 💬 WhatsApp integration for instant communication
- 📞 Floating call and WhatsApp buttons
- 🎯 SEO optimized with proper meta tags
- 🌍 Service coverage across all UAE emirates

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ (v22.7.0 recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services grid
│   ├── WhyChooseUs.tsx     # Why choose us section
│   ├── HowItWorks.tsx      # Process steps
│   ├── BeforeAfter.tsx     # Gallery slider
│   ├── Testimonials.tsx    # Customer reviews
│   ├── Pricing.tsx         # Pricing plans
│   ├── ContactSection.tsx  # Contact form
│   ├── Footer.tsx          # Footer
│   └── FloatingButtons.tsx # WhatsApp & Call buttons
└── public/                 # Static assets
```

## Customization

### Update Contact Information

Edit the phone numbers and email addresses in:
- `components/ContactSection.tsx`
- `components/FloatingButtons.tsx`
- `components/Footer.tsx`
- `components/Header.tsx`

### Update WhatsApp Number

Replace `971501234567` with your actual WhatsApp number in:
- `components/ContactSection.tsx`
- `components/FloatingButtons.tsx`

### Update Colors

Modify the color scheme in `tailwind.config.ts`:
- Primary colors (navy, dark)
- Secondary colors (emerald, teal)
- Accent colors (gold, yellow)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Node.js

## SEO Optimization

The site includes:
- Proper meta tags in `app/layout.tsx`
- Semantic HTML structure
- Optimized images
- Fast loading times
- Mobile-first responsive design

## License

This project is created for Ahlam Junk Removal. All rights reserved.

## Support

For questions or support, contact: info@ahlamjunkremovaluae.com




