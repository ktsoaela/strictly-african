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
3. Start the Docker containers:
   ```bash
   docker compose up --build
   ```
4. Access the app:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:8000](http://localhost:8000)

## 📌 Directory Structure
```
strictly-african/
│── README.md
│── docker-compose.yml
│── backend/ (Laravel API)
│   └── Dockerfile
│── frontend/ (Next.js Frontend)
│   └── Dockerfile
```

## 📚 FAQ
Having issues with starting the project<br/>
take a look at our  [Frequently Asked Questions](FAQ.md)


## 📢 Get Involved
Strictly African is open for contributions! Feel free to submit issues, feature requests, or even contribute directly to the codebase.



---

_Stay informed. Stay connected. Stay African._

