import React from "react";

const Greeting = () => {
  const [showParagraph, setShowParagraph] = React.useState(false);

  const showParagraphHandler = () => {
    setShowParagraph(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!showParagraph && <p>It's nice to see you</p>}
      {showParagraph && <p>Changed!</p>}
      <button onClick={showParagraphHandler}>Show</button>
    </div>
  );
};

export default Greeting;
