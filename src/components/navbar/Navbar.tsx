import { FormControlLabel, Switch } from "@mui/material";
import "./navbar.scss";
import { useTheme } from "../../providers/ThemeProvider";
const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((pre) => ({
      dark: !pre.dark
    }));
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>React Admin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <FormControlLabel
          control={
            <Switch name={`${theme.dark ? "Dark" : "Light"}`} checked={theme.dark} onClick={toggleTheme}></Switch>
          }
          label={`${theme.dark ? "Dark" : "Light"}`}
        />
        <div className="user">
          <img src="/logo.svg" alt="" className="icon" />
          <span>My Account</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
