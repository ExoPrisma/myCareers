import { useState } from 'react';
import { Page, Document } from 'react-pdf';
import axios from "axios";

const DocumentPreview = ({documents, onDocumentClose} ) => {
    

    const [numPages, setNumPages] = useState(null);
  
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages); 
      };

      const handleDeletePosting= async () => {
        console.log("!")
      }

    return(
        <div className="pdf-viewer">
          <div className='button-docs'>

            <div className='close-button-container'>
                <button className="close-button" onClick={onDocumentClose}>
                  X
                </button>

            </div>
          <div className="documents-container">
            {documents.map((doc, index) => (
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash"  style={{ cursor: 'pointer' }}  viewBox="0 0 16 16" onClick={handleDeletePosting}>
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h4.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
              <div key={index} className="pdf-container">
                <Document
                  file={doc.fileUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={numPages} renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>
              </div>
            </div>
            ))}
        </div>
    </div>


  </div>
  )
}
export default DocumentPreview;