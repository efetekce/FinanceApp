import { ClipLoader } from "react-spinners";

type Props = {
  isLoading?: boolean;
};
const Spinner = ({ isLoading = true }: Props) => {
  return (
    <div>
      <ClipLoader loading={isLoading} size={45} color="#3d3f" />
    </div>
  );
};
export default Spinner;
