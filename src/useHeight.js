import { useState } from "react";

const useHeight = () => {
  const [height, setHeight] = useState(window.innerHeight);

  window.onresize = () => {
    setHeight(window.innerHeight);
  };

  return height;
};

export default useHeight;
