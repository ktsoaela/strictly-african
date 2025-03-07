# Strictly African

## 🎯 Tagline
**"Africa First, Africa Always"**

**Strictly African** is a dynamic platform dedicated to delivering real-time African news, local updates, and weather forecasts, while also offering exclusive merchandise to celebrate African culture.

## 🌍 About the Project
Strictly African is your go-to source for staying informed about what's happening in your neighborhood, city, province, and across Africa. The platform integrates news, current affairs, and a merchandise store that allows users to support the brand through stylish apparel and accessories.


## 🚀 Tech Stack
Strictly African is built using modern web technologies:
- **Frontend:** Next.js (React)
- **Backend:** Laravel (PHP)
- **Database:** MySQL
- **Containerization:** Docker & Docker Compose

## 🛠 Project Setup
### Prerequisites
Ensure you have the following installed:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Installation & Running the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/ktsoaela/strictly-african.git
   cd strictly-african
   ```
2. Copy the environment file:
   ```bash
   cp .env.example .env
   ```
5. Start the Docker containers:
   ```bash
   docker network create strictly-african-network
   docker-compose up
   ```
4. Start the Docker containers:
   ```bash
   docker compose up --build
   ```
5. Access the app:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:8000](http://localhost:8000)

## 📌 Directory Structure
```
strictly-african/
.
├── DEVELOPER.md                       // Developer-specific instructions and guidelines
├── FAQ.md                             // Frequently asked questions about the project
├── README.md                          // Main project documentation
├── backend
│   ├── Dockerfile                     // Docker configuration for the Laravel backend
│   ├── README.md                      // Documentation specific to the backend
│   ├── app                            // Core application logic (models, controllers, etc.)
│   ├── artisan                        // Laravel CLI for running commands
│   ├── bootstrap                      // Application bootstrapping files
│   ├── composer.json                  // PHP dependencies and project metadata
│   ├── composer.lock                  // Locked versions of PHP dependencies
│   ├── config                         // Configuration files for the application
│   ├── database                       // Database migrations, seeders, and factories
│   ├── docker-000-default.conf        // Apache configuration for Docker
│   ├── package-lock.json              // Locked versions of Node.js dependencies
│   ├── package.json                   // Node.js dependencies and scripts
│   ├── phpunit.xml                    // PHPUnit configuration for testing
│   ├── postcss.config.js              // PostCSS configuration for Tailwind CSS
│   ├── public                         // Publicly accessible files (e.g., assets, index.php)
│   ├── resources                      // Non-PHP resources (e.g., views, CSS, JS)
│   ├── routes                         // Application routes (API, web, console)
│   ├── storage                        // Storage for logs, cached files, and uploads
│   ├── tailwind.config.js             // Tailwind CSS configuration
│   ├── tests                          // Feature and unit tests
│   ├── vendor                         // Composer-installed PHP dependencies
│   └── vite.config.js                 // Vite configuration for frontend assets
├── docker-compose.yml                 // Multi-container Docker setup for the project
└── frontend
    ├── Dockerfile                     // Docker configuration for the Next.js frontend
    ├── README.md                      // Documentation specific to the frontend
    ├── eslint.config.mjs              // ESLint configuration for linting
    ├── next-env.d.ts                  // TypeScript declaration file for Next.js
    ├── next.config.ts                 // Next.js configuration (e.g., custom webpack settings)
    ├── node_modules                   // Installed Node.js dependencies
    ├── package-lock.json              // Locked versions of Node.js dependencies
    ├── package.json                   // Node.js dependencies and scripts
    ├── postcss.config.mjs             // PostCSS configuration for Tailwind CSS
    ├── public                         // Static assets (e.g., images, icons)
    ├── src                            // Application source code (components, pages, etc.)
    ├── tailwind.config.ts             // Tailwind CSS configuration
    └── tsconfig.json                  // TypeScript configuration
```

## 📚 FAQ
Having issues with starting the project<br/>
take a look at our  [Frequently Asked Questions](FAQ.md)


## 📢 Get Involved
Strictly African is open for contributions! Feel free to submit issues, feature requests, or even contribute directly to the codebase.



---

_Stay informed. Stay connected. Stay African._

