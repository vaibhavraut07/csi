import React from 'react';

const Spinner = () => {
    return (
        <div className="overlay">
            <style>
                {`
                    .overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
                        display: flex;
                        justify-content: center; /* Center horizontally */
                        align-items: center; /* Center vertically */
                        z-index: 9999; /* Ensure it is on top */
                    }
                    .spinner {
                        display: inline-block;
                        width: 80px;
                        height: 80px;
                        background-color: transparent;
                        border: 8px solid;
                        border-color: #f3f3f3 #f3f3f3 #3498db #3498db;
                        border-radius: 50%;
                        animation: spin 1.2s linear infinite;
                    }
                    @keyframes spin {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                `}
            </style>
            <div className="spinner"></div>
        </div>
    );
};

export default Spinner;
