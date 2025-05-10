# 📌 - A Pinterest Clone by Faisal Din

A fully-featured Pinterest clone built with the MERN stack (MongoDB, Express, React, Node.js), featuring user authentication, image uploads, interactive pins, comments, like/unlike, follow/unfollow and user profiles.

## ✨ Features

### 🔐 Authentication & Authorization

- Secure user registration and login system
- Password encryption with bcryptJS
- JWT token-based authentication
- Protected routes for authenticated users

### 📱 User Interface

- Responsive design that works on all devices
- Complete Pinterest-style landing page for non-authenticated users
- Complete Explore page where users can view all pins and also based on different categories
- Intuitive navigation with dynamic navbar based on user authentication status
- Masonry layout for pins display

### 📌 Pin Management

- Create pins with image uploads (via Cloudinary)
- View all pins on the home feed
- Search functionality to find specific pins
- Detailed individual pin pages
- Edit and delete pins (for pin owners)
- Like and unline pins

### 💬 Social Features

- Comment on pins
- Delete your own comments
- Follow/unfollow other users
- View user profiles

## 🛠️ Technologies Used

### Frontend

- React.js
- React Router for navigation
- Context API for state management
- Axios for API requests
- Tailwind CSS for styling

### Backend

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- bcryptJS for password hashing

### Storage

- Cloudinary for image uploads and storage

## 📝 Future Improvements

- Implement notifications system
- Add pin collections/boards
- Add save and unsave pin
- Add social sharing options
- Implement infinite scrolling for pins

## 📸 Screenshots

### Landing Page

![Landing Page](/screenshots/landing_page.png)

### Explore Page

![Explore Page](/screenshots/explore_page.png)

### Login Page

![Login Page](/screenshots/login_page.png)

### Sign-Up Page

![Sign-Up Page](/screenshots/sign_up.png)

### Home Feed

![Home Feed](/screenshots/home_page.png)

### Pin Detail Page

![Pin Detail](/screenshots/pin_page.png)

### Create Pin Page

![Create Pin](/screenshots/create-pin_page.png)

### Edit Pin Page

![Edit Pin](/screenshots/edit-pin.png)

### User Profile

![User Profile](/screenshots/user-profile.png)

### Edit User Profile

![Edit User Profile](/screenshots/edit-profile.png)

## 🚀 Getting Started

### Prerequisites

- Node.js
- MongoDB
- Cloudinary account

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/pinspire.git
cd pinspire
```

2. Install dependencies for both frontend and backend

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Create a `.env` file in the backend directory with the following variables

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=jwt expiry period i,e 1d, 7d etc
NODE_ENV=production
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Start the development servers

```bash
# Start backend server (from backend directory)
npm run dev

# Start frontend server (from frontend directory)
npm start
```

5. Open your browser and go to `http://localhost:3000`

## 📋 API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### User

- `GET /api/auth/me` - Get user profile
- `GET /api/auth/user/:id` - Get user profile by id
- `PUT /api/auth/profile` - Update user profile
- `POST /api/auth/follow/:id` - Follow or Unfollow a user by ID

### Pins

- `GET /api/pins` - Get all pins
- `GET /api/pins/:id` - Get a specific pin
- `POST /api/pins/create` - Create a new pin
- `PUT /api/pins/:id` - Update a pin
- `DELETE /api/pins/:id` - Delete a pin
- `PUT /api/pins/:id/toggleLike` - Like and Unlike a pin

### Comments

- `GET  /api/pins/:pinId/comments` - Get All comments
- `GET  /api/pins/:pinId/comments/:id` - Get a single comment
- `POST /api/pins/:pinId/comments/create` - Add/Create a comment
- `PUT  /api/pins/:pinId/comments/:id` - Update a comment
- `DELETE /api/pins/:pinId/comments/:id` - Delete a comment

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- GitHub: [@faisal-din](https://github.com/faisal-din)
- LinkedIn: [Faisal Din](https://www.linkedin.com/in/faisal-din56/)

---

⭐ If you find this project helpful, please give it a star on GitHub! ⭐
