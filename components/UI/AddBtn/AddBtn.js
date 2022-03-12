import cl from "./AddBtn.module.css";
import { MdAdd } from "react-icons/md";

export default function AddBtn({ props }) {
  return (
    <div>
      <MdAdd className={cl.btn} {...props} />
    </div>
  );
}
