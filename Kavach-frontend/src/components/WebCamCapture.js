import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';

const WebcamCapture = () => {
    const webcamRef = useRef(null);
    const [image, setImage] = useState(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
    }, [webcamRef]);

    return (
        <div>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={400}
                height={300}
                mirrored={true}
                imageSmoothing={true}
            />
            <button onClick={capture}>Capture photo</button>
            {image && (
                <div>
                    <h3>Captured Image:</h3>
                    <img src={image} alt="Captured" />
                </div>
            )}
        </div>
    );
};

export default WebcamCapture;
