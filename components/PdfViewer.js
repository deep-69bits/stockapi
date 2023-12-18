import React from 'react'

const PdfViewer = ({ pdfUrl }) => {
    return (
      <div>
        <div className='my-4  ml-24 hidden lg:block' >
          <iframe  title="PDF Viewer"   src={pdfUrl} width="1000px" height="650px" />
        </div>
        <div className='my-4  lg:hidden block' >
          <iframe   title="PDF Viewer"   src={pdfUrl} width="290px" height="650px" />
        </div>
      </div>
    )
}

export default PdfViewer