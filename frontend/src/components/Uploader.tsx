import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Uploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
  if (!file) {
    alert("Please select a file first!");
    return;
  }

  const formData = new FormData();
  formData.append("codefile", file);

  try {
    setLoading(true);
    const response = await axios.post("http://localhost:3000/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // Use JSON output
    setOutput(response.data.output || response.data);
  } catch (error) {
    console.error(error);
    setOutput("Error uploading file or connecting to backend.");
  } finally {
    setLoading(false);
  }
};

  return (
    <StyledWrapper>
      <div className="container">
        <label className="custum-file-upload" htmlFor="file">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M10 1C9.7 1 9.48 1.1 9.29 1.29L3.29 7.29C3.1 7.48 3 7.73 3 8V20C3 21.65 4.34 23 6 23H7C7.55 23 8 22.55 8 22C8 21.45 7.55 21 7 21H6C5.45 21 5 20.55 5 20V9H10C10.55 9 11 8.55 11 8V3H18C18.55 3 19 3.45 19 4V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 2.34 19.65 1 18 1H10Z" />
            </svg>
          </div>
          <div className="text">
            <span>{file ? file.name : 'Click to upload code file'}</span>
          </div>
          <input type="file" id="file" onChange={handleFileChange} />
        </label>

        <button className="upload-btn" onClick={handleUpload} disabled={loading}>
          {loading ? 'Uploading...' : 'Upload & Execute'}
        </button>

        {output && (
          <div className="output-box">
            <h3>Output:</h3>
            <pre>{output}</pre>
          </div>
        )}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    height: 200vh;
    text-align: center;
  }

  .custum-file-upload {
    height: 200px;
    width: 300px;
    position: absolute;
    top: 20vh;
    left: 37vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: 2px dashed #cacaca;
    background-color: rgba(255, 255, 255, 1);
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0px 48px 35px -48px rgba(0, 0, 0, 0.1);
  }

  .custum-file-upload .icon svg {
    height: 80px;
    fill: rgba(75, 85, 99, 1);
  }

  .upload-btn {
    margin-top: 314px;
    background: black;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
  }

  .upload-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .output-box {
    margin-top: 20px;
    display : flex;
    flex:
    background: #f5f5f5;
    padding: 15px;
    border-radius: 10px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }
`;

export default Uploader;
