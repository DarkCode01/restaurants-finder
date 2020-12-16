import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  reviews: {
    display: "flex",
    justifyContent: "space-between",
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 0',
    width: '500px',
    margin: '0 auto'
    
  },
  button:{
    marginTop: '12px'
  }
}));

export default useStyles;
