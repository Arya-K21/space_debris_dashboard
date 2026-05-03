# Space Debris Dashboard - Project Report

## Acknowledgement
I would like to express my sincere gratitude to everyone who supported and guided me throughout this project. The completion of this space debris visualization dashboard would not have been possible without the availability of open-source datasets and the robust community support around modern web development and data analytics tools.

## Abstract
The Space Debris Dashboard is an interactive web application designed to visualize and analyze the growing problem of orbital debris. With thousands of objects orbiting Earth, tracking and understanding their distribution, origin, and associated risks is critical for future space missions. This project leverages a modern tech stack (React, Flask, Pandas) and Business Intelligence tools (Power BI) to provide comprehensive insights through intuitive charts, real-time data APIs, and risk assessments within a visually engaging, space-themed interface.

## List of Figures & Tables
**Figures**
- Figure 1: Space Debris Dashboard Web Interface Overview
- Figure 2: Yearly Debris Launch Trends Chart
- Figure 3: Debris Distribution by Country
- Figure 4: Orbital Category Breakdown (LEO, MEO, GEO)
- Figure 5: Power BI Interactive Dashboard Interface

**Tables**
- Table 1: Dataset Attributes and Data Types
- Table 2: Key Performance Indicators (KPIs) Summary
- Table 3: Test Case Execution Summary

---

## Chapter 1: Introduction
Space exploration and satellite deployment have accelerated rapidly, leading to a significant increase in space debris. This accumulation poses a serious threat to operational spacecraft and the International Space Station. The Space Debris Dashboard aims to bring clarity to this complex issue by aggregating historical and current data into an accessible, interactive platform. By providing both a web-based dashboard and an integrated Power BI report, the project serves researchers, enthusiasts, and policymakers in understanding orbital crowding.

## Chapter 2: Problem Identification
The primary problem addressed by this project is the difficulty in conceptualizing the scale and risk of space debris. Raw datasets are vast and complex, making it challenging to extract actionable insights. Stakeholders need to quickly answer questions such as: 
- Which orbital zones are most congested?
- Which countries have contributed most to the debris?
- How has the rate of debris generation changed over time?
Without an interactive visualization tool, answering these questions requires manual data manipulation.

## Chapter 3: Requirement Analysis
Based on the problem identification, the system requires:
1. **Interactive Visualization**: Dynamic charts (bar, pie) that users can interact with.
2. **Risk Assessment**: A method to calculate and display the relative risk of objects in different orbits.
3. **Data APIs**: A robust backend (Flask) to serve aggregated data to the frontend.
4. **BI Integration**: A downloadable Power BI dashboard for deep-dive analytics.
5. **Aesthetic UI**: A modern, dark-themed, responsive design fitting the space context.

## Chapter 4: Dataset Description
The project utilizes the `final_space_dataset.csv` file containing comprehensive records of space objects. Key fields include:
- `launch_year`: The year the object was launched into space.
- `country`: The country of origin or ownership.
- `orbit_category`: The classification of the orbit (e.g., LEO, MEO, GEO, Elliptical).
- `risk_score`: A calculated metric indicating the relative collision or operational risk.
- Additional metadata including `name`, `status`, and `avg_altitude`.

## Chapter 5: Attribute Analysis (Dimensions vs Measures)
- **Dimensions (Categorical Data)**: `country` (e.g., USA, CIS, PRC), `orbit_category` (LEO, MEO, GEO), `status` (Active, Debris), `object_type` (Payload, Rocket Body).
- **Measures (Quantitative Data)**: `launch_year`, `risk_score`, `avg_altitude`, `perigee`, `apogee`, and the total count of objects.
By plotting these Dimensions against Measures, we can uncover patterns such as the average risk score per orbit category or the count of objects per country.

## Chapter 6: Exploratory Data Analysis (EDA)
During the EDA phase, several key patterns emerged:
- **Orbital Congestion**: Low Earth Orbit (LEO) is overwhelmingly the most congested zone compared to MEO and GEO.
- **Historical Trends**: There is an exponential increase in objects launched in recent years, heavily influenced by mega-constellations.
- **Geopolitical Distribution**: A small number of space-faring nations (USA, Russia/CIS, China) account for the vast majority of tracked objects.

## Chapter 7: Data Cleaning and Transformation
The raw dataset required preparation before visualization:
- Handling missing values in `decay_date` to accurately classify active vs. decayed objects.
- Standardizing `country_code` and `country` names for consistent grouping.
- Deriving the `orbit_category` based on `perigee` and `apogee` altitudes if not explicitly provided.
- Calculating the `risk_score` utilizing altitude, age, and object type parameters.

## Chapter 8: Key Performance Indicators (KPIs)
The dashboard tracks the following KPIs:
- **Total Tracked Objects**: The absolute number of items in the database.
- **Active vs. Inactive Ratio**: Highlighting the proportion of dead satellites and debris to operational payloads.
- **High-Risk Objects**: Count of items exceeding a critical `risk_score` threshold.
- **Year-over-Year Growth**: The percentage increase in orbital objects over the past decade.

## Chapter 9: Tools and Technologies Used
- **Backend**: Python, Flask, Pandas (Data processing and REST API).
- **Frontend**: React, Vite, JavaScript/JSX, Recharts (Web UI and visualization).
- **Business Intelligence**: Microsoft Power BI (Advanced analytics and filtering).
- **Styling**: Vanilla CSS with modern gradient and animation techniques.

## Chapter 10: Visualization Approach (Tableau / Power BI)
The project employs a dual-visualization strategy:
1. **Web Dashboard (Recharts)**: Provides immediate, high-level insights directly in the browser with no setup required.
2. **Power BI Dashboard (`SpaceDebris.pbix`)**: Offers advanced, multi-dimensional analysis with cross-filtering, deep dive capabilities, and robust data export options for professional use.

## Chapter 11: Design (Wireframe)
The design prioritizes a modern, immersive user experience. It features a dark mode aesthetic with a dynamic `StarField` animated background. The layout uses a grid system to orchestrate various chart components (`YearlyChart`, `CountryChart`, `OrbitChart`, `RiskChart`), ensuring all key metrics are visible without excessive scrolling. The interface is fully responsive, adapting seamlessly to mobile and desktop screens.

## Chapter 12: Implementation (Tableau / Power BI)
### Data Connectivity & Preparation
The Power BI dashboard connects directly to the cleaned `final_space_dataset.csv` file, ensuring a reliable and structured data foundation.
### Live and Extract Connections
The dashboard utilizes an **Extract connection** to import the dataset into the Power BI engine, ensuring rapid performance and instant visual updates during cross-filtering.
### Data Blending & Joins
The data model relies on a single, comprehensive flat table, eliminating the need for complex joins and reducing query processing time.
### Scheduled Refreshes
For future iterations integrating directly with the Flask API, scheduled refreshes can be configured in the Power BI Service to ensure stakeholders always view the most up-to-date data.

### Interactivity & User Control
#### Filters & Parameters
Smart slicers are implemented for `launch_year` range, `country`, and `orbit_category`, allowing users to slice the data to their specific analytical needs.
#### Drill-Down & Hierarchies
Users can drill down from broad orbital categories (e.g., LEO) to specific object types, exploring data from summary KPIs down to granular details.
#### Dynamic Tooltips
Hovering over data points provides contextual insights, such as exact object counts and average altitudes, without cluttering the main visual interface.
#### Highlight Actions
Selecting a specific country in the bar chart automatically cross-filters the pie chart to show that specific country's orbital distribution, highlighting related data across all visuals.

### Charts and Insights
- **Yearly Trend Chart**: Visualizes the exponential growth of space objects over time, highlighting the dramatic increase in recent years due to commercial satellite deployments.
- **Country Distribution Chart**: Clearly identifies the top nations contributing to orbital traffic, emphasizing the need for international cooperation.
- **Orbit Category Breakdown**: A pie chart revealing that LEO is the most crowded and vulnerable orbital regime.
- **Risk Assessment Chart**: Correlates orbit types with calculated risk scores, showing where mitigation efforts should be prioritized.

## Chapter 13: Testing
Comprehensive testing was conducted to ensure system reliability and data accuracy. The detailed strategy is documented in `TESTING_PLAN.md`, which includes over 100 test cases covering:
- **API Tests**: Verifying data aggregation and endpoint responses.
- **Component Tests**: Ensuring React components render correctly under various states.
- **Integration Tests**: Validating the data flow from the Flask backend to the React frontend.
- **UI/UX Tests**: Checking responsive behavior and accessibility.

## Chapter 14: Refinement
Based on initial testing and reviews, several refinements were implemented:
- **Performance**: Optimized Pandas dataframes in the Flask backend to reduce API response times.
- **Styling**: Improved color contrast for better readability against the dark background.
- **Responsiveness**: Adjusted CSS flexbox and grid layouts to fix chart overlapping on smaller screens.

## Chapter 15: Feedback
### Visual Optimization
Adjusted the color palette to use distinct, colorblind-friendly hues for different orbit categories and countries to improve chart readability.
### Data Optimization
Implemented caching mechanisms within the Flask app so that static dataset queries are not recomputed on every API call.
### Performance Optimization (System Layer)
Migrated the React build process to Vite for faster hot-module replacement and smaller production bundle sizes.
### Usability Enhancement (Interaction Layer)
Added detailed tooltips and loading spinners to provide immediate visual feedback during data fetching.
### Selected Feedback Analysis Technique
Employed heuristic evaluation and basic user testing sessions to identify friction points in dashboard navigation and filter usage.

## Chapter 16: Conclusion
The Space Debris Dashboard successfully integrates modern web development with advanced Business Intelligence to shed light on a critical aerospace issue. By providing both a highly accessible web interface and a powerful downloadable Power BI report, the project meets the needs of diverse users. The visualizations clearly demonstrate the rapid growth of orbital debris, emphasizing the importance of space sustainability.

## Chapter 17: References
1. Project Repository: [Arya-K21/space_debris_dashboard](https://github.com/Arya-K21/space_debris_dashboard)
2. React Documentation: [https://reactjs.org/](https://reactjs.org/)
3. Flask Documentation: [https://flask.palletsprojects.com/](https://flask.palletsprojects.com/)
4. Microsoft Power BI Documentation: [https://docs.microsoft.com/en-us/power-bi/](https://docs.microsoft.com/en-us/power-bi/)
5. Recharts Documentation: [https://recharts.org/](https://recharts.org/)
