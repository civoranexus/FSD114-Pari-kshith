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
# ✅ Day 7 Documentation – Courses, Enrollment & Progress (EduVillage – FSD114)

## 📌 Work Summary (Day 7)
Today I implemented the core learning workflow for the EduVillage platform. This includes course management, student enrollment, and progress tracking. The backend APIs and frontend UI were integrated to allow students to view courses, enroll, and track their learning progress.

---

## ✅ Database Design (New Tables)

### 📘 Courses Table
- Stores course details created by teachers or admins
- Fields include:
  - title
  - description
  - category
  - created_by
  - created_at

### 📗 Enrollments Table
- Tracks which students are enrolled in which courses
- Prevents duplicate enrollments per student

### 📊 Progress Table
- Tracks course completion percentage for each student
- Progress is updated dynamically

---

## Courses Module
### Implemented Features
- Backend API to **create courses** (Teacher/Admin only)
- Backend API to **list all courses** (Public access)
- Integrated PostgreSQL `courses` table
- Frontend Courses page to:
  - Display list of available courses
  - Show course title, description, category, and instructor
- Proper role-based access control applied for course creation

---

## Student Enrollment & Progress Tracking
### Implemented Features
- Student-only enrollment API
- Backend API to:
  - Enroll student into a course
  - Fetch enrolled courses for a student
  - Track and update course progress
- PostgreSQL tables for enrollments and progress tracking
- Frontend functionality to:
  - Enroll students from Courses page
  - Display enrolled courses and progress in Student Dashboard
- Duplicate enrollment prevention and validation

---

## ✅ UI Design Guidelines Followed

### 🎨 Colors
- Clean and neutral background colors for content areas
- Accent colors used for action buttons (Enroll)
- Green indicators for success messages
- Red indicators for errors and access issues

### 🔤 Fonts & Layout
- Default system fonts for readability
- Clear spacing between course cards
- Card-based layout for course listing
- Consistent padding and alignment across pages

---

## ✅ Testing & Verification
- Backend APIs tested using Thunder Client
- Role-based access verified for:
  - Student
  - Teacher
  - Admin
- Courses API tested after database schema creation
- Enrollment and progress verified using pgAdmin
- Frontend tested for:
  - Course listing
  - Enrollment flow
  - Progress display
- Error handling verified for unauthorized access

---

## ✅ Result
The EduVillage platform now supports a complete course lifecycle where teachers create courses, students enroll, and learning progress is tracked. This establishes the core functionality required for an online learning platform and aligns with the FSD114 project requirements.

---

## 🔜 Next Steps
- Lesson and content management
- Course detail and lesson viewer pages
- Quizzes and assessments
- Certificate generation on completion

# ✅ Day 8 Documentation – Lessons & Completion Tracking (EduVillage – FSD114)

## 📌 Work Summary (Day 8)
Today I implemented the lesson management and lesson completion tracking features for the EduVillage platform. These features allow teachers to add lessons to courses and students to view lessons and mark them as completed. This strengthens the core learning workflow of the platform.
---
## ✅ Database Design (New Tables)

### 📘 Lessons Table
Stores lessons linked to courses.

Fields:
- id  
- course_id (foreign key)  
- title (required)  
- content  
- video_url  
- created_at  

---

### 📗 Lesson Completion Table
Tracks which lessons a student has completed.

Fields:
- id  
- user_id  
- lesson_id  
- completed (boolean)  
- unique constraint per user & lesson  

---

##Lessons Module

### Implemented Features
- API to add lessons (Teacher/Admin only)  
- API to fetch lessons by course  
- Lessons linked to courses via foreign key  
- Lesson viewer frontend page  
- Video link support inside lessons  
- Proper role-based access control  

---

## Lesson Completion Tracking

### Implemented Features
- API to mark lessons as completed  
- Stores completion per student  
- Prevents duplicate completion records  
- Frontend "Mark Complete" button  
- Success message after completion  
- Requires authentication token  

---

## ✅ UI Design Guidelines Followed

### 🎨 Colors
- Clean background for lesson content  
- Accent buttons for actions  
- Green messages for successful completion  
- Red messages for errors  

---

### 🔤 Fonts & Layout
- Default readable fonts  
- Clear spacing between lessons  
- Simple and distraction-free layout  
- Consistent padding and alignment  

---

## ✅ Testing & Verification
- APIs tested using Thunder Client  
- Role-based restrictions verified  
- Lessons retrieved using course IDs  
- Completion records verified in pgAdmin  
- Frontend tested for:
  - Lesson viewing  
  - Video links  
  - Completion marking  
- Error handling validated  

---

## ✅ Result
The EduVillage platform now supports lesson-based learning where teachers can add content and students can track lesson completion. This creates a structured and trackable learning experience aligned with e-learning platform requirements.

---

## 🔜 Next Steps
- Quiz and assessment system  
- Course completion percentage  
- Certificate generation  
- Teacher lesson upload UI

# Today Documentation (EduVillage – FSD114) — Day 9

## Today Work Summary
Today I implemented the complete quiz evaluation workflow in the EduVillage platform, including quiz answer submission, automatic scoring, storing quiz attempts, and building a quiz results dashboard for students.

---

## Quiz Submission & Scoring System

### Features Implemented
- Created Quiz Submission API endpoint
- Accepted student quiz answers from frontend
- Compared submitted answers with correct answers in database
- Implemented automatic score calculation
- Stored quiz attempt records in database
- Protected submission API using JWT authentication
- Connected frontend quiz page with submission API
- Displayed score immediately after quiz submission

### Database Integration
- Used `quiz_attempts` table to store:
  - user_id
  - quiz_id
  - score
  - total marks
  - submitted_at timestamp
- Ensured each quiz submission is saved for history tracking

### Testing & Verification
- Submission API tested using Thunder Client
- Score calculation verified with multiple attempts
- Database entries verified in pgAdmin
- Frontend submission flow tested end-to-end

---

## Quiz Results Dashboard

### Features Implemented
- Created Quiz Results API endpoint
- Fetches quiz attempt history for logged-in student
- Joined quiz_attempts with quizzes table
- Sorted results by latest submission first
- Built Quiz Results dashboard page in React
- Displayed results in table format
- Calculated percentage score in frontend
- Protected results route using JWT

### Results Dashboard Displays
- Quiz title
- Score obtained
- Total marks
- Percentage
- Submission date and time

### Frontend Integration
- Created Quiz Results page component
- Integrated results API using Axios
- Passed JWT token in Authorization header
- Added route for quiz results page
- Restricted access to authenticated users only

### Testing & Verification
- Results API tested using Thunder Client
- SQL join and sorting verified
- Quiz history validated with database records
- Dashboard UI tested with real quiz data

---

## Result
The EduVillage platform now supports full quiz workflow — students can submit quizzes, receive evaluated scores, and view their complete quiz performance history through a dedicated results dashboard. Frontend, backend, and database quiz features are fully integrated.

## ✅ Commands Used
```bash
cd frontend
npm run dev
cd backend
npm init -y 
npm install express cors dotenv
