import React from 'react';

const Portfolio: React.FC = () => {
    return (
        <section>
            <div className="info-frame">
                <h3>Study:</h3>
                <p>
                    <span>B23-ISE IU student</span>
                </p>
            </div>
            <div className="info-frame">
                <h3>Skills:</h3>
                <p>
                    <span>Programming languages</span>
                    <li>C/C++</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>JS/HTML/CSS</li>
                </p>
            </div>
            <div className="info-frame">
                <h3>Sports:</h3>
                <p>
                    <li>Tennis</li>
                    <li>Football</li>
                    <li>Cycling</li>
                    <li>Motorsport</li>
                </p>
            </div>
        </section>
    );
};

export default Portfolio;
