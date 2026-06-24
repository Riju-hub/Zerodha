# 📈 Zerodha Clone

A full-stack clone of [Zerodha](https://zerodha.com) — India's largest stock brokerage platform — built with the MERN stack. This project replicates the core UI and functionality of Zerodha, including a marketing landing page, a trading dashboard, and a REST API backend.

🔗 **Live Demo:** [zerodha-frontend-sable.vercel.app](https://zerodha-frontend-sable.vercel.app)

---

## 🗂️ Project Structure

```
Zerodha/
├── backend/        # Node.js + Express REST API with MongoDB
├── dashboard/      # React trading dashboard (portfolio, orders, watchlist)
└── frontend/       # React marketing/landing site
```

---

## ✨ Features

**Landing Page (Frontend)**
- Home, About, Pricing, and Products pages
- Responsive design with Bootstrap
- Call-to-action for account signup

**Trading Dashboard**
- Portfolio summary with holdings and positions
- Order management — place buy/sell orders
- Watchlist to monitor favourite stocks
- Funds overview
- Interactive charts for visual data representation

**Backend API**
- RESTful endpoints for holdings, positions, and orders
- MongoDB with Mongoose schemas
- Structured for future authentication support

---

## 🛠️ Tech Stack

| Layer     | Technology                              |
|-----------|-----------------------------------------|
| Frontend  | React.js, CSS, Bootstrap                |
| Dashboard | React.js, Material UI, Chart.js, Axios  |
| Backend   | Node.js, Express.js                     |
| Database  | MongoDB, Mongoose                       |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB (local or Atlas)
- npm

### 1. Clone the Repository

```bash
git clone https://github.com/Riju-hub/Zerodha.git
cd Zerodha
```

### 2. Start the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
DATABASE_URL=mongodb://localhost:27017/zerodha
PORT=3002
```

```bash
npm start
```

### 3. Start the Dashboard

```bash
cd ../dashboard
npm install
npm start
```

### 4. Start the Frontend (Landing Page)

```bash
cd ../frontend
npm install
npm start
```

The apps will be available at:
- Frontend: `http://localhost:3000`
- Dashboard: `http://localhost:3001`
- Backend API: `http://localhost:3002`

---

## 📁 Key Components

### Dashboard

| Component         | Description                                    |
|-------------------|------------------------------------------------|
| `Home`            | Overview of the user's portfolio summary       |
| `Holdings`        | Current stock holdings with P&L               |
| `Positions`       | Active intraday positions                      |
| `Orders`          | Order history with status, price, and quantity |
| `Funds`           | Available funds and margin details             |
| `Watchlist`       | Stocks being tracked with quick-action buttons |
| `BuyActionWindow` | Modal for placing buy/sell orders              |
| `Menu`            | Sidebar navigation                             |
| `TopBar`          | Top navigation bar with links                  |

### Backend API Endpoints

| Method | Endpoint        | Description          |
|--------|-----------------|----------------------|
| GET    | `/allHoldings`  | Fetch all holdings   |
| GET    | `/allPositions` | Fetch all positions  |
| POST   | `/newOrder`     | Place a new order    |

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> **Disclaimer:** This is a personal learning project and is not affiliated with or endorsed by Zerodha. All trademarks belong to their respective owners.
