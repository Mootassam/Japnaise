import { useRef, useState, useEffect } from "react";
import "./App.css";
import Header from "./layout/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import Screenshot from "./shared/Screenshot";
import { DrawingApp } from "./shared/DrawingApp";
import Green from "./component/Green/Green";
import Large from "./component/Large/Large";
import Grey from "./component/Grey/Grey";
import Brown from "./component/Brown/Brown";
import Orange from "./component/Orange/Orange";

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const handleCaptureScreenshot = () => {
    Screenshot.handleCaptureScreenshot(divRef);
  };
  const [value, setValue] = useState("green");
  const [amount, setAmount] = useState(100);
  const [size, setSize] = useState("small");
  const [
    { cursor, canvasRef, color },
    { startDrawing, draw, endDrawing, ...api },
  ] = DrawingApp();
  const toolbarProps = { color, ...api };
  return (
    <>
      <Header />
      <div className="app__content">
        <Sidebar
          screenshot={handleCaptureScreenshot}
          value={value}
          setvalue={setValue}
          setAmount={setAmount}
          setSize={setSize}
          size={value}
          {...toolbarProps}
        />
        <div className="content" ref={divRef}>
   
          {value === "green" && <Green amount={amount} />}
          {value === "large" && <Large amount={amount} />}
          {value === "Grey" && <Grey amount={amount} />}
          {value === "Brown" && <Brown amount={amount} />}
          {value === "orange" && <Orange amount={amount} />}
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default App;
