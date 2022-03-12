import cl from "./ModalBtn.module.css";
import { MdAdd } from "react-icons/md";

export default function ModalBtn({ ...props }) {
  return (
    <div>
      <MdAdd className={cl.btn} {...props} />
    </div>
  );
}
