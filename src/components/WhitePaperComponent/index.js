import React,{useState} from 'react';
import {Document,Page,pdfjs} from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const WhitePaperComponent = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }
    return (
        <div className="pdfView">
            <Document
                file='211021_label_white_paper.pdf'
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                <span onClick={()=> pageNumber > 1 ? setPageNumber(pageNumber-1):null}>
                &lt;
                </span>
                <span>Page {pageNumber} of {numPages}</span>
                <span onClick={()=> pageNumber < numPages ? setPageNumber(pageNumber+1):null}>
                &gt;
                </span>
            </p>
        </div>
    );
};

export default WhitePaperComponent;
