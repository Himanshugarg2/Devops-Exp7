# 🚀 CI/CD Pipeline using GitHub Actions and Docker

## 📘 Introduction
This project demonstrates the implementation of a **Continuous Integration and Continuous Deployment (CI/CD)** pipeline using **GitHub Actions** for a simple **Node.js REST API** application.  
The pipeline automates the process of building, testing, containerizing, and deploying the application using **Docker**.

## 🧩 Key Features
- Automated build and test using GitHub Actions  
- Docker image creation and push to Docker Hub  
- Simple Node.js application containerized for deployment  
- CI/CD pipeline triggered automatically on every code push to the `main` branch  

## ⚙️ Technologies Used
- **Node.js & Express.js** – Backend REST API  
- **Docker** – Containerization  
- **GitHub Actions** – CI/CD automation  
- **Docker Hub** – Image repository  


## 🚀 How It Works
1. Code is pushed to the GitHub repository.  
2. GitHub Actions automatically:
   - Checks out the code  
   - Installs dependencies  
   - Runs basic tests  
   - Builds and pushes the Docker image to Docker Hub  
3. The Docker image can then be run locally to verify deployment.

## ✅ Verification
After the workflow succeeds:
```bash
docker pull <your-dockerhub-username>/ci-cd-demo:latest
docker run -p 3000:3000 <your-dockerhub-username>/ci-cd-demo:latest
