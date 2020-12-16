import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  schedule: {
    borderRadius: "12px",
    overflow: "hidden",
    "& >*": { fontSize: "18px" },
    "& td": {
      padding: "12px",
      borderBottom: "1px solid #ddd",
    },
    "& thead>tr": {
      color: "white",
      fontWeight: "bold",
      background: "#00aa66",
    },
  },
}));

export default useStyles;
