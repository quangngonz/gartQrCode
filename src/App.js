import "./App.css";
import Webcam from "react-webcam";

function App() {
  const videoConstraints = {
    facingMode: "user",
  };

  return (
    <div className="App">
      <Webcam videoConstraints={videoConstraints} />
      <h1>Người gart cần tìm trên là bạn!</h1>
      <a href="https://bit.ly/CometoGART6520  ">Bấm vào đây để app GART</a>
    </div>
  );
}

export default App;
