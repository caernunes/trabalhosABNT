import React from 'react';
import FileUpload from './FileUpload';
import './TrabalhosAcademicos.css';

function TrabalhosAcademicos() {
  return (
    <div className="app-page">
      <header className="app-header">
        <h1>Trabalhos Acadêmicos ABNT NBR 14724</h1>
        <p>Mesclar e juntar PDFs e colocá-los em qualquer ordem que desejar. É tudo muito fácil e rápido!</p>
      </header>
      <div className="file-upload-section">
        <FileUpload />
      </div>
    </div>
  );
}

export default TrabalhosAcademicos;
