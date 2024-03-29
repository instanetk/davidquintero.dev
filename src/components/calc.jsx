import React from 'react';
import Calculator from './apps/Calculator';
import TypeWriter from './Typewriter';
import { BrowserView, MobileView } from 'react-device-detect';

const Calc = ({ state }) => {
  let playTypeWriter;

  if (state.destination === undefined) {
    playTypeWriter = false;
  } else if (state.destination.index === 2) {
    playTypeWriter = true;
  }
  const CalcText = () => {
    return (
      <div>
        <h2>{playTypeWriter ? <TypeWriter text="React Calculator" /> : null}</h2>
        <p>This component is comprised of two major concepts: logic and UI.</p>
        <p>
          The logic covers the functionality of the calculator. Performing the operations, keeping track of app
          states, accounting for edge cases, handling errors, etc. This is all accomplished with JavaScript and it
          serves the purpose of applying key computer science concepts in programming.
        </p>
        <p>
          For the UI part of the equation the goal was to replicate the look and feel of an iOS device calculator.
          Conditionally rendering CSS classes when the display digits reached 9 or 11 characters made for its UX
          functionality.
        </p>
      </div>
    );
  };

  return (
    <section className="section">
      <BrowserView>
        <div className="section__calculator">
          <div className="section__calculator--middle">
            <div className="calc">
              <Calculator />
            </div>
            <CalcText />
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="slide">
          <div className="section__calculator">
            <div className="section__calculator--middle">
              <h2>{playTypeWriter ? <TypeWriter text="React Calculator" /> : null}</h2>
              <div className="calc">
                <Calculator />
                <div className="arrows-container arrows-calc">
                  <div className="arrows arrow-one"></div>
                  <div className="arrows arrow-two"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="section__calculator">
            <div className="section__calculator--middle">
              <CalcText />
            </div>
          </div>
        </div>
      </MobileView>
    </section>
  );
};

export default Calc;
