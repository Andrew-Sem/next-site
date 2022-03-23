import cl from "./ModalBtn.module.css";
import { BsPlusCircleFill } from "react-icons/bs";

export default function ModalBtn({ visible, ...props }) {
  const rootClasses = [cl.btn];
  if (!visible) {
    rootClasses.push(cl.no_active);
  }

  return (
    <div>
      <BsPlusCircleFill className={rootClasses.join(" ")} {...props} />
    </div>
  );
}
