import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import * as pdfjsLib from 'pdfjs-dist';
import { getCurrentUser } from '@aws-amplify/auth';
import './FileUpload.css';

// Reference the local worker file
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.js';

function FileUpload() {
  const [thumbnails, setThumbnails] = useState([]);
  const [user, setUser] = useState(null);

  const onDrop = (acceptedFiles) => {
    generateThumbnails(acceptedFiles);
  };

  const generateThumbnails = async (files) => {
    const thumbs = await Promise.all(
      files.map(async (file) => {
        if (file.type === 'application/pdf') {
          const pdf = await pdfjsLib.getDocument(URL.createObjectURL(file)).promise;
          const page = await pdf.getPage(1);
          const viewport = page.getViewport({ scale: 0.2 });
          const canvas = document.createElement('canvas');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          const context = canvas.getContext('2d');
          await page.render({ canvasContext: context, viewport }).promise;
          return { file, thumbnail: canvas.toDataURL(), pageCount: pdf.numPages };
        }
        return { file, thumbnail: URL.createObjectURL(file), pageCount: 1 };
      })
    );
    setThumbnails(thumbs);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    getCurrentUser()
      .then(user => setUser(user))
      .catch(() => setUser(null));
  }, []);

  return (
    <div className="file-upload">
      <div {...getRootProps({ className: `dropzone ${isDragActive ? 'active' : ''}` })}>
        <input {...getInputProps()} />
        <button className="upload-button">Selecionar arquivos PDF</button>
        <p>ou arraste e solte os PDFs aqui</p>
        {isDragActive && <div className="overlay">Drop files here...</div>}
      </div>
      <div className="thumbnails">
        {thumbnails.map(({ file, thumbnail, pageCount }) => (
          <div key={file.path} className="thumbnail">
            <img src={thumbnail} alt={file.path} />
            <p>{file.name}</p>
            <p>Pages: {pageCount}</p>
            {!user && pageCount > 3 && (
              <p className="register-prompt">
                Please <a href="/sign-in">sign in</a> to process more than 3 pages.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;