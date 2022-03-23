import cl from "./MyInput.module.css";

export default function MyInput(props) {
  return <input className={cl.input} {...props} />;
}
