import { theme } from "../../styles/theme";

const Card = ({ children }) => {
  return (
    <div
      style={{
        background: theme.colors.white,
        borderRadius: theme.borderRadius.card,
        boxShadow: theme.shadows.card,
        padding: "30px",
      }}
    >
      {children}
    </div>
  );
};

export default Card;