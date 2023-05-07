import React from 'react'
import { useState } from 'react'
import { saveAs } from "file-saver"

const App = () => {
  const [downloadUrl, setDownloadUrl] = useState("");

  const handleDownloadFile = () => {
    saveAs(downloadUrl)
  }

  return (
    <div>
      <h1> Download below:</h1>
      <p>Paste a url link to download below:</p>
      <input placeholder="paste link here" value={downloadUrl} onChange={(e) => setDownloadUrl(e.target.value)} />
      <button onClick={handleDownloadFile}>Download</button>

    </div>
  )
}

export default App