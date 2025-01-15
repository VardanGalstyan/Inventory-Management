## Introduction

This project is a **full-stack application** designed to provide an intuitive platform for managing inventory and visualizing data. It leverages modern frameworks and tools to deliver a responsive, high-performing user experience, ensuring efficient and reliable inventory management processes.

> **Disclaimer**: This project was developed solely for portfolio purposes and does not have a live implementation in a production environment. It demonstrates technical proficiency and knowledge of full-stack development, cloud hosting, and modern development practices.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Architecture](#architecture)

---

## Introduction

This project is a **full-stack application** designed to provide an intuitive platform for managing inventory and visualizing data. It leverages modern frameworks and tools to deliver a responsive, high-performing user experience, ensuring efficient and reliable inventory management processes.

---

## Live Demo

You can view the live version of this project here:  
[**Live Demo**](https://master.d1sdjjnzho172v.amplifyapp.com/)

---

## Features

### Client (Frontend)

- Built with **Next.js 15** for server-side rendering and React 19 for dynamic interfaces.
- State management using **Redux Toolkit** with **redux-persist** and **redux-thunk**.
- Tailored UI components with **MUI** and **Tailwind CSS**.
- Interactive charts using **Recharts**.
- API integration using **Axios**.

### Backend

- Powered by **Express.js**, handling API requests efficiently.
- Database management with **Prisma** ORM connected to a **PostgreSQL** database.
- Secure and scalable file storage with AWS **S3**.
- Authentication and middleware integration for seamless operations.

### Hosting and Infrastructure

- **Frontend** hosted on **AWS Amplify** for scalable and secure delivery.
- **Backend server** deployed on an **AWS EC2** instance.
- **PostgreSQL database** hosted on **AWS RDS** for reliability and performance.
- **AWS API Gateway** for secure and monitored API calls.
- **S3** for file and image storage.

---

## Technologies Used

### Client

- **Languages**: TypeScript, JavaScript
- **Libraries & Frameworks**: Next.js, React, Redux Toolkit, Tailwind CSS, MUI, Recharts
- **Development Tools**: ESLint, Prettier, PostCSS

### Backend

- **Languages**: JavaScript, TypeScript
- **Frameworks**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Environment Variables**: dotenv

### Hosting & Infrastructure

- **AWS Services**: EC2, RDS, S3, API Gateway, Amplify

---

## Architecture

```plaintext
+-------------------+           +------------------+           +-------------------+
|    AWS Amplify    |   --->    |      AWS EC2     |   --->    |    AWS RDS        |
|   (Frontend)      |           | (Backend Server) |           | (PostgreSQL DB)   |
+-------------------+           +------------------+           +-------------------+
        |
        |
        v
+-------------------+
|    AWS S3         |
| (File Storage)    |
+-------------------+
```

---
