from flask import Flask, jsonify, render_template, send_from_directory
import pandas as pd
import os

app = Flask(__name__, static_folder='dist', static_url_path='')

# Load dataset
df = pd.read_csv("final_space_dataset.csv")

# ---------------- API ROUTES ---------------- #

@app.route('/api/yearly')
def yearly():
    data = df.groupby('launch_year').size().reset_index(name='count')
    return jsonify(data.to_dict(orient='records'))

@app.route('/api/country')
def country():
    data = df['country'].value_counts().reset_index()
    data.columns = ['country', 'count']
    return jsonify(data.to_dict(orient='records'))

@app.route('/api/orbit')
def orbit():
    data = df['orbit_category'].value_counts().reset_index()
    data.columns = ['orbit', 'count']
    return jsonify(data.to_dict(orient='records'))

@app.route('/api/risk')
def risk():
    data = df.groupby('orbit_category')['risk_score'].mean().reset_index()
    return jsonify(data.to_dict(orient='records'))

# ---------------- FRONTEND ROUTES ---------------- #

@app.route('/')
def index():
    return send_from_directory('dist', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    if os.path.exists(os.path.join('dist', path)):
        return send_from_directory('dist', path)
    else:
        return send_from_directory('dist', 'index.html')

# Run server
if __name__ == '__main__':
    app.run(debug=True)