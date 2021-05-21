import Calculator from './apps/Calculator';
import TypeWriter from './typewriter';

const Calc = () => {
  return (
    <section className="section" id="portfolio">
      <p>
        <div className="section__portfolio">
          <div className="section__portfolio--middle">
            <div className="calc">
              <Calculator />
            </div>
            <div>
              <h2>
                <TypeWriter text="React Calculator" />
              </h2>
              <p>This component is comprised of two major concepts: logic and UI.</p>
              <p>
                The logic is of course the functionality of a calculator. Performing the operations, keeping track of
                app states, accounting for edge cases, handling errors, etc. This is all accomplished with JavaScript
                and it serves the purpose of applying key computer science concepts in programming.
              </p>
              <p>
                For the UI part of the equation the goal was to replicate the look and feel of an iOS device calculator.
                Conditionally rendering CSS classes when the display digits reached 9 or 11 characters made for its UX
                functionality.
              </p>
            </div>
          </div>
        </div>
      </p>
    </section>
  );
};

export default Calc;
