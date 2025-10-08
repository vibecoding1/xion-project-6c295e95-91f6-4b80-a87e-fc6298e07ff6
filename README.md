# John Smith Portfolio

This is a modern and vibrant personal portfolio landing page for John Smith, built with the Xion Stack. It's designed to showcase experience to potential employers, featuring a hero section, experience timeline, and a contact form.

## Features

- **Hero Section:** Engaging introduction with a call to action for resume download and contact.
- **Experience Section:** Dedicated area to highlight professional work history.
- **Contact Form:** Functional form for potential employers to get in touch.
- **Resume Download:** Placeholder for a resume PDF download link.
- **LinkedIn Integration:** Link to John Smith's LinkedIn profile in the footer.
- **Modern & Vibrant Design:** Built with Tailwind CSS and shadcn/ui components.
- **Responsive Layout:** Optimized for various screen sizes.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/vibecoding1/xion-project-6c295e95-91f6-4b80-a87e-fc6298e07ff6.git
    cd xion-project-6c295e95-91f6-4b80-a87e-fc6298e07ff6
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Copy the `.env.example` file to `.env.local` and fill in the necessary details, especially for email configuration if you plan to use the contact form's backend functionality.

    ```bash
    cp .env.example .env.local
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

-   **Content:** Update the text and details in `components/HeroSection.tsx`, `components/ExperienceSection.tsx`, and `components/ContactForm.tsx` with John Smith's actual information.
-   **Resume:** Replace `/path/to/your/resume.pdf` in `components/HeroSection.tsx` and `components/navbar.tsx` with the actual path to John's resume.
-   **Social Links:** Update the LinkedIn, GitHub, and Twitter links in `components/Footer.tsx` and `components/HeroSection.tsx`.
-   **Colors & Styling:** Modify `tailwind.config.ts` and `app/globals.css` to further customize the vibrant theme.
-   **Email Configuration:** If you want the contact form to send actual emails, configure the `EMAIL_SERVER_HOST`, `EMAIL_SERVER_PORT`, `EMAIL_SERVER_USER`, `EMAIL_SERVER_PASSWORD`, `EMAIL_FROM`, and `EMAIL_TO` variables in your `.env.local` file.

## Deployment

This project can be easily deployed to platforms like Vercel or Netlify.

---

Built with ❤️ by Bolt and the Xion Stack.
