# GeoTrack Live

GeoTrack Live is a real-time location tracking application built with Node.js, Express, Socket.io, and Leaflet.js. It allows users to share their location in real-time and view the locations of other users on a map.

## Features

- Real-time location tracking
- Display locations on a map using Leaflet.js
- Add manual markers on the map
- Calculate and display the distance between the current location and manual markers
- Responsive design for mobile and desktop

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/geotrack-live.git
    cd geotrack-live
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Run the application:**
    ```sh
    npm run dev
    ```

4. **Open your browser and navigate to:**
    ```
    http://localhost:3000
    ```

## Deployment

### Deploy on Vercel

1. **Install Vercel CLI:**
    ```sh
    npm install -g vercel
    ```

2. **Login to Vercel:**
    ```sh
    vercel login
    ```

3. **Navigate to Project Directory:**
    ```sh
    cd "C:\Users\home\Desktop\GeoTrack Live"
    ```

4. **Deploy the Project:**
    ```sh
    vercel
    ```

5. **Deploy to Production:**
    ```sh
    vercel --prod
    ```

### Deploy on Heroku

1. **Initialize Git Repository:**
    ```sh
    git init
    git add .
    git commit -m "Initial commit"
    ```

2. **Create Heroku App:**
    ```sh
    heroku create
    ```

3. **Push to Heroku:**
    ```sh
    git push heroku main
    ```

## Usage

- Open the application in your browser.
- Allow location access when prompted.
- Your location will be shared in real-time with other users.
- Click on the map to add manual markers and calculate the distance from your current location.

## License

This project is licensed under the MIT License.
