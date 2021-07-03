import * as React from "react";
import { useTheme, createUseStyles } from "react-jss";
import { Theme } from "../theme";
import Score from "./score";

const useStyles = createUseStyles((theme: Theme) => ({
  heading: {
    letterSpacing: ".1em",
    fontFamily: theme.typography.h1.fontFamily
  }
}));

export default function Layout() {
  const theme = useTheme<Theme>();
  const classes = useStyles({ theme });

  return (
    <React.Fragment>
      <h1 className={classes.heading}>ψαπφα : psappha</h1>
      <Score />
    </React.Fragment>
  );
}
