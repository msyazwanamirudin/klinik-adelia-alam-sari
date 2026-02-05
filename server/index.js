const express = require('express');
const cors = require('cors');
const fs = require('fs-extra');
const path = require('path');
const { nanoid } = require('nanoid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
const APPOINTMENTS_FILE = path.join(DATA_DIR, 'appointments.json');

async function ensureDataFile() {
  await fs.ensureDir(DATA_DIR);
  const exists = await fs.pathExists(APPOINTMENTS_FILE);
  if (!exists) {
    await fs.writeJson(APPOINTMENTS_FILE, []);
  }
}

app.post('/appointments', async (req, res) => {
  try {
    await ensureDataFile();
    const appointments = await fs.readJson(APPOINTMENTS_FILE);
    const payload = req.body || {};
    const record = {
      id: nanoid(),
      createdAt: new Date().toISOString(),
      ...payload
    };
    appointments.push(record);
    await fs.writeJson(APPOINTMENTS_FILE, appointments, { spaces: 2 });
    res.status(201).json({ ok: true, id: record.id });
  } catch (err) {
    console.error('Failed to save appointment', err);
    res.status(500).json({ ok: false, error: 'Server error' });
  }
});

app.get('/', (req, res) => res.json({ ok: true, message: 'Klinik Adelia API' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
