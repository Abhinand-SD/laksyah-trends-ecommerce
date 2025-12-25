🛍️ E-Commerce Frontend (React.js)

A modern and responsive E-commerce frontend application built using React.js, designed to work seamlessly with the MERN E-commerce Backend API.
This application provides a complete user shopping experience along with admin access support.

🚀 Features
👤 User Features

User Signup & Login

OTP-based signup flow

JWT-based authentication

Google / Social login support (SSO)

Persistent login using cookies

Product listing with categories

Product detail page with:

Image zoom

Breadcrumb navigation

Ratings & reviews

Price & discounts

Stock status (In Stock / Out of Stock)

Related products

Add to cart

Update cart quantity

Remove items from cart

Checkout & payment (Stripe)

Order success & failure handling

Order history page

🛠️ Admin Features

Admin login

User management (block / unblock)

Category management (add / edit / delete)

Product management:

Add / edit / soft delete products

Upload multiple images

Image preview before upload

Order management dashboard

🧑‍💻 Tech Stack
Technology	Usage
React.js	Frontend library
React Router	Routing
Axios	API calls
Context API / Redux	State management
CSS / Tailwind / Bootstrap	Styling
Stripe	Payment UI
JWT	Authentication
Cloudinary	Image rendering
Vite / CRA	Build tool
📁 Folder Structure
frontend/
│
├── src/
│   ├── api/
│   │   └── axiosInstance.js
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── Loader.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── Orders.jsx
│   │
│   ├── admin/
│   │   ├── AdminLogin.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Users.jsx
│   │   ├── Products.jsx
│   │   └── Categories.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   │
│   ├── routes/
│   │   └── ProtectedRoute.jsx
│   │
│   ├── utils/
│   │   └── helpers.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── package.json
└── README.md

⚙️ Environment Variables

Create a .env file in the root directory:

VITE_API_BASE_URL=http://localhost:5000
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key


(If using CRA, use REACT_APP_ prefix)

🛠️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/ecommerce-frontend.git
cd ecommerce-frontend

2️⃣ Install Dependencies
npm install

3️⃣ Run the Application
npm run dev


App runs on:

http://localhost:3000

🔗 API Integration

All API requests are handled via Axios instance:

import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

export default instance;

🔐 Authentication Flow

User logs in

Backend sends JWT via HTTP-only cookies

Frontend stores user state

Protected routes verify authentication

Admin routes verify admin role

🎨 UI & UX Highlights

Fully responsive layout

Clean & minimal design

Smooth navigation

Loading states & error handling

SEO-friendly routing

Accessible UI components

📌 Future Enhancements

Wishlist feature

Product reviews & ratings UI

Coupon & offers UI

Admin analytics charts

Progressive Web App (PWA)

Dark mode

👨‍🎓 Author

Abhinand SD
Frontend / Full Stack Developer (MERN)
Self-learned | Project-based learning
