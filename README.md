# Trailfinder

## Overview

This repository represents the culminating project for **CSCI 4300 – Web Programming** at UGA.  
We built a website that finds trails around athens.

---

## DOMINATORS

| Member Name          | GitHub Username      | Role                    |
|----------------------|----------------------|-------------------------|
| Anish Reddy          | AnishReddy02         | Project Manager         |
| Conner Breunig       | cb94147              | Project Leader          |
| Jack Phalen          | jayphay              | Communication Leader    |
| Krish Patel          | krxshpatel           | GitHub Captain          |

---

## Project Features

- Authentication & Authorization
- Middleware or Route Protection for authenticated users
- CRUD operations using MongoDB + Mongoose
- Dynamic Routing with the Next.js App Router
- Responsive UI with Tailwind CSS
- Full-stack deployment using Vercel + MongoDB Atlas

---

## Repository Structure

/src  
/app → Next.js App Router pages (frontend & API routes)  
/components → list components  
/models → Mongoose schemas / MongoDB models  
/public → static assets (images etc.)  
/design → mockups.md  
/status → WEEKLY_STATUS.md  

---

## Tech Stack

| Layer        | Technology                      |
|--------------|----------------------------------|
| Frontend     | React + Next.js (App Router)     |
| Backend      | Next.js API Routes / Node.js     |
| Database     | MongoDB + Mongoose               |
| Styling      | Tailwind CSS                     |
| Auth         | NextAuth.js                      |

---

## Run the development server

npm install  
npm run dev  

The project should now be running at:  
http://localhost:3000

---

## API Endpoints

| Method | Endpoint          | Description          |
|--------|-------------------|-----------------------|
| GET    | /api/items        | Fetch all items       |
| POST   | /api/items        | Create a new item     |
| GET    | /api/items/[id]   | Get item by ID        |
| PUT    | /api/items/[id]   | Update item by ID     |
| DELETE | /api/items/[id]   | Delete item by ID     |
| GET    | /api/auth/session | Fetch user session    |
| POST   | /api/auth/register| Create new user       |

## API References
https://www.nps.gov/subjects/developer/
https://www.weatherapi.com/  


---

## Database Models

### User Model

name: String  
email: String  
role: String  
password: String  
createdAt: Date  

### Item Model

title: String  
content: String  
createdAt: Date  
updatedAt: Date  

---

## Client Routes

/ → Homepage  
/login → User login  
/register → Create new account  
/dashboard → User dashboard  
/items → List of items  
/items/[id] → Item details  
/create → Add new item  

---

## Future Improvements

- Add S3/Cloudinary file uploads  
- Add role-based access control  
- Add a dashboard with visual analytics  
- Add automated Jest/Playwright testing  
- Add offline PWA support  

---

## Acknowledgements

- Thanks to our professor and TAs for guidance  
- Thanks to UGA Computer Science Department  
