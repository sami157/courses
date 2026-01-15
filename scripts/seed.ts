import mongoose from "mongoose";
import dotenv from "dotenv";
import Teacher from "../lib/models/Teacher";
import Course from "../lib/models/Course";

// Load environment variables
dotenv.config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("MONGODB_URI is not defined in .env.local");
  process.exit(1);
}

async function seed() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    // Clear existing data
    await Teacher.deleteMany({});
    await Course.deleteMany({});
    console.log("Cleared existing data");

    // Create teachers
    const teachers = await Teacher.insertMany([
      {
        name: "Sarah Johnson",
        bio: "Expert full-stack developer with 10+ years of experience teaching modern web technologies. Former Google engineer and author of multiple best-selling programming books.",
        expertise: ["Web Development", "React", "Node.js", "TypeScript"],
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        rating: 4.9,
        totalStudents: 12500,
      },
      {
        name: "Michael Chen",
        bio: "Data scientist and machine learning expert, former Google researcher with published papers in top-tier conferences. Specializes in deep learning and neural networks.",
        expertise: ["Data Science", "Machine Learning", "Python", "TensorFlow"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        rating: 4.8,
        totalStudents: 9800,
      },
      {
        name: "Emily Rodriguez",
        bio: "Award-winning designer with expertise in user experience and interface design for top tech companies. Her designs have been featured in major design publications.",
        expertise: ["UI/UX Design", "Figma", "Design Systems", "User Research"],
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        rating: 4.9,
        totalStudents: 11200,
      },
      {
        name: "David Kim",
        bio: "Professional photographer and videographer with 15 years of experience. Has worked with major brands and taught thousands of students worldwide.",
        expertise: ["Photography", "Videography", "Adobe Premiere", "Lightroom"],
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        rating: 4.7,
        totalStudents: 8500,
      },
    ]);

    console.log(`Created ${teachers.length} teachers`);

    // Create courses linked to teachers
    const courses = await Course.insertMany([
      {
        title: "Complete Web Development Bootcamp",
        description:
          "Master HTML, CSS, JavaScript, React, and Node.js. Build real-world projects and land your dream job. This comprehensive course covers everything from basics to advanced topics.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
        price: 99.99,
        rating: 4.9,
        teacher: teachers[0]._id,
        lessons: [
          "Introduction to Web Development",
          "HTML & CSS Fundamentals",
          "JavaScript Basics",
          "React Deep Dive",
          "Node.js Backend Development",
          "Full-Stack Project",
        ],
        isTopCourse: true,
      },
      {
        title: "Machine Learning Fundamentals",
        description:
          "Learn the core concepts of machine learning, neural networks, and deep learning from scratch. Includes hands-on projects and real-world applications.",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
        price: 129.99,
        rating: 4.8,
        teacher: teachers[1]._id,
        lessons: [
          "Introduction to ML",
          "Supervised Learning",
          "Neural Networks",
          "Deep Learning",
          "Project: Image Classification",
        ],
        isTopCourse: true,
      },
      {
        title: "Advanced UI/UX Design Masterclass",
        description:
          "Create stunning user interfaces and experiences. Learn design principles, tools, and best practices from industry experts. Perfect for both beginners and experienced designers.",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        price: 89.99,
        rating: 4.9,
        teacher: teachers[2]._id,
        lessons: [
          "Design Principles",
          "User Research Methods",
          "Wireframing & Prototyping",
          "Design Systems",
          "User Testing",
          "Portfolio Building",
        ],
        isTopCourse: true,
      },
      {
        title: "Modern JavaScript: From Zero to Hero",
        description:
          "Comprehensive JavaScript course covering ES6+, async/await, modules, and modern development practices. Build real projects and master the language.",
        image:
          "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=600&fit=crop",
        price: 79.99,
        rating: 4.7,
        teacher: teachers[0]._id,
        lessons: [
          "JavaScript Basics",
          "ES6+ Features",
          "Async Programming",
          "Modules & Bundlers",
          "Advanced Patterns",
        ],
        isTopCourse: false,
      },
      {
        title: "Data Science with Python",
        description:
          "Master data analysis, visualization, and machine learning with Python. Learn pandas, numpy, matplotlib, and scikit-learn through practical projects.",
        image:
          "https://images.unsplash.com/photo-1529107386315-e4a17d6a51f8?w=800&h=600&fit=crop",
        price: 109.99,
        rating: 4.6,
        teacher: teachers[1]._id,
        lessons: [
          "Python for Data Science",
          "Data Manipulation with Pandas",
          "Data Visualization",
          "Statistical Analysis",
          "Machine Learning Basics",
        ],
        isTopCourse: false,
      },
      {
        title: "Professional Photography Course",
        description:
          "Learn professional photography techniques, composition, lighting, and post-processing. Suitable for beginners and intermediate photographers.",
        image:
          "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop",
        price: 69.99,
        rating: 4.7,
        teacher: teachers[3]._id,
        lessons: [
          "Camera Basics",
          "Composition & Framing",
          "Lighting Techniques",
          "Post-Processing",
          "Portfolio Development",
        ],
        isTopCourse: false,
      },
    ]);

    console.log(`Created ${courses.length} courses`);
    console.log("\n✅ Seed completed successfully!");
    console.log("\nSummary:");
    console.log(`- Teachers: ${teachers.length}`);
    console.log(`- Courses: ${courses.length}`);
    console.log(`- Top Courses: ${courses.filter((c) => c.isTopCourse).length}`);

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seed();
