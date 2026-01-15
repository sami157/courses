# Coachify – Online Coaching Platform

A modern, full-stack online learning platform built with Next.js that allows users to discover, browse, and create courses. Coachify provides a seamless experience for both learners and instructors to connect and share knowledge.

## 📋 Description

Coachify is a comprehensive online coaching platform that enables:
- **Students** to browse and discover high-quality courses across various disciplines
- **Instructors** to create and share their expertise through structured courses
- **Seamless authentication** with protected routes for course creation
- **Real-time course management** with MongoDB database integration

The platform features a beautiful, responsive UI with dark mode support, toast notifications, and a modern user experience.

## 🛠️ Tech Stack

### Frontend
- **Next.js 16.1.2** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **react-hot-toast** - Toast notifications

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Authentication
- **NextAuth.js 4.24.13** - Authentication library
- **JWT** - Session strategy

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ installed
- pnpm (or npm/yarn) package manager
- MongoDB database (local or cloud like MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd courses
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret_key
   ```

   Generate a `NEXTAUTH_SECRET` using:
   ```bash
   openssl rand -base64 32
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `NEXTAUTH_URL` | Base URL of your application | Yes |
| `NEXTAUTH_SECRET` | Secret key for NextAuth.js | Yes |

### Example `.env.local`
```env
MONGODB_URI=mongodb://localhost:27017/coachify
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/coachify

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_generated_secret_key_here
```

## 🔑 Authentication Details

### Mock Credentials

For development and testing, the following credentials are hardcoded:

- **Email:** `admin@coach.io`
- **Password:** `admin123`

> **Note:** These are mock credentials for development purposes only. In production, implement proper user authentication with a database.

### Authentication Flow

1. Users can access public routes without authentication
2. Protected routes (e.g., `/add-course`) require login
3. Unauthenticated users are redirected to `/login` with a callback URL
4. After successful login, users are redirected to their intended destination

## 📍 Route Summary

### Public Routes
- `/` - Landing page with hero, features, testimonials
- `/courses` - Browse all available courses
- `/courses/[id]` - View individual course details
- `/login` - User authentication page

### Protected Routes
- `/add-course` - Create a new course (requires authentication)

### API Routes
- `GET /api/courses` - Fetch all courses
- `GET /api/courses/[id]` - Fetch single course by ID
- `POST /api/courses` - Create a new course (protected)
- `GET/POST /api/auth/[...nextauth]` - NextAuth authentication endpoints

## ✨ Features Implemented

### User Interface
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Dark Mode Support** - Automatic theme switching
- ✅ **Loading States** - Skeleton loaders for better UX
- ✅ **Toast Notifications** - Success/error feedback with react-hot-toast

### Course Management
- ✅ **Course Listing** - Grid view with course cards
- ✅ **Course Details** - Individual course pages with full information
- ✅ **Course Creation** - Form to add new courses (protected)
- ✅ **Course Schema** - Title, description, image, teacher, rating, price, lessons

### Authentication
- ✅ **NextAuth.js Integration** - JWT-based session management
- ✅ **Protected Routes** - Middleware-based route protection
- ✅ **Login Page** - Email/password authentication
- ✅ **Session Management** - Server and client-side session access

### Database
- ✅ **MongoDB Integration** - Mongoose ODM for data modeling
- ✅ **Course Model** - Structured schema with validation
- ✅ **Connection Caching** - Optimized database connections

### Navigation
- ✅ **Global Navbar** - Responsive navigation with conditional links
- ✅ **Global Footer** - Site information and links
- ✅ **Dynamic Routing** - Next.js App Router with dynamic segments

## 🎯 Project Structure

```
courses/
├── app/
│   ├── api/              # API routes
│   │   ├── auth/         # NextAuth endpoints
│   │   └── courses/      # Course CRUD operations
│   ├── courses/          # Course pages
│   │   ├── [id]/         # Dynamic course detail page
│   │   └── page.tsx      # Course listing page
│   ├── login/            # Authentication page
│   ├── add-course/       # Course creation page (protected)
│   ├── layout.tsx        # Root layout with providers
│   └── page.tsx          # Landing page
├── components/
│   ├── layout/           # Layout components (Navbar, Footer)
│   └── providers/        # React context providers
├── lib/
│   ├── auth.ts           # NextAuth configuration
│   ├── mongodb.ts        # Database connection utility
│   └── models/           # Mongoose models
├── middleware.ts         # Route protection middleware
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## 🚧 Future Enhancements

- [ ] User registration and profile management
- [ ] Course enrollment functionality
- [ ] Payment integration
- [ ] Course reviews and ratings
- [ ] Search and filter functionality
- [ ] Course categories and tags
- [ ] Instructor dashboard
- [ ] Student progress tracking
- [ ] Video lesson integration
- [ ] Course completion certificates

## 📝 Development Notes

### Toast Notifications
- Success toast appears after successful login
- Success toast appears after course creation
- Configured globally in root layout
- Custom styling with dark mode support

### Middleware Protection
- Uses NextAuth `withAuth` middleware helper
- Automatically redirects unauthenticated users to `/login`
- Preserves callback URL for post-login redirect

### Database Models
- Course schema includes timestamps (createdAt, updatedAt)
- Validation for required fields and data types
- Support for lessons array

## 🌐 Live Demo

<!-- Add your live demo URL here when deployed -->
**Coming Soon** - Deploy to Vercel, Netlify, or your preferred hosting platform.

Example deployment:
```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👤 Author

Built with ❤️ for the learning community.

---

**Happy Learning! 🎓**
