import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
    appbar: {
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,.3)',
        height: '56px',
        display: 'flex',
        alignItems: 'center'
    },
    title: {margin: '0', marginLeft: '16px'}
}));

export default useStyles;