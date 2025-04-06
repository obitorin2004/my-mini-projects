// import { useState } from "react";


// export const QrCodeScanner = () => {
//   const [img,setImg] = useState("");
//   const [loading,setLoading] = useState(false);
//   const [qrData,setQrData] = useState("http://youtube.com/");
//   const [qrSize,setQrSize] = useState("150");

//   function  generateQR(){
//     setLoading(true);
//     try{
//       const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}&data="${encodeURIComponent(qrData)}`;
//       setImg(url);
//     } catch(error){
//       console.error("Error generating QR code ",error);

//     }finally{
//       setLoading(false);
//     }
    
//   }
//   function downloadQR(){
//     fetch(img)
//     .then((response) => response.blob())
//     .then((blob)=>{
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download ="qrcode.png";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);  
//     })
//     .catch((error) =>{
//       console.error("Error downloding QR code",error);
//     });
//   }


//   return (
//     <div className="app-container">
//       <h1 className="header-name">qr code generator</h1>
//       {loading && <p>Please Wait...</p>}
      
//     {img && <img src={img} className='qr-code-image'/>}
//       <div>
//         <label htmlFor="dataInput" className="input-label">
//           Data for QR code:
//           </label>
//           <input type="text" id="dataInput" value = {qrData} placeholder="Enter Data for QR code" onChange={(e)=>setQrData(e.target.value)}/>

//           <label htmlFor="sizeInput" className="input-label">
//           Image Size (eg.150):
//           </label>
//           <input type="text" id="sizeInput" value = {qrSize} placeholder="Enter Image size" onChange={(e)=>setQrSize(e.target.value)}/>
//           <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QR code</button>
//           <button className="download-button" onClick={downloadQR}>Download QR code</button>
//       </div>
//     </div>
//   )
// }










import { useState } from "react";

export const QrCodeScanner = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("http://youtube.com/");
  const [qrSize, setQrSize] = useState("150");

  function generateQR() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      setImg(url);
    } catch (error) {
      console.error("Error generating QR code ", error);
    } finally {
      setLoading(false);
    }
  }

  function downloadQR() {
    if (!img) {
      console.error("QR code image is not generated yet.");
      return;
    }

    fetch(img)
      .then((response) => response.blob()) // Fixed typo here
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href); // Clean up memory
      })
      .catch((error) => {
        console.error("Error downloading QR code", error);
      });
  }

  return (
    <div className="app-container">
      <h1 className="header-name">QR Code Generator</h1>
      {loading && <p>Please Wait...</p>}

      {img && <img src={img} className="qr-code-image" alt="QR Code" />}
      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR code:
        </label>
        <input
          type="text"
          id="dataInput"
          value={qrData}
          placeholder="Enter Data for QR code"
          onChange={(e) => setQrData(e.target.value)}
        />

        <label htmlFor="sizeInput" className="input-label">
          Image Size (e.g., 150):
        </label>
        <input
          type="text"
          id="sizeInput"
          value={qrSize}
          placeholder="Enter Image size"
          onChange={(e) => setQrSize(e.target.value)}
        />
        <button className="generate-button" disabled={loading} onClick={generateQR}>
          Generate QR code
        </button>
        <button className="download-button" onClick={downloadQR} disabled={!img}>
          Download QR code
        </button>
      </div>
    </div>
  );
};
