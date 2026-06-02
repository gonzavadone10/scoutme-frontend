import { theme } from "../../styles/theme";

const Input = (props) => {
  return (
    <input
      {...props}
      style={{
        padding: "14px",
        borderRadius: theme.borderRadius.input,
        border: `1px solid ${theme.colors.border}`,
        outline: "none",
        fontSize: "15px",
      }}
    />
  );
};

export default Input;