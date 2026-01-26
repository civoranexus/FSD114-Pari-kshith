# ✅ Today Documentation (EduVillage – FSD114)

## 📌 Today Work Summary (Day 1–Day 2 Completed)
Today I worked on the EduVillage frontend setup and initial UI structure.

### ✅ Day 1: Frontend Setup + Basic Pages
- Initialized React frontend using Vite inside `frontend/`
- Installed dependencies and ran the project successfully using:
  - `npm install`
  - `npm run dev`
- Created basic folder structure and starter pages:
  - `pages/` (Home, Login, Dashboard)
  - `components/` (Navbar)

### ✅ Day 2: Layout + Routing Setup
- Created a common layout structure for reuse across pages
- Implemented React Router navigation for:
  - `/` → Home
  - `/login` → Login
  - `/dashboard` → Dashboard
- Added course listing UI using course cards (dummy data)
- Added search input for course search
- Added category filter dropdown for filtering courses
- Home UI is responsive and clean for initial stage

---
# ✅ Today Documentation (EduVillage – FSD114) — Day 3

## 📌 Today Work Summary
Today I worked on improving the EduVillage frontend by adding authentication UI pages and creating separate dashboards for different user roles.

---

## ✅ Day 3: Authentication UI (Frontend)
### ✅ Implemented:
- Created **Register Page UI**
  - Inputs: Name, Email, Password
  - Role selection: Student / Teacher / Admin (UI only)
- Improved **Login Page UI**
  - Email + Password fields
  - Basic form handling (UI only)
- Added routing for Register page:
  - `/register`
- Updated Navbar with Register link

### ✅ Created separate dashboard pages:
- **Student Dashboard**
  - Planned area for enrolled courses and progress tracking
- **Teacher Dashboard**
  - Planned area for course management and grading workflow
- **Admin Dashboard**
  - Planned area for user/course management and reports

### ✅ Added routes for dashboards:
- `/student` → Student Dashboard
- `/teacher` → Teacher Dashboard
- `/admin` → Admin Dashboard

---

## ✅ Commands Used
```bash
cd frontend
npm run dev

