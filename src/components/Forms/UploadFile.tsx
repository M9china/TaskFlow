import { useState } from 'react';
import axios from 'axios';

function UploadFile() {
  const [token, setToken] = useState('');
  const [extractionDetails, setExtractionDetails] = useState<any>({}); // Define the type of extractionDetails according to your needs

  const createExtraction = async () => {
    const url = 'https://api.extracta.ai/api/v1/createExtraction';
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(url, extractionDetails, { headers });
      console.log('New Extraction Created:', response.data);
    } catch (error) {
      console.error('Error creating extraction:', error);
    }
  };

  return (
    <div className='mt-[6rem]'>
      <input
        type="text"
        placeholder="Enter API Key"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <button onClick={createExtraction}>Create Extraction</button>
    </div>
  );
}

export default UploadFile;
