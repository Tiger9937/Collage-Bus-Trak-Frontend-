import { useRef } from "react";

const MultiREF = () => {
  console.log("Multi ref init");
  const ref = useRef("init"); // Initializing the ref
  console.log("Ref inside MultiREF:", ref); // Logs the ref

  return ref; // Return the ref to the caller
};

export {MultiREF}