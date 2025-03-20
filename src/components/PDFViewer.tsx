'use client';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useState, useEffect, useRef } from 'react';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

interface PDFViewerProps {
  url: string;
}

export default function PDFViewer({ url }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pageWidth, setPageWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('PDFViewer mounted with URL:', url);
  }, [url]);

  // Update page width when fullscreen changes or on window resize
  useEffect(() => {
    const updatePageWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        // In fullscreen, use 90% of the smaller container dimension to ensure the page fits
        const maxWidth = isFullscreen 
          ? Math.min(containerWidth * 0.9, containerHeight * 0.8)
          : Math.min(containerWidth, 800);
        setPageWidth(maxWidth);
      }
    };

    updatePageWidth();
    window.addEventListener('resize', updatePageWidth);
    
    return () => window.removeEventListener('resize', updatePageWidth);
  }, [isFullscreen]);

  // Handle fullscreen change events from browser
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    console.log('PDF loaded successfully with', numPages, 'pages');
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error('Error loading PDF:', error);
    setError(error.message);
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => {
      const newPageNumber = prevPageNumber + offset;
      if (numPages && newPageNumber >= 1 && newPageNumber <= numPages) {
        return newPageNumber;
      }
      return prevPageNumber;
    });
  }

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!isFullscreen) {
        await containerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error('Error toggling fullscreen:', err);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`w-full mx-auto transition-all duration-300 ${
        isFullscreen 
          ? 'fixed inset-0 z-[100] bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-4 overflow-auto flex flex-col items-center justify-center' 
          : 'max-w-4xl bg-purple-50 p-4 rounded-lg'
      }`}
    >
      <Document
        file={url}
        className="flex flex-col items-center relative"
        loading={
          <div className="flex items-center justify-center p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        }
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        error={
          <div className="text-red-600 p-4 text-center">
            <p>Failed to load PDF</p>
            <p className="text-sm text-gray-600 mt-2">URL: {url}</p>
            {error && <p className="text-sm text-gray-600 mt-2">Error: {error}</p>}
          </div>
        }
      >
        <div className="relative">
          <Page
            pageNumber={pageNumber}
            className="shadow-xl transition-all duration-300"
            width={pageWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
          <button
            onClick={toggleFullscreen}
            className={`absolute ${isFullscreen ? 'top-8 right-8' : 'top-2 right-2'} 
              px-4 py-2 text-sm font-medium
              ${isFullscreen 
                ? 'bg-white/90 text-gray-900 hover:bg-white shadow-2xl' 
                : 'bg-white/80 hover:bg-white text-gray-700'} 
              rounded-md shadow-lg hover:shadow-xl transition-all duration-300 z-[9999]`}
            title={isFullscreen ? "Click to exit fullscreen mode" : "Enter fullscreen mode"}
          >
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
        </div>
        <div className={`flex items-center justify-center gap-4 mt-4 ${isFullscreen ? 'bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm' : ''}`}>
          <button
            onClick={() => changePage(-1)}
            disabled={pageNumber <= 1}
            className={`px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors
              ${isFullscreen 
                ? 'bg-white text-gray-900 hover:bg-gray-100' 
                : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Previous
          </button>
          <p className={`text-sm ${isFullscreen ? 'text-white' : 'text-gray-600'}`}>
            Page {pageNumber} of {numPages}
          </p>
          <button
            onClick={() => changePage(1)}
            disabled={numPages ? pageNumber >= numPages : true}
            className={`px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors
              ${isFullscreen 
                ? 'bg-white text-gray-900 hover:bg-gray-100' 
                : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Next
          </button>
        </div>
      </Document>
    </div>
  );
} 