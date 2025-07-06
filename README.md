# 🚀 Suraj Kushwaha - Portfolio Website

A modern, responsive portfolio website built with Next.js 13, TypeScript, and Tailwind CSS. Features smooth animations, dark/light theme support, and a contact form with email functionality.

![Portfolio Preview](https://img.shields.io/badge/Next.js-13.5.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🎨 Modern Design**: Clean, professional design with smooth animations
- **🌙 Dark/Light Theme**: Toggle between dark and light themes
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Performance**: Built with Next.js 13 App Router for optimal performance
- **📧 Contact Form**: Functional contact form with email integration using Resend
- **🎭 Smooth Animations**: Framer Motion animations for enhanced user experience
- **♿ Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **🔍 SEO Optimized**: Meta tags, structured data, and dynamic favicon

## 🛠️ Tech Stack

### Frontend
- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Backend & Services
- **Resend** - Email service for contact form
- **Next.js API Routes** - Serverless API endpoints

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
project/
├── app/                    # Next.js 13 App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── icon.tsx           # Dynamic favicon
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   ├── ui/               # Reusable UI components
│   └── theme-provider.tsx # Theme context
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Resend account (for email functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   RECEIVER_EMAIL=your_email@example.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration

This portfolio includes a functional contact form that sends emails using Resend:

1. **Sign up for Resend**: Visit [resend.com](https://resend.com) and create an account
2. **Get your API key**: Copy your API key from the Resend dashboard
3. **Add to environment variables**: Add your API key to `.env.local`
4. **Verify sender domain** (optional): For production, verify your domain in Resend

## 🎨 Customization

### Colors and Theme
- Edit `tailwind.config.ts` to customize the color palette
- Modify `components/theme-provider.tsx` for theme customization

### Content
- Update personal information in the respective section components
- Modify `app/layout.tsx` for meta tags and SEO
- Customize the dynamic favicon in `app/icon.tsx`

### Styling
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Animation configurations are in individual components

## 📱 Sections

1. **Hero Section** - Introduction with typing animation
2. **About Section** - Personal background and skills
3. **Experience Section** - Work history and achievements
4. **Projects Section** - Portfolio of projects
5. **Skills Section** - Technical skills and expertise
6. **Contact Section** - Contact form and information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **Railway**: Connect GitHub repository and add environment variables
- **DigitalOcean App Platform**: Deploy with buildpack

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: surajkushwaha371@gmail.com
- **LinkedIn**: [Suraj Kushwaha](https://www.linkedin.com/in/suraj-kushwaha-a696a8258/)
- **GitHub**: [suraj371k](https://github.com/suraj371k)
- **Twitter**: [@surajgzp371](https://x.com/surajgzp371)

---

⭐ If you found this portfolio helpful, please give it a star! 