// import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  // const [count, setCount] = useState(0);
  // const [apple, setApple] = useState(0);

  // // runs on every render
  // useEffect(() => {
  //   console.log("effect");
  // });

  // // runs on initial render
  // useEffect(() => {
  //   console.log("initial effect");
  // }, []);

  // // runs everytime count is mutated
  // useEffect(() => {
  //   console.log("count:", count);
  // }, [count]);

  // // runs everytime apple is mutated
  // useEffect(() => {
  //   console.log("apple:", apple);
  // }, [apple]);

  // const onClick = () => setCount((prev) => prev + 1);

  return (
    <>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
      {/* <div>{count}</div>
      <button
        onClick={() => setApple((prev) => prev + 1)}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text} apple
      </button>
      <div>{apple}</div> */}
    </>
  );
};

Button.defaultProps = {
  color: "steelBlue",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
