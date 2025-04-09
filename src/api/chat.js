import axios from 'axios';

const API_BASE = 'http://localhost:8000';

export const askQuery = async (query) => {
  try {
    const res = await axios.post(`${API_BASE}/ask`, { query });
    return res.data;
  } catch (err) {
    console.error("Error in askQuery:", err);
    throw err;
  }
};

export const ingestPDF = async (file) => {
  const formData = new FormData();
  formData.append('pdf_file', file);

  try {
    const res = await axios.post(`${API_BASE}/ingest/pdf`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (err) {
    console.error("Error in ingestPDF:", err);
    throw err;
  }
};

export const ingestWebsite = async (url) => {
  try {
    const res = await axios.post(`${API_BASE}/ingest/website`, { url });
    return res.data;
  } catch (err) {
    console.error("Error in ingestWebsite:", err);
    throw err;
  }
};
