# Kusum Vet Care Demo

Create a premium, professional, modern and fully responsive **E-Commerce Demo Website** for **KUSUM VET CARE**, an animal health and livestock care business based in Sangli-Madhavnagar, Maharashtra.

## IMPORTANT TECHNOLOGY REQUIREMENTS

Use ONLY:

- React
- Vite
- Tailwind CSS

Do NOT use any other technology, framework, UI library, component library, CSS framework, backend technology, database, or external library.

Do NOT use:
- Next.js
- Node/Express backend
- MongoDB
- MySQL
- Supabase
- Firebase
- Laravel
- Django
- Bootstrap
- Material UI
- Shadcn
- Any other third-party UI/component library

This is a **frontend-only e-commerce demo website**.

Use **mock/static data** throughout the entire website.

DO NOT create or connect any database.

All products, categories, orders, customers, dashboard statistics, testimonials, and other content should use realistic mock data stored locally inside the React project.

---

# BUSINESS INFORMATION

Business Name:
KUSUM VET CARE

Business Type:
Animal Health, Veterinary & Livestock Care E-Commerce

Description:
KUSUM VET CARE is a specialized animal health and livestock care business operating in Sangli-Madhavnagar, Maharashtra.

Address:
VINKAR SOCEITY, 202, Mangalwar Peth,
Sangli, Madhavnagar,
Maharashtra 416406

Phone:
096235 51923

Email:
No email provided — do not invent an email address.

---

# DESIGN DIRECTION

Create a premium veterinary/agriculture-inspired visual identity.

The website should feel:

- Professional
- Trustworthy
- Clean
- Healthcare-oriented
- Agricultural
- Natural
- Modern
- Premium
- Human-designed rather than AI-generated

Do NOT make the website look like a generic AI template.

Avoid excessive gradients, excessive glassmorphism, huge rounded cards, unnecessary animations, and overly futuristic UI.

Use a strong visual hierarchy with plenty of whitespace.

## COLOR PALETTE

Use colors appropriate for veterinary, livestock and agricultural healthcare.

Primary:
Deep Forest Green — #166534

Secondary:
Fresh Green — #22C55E

Accent:
Warm Amber — #F59E0B

Background:
Soft Cream / Off White — #F8FAF5

Text:
Dark Charcoal — #1F2937

Use green as the primary brand color, with amber accents for offers, product highlights and important CTAs.

Maintain good contrast and accessibility.

---

# IMAGES — VERY IMPORTANT

Use a large number of high-quality, realistic images throughout the website.

Do NOT build the entire website with only 3–4 repeated images.

Use different images for different sections/products.

The visual content should include realistic imagery related to:

- Veterinary care
- Cattle
- Dairy cows
- Buffalo
- Goats
- Calves
- Poultry
- Livestock farming
- Animal medicines
- Veterinary products
- Animal nutrition
- Cattle feed
- Mineral mixtures
- Supplements
- Farm care
- Veterinary professionals
- Healthy livestock
- Rural/agricultural environments

Use at least **15–20 different relevant images** throughout the demo.

IMPORTANT:
Images must be implemented in a way that works correctly after deployment on **Vercel**.

Do NOT rely on local image paths that may break after deployment.

Use reliable image URLs or properly configured public assets.

Every important image should have:
- Proper alt text
- Responsive sizing
- object-cover/object-contain where appropriate

Hero images must also be checked so they actually render correctly in the deployed Vercel build.

---

# WEBSITE STRUCTURE

Create a proper multi-page e-commerce experience.

Main pages:

1. Home
2. Shop
3. Product Details
4. Categories
5. About Us
6. Veterinary & Livestock Care
7. Contact
8. Cart
9. Checkout
10. Order Success
11. Customer Account
12. Admin Login
13. Admin Dashboard

Use React routing/navigation behavior to make each page feel like a real separate page.

NAVIGATION LINKS MUST NOT all open the same page.

Every navigation item should correctly navigate to its intended page.

---

# HEADER / NAVBAR

Create a professional sticky navbar.

Left:
- KUSUM VET CARE logo/text

Navigation:

- Home
- Shop
- Categories
- Animal Care
- About
- Contact

Right side:

- Search icon
- Wishlist icon
- Cart icon with item count
- Account icon

Add a prominent CTA:

"Shop Now"

Mobile:
Create a proper responsive hamburger menu.

The mobile menu should open/close smoothly.

---

# HERO SECTION

Create a visually impressive hero section.

Use a large realistic livestock/veterinary banner image.

Hero image concept:

Healthy cattle/livestock on a clean farm environment with a veterinary-care/animal-health feel.

Hero content:

Badge:
"Trusted Animal Health & Livestock Care"

Main heading:

"Better Care for Healthier Livestock"

Supporting text:

"Quality animal health, nutrition and livestock care products for farmers and animal owners."

CTA buttons:

"Shop Products"

"Explore Categories"

Add a small trust section below the buttons:

- Quality Products
- Livestock Focused
- Farmer Friendly
- Trusted Care

Hero must look premium and professional.

Do NOT use a generic SaaS hero design.

---

# HOME PAGE

Create the following sections:

## 1. Hero

Large livestock/veterinary banner.

## 2. Shop by Category

Create visually rich category cards.

Categories:

- Animal Medicines
- Cattle Nutrition
- Mineral Mixtures
- Animal Supplements
- Dairy Care
- Poultry Care
- Goat & Sheep Care
- Farm Hygiene

Each category should contain:
- Relevant image
- Category name
- Short description
- Product count
- "Explore" button

---

# FEATURED PRODUCTS

Create a professional product grid.

Use mock products such as:

1. Premium Cattle Mineral Mixture
2. Livestock Calcium Supplement
3. Cattle Feed Nutrition Booster
4. Animal Vitamin Supplement
5. Dairy Cow Nutrition Mix
6. Goat & Sheep Mineral Supplement
7. Poultry Health Supplement
8. Farm Hygiene Solution

Each product card should contain:

- Product image
- Product name
- Category
- Short description
- Rating
- Review count
- Price
- Discount price
- Discount percentage
- Stock status
- Add to Cart
- Wishlist button
- Quick View

Use realistic but clearly demo/mock pricing.

---

# PRODUCT SEARCH

Create a functional frontend search system.

Users should be able to search products by:

- Product name
- Category
- Keywords

Show:
- Search results
- Result count
- Empty state

Include a clean search experience on desktop and mobile.

---

# PRODUCT FILTERING

Shop page should have filters:

- Category
- Price range
- Rating
- Availability
- Product type

Add sorting:

- Popular
- Newest
- Price Low to High
- Price High to Low
- Top Rated

Filtering and sorting should work using React state and mock data.

---

# PRODUCT DETAILS PAGE

Create a detailed product page.

Include:

- Large product image
- Multiple thumbnail images
- Product name
- Category
- Rating
- Reviews
- Price
- Discount
- Stock availability
- Quantity selector
- Add to Cart
- Buy Now
- Wishlist

Information tabs/sections:

- Description
- Benefits
- Usage Information
- Product Details
- Care Information

Add:

"Related Products"

section at the bottom.

---

# SHOPPING CART

Create a fully interactive cart using React state/local state only.

Cart should include:

- Product image
- Product name
- Price
- Quantity controls
- Remove button
- Wishlist option
- Subtotal
- Discount
- Estimated delivery
- Total

Buttons:

"Continue Shopping"

"Proceed to Checkout"

Show an attractive empty-cart state.

---

# CHECKOUT

Create a professional e-commerce checkout page.

Sections:

## Customer Information

- Full Name
- Mobile Number
- Email
- Address
- City
- State
- Pincode

## Order Summary

Display:

- Products
- Quantity
- Subtotal
- Discount
- Delivery
- Total

## Payment Method

Since this is only a frontend demo, DO NOT integrate a real payment gateway.

Show demo options:

- Cash on Delivery
- UPI
- Online Payment

When the user confirms the order, simulate a successful order.

Generate a mock order ID such as:

KVC-2026-10452

Then redirect to the Order Success page.

---

# ORDER SUCCESS PAGE

Create a professional success screen.

Show:

"Order Placed Successfully"

Display:

- Mock Order ID
- Customer name
- Total amount
- Delivery address
- Estimated delivery
- Ordered products

Buttons:

"Continue Shopping"

"View My Orders"

---

# CUSTOMER ACCOUNT

Create a frontend-only customer account dashboard.

Sections:

- Profile
- My Orders
- Wishlist
- Saved Addresses
- Account Settings

Use mock customer data.

Order history should contain realistic mock orders.

---

# ANIMAL CARE PAGE

Create a dedicated educational/service page around animal and livestock care.

Sections:

- Cattle Care
- Dairy Animal Care
- Goat & Sheep Care
- Poultry Care
- Nutrition & Supplements
- Farm Hygiene

Use realistic imagery.

Add helpful informational cards.

Do not make medical claims or provide dangerous dosage instructions.

Add a CTA:

"Explore Animal Health Products"

---

# ABOUT PAGE

Create a professional About KUSUM VET CARE page.

Include:

- Business introduction
- Mission
- Vision
- Commitment to animal health
- Commitment to farmers
- Quality-focused approach

Use authentic-looking livestock/farm imagery.

Include a statistics section with clearly marked demo/mock figures, for example:

- Quality Products
- Livestock Categories
- Farmer-Focused Service
- Years of Care

Do not present invented business history as verified facts.

---

# CONTACT PAGE

Create a professional contact page.

Display:

KUSUM VET CARE

VINKAR SOCEITY, 202,
Mangalwar Peth,
Sangli, Madhavnagar,
Maharashtra 416406

Phone:
096235 51923

Do not display an email address because none was provided.

Create a contact form:

- Name
- Phone
- Email
- Subject
- Message

Since there is no backend, form submission should work as a frontend demo only.

Show a success message after submission.

Add CTA buttons:

"Call Now"

"Get Directions"

"WhatsApp Us"

Use the supplied phone number for call/WhatsApp actions.

---

# FOOTER

Create a professional multi-column footer.

Column 1:
KUSUM VET CARE

Short business description.

Column 2:
Quick Links

- Home
- Shop
- Categories
- About
- Contact

Column 3:
Customer

- My Account
- Orders
- Wishlist
- Cart
- Checkout

Column 4:
Contact

- Address
- Phone
- Business hours

Add social icons only if appropriate, but do not invent social media accounts.

Footer bottom:

"© 2026 KUSUM VET CARE. All Rights Reserved."

Also add:

"Designed and development by SOSynch Ai Tech"

IMPORTANT:
Add an **"Admin Login"** link in the footer.

The Admin Login link must navigate to:

/admin/login

---

# ADMIN PANEL

IMPORTANT:

Most website management modules should be handled through the frontend-only Admin Panel.

Create a complete professional admin dashboard using mock data.

There is NO backend and NO database.

All admin changes should be simulated using React state/local mock data.

---

# ADMIN LOGIN

Create:

/admin/login

Login UI:

Email:
admin@kusumvetcare.com

Password:
Admin@123

These are DEMO credentials only.

Do not connect to any backend authentication system.

On successful frontend login:

Redirect to:

/admin/dashboard

Add logout functionality.

---

# ADMIN DASHBOARD

Create a professional admin dashboard.

Dashboard cards:

- Total Products
- Total Orders
- Total Customers
- Total Revenue
- Low Stock Products
- Pending Orders

Use mock data.

Add recent orders table.

Add top-selling products.

Add sales overview using simple CSS-based visual elements.

Do not install a chart library.

---

# ADMIN PRODUCT MANAGEMENT

Create:

/admin/products

Features:

- Product list
- Search
- Category filter
- Add Product
- Edit Product
- Delete Product
- Product status
- Stock management
- Featured product toggle

Product fields:

- Product name
- Category
- Description
- Price
- Discount price
- Stock
- SKU
- Product image
- Additional images
- Rating
- Featured status

Since there is no backend, simulate CRUD operations with React state.

---

# ADMIN CATEGORY MANAGEMENT

Create:

/admin/categories

Admin should be able to:

- View categories
- Add category
- Edit category
- Delete category
- Upload/select mock category image
- Activate/deactivate category

---

# ADMIN ORDER MANAGEMENT

Create:

/admin/orders

Display mock orders.

Columns:

- Order ID
- Customer
- Date
- Products
- Amount
- Payment
- Status

Order statuses:

- Pending
- Confirmed
- Packed
- Shipped
- Delivered
- Cancelled

Admin should be able to change the order status using frontend state.

---

# ADMIN CUSTOMER MANAGEMENT

Create:

/admin/customers

Display:

- Customer name
- Phone
- Email
- Orders
- Total spent
- Status

Add search and filtering.

---

# ADMIN CONTENT MANAGEMENT

Create:

/admin/content

Allow the demo admin to manage mock website content such as:

- Hero heading
- Hero description
- Hero image
- Featured products
- Homepage sections
- Promotional banner
- About content

All changes should be simulated on the frontend.

---

# ADMIN SETTINGS

Create:

/admin/settings

Sections:

Business Information
- Business name
- Phone
- Address
- Email field

Website Settings
- Website title
- Hero heading
- Footer text

Store Settings
- Delivery charge
- Tax percentage
- Minimum order amount

These should be mock editable settings.

---

# ADMIN SIDEBAR

Create a professional admin sidebar.

Menu:

Dashboard
Products
Categories
Orders
Customers
Content
Settings

Bottom:

View Website
Logout

On mobile, make the admin sidebar responsive.

---

# RESPONSIVE DESIGN

The entire website must work perfectly on:

- Desktop
- Laptop
- Tablet
- Mobile

Pay special attention to:

- Navbar
- Product grids
- Checkout
- Admin dashboard
- Tables
- Forms
- Sidebar
- Hero section

No horizontal overflow.

---

# UI/UX REQUIREMENTS

Use:

- Clean cards
- Professional spacing
- Consistent typography
- Strong CTA buttons
- Subtle hover effects
- Smooth transitions
- Clear empty states
- Loading states where appropriate
- Error states
- Success notifications
- Responsive modals

Avoid:

- Excessive animations
- Excessive rounded elements
- Huge text everywhere
- Neon colors
- Generic AI-looking layouts
- Excessive glassmorphism
- Unnecessary decorative elements

The design should feel like a real Indian veterinary/agri e-commerce business.

---

# MOCK DATA

Create a centralized mock data structure for:

- Products
- Categories
- Customers
- Orders
- Reviews
- Admin dashboard statistics

Use at least:

20+ mock products

8+ categories

10+ mock customers

15+ mock orders

8+ product reviews

Make the mock data realistic and consistent.

---

# FRONTEND FUNCTIONALITY

Implement working frontend interactions:

- Navigation
- Mobile menu
- Product search
- Product filtering
- Product sorting
- Product details
- Add to cart
- Remove from cart
- Quantity update
- Wishlist
- Checkout
- Order simulation
- Customer account
- Admin login
- Admin logout
- Admin CRUD simulation
- Order status update
- Product search in admin
- Category filtering
- Form validation
- Toast/success/error feedback

Use React state and local mock data only.

---

# IMPORTANT IMAGE DEPLOYMENT REQUIREMENT

Before finishing the project, carefully verify every image used in:

- Hero
- Products
- Categories
- About
- Animal Care
- Banners
- Admin sections

Images MUST render correctly after deployment to Vercel.

Do not use broken relative paths.

Avoid referencing images from temporary/local development paths.

Make sure all image URLs/assets are production-safe.

---

# SEO & ACCESSIBILITY

Add:

- Proper page titles
- Meta descriptions where applicable
- Semantic HTML
- Proper heading hierarchy
- Alt text for images
- Accessible buttons
- Accessible forms
- Keyboard-friendly navigation
- Good color contrast

---

# FINAL QUALITY CHECK

Before completing the website, verify:

1. All navbar links work.
2. Every page opens correctly.
3. Shop filtering works.
4. Search works.
5. Product details work.
6. Cart works.
7. Checkout works.
8. Mock order placement works.
9. Customer account works.
10. Admin login works.
11. Admin dashboard works.
12. Admin product CRUD works using mock state.
13. Admin order management works.
14. Admin customer management works.
15. Admin content management works.
16. Admin settings work.
17. Admin logout works.
18. Footer Admin Login link works.
19. Mobile navigation works.
20. No horizontal scrolling occurs.
21. No broken images exist.
22. Hero banner image renders correctly.
23. Product images render correctly.
24. Website looks natural and professionally designed.
25. No database is used.
26. No backend is used.
27. No unsupported libraries/frameworks are added.
28. Only React + Vite + Tailwind CSS are used.
29. The website is ready for Vercel deployment.
30. Footer contains exactly:

"Designed and development by SOSynch Ai Tech"

The final result should look like a **real premium veterinary and livestock e-commerce website**, not a generic AI-generated template.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5fd3e3d3-55bf-47a9-a327-66493f687fa9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
