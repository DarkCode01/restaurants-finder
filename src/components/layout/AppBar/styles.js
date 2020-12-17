import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  appbar: {
    backgroundColor: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,.3)",
    height: "56px",
    paddingLeft: '16px',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    margin: "0",
    transition: "transform .250s",
    position: "absolute",
    left: "16px",
  },
  search: {
    transition: "transform .250s",
    height: '43px',
    flexGrow: '1',
    "& input": { padding: "12px" },
  },
  hidden: {
    transform: "translateY(-200%)",
  },
}));

export default useStyles;
