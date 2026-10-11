# 🛒 বাজার দর | BazarDor

**BazarDor** is a responsive web application that helps people in Bangladesh check daily prices of essential products, compare market prices, and explore price changes to make informed shopping decisions.

## 🌐 Live Demo

- **Live Website:** https://bazardorbdaily.vercel.app
- **GitHub Repository:** https://github.com/bdshroud/bazardordaily

## ✨ Key Features

1. **📊 Daily Price Updates** — Explore daily product prices, including price increases and decreases.
2. **🔎 Product Browsing & Filtering** — Browse products, filter by category, and sort by price.
3. **📈 Market Price Comparison** — View minimum, maximum, average, and market-based prices where available.
4. **📱 Responsive Design** — Enjoy a user-friendly experience across desktop, tablet, and mobile devices.
5. **🔐 Secure User Authentication** — Register and sign in using email/password, Google, or GitHub, with profile management.

## 🛠️ Technologies Used

- **Framework:** Next.js 16
- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** Better Auth
- **Database:** MongoDB
- **Notifications:** React Hot Toast
- **Icons:** Lucide React
- **Deployment:** Vercel

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/bdshroud/bazardordaily.git
cd bazardordaily
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root and add your credentials:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_random_secret
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

Replace the placeholder values with your own credentials. Configure the corresponding OAuth callback URLs in Google Cloud Console and GitHub Developer Settings.

**Security:** Never commit `.env.local` or expose your secret keys.

### 4. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 📡 Product API

BazarDor uses product APIs with fallback support to improve data availability.

The configured API sources are:

1. https://api.api-store.workers.dev/api/bazardor
2. https://api.abcz.workers.dev/api/bazardor
3. https://api-store-indol.vercel.app/api/bazardor
4. https://openapi.programming-hero.com/api/bazardor

The application attempts the next configured source when an API request fails or returns an unsuccessful or invalid response.

## 📂 Main Routes

| Route | Description |
|---|---|
| `/` | Homepage and product listings |
| `/category/[slug]` | Products by category |
| `/product/[slug]` | Product details |
| `/signin` | User sign-in |
| `/signup` | User registration |
| `/profile` | User profile |
| `/profile/update` | Update profile information |

## 📜 Available Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## 🚀 Deployment

The project is deployed on Vercel. To deploy your own instance:

1. Import the repository into Vercel.
2. Configure the required environment variables.
3. Set up MongoDB Atlas access.
4. Configure the production authentication URL and OAuth callback URLs.
5. Deploy the application.

## 📄 License

Add your preferred license here if you intend to distribute the project publicly.
