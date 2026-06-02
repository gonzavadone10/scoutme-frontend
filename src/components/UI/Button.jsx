    import { theme } from "../../styles/theme";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      style={{
        background: theme.gradients.button,
        color: "#fff",
        border: "none",
        padding: "14px",
        borderRadius: theme.borderRadius.input,
        cursor: "pointer",
        fontWeight: "700",
        boxShadow: theme.shadows.button,
      }}
    >
      {children}
    </button>
  );
};

export default Button;