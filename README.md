# Space Debris Dashboard 🛰️

An interactive web application for visualizing and analyzing space debris data. This dashboard provides comprehensive insights into orbital debris distribution, risk assessments, and historical trends through intuitive charts and visualizations.

## 🌟 Features

- **Interactive Charts**: Multiple visualization types including yearly trends, country distribution, orbit categories, and risk analysis
- **Real-time Data**: API-driven architecture for seamless data updates
- **Beautiful UI**: Modern, space-themed interface with animated star field backdrop
- **Responsive Design**: Works smoothly across different screen sizes
- **Risk Assessment**: Analyze debris risk scores across different orbital categories

## 📋 Project Structure

### Backend
- **`app.py`** - Flask server with REST API endpoints for data aggregation and serving

### Frontend
- **`src/App.jsx`** - Main React application component
- **`src/index.jsx`** - React entry point
- **`src/index.css`** - Global styling

### Components (`src/components/`)
- **`Header.jsx`** - Application header with navigation and branding
- **`Dashboard.jsx`** - Main dashboard layout orchestrating all charts
- **`StarField.jsx`** - Animated background component with space theme
- **`Footer.jsx`** - Application footer

### Charts (`src/components/charts/`)
- **`YearlyChart.jsx`** - Bar chart showing debris launches by year
- **`CountryChart.jsx`** - Bar chart displaying debris distribution by country
- **`OrbitChart.jsx`** - Pie/Bar chart showing different orbital categories
- **`RiskChart.jsx`** - Risk analysis chart by orbital category

### Configuration & Build
- **`package.json`** - Node.js dependencies and scripts
- **`vite.config.js`** - Vite build configuration
- **`index.html`** - HTML entry point

### Data
- **`final_space_dataset.csv`** - Space debris dataset with fields: launch_year, country, orbit_category, risk_score

### Static Files
- **`static/dashboard.js`** - Additional JavaScript utilities
- **`static/style.css`** - Additional styling

## 🛠️ Technologies

### Backend
- **Flask** - Python web framework
- **Pandas** - Data manipulation and analysis
- **Python** - Server-side logic

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Recharts** - Charting library
- **JavaScript/JSX** - Frontend development

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arya-K21/space_debris_dashboard.git
   cd space_debris_dashboard
   ```

2. **Set up the backend**
   ```bash
   # Install Python dependencies
   pip install flask pandas
   ```

3. **Set up the frontend**
   ```bash
   # Install Node dependencies
   npm install
   ```

4. **Build the frontend**
   ```bash
   npm run build
   ```

### Running the Application

1. **Development mode**
   ```bash
   # Terminal 1: Build frontend in watch mode
   npm run dev

   # Terminal 2: Run Flask server
   python app.py
   ```

2. **Production mode**
   ```bash
   # Build frontend
   npm run build

   # Run Flask server
   python app.py
   ```

The application will be available at `http://localhost:5000`

## 📊 API Endpoints

- `GET /api/yearly` - Yearly debris count data
- `GET /api/country` - Debris count by country
- `GET /api/orbit` - Debris count by orbit category
- `GET /api/risk` - Average risk score by orbit category

## 📁 Data Schema

The `final_space_dataset.csv` contains the following fields:
- `launch_year` - Year of debris launch
- `country` - Country of origin
- `orbit_category` - Type of orbital category
- `risk_score` - Risk assessment score

## 🎨 Key Components

### StarField Component
Creates an animated background with twinkling stars for an immersive space theme.

### Dashboard Component
Orchestrates all chart components and manages the layout of visualizations.

### Chart Components
Each chart component (YearlyChart, CountryChart, OrbitChart, RiskChart) fetches data from the backend API and renders interactive visualizations using Recharts.

## 📦 Build & Deployment

```bash
# Build for production
npm run build

# Lint code
npm run lint
```

The build output is generated in the `dist/` directory, which is served by the Flask application.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for any improvements or bug fixes.

## 📧 Contact

For questions or feedback, please reach out through the GitHub repository.

---

**Space Debris Dashboard** - Bringing clarity to orbital debris data 🚀
