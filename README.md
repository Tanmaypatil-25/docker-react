# React Docker Insights

A clean, containerized React application built with Vite and orchestrated using Docker Compose. This repository serves as a practical implementation of Infrastructure as Code (IaC) principles for modern frontend development, ensuring a consistent environment across local and production configurations.

## Architecture & Tech Stack
* **Frontend Framework**: React with TypeScript
* **Build Tool**: Vite
* **Containerization**: Docker
* **Orchestration**: Docker Compose

## Prerequisites
Ensure the following are installed on your local machine:
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) or Docker Engine
* Git

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd react-docker
   ```

2. **Start the development environment**
   Run the following command to build the image and spin up the container. The Vite development server will automatically map to your local port `5173`.
   ```bash
   docker compose up --build
   ```
   *(To run the container in the background, append the `-d` flag.)*

3. **Access the application**
   Open your browser and navigate to: `http://localhost:5173`

4. **Stop the environment**
   ```bash
   docker compose down
   ```

## Container Configuration Details
* **Hot Reloading**: The `compose.yaml` utilizes volume bind mounts (`.:/app`) to map the local directory to the container. This ensures that Vite's Hot Module Replacement (HMR) works seamlessly without needing to rebuild the image on every code change.
* **Dependency Isolation**: An anonymous volume (`/app/node_modules`) is used to prevent the container's isolated dependencies from being overwritten by the host machine's architecture, ensuring cross-platform consistency.

## Repository Management
* **`.gitignore`**: Prevents local dependencies, environment variables, and build artifacts from entering version control.
* **`.dockerignore`**: Prevents the host's `node_modules` and metadata from bloating the Docker build context, ensuring clean and efficient image builds.

---

*Driven by values, collectively characterised.*