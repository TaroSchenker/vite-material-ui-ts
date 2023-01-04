import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { Button, OutlinedInput } from '@mui/material';
import { AppContainer, Title } from '../../tw-types';

const App= () => {
  const [qrValue, setQrValue] = useState("");
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value } = event.target;
    setQrValue(value);
  };
  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas!
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${qrValue}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div>
     
      <AppContainer>
         <Title className='mb-4 mt-9'>QR Code Generate and Download </Title>
        <div className='flex flex-col justify-center'>
          <p>Enter a website address to generate a QR code </p>
        <OutlinedInput className="my-3" onChange={e => handleOnChange(e)} placeholder="http://wwww.yourwebsite.com" />
        </div>
        {qrValue &&
        <> 
        <QRCode
        className="my-3"
        id="qr-gen"
        value={qrValue}
        size={290}
        level={"H"}
        includeMargin={true}
      />
        <p>
        <Button className="my-3" variant="outlined" size="large" type="button" onClick={downloadQRCode}>
          Download QR Code
        </Button>
      </p>
        </>
       

        }
       
    
      </AppContainer>
      
      
    </div>
  );
}

export default App;
