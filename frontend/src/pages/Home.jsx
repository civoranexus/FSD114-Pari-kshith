import { useMemo, useState } from "react";
import Layout from "../components/Layout";
import CourseCard from "../components/CourseCard";

export default function Home() {
  const courses = useMemo(
    () => [
      {
        id: 1,
        title: "JavaScript Fundamentals",
        description: "Learn JS basics: variables, functions, loops and DOM.",
        category: "Programming",
        level: "Beginner",
      },
      {
        id: 2,
        title: "React for Beginners",
        description: "Build UI using components, props and state.",
        category: "Frontend",
        level: "Beginner",
      },
      {
        id: 3,
        title: "Node.js + Express Basics",
        description: "Create APIs, routes and handle requests/responses.",
        category: "Backend",
        level: "Beginner",
      },
      {
        id: 4,
        title: "PostgreSQL Starter",
        description: "Learn tables, relations, and SQL queries.",
        category: "Database",
        level: "Beginner",
      },
      {
        id: 5,
        title: "Full Stack Project Practice",
        description: "Combine frontend + backend + DB for real projects.",
        category: "Full Stack",
        level: "Intermediate",
      },
    ],
    []
  );

  const categories = useMemo(() => {
    const all = courses.map((c) => c.category);
    return ["All", ...new Set(all)];
  }, [courses]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const matchCategory = category === "All" || c.category === category;
      const matchSearch =
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [courses, search, category]);

  return (
    <Layout>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>EduVillage 📚</h1>
        <p style={styles.heroSubtitle}>
          A simple online learning platform for Students, Teachers and Admin.
        </p>

        {/* Search + Filter */}
        <div style={styles.controls}>
          <input
            style={styles.search}
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            style={styles.select}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Course Grid */}
      <h2 style={styles.sectionTitle}>Popular Courses</h2>

      {filteredCourses.length === 0 ? (
        <p style={{ color: "#666" }}>No courses found ❌</p>
      ) : (
        <div style={styles.grid}>
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </Layout>
  );
}

const styles = {
  hero: {
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "22px",
    backgroundColor: "#ffffff",
    marginBottom: "24px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  heroTitle: {
    margin: 0,
    fontSize: "34px",
  },
  heroSubtitle: {
    marginTop: "6px",
    color: "#555",
  },
  controls: {
    marginTop: "16px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  search: {
    flex: 1,
    minWidth: "220px",
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    outline: "none",
  },
  select: {
    minWidth: "160px",
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    backgroundColor: "#fff",
    cursor: "pointer",
  },
  sectionTitle: {
    margin: "12px 0",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
  },
};
