import React from 'react';
import './trends.css';
import Grid from '@material-ui/core/Grid';
import SelectButton from './SelectButton';
import { Cascader } from 'antd';

export default function Trends() {
  // const classes = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          minHeight: '100vh',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1498623116890-37e912163d5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: ' ',
          filter: ' alpha(opacity=30)',
        }}
      >
        <Grid xs={2}>
          <SelectButton></SelectButton>
        </Grid>
      </Grid>
    </div>
  );
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// export default function NativeSelects() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     age: '',
//     name: 'hai',
//   });

//   const inputLabel = React.useRef(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
//   React.useEffect(() => {
//     setLabelWidth(inputLabel.current.offsetWidth);
//   }, []);

//   const handleChange = name => event => {
//     setState({
//       ...state,
//       [name]: event.target.value,
//     });
//   };

//   return (
//     <div>
//       <FormControl className={classes.formControl} error>
//         <InputLabel htmlFor="name-native-error">Name</InputLabel>
//         <NativeSelect
//           value={state.name}
//           onChange={handleChange('name')}
//           name="name"
//           inputProps={{
//             id: 'name-native-error',
//           }}
//         >
//           <option value="" />
//           <optgroup label="Author">
//             <option value="hai">Hai</option>
//           </optgroup>
//           <optgroup label="Contributors">
//             <option value="olivier">Olivier</option>
//             <option value="kevin">Kevin</option>
//           </optgroup>
//         </NativeSelect>
//         <FormHelperText>Error</FormHelperText>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
//         <NativeSelect
//           defaultValue={30}
//           inputProps={{
//             name: 'name',
//             id: 'uncontrolled-native',
//           }}
//         >
//           <option value="" />
//           <option value={10}>Ten</option>
//           <option value={20}>Twenty</option>
//           <option value={30}>Thirty</option>
//         </NativeSelect>
//         <FormHelperText>Uncontrolled</FormHelperText>
//       </FormControl>

//       <FormControl variant="outlined" className={classes.formControl}>
//         <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
//           Age
//         </InputLabel>
//         <Select
//           native
//           value={state.age}
//           onChange={handleChange('age')}
//           labelWidth={labelWidth}
//           inputProps={{
//             name: 'age',
//             id: 'outlined-age-native-simple',
//           }}
//         >
//           <option value="" />
//           <option value={10}>Ten</option>
//           <option value={20}>Twenty</option>
//           <option value={30}>Thirty</option>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
