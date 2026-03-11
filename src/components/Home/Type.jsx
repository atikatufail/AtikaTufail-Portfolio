import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          ".NET Developer",
          "Flutter Developer",
          "Web and App Developer",
          "Full Stack Developer",
        ],
        autoStart: true,
        loop: true,
        delay: 20,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
