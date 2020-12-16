import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  review: {
    padding: "10px",
    margin: '6px',
    width: '100%',
    maxWidth: '400px',
    border: "1px solid #ddd",
    "& div": {
      display: "flex",
    },
    "& h4": {
      display: "inline-block",
      flexGrow: "1",
      margin: "8px 0",
    },
    "& span:last-child": {
      fontSize: "12px",
      textAlign: "right",
      display: "block",
      color: "#aaa",
    },
  },
}));

export default useStyles;
