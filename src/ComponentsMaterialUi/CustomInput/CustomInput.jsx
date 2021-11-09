import React,{useReducer} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import InputsIcons from "../icons/icons.jsx";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import Input from "@material-ui/core/Input";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components
import customInputStyle from "../../assets/jss/material-dashboard-react/components/customInputStyle.jsx";

function CustomInput({ ...props }) {
  const {
    classes,
    formControlProps,
    VisibleIconName,
    NotVisibleIconName,
    labelText,
    handleChange,
    selectForm,
    style,
    elementType,
    selectPlaceholder,
    placeholder,
    inputChangeHandler,
    className,
    menuOptions,
    id,
    IconName,
    labelProps,
    inputProps,
    error,
    success,
    value,
    valid,
    finalValue,
    onChange,
    ...rest
  } = props;

  // const [initialState , dispatch] = useReducer(
  //   customInputReducer,{
  //     value:""
  //   }
  // );

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  });

 
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [className]: className !== undefined
  });
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined,
    
  });

 let inputElement = null;
 
 switch (elementType) {
     case ('input'):
      inputElement =  <FormControl
      {...formControlProps}
      className={formControlProps.className + " "}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        className={classes.InputStyle}
        style={style}
        id={id}
        value={value}
        onChange={handleChange}
        {...inputProps}
      />
      {error ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
     break;

     case "inputWithIcon" :
      return(
        <div>
          {!valid && finalValue?(
          <p className={classes.errMegStyl}>
            Please enter your valid {placeholder}
          </p>):null}
          <div 
          className={!valid && finalValue?classes.notValid:classes.inputBorder}
          >
           <input  
           className={classes.inputStyle}
           type={elementType}
           placeholder={placeholder}
           {...rest}
            onChange={inputChangeHandler}
           />
           <InputsIcons IconType={IconName}/>       
         </div>
        </div>
      )

      case "password" :
        return(
         <div>
           {!valid  && finalValue ?(
           <p className={classes.errMegStyl}>
             Please enter your 6 digit valid {placeholder}
           </p>):null
            }
           <div 
             className={!valid && finalValue?classes.notValid:classes.inputBorder}
            >
              <input  
              className={classes.inputStyle}
            //  type={initialInputState.PasswordVisible?"text":"password"}
              placeholder={placeholder}
              {...rest}
              onChange={inputChangeHandler}
              />
              <div 
              style={{
                width:"40px",
                paddingTop:"10px",
              }}
            //  onClick={ToggleVisivilityIcon}
              >
                {/* initialInputState.PasswordVisible*/true?( 
                   <InputsIcons IconType={VisibleIconName}/>
                  ):(<InputsIcons IconType={NotVisibleIconName}/>)
                }
              </div>      
           </div>
         </div>
        )
    
     case ('textarea'):
      inputElement = (
       <TextareaAutosize
       style={{width:"99%",marginTop:"4%",height:"95px",padding:"1%"}}
           rowsMax={7}
           aria-label="maximum height"
           placeholder={labelText}  
           onChange={handleChange}
       />
      );
     break;
     
     case ('Display'):
       inputElement = (
       <p
       style={{fontSize:"130%", width:"100%"}}
         className="Display" 
       >
        &#8377; {value}
        </p>
        );
      break;
     case ('select'):
      inputElement=  <FormControl style={{width:"100%"}}>
      <InputLabel id={selectPlaceholder}>{selectPlaceholder}</InputLabel>
      <Select
        labelid={selectPlaceholder}
        id="demo-controlled-open-select"
        open={open}
        className={classes.InputStyle}
        onClose={handleClose}
        onOpen={handleOpen}
        value={value}
        onClick={handleChange}
      >
  
      {menuOptions.map(menuItems => (
       <MenuItem 
         key={menuItems.value}
         value={menuItems.value}
         name={id}
       >
        {menuItems.value}
       </MenuItem>
      ))}
      </Select>
    </FormControl>
       
     break;
     default:
      inputElement =  <FormControl
      {...formControlProps}
      className={formControlProps.className + " "}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses
        }}
        className={classes.InputStyle}
        id={id}
        value={value}
        onChange={handleChange}
        {...inputProps}
      />
      {error ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
    
 }
 return(
     <div>
         {inputElement}
     </div>
 );
}

CustomInput.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool,
  //value: PropTypes.string,
  onChange: PropTypes.func
};

export default withStyles(customInputStyle)(CustomInput);
