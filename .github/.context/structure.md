# Project Structure: John Smith Portfolio

This project is a personal portfolio landing page for John Smith, built using the Xion Stack template.

## Core Technologies
- Next.js 14+ (App Router)
- React 18+ with TypeScript
- Tailwind CSS with shadcn/ui components
- Configured for email functionality (for contact form)

## File Structure

- `app/page.tsx`: The main landing page, orchestrating the different sections.
- `app/layout.tsx`: Root layout for the application, including ThemeProvider and Toaster.
- `components/HeroSection.tsx`: Displays the hero banner with name, title, resume download, and contact button.
- `components/ExperienceSection.tsx`: Showcases John Smith's professional experience.
- `components/ContactForm.tsx`: Provides a form for visitors to send messages.
- `components/Footer.tsx`: Contains copyright information and social media links.
- `tailwind.config.ts`: Tailwind CSS configuration, including a custom vibrant color palette.
- `.env.example`: Example environment variables, with `NEXT_PUBLIC_ENABLE_EMAIL` set to `true`.
- `.github/.context/structure.md`: This file, detailing the project's architecture.
- `.github/.context/history.md`: Records the development history.

## Key Features
- **Modern & Vibrant Design:** Utilizes Tailwind CSS and shadcn/ui for a visually appealing aesthetic.
- **Hero Section:** Engaging introduction with a call to action for resume download and contact.
- **Experience Section:** Dedicated area to highlight professional work history.
- **Contact Form:** Functional form for potential employers to get in touch.
- **Resume Download:** Placeholder for a resume PDF download link.
- **LinkedIn Integration:** Link to John Smith's LinkedIn profile in the footer.
- **Responsive Layout:** Designed to look great on all devices.

## Configured Environment Variables
- `NEXT_PUBLIC_ENABLE_EMAIL=true`: Enables email functionality for the contact form.
- `NEXT_PUBLIC_APP_NAME="John Smith Portfolio"`
- `NEXT_PUBLIC_APP_DESCRIPTION="John Smith's modern and vibrant personal portfolio landing page."`

## Layout
- Uses `LayoutVariants.Landing` for the main page, providing a clean marketing page structure.
