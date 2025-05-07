import React, { useState } from 'react';

const Test = () => {
  const [data, setData] = useState(null);
  const [preview, setPreview] = useState(null);

  const submitbtn = (e) => {
    e.preventDefault();
    console.log('Selected file:', data);
    // You can handle file upload here using FormData, etc.
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setData(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <form onSubmit={submitbtn}>
        <input
          type="file"
          name="fileuploader"
          accept="image/*"
          onChange={handleFileChange}
          className="border border-black"
        />
        <input type="submit" className="border border-black" />
      </form>
      {preview && <img src={preview} alt="preview" className="mt-2 max-w-xs" />}
    </div>
  );
};

export default Test;
