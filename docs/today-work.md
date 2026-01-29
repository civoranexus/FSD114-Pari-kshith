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
# ✅ Today Documentation (EduVillage – FSD114) — Day 4

## 📌 Today Work Summary
Today I focused on building course-related pages for the EduVillage platform.

### ✅ Day 4: Courses List & Course Details (Frontend)
- Created **Courses List Page**
  - Displays all available courses using dummy data
  - Each course shows title, description, and category
- Created **Course Details Page**
  - Displays detailed information of a selected course
  - Added route parameter support using course ID
- Implemented routing for:
  - `/courses` → Courses list
  - `/courses/:id` → Course details page
- Added navigation to Courses page via Navbar

### Lesson Viewer & Progress Tracking UI
- Created **Lesson Viewer Page**
  - Displays list of lessons for a course
  - Shows completed and pending lessons
- Implemented **Progress Indicator**
  - Calculates course progress percentage (UI only)
  - Displays progress bar for better user experience
- Added routing for lesson viewer:
  - `/lessons`

### Setup Backend
-Created folder backend
  - Intialize backend
  - installing cors

# ✅ Day 5 Documentation – Backend Core (EduVillage – FSD114)

## 📌 Work Summary (Day 5)
Today I worked on setting up the backend for the EduVillage project. This includes backend initialization, database connection, and user registration functionality with secure password handling.

---

## ✅ Backend Technology Stack
- **Node.js** – Runtime environment
- **Express.js** – Backend framework
- **PostgreSQL** – Relational database
- **pg** – PostgreSQL client for Node.js
- **bcrypt** – Password hashing
- **dotenv** – Environment variable management
- **cors** – Enable frontend-backend communication

---

## ✅ Installations Performed (Backend)

Inside the `backend/` folder, the following packages were installed:

```bash
npm install express cors dotenv
npm install pg bcrypt

# ✅ Day 6 Documentation – Authentication & Authorization (EduVillage – FSD114)

## 📌 Work Summary (Day 6)
Today I implemented the complete authentication and authorization flow for the EduVillage platform. This includes secure login using JWT, role-based access control for different users, frontend-backend integration for authentication, and input validation improvements.

## ✅ Technology Stack Used
### Backend
- Node.js
- Express.js
- PostgreSQL
- pg (PostgreSQL client)
- bcrypt (password hashing)
- jsonwebtoken (JWT authentication)
- dotenv
- cors

### Frontend
- React.js (Vite)
- React Router
- Fetch API
- Local Storage (JWT storage)
##Login API & JWT Authentication
- Implemented login API endpoint:
POST /api/auth/login
- Validated user credentials against database
- Used bcrypt to compare hashed passwords
- Generated JWT token on successful login
- Included user role inside JWT payload
- Implemented protected routes using authentication middleware
- Tested login and protected routes using Thunder Client

---
##Role-Based Access Control (RBAC)
- Created custom middleware for role validation
- Restricted API access based on user roles:
- Student
- Teacher
- Admin
- Implemented role-specific protected routes:
/api/student
/api/teacher
/api/admin

- Ensured unauthorized roles are blocked with proper error responses
- Successfully tested role-based access using JWT tokens

##Frontend ↔ Backend Authentication Integration
- Connected React Register page to backend Register API
- Connected React Login page to backend Login API
- Stored JWT token and user role securely in browser localStorage
- Accessed protected backend APIs from frontend using Authorization headers
- Displayed success and error messages in UI based on API response
- Verified complete authentication flow:
UI → API → Database → JWT → Protected Route

---

## ✅ Input Validation Enhancements
- Added email format validation on frontend to block invalid email inputs
- Added backend validation to prevent invalid email formats from being stored
- Ensured incorrect login credentials are properly rejected
- Improved overall security and data integrity

---

## ✅ Testing & Verification
- Authentication APIs tested using Thunder Client
- Role-based routes tested with different user roles
- Frontend tested by registering and logging in users
- Verified JWT token storage and protected API access
- Confirmed database entries using pgAdmin

---

## ✅ Result
The authentication system for EduVillage is fully functional, secure, and role-aware. Users can register, login, receive JWT tokens, and access only authorized resources based on their role. The frontend and backend are now fully integrated for authentication workflows.

---
## ✅ Commands Used
```bash
cd frontend
npm run dev
cd backend
npm init -y 
npm install express cors dotenv
