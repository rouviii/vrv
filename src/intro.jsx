import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Intro = () => {

    const [ number, setNumber ] = useState(0);
    const [ example, setExample ] = useState(0);
    const [ mounted, setMounted ] = useState(false);
    const [ numberRef, numberView ] = useInView({
        threshold: 0.8
    });
    useEffect(() => {

        if(numberView && !mounted) {
            let currentNumber = 0;
            const interval = setInterval(() => {
                setNumber(prev => {
                    currentNumber = prev + 1;
                    if (currentNumber >= 45) {
                        clearInterval(interval);

                        const delays = [200, 400, 600, 800, 1000];
                        delays.forEach((delay, index) => {
                            setTimeout(() => {
                                setNumber(46 + index);
                            }, delay);
                        });
                    }
                    return currentNumber;
                });
            }, 50);
            let currentExample = 0;
            const intervaltwo = setInterval(() => {
                setExample(prev => {
                    currentExample = prev + 1;
                    if(prev >= 9) {
                        clearInterval(intervaltwo);
                    }
                    return currentExample;
                });
            }, 250);
            setMounted(true);
        }

    }, [numberView]);

    return(
        <div className="intro">

            <div className="intro-grid">
                <div>
                    <p style={{maxWidth: '500px'}}>Die VRV Group ist eine von <span style={{display: 'inline-block', fontWeight: 'bold'}}>Nicolaus von Rintelen</span> geführte Investementgesellschaft mit Sitz in Zug, Schweiz. Seit unserer Gründung haben wir uns auf strategische Beteiligungen in innovativen Wachstumsunternhemen sowie auf nachhaltige Immobilienprojekte spezialisiert. Unsere Philosophie: Wir kombinieren tiefes Marktwisen, technologische Innovationskraft und unternehmerische Exzellenz, um Werte zu schaffen, die Bestand haben.</p>
                </div>
                <div style={{flexDirection: 'column'}}>
                    <p style={{textAlign: 'center', fontSize: '2.5em'}}>Visionäre</p>
                    <p style={{textAlign: 'center', fontSize: '2.5em'}}>Investments,</p>
                    <p style={{textAlign: 'center', fontSize: '2.5em'}}>Nachhaltiges</p>
                    <p style={{textAlign: 'center', fontSize: '2.5em'}}>Wachstum</p>
                </div>

                <div style={{flexDirection: 'column'}} ref={numberRef}>
                    <p style={{textAlign: 'center', fontSize: '2.5em', maxWidth: '500px'}}>>{number} Mio</p>

                    <p style={{maxWidth: '500px'}}>Investment-Volumen</p>
                </div>

                <div style={{flexDirection: 'column'}}>
                    <p style={{textAlign: 'center', fontSize: '2.5em'}}>{example}+</p>
                    <p>erfolgreiche Beteiligungen</p>
                </div>
            </div>
            
            <p style={{
                fontSize: '2.5em',
                marginLeft: 20,
                marginTop: 100
            }}>We Value</p>
            <div className="values">

                <div className="value">

                    <img src="images/innovation.png" />

                    <div>
                        <p style={{
                            fontSize: '1.8em'
                        }}>Innovation</p>

                        <p style={{color: 'rgb(100, 100, 100)'}}>Wir glauben an die Kraft von Ideen, die Märkte verändern – deshalb investieren wir gezielt in Zukunftstechnologien und neue Geschäftsmodelle.</p>
                    </div>

                </div>

                <div className="value">

                    <img src="images/security.png" style={{width: '100px'}}/>

                    <div>
                        <p style={{
                            fontSize: '1.8em'
                        }}>Verantwortung</p>

                    <p style={{color: 'rgb(100, 100, 100)'}}>Wachstum muss nachhaltig sein. Wir denken langfristig und handeln verantwortungsvoll gegenüber Gesellschaft, Umwelt und kommenden Generationen.</p>
                    </div>

                </div>

                <div className="value">

                    <img src="images/excellence.png" />

                    <div>
                        <p style={{
                            fontSize: '1.8em'
                        }}>Exzellenz</p>

                    <p style={{color: 'rgb(100, 100, 100)'}}>Nur höchste Qualitätsansprüche in Analyse, Umsetzung und Betreuung führen zu nachhaltigem Erfolg – wir geben uns niemals mit weniger zufrieden.</p>
                    </div>

                </div>

                <div className="value">
                    <img src="images/handshake.png" />

                    <div>
                        <p style={{
                            fontSize: '1.8em'
                        }}>Partnerschaft</p>

                    <p style={{color: 'rgb(100, 100, 100)'}}>Unsere Investments sind mehr als Kapital: Sie sind echte Partnerschaften, geprägt von Vertrauen, Transparenz und gemeinsamen Zielen.</p>
                    </div>

                </div>

            </div>

            <div className="portfolio">

                <div className="portfolio-text">
                    <p style={{fontSize: '2.5em'}}>Portfolio</p>
                    <p>Innovation trifft auf Substanz. Erfolg ist unser gemeinsames Ziel.</p>
                </div>

                <div className="portfolio-grid">
                    
                    <div className="portfolio-grid-item">

                    </div>

                    <div className="portfolio-grid-item">
                        
                    </div>

                    <div className="portfolio-grid-item">
                        
                    </div>
                </div>

            </div>

        </div>
    )
};
export default Intro;