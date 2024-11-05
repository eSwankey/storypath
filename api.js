// unfortunately I have not been able to implement the API calling so the following code is dunder
import fetch from 'node-fetch';

const API_BASE_URL = 'https://0b5ff8b0.uqcloud.net/api';
const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsInVzZXJuYW1lIjoiczQ3NDg2MTQifQ.8H5uM-yTvoXuAh4Y8rvXvDocNSYTGG6vBb8pmn70PkU';

// Function to save profile data
export async function saveProfileData(profileData) {
  const response = await fetch(`${API_BASE_URL}/tracking`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JWT_TOKEN}`,
    },
    body: JSON.stringify(profileData),
  });

  if (!response.ok) {
    throw new Error(`Error saving profile: ${response.statusText}`);
  }

  return response.json(); // return response - debugging
}
