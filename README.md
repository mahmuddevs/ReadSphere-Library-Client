# Project Name: ReadSphere Library Management System - Frontend

## Link: [ReadSphere Library](https://readsphere-by-mahmud.netlify.app/)

## Description:

ReadSphere is a library management system that provides users with an intuitive and interactive platform to explore, borrow, and manage books. Built with React and styled using Tailwind CSS, the website offers seamless navigation for users to interact with book data, borrow books, and manage their account. The application integrates Firebase Authentication to ensure secure access and features private routes for protected user areas.

## Key Features of the Project:

- **Home Page:**
  - Displays a book slider, book categories, featured books, and user testimonials.
- **Add Books Page:**
  - Allows admins to add new books to the library.
- **All Books Page:**
  - Displays all books with an option to switch between card view and table view.
  - Includes a filter button to only show available books.
- **Book Cards:**
  - Each book card includes options for viewing detailed information and updating book details.
- **Book Details Page:**
  - Displays detailed information about the selected book.
  - Users can borrow books by selecting a return date through a popup interface.
- **Borrowed Books:**

  - Shows the list of books that the logged-in user has borrowed.
  - Includes a button to return the borrowed book.

- **Authentication & Security:**
  - Firebase Authentication is used for secure user login and registration.
  - Private routes are protected to ensure only authenticated users can access certain pages.

## NPM Packages Used:

- **axios** - For making API requests to the backend.
- **firebase** - For user authentication and secure login functionality.
- **moment** - For managing and formatting dates, including the borrow return date.
- **react-helmet-async** - For handling meta tags and SEO optimizations.
- **react-hook-form** - For managing form inputs and validation.
- **react-icons** - For integrating icons throughout the application.
- **react-rating-stars-component** - For implementing star ratings in book reviews.
- **react-toastify** - For displaying notifications and alerts to the user.
- **react-tooltip** - For adding tooltips across the application.
- **swiper** - For creating a responsive and interactive slider.
