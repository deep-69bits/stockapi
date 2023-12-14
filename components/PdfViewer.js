import React from 'react'


const PdfViewer = ({ pdfUrl }) => {
    return (
        <div>
          <iframe title="PDF Viewer"  src={pdfUrl} width="950px" height="650px" />
        </div>
    )
}

export default PdfViewer