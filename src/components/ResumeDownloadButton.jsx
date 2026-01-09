// In your portfolio component
const ResumeDownloadButton = () => {
  const GOOGLE_DOC_ID = '1SvSEhU9S5ow5pPYUhMYaR3PIQ7_bJ7lYdnbN0x5MTsY'; // Replace with your actual document ID
  const RESUME_DOWNLOAD_URL = `https://docs.google.com/document/d/${GOOGLE_DOC_ID}/export?format=pdf`;

  const handleDownload = () => {
    // Option 1: Direct download
    window.open(RESUME_DOWNLOAD_URL, '_blank');
    
    // Option 2: Download with custom filename
    // const link = document.createElement('a');
    // link.href = RESUME_DOWNLOAD_URL;
    // link.download = 'YourName_Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="px-6 py-3 border border-primary text-primary rounded hover:bg-primary/10">
      Resume
    </button>
  );
};

export default ResumeDownloadButton