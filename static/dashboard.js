// ============================================
// Space Debris Dashboard - JavaScript Logic
// ============================================

// Chart instances
let yearlyChart, countryChart, orbitChart, riskChart;

// Color palette
const colors = {
    primary: '#00d9ff',
    secondary: '#00ff88',
    accent: '#ff006e',
    gradient1: '#0099cc',
    gradient2: '#00ff88',
    text: '#e0e0e0',
    border: 'rgba(0, 217, 255, 0.2)',
};

// Initialize dashboard on page load
document.addEventListener('DOMContentLoaded', () => {
    loadDashboardData();
});

// ============================================
// Main Data Loading Function
// ============================================
async function loadDashboardData() {
    try {
        console.log('🚀 Loading dashboard data...');

        // Fetch all data in parallel
        const [yearlyData, countryData, orbitData, riskData] = await Promise.all([
            fetchAPI('/api/yearly'),
            fetchAPI('/api/country'),
            fetchAPI('/api/orbit'),
            fetchAPI('/api/risk'),
        ]);

        // Initialize charts
        initYearlyChart(yearlyData);
        initCountryChart(countryData);
        initOrbitChart(orbitData);
        initRiskChart(riskData);

        // Update timestamp
        document.getElementById('lastUpdated').textContent = new Date().toLocaleString();

        console.log('✅ Dashboard loaded successfully');
    } catch (error) {
        console.error('❌ Error loading dashboard:', error);
        showErrorMessage('Failed to load dashboard data');
    }

    // Handle window resize for responsive charts
    window.addEventListener('resize', handleResize);
}

// ============================================
// API Fetch Function
// ============================================
async function fetchAPI(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        return [];
    }
}

// ============================================
// Chart 1: Yearly Trend
// ============================================
function initYearlyChart(data) {
    const ctx = document.getElementById('yearChart')?.getContext('2d');
    if (!ctx) return;

    // Sort data by year
    data.sort((a, b) => a.launch_year - b.launch_year);

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(0, 217, 255, 0.6)');
    gradient.addColorStop(1, 'rgba(0, 217, 255, 0)');

    yearlyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.launch_year),
            datasets: [
                {
                    label: 'Objects Launched',
                    data: data.map(d => d.count),
                    borderColor: colors.primary,
                    backgroundColor: gradient,
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: colors.primary,
                    pointBorderColor: '#0b0d17',
                    pointBorderWidth: 2,
                    pointHoverRadius: 7,
                    pointHoverBackgroundColor: colors.secondary,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: colors.text,
                        font: { size: 12, family: "'Inter', sans-serif" },
                        padding: 15,
                    },
                },
                tooltip: {
                    backgroundColor: 'rgba(11, 13, 23, 0.9)',
                    titleColor: colors.primary,
                    bodyColor: colors.text,
                    borderColor: colors.primary,
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 8,
                    titleFont: { size: 14, weight: 'bold' },
                    bodyFont: { size: 12 },
                    displayColors: false,
                },
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(0, 217, 255, 0.05)',
                        drawBorder: false,
                    },
                    ticks: {
                        color: colors.text,
                        font: { size: 11 },
                    },
                },
                y: {
                    grid: {
                        color: 'rgba(0, 217, 255, 0.05)',
                        drawBorder: false,
                    },
                    ticks: {
                        color: colors.text,
                        font: { size: 11 },
                    },
                },
            },
        },
    });
}

// ============================================
// Chart 2: Top Countries
// ============================================
function initCountryChart(data) {
    const ctx = document.getElementById('countryChart')?.getContext('2d');
    if (!ctx) return;

    // Top 10 countries
    const topData = data.slice(0, 10);

    // Create gradient colors
    const colors_array = topData.map((_, i) => {
        const hue = (i * 360) / topData.length;
        return `hsl(${hue}, 100%, 50%)`;
    });

    countryChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: topData.map(d => d.country),
            datasets: [
                {
                    label: 'Debris Objects',
                    data: topData.map(d => d.count),
                    backgroundColor: colors_array,
                    borderColor: colors.primary,
                    borderWidth: 1,
                    borderRadius: 8,
                    hoverBackgroundColor: colors.secondary,
                },
            ],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: colors.text,
                        font: { size: 12, family: "'Inter', sans-serif" },
                    },
                },
                tooltip: {
                    backgroundColor: 'rgba(11, 13, 23, 0.9)',
                    titleColor: colors.primary,
                    bodyColor: colors.text,
                    borderColor: colors.secondary,
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 8,
                    displayColors: false,
                },
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(0, 217, 255, 0.05)',
                        drawBorder: false,
                    },
                    ticks: {
                        color: colors.text,
                        font: { size: 11 },
                    },
                },
                y: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: colors.text,
                        font: { size: 11 },
                    },
                },
            },
        },
    });
}

// ============================================
// Chart 3: Orbit Categories
// ============================================
function initOrbitChart(data) {
    const ctx = document.getElementById('orbitChart')?.getContext('2d');
    if (!ctx) return;

    const colors_array = [
        colors.primary,
        colors.secondary,
        colors.accent,
        '#ff9500',
        '#00d4ff',
        '#ff006e',
    ];

    orbitChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data.map(d => d.orbit),
            datasets: [
                {
                    data: data.map(d => d.count),
                    backgroundColor: colors_array.slice(0, data.length),
                    borderColor: '#0b0d17',
                    borderWidth: 2,
                    hoverOffset: 10,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: colors.text,
                        font: { size: 12, family: "'Inter', sans-serif" },
                        padding: 15,
                    },
                },
                tooltip: {
                    backgroundColor: 'rgba(11, 13, 23, 0.9)',
                    titleColor: colors.primary,
                    bodyColor: colors.text,
                    borderColor: colors.secondary,
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: (context) => {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value} (${percentage}%)`;
                        },
                    },
                },
            },
        },
    });
}

// ============================================
// Chart 4: Risk Scores by Orbit
// ============================================
function initRiskChart(data) {
    const ctx = document.getElementById('riskChart')?.getContext('2d');
    if (!ctx) return;

    // Sort by risk score
    data.sort((a, b) => b.risk_score - a.risk_score);

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(255, 0, 110, 0.8)');
    gradient.addColorStop(1, 'rgba(255, 0, 110, 0.2)');

    riskChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: data.map(d => d.orbit_category),
            datasets: [
                {
                    label: 'Average Risk Score',
                    data: data.map(d => d.risk_score.toFixed(2)),
                    borderColor: colors.accent,
                    backgroundColor: gradient,
                    borderWidth: 2,
                    fill: true,
                    pointRadius: 5,
                    pointBackgroundColor: colors.accent,
                    pointBorderColor: '#0b0d17',
                    pointBorderWidth: 2,
                    pointHoverRadius: 7,
                    pointHoverBackgroundColor: colors.primary,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: colors.text,
                        font: { size: 12, family: "'Inter', sans-serif" },
                    },
                },
                tooltip: {
                    backgroundColor: 'rgba(11, 13, 23, 0.9)',
                    titleColor: colors.accent,
                    bodyColor: colors.text,
                    borderColor: colors.accent,
                    borderWidth: 1,
                    padding: 12,
                    cornerRadius: 8,
                    displayColors: false,
                },
            },
            scales: {
                r: {
                    grid: {
                        color: 'rgba(0, 217, 255, 0.1)',
                    },
                    ticks: {
                        color: colors.text,
                        font: { size: 10 },
                        backdropColor: 'transparent',
                    },
                    pointLabels: {
                        color: colors.text,
                        font: { size: 11, weight: 'bold' },
                    },
                },
            },
        },
    });
}

// ============================================
// Responsive Resize Handler
// ============================================
function handleResize() {
    if (yearlyChart) yearlyChart.resize();
    if (countryChart) countryChart.resize();
    if (orbitChart) orbitChart.resize();
    if (riskChart) riskChart.resize();
}

// ============================================
// Error Message Display
// ============================================
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = '⚠️ ' + message;
    document.body.prepend(errorDiv);

    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

