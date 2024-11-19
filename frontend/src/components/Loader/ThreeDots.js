import { ThreeDots , ThreeCircles } from "react-loader-spinner";
import { theme } from "../../assets/Colors";

export const Loader = ({ height, width, color, visible }) => (
  <ThreeCircles
    height={height}
    width={width}
    color={color}
    wrapperStyle={{}}
    wrapperClassName=""
    visible={visible}
  />
);


{/* <ThreeDots
height="70%"
width="30%"
radius="9"
color="#EEEEEE"
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
/> */}