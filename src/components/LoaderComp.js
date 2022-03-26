import {Bars} from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../styles/loader.css";

function LoaderComp() {
  return (
    <div className="myLoaderComp">
      <Bars color="#ebd55c" height={100} width={100} />
    </div>
  );
}

export default LoaderComp;
