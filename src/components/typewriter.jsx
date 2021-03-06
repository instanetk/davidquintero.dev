import Typewriter from 'typewriter-effect';

const TypeWriter = ({ text }) => {
  return (
    <Typewriter
      options={{
        loop: false,
        autoStart: false,
        delay: 20,
        changeDeleteSpeed: 5,
        cursor: '_',
      }}
      onInit={(typewriter) => {
        typewriter

          .typeString(text)

          .start();
      }}
    />
  );
};

export default TypeWriter;
