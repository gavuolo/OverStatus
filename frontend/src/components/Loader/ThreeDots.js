import { ThreeDots } from "react-loader-spinner";
import { theme } from "../../assets/Colors";

export const Loader = ({ height, width, color, visible }) => (
  <ThreeDots
    height={height}
    width={width}
    radius="5"
    color={color}
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={visible}
  />
);
