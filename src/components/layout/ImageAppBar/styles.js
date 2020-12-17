import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    backgroundImage: "url(/images/big/banner.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    color: "white",
  },
  title: {
    backgroundColor: "rgba(33,33,33,.6)",
    padding: "12px 16px",
    height:'100%',
    "& h2,span, div": {
      padding: "12px",
      margin: "0",
    },
    "& h2": {
      display: 'flex',
      color: 'white',
      padding: '0',
      alignItems: 'center'
    }
  },
  backIcon: {
    color: 'white'
  }
}));

export default useStyles;
