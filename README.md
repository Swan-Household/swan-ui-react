# Swan UI React

**Swan UI React** is the frontend for **Swan Household**—a unified, modern web interface to manage daily tasks, home automation, personal information, and media. Built with Next.js and styled with Tailwind CSS, this project features a clean landing page with four key panels:

- **Tasks:** A future hub for ToDo management and calendar scheduling.
- **Home:** An interface for controlling home devices (e.g., robot vacuums, lights).
- **Info:** A repository for important documents, location data, and other vital information.
- **Media:** A dynamic display for streaming and managing media content.

This project is containerized with Docker to ensure a consistent, reproducible environment that can easily be deployed to the cloud (or later, a homelab). Ashley will be using the Docker image for deployment, making this a key handoff for our collaborative workflow.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Local Development](#local-development)
- [Docker Containerization & Deployment](#docker-containerization--deployment)
- [Project Structure](#project-structure)
- [Collaboration](#collaboration)
- [License](#license)

---

## Features

- **Modern Next.js App:** Uses the new App Router (Next.js 13+).
- **Tailwind CSS Theming:** Custom purple color scheme for a distinctive, elegant design.
- **Responsive Design:** Optimized for desktop and mobile.
- **Clean Navigation:** Four main panels (Tasks, Home, Info, Media) that serve as placeholders for future functionality.
- **Docker Support:** Fully containerized for easy cloud deployment and reproducibility.

---

## Tech Stack

- **Next.js** (with TypeScript) for server-side rendering and routing.
- **Tailwind CSS** for rapid, utility-first styling.
- **pnpm** for efficient package management.
- **Docker** for containerization.

---

## Local Development

### Prerequisites

- [Node.js (v18+)](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop) (for container testing)
- Git

### Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Swan-Household/swan-ui-react.git
   cd swan-ui-react
   ```

1. **Install Dependencies:**

    ```bash
    pnpm install
    ```

1. **Run the Development Server:**
    ```bash
    pnpm run dev
    ```

1. **Open in Browser:**

    Navigate to http://localhost:3000 to view the landing page.

## Docker Containerization & Deployment

This project is containerized to ensure consistency across development, cloud deployments, and eventual homelab use. The following steps outline how to build and run the Docker image.

### Dockerfile Overview
The Dockerfile is structured into two stages:

#### Builder Stage:
Uses node:18-alpine as the base image.
Installs pnpm and project dependencies.
Copies project files and builds the Next.js application.

#### Runner Stage:
Also uses node:18-alpine.
Copies over the build artifacts from the builder stage.
Exposes port 3000 and runs the application with pnpm start.
Building the Docker Image
##### In your project directory, run:
    ```bash
    docker build -t swan-ui-react .
    ```
#### Running the Docker Container
##### Test the image locally:
    ```bash
    docker run -p 3000:3000 swan-ui-react
    ```
You can now access the application at http://localhost:3000.

### Deployment Instructions for Ashley
For cloud deployment, Ashley can use the following process:

#### Push the Docker Image:

Tag and push the image to a container registry (e.g., Docker Hub, GitHub Container Registry, or AWS ECR).
Example (Docker Hub):

    ```bash
    docker tag swan-ui-react your-dockerhub-username/swan-ui-react:latest
    docker push your-dockerhub-username/swan-ui-react:latest
    ```

#### Deploy on the Cloud:

Use the container image in your chosen deployment platform (AWS ECS, Azure App Service, or a Kubernetes cluster).
Configure the platform to run the container on port 3000 and set NODE_ENV to production.
For detailed deployment steps, refer to the Swan Household Deployment Guide.

Project Structure
```lua
swan-ui-react/
├── Dockerfile
├── README.md
├── package.json
├── pnpm-lock.yaml
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── public/
│   └── (static assets)
└── src/
    └── app/
        ├── globals.css
        ├── layout.tsx
        └── page.tsx  <-- Main landing page
src/app/page.tsx: Contains the landing page with navigation panels.
tailwind.config.ts: Defines custom colors (e.g., primary and secondary for the purple theme).
```

## Collaboration
### GitHub Organization:
The repository is part of the Swan Household organization.

### Team Access:
Ashley is invited as a collaborator for deployment purposes.

### CI/CD:
(Future enhancement) Consider setting up GitHub Actions to automatically build and push Docker images on code changes.

### Project Management:
Use GitHub Projects (or your preferred task management tool) to track feature development and deployment tasks.

### License
This project is open-sourced under the MIT License.

Happy coding and deploying!
