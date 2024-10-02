# Blogging Platform

A dynamic blogging platform built with Node.js, Express, and MongoDB, enabling users to create, view, and comment on blog posts. The application supports user authentication, blog management, image uploads, and real-time commenting.

## Features

- User authentication (register, login, logout)
- Create, edit, and delete blog posts
- Upload cover images for blogs
- Comment on blog posts
- Responsive UI with Bootstrap
- EJS templating for dynamic content rendering
- File uploads handled with Multer
- Full CRUD operations for blogs and comments

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS templating, Bootstrap
- **Database**: MongoDB with Mongoose
- **File Upload**: Multer for handling image uploads
- **Authentication**: Custom user authentication with hashed passwords

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blogging-platform.git
2. Navigate to the project directory:

```bash

cd blogging-platform
```
3. Install dependencies:

```bash
npm install
```
4. Set up a MongoDB database and add your database connection string to a .env file:

```bash
MONGODB_URI=your-mongodb-connection-string
```
5. Start the server:

```bash
npm run dev
```
6. Open your browser and navigate to http://localhost:8000.

# Usage
- Register an account to start creating blogs.
- Once logged in, you can create, view, and delete your blog posts.
- Add comments to any blog and engage with other users.

# Project Structure
```bash

/public           - Static assets (CSS, images, uploads)
/routes           - Application routes
/views            - EJS template files
/models           - Mongoose models (User, Blog, Comment)
/services         - Authentication service
```

# License


This project is licensed under the MIT License.

``` csharp

This format can be saved as `README.md` for your project on GitHub.
```
