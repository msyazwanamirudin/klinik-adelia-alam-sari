# Klinik Adelia - Simple Backend

This is a minimal Node/Express backend to accept appointment submissions and store them in `data/appointments.json`.

## Setup

1. Install dependencies:

```bash
cd server
npm install
```

2. Run server locally:

```bash
npm start
```

Server will run on `http://localhost:3000` by default.

## Endpoints

- `POST /appointments` - accepts JSON payload of the appointment and stores it.
- `GET /` - health check

## Deploy

You can deploy this to any Node hosting (Render, Railway, Heroku, DigitalOcean App Platform).
If you deploy, update the frontend `BACKEND_URL` in `GitHub.js` to point to the deployed URL.
