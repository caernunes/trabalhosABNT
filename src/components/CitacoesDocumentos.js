import React from 'react';
import FileUpload from './FileUpload';
import './CitacoesDocumentos.css';

function CitacoesDocumentos() {
  return (
    <div className="app-page">
      <header className="app-header">
        <h1>Citações em Documentos ABNT NBR 10520</h1>
        <p>Adicione aqui seus documentos para citar conforme a norma ABNT NBR 10520.</p>
      </header>
      <div className="file-upload-section">
        <FileUpload />
      </div>
    </div>
  );
}

export default CitacoesDocumentos;
