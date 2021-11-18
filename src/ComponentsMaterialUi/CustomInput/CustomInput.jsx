import React,{useReducer,useEffect} from "react";
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
import {validation} from "../../utilityFolder/validator";
// core components
import customInputStyle from "../../assets/jss/material-dashboard-react/components/customInputStyle.jsx";

const customInputReducer = (state,action) => {
  switch(action.type){
    case "INPUT_CHANGE" :
      return{
        ...state,
        value:action.value,
        isValid:(validation(action.value,action.isValid))
      }
    case "TOGGLE-PASSWORD-VISIBILITY" :
      return{
        ...state,
        PasswordVisible : action.PasswordVisible
      }
  }
}

function CustomInput({ ...props }) {
  const {
    classes,
    formControlProps,
    validator,
    VisibleIconName,
    NotVisibleIconName,
    labelText,
    handleChange,
    selectForm,
    style,
    elementType,
    OuterInputStyle,
    InnerInputStyle,
    type,
    selectPlaceholder,
    InputDataChangeHandler,
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
    // value,
    valid,
    finalValue,
    onChange,
    ...rest
  } = props;

  const [initialCustomInputState , dispatch] = useReducer(
    customInputReducer,{
      value:" ",
      isValid:false,
      PasswordVisible:false,
  });

  const { value , isValid } = initialCustomInputState;

  useEffect(()=>{
    InputDataChangeHandler(id,value,isValid);
  },[id,value, isValid,InputDataChangeHandler]);

  const [open, setOpen] = React.useState(false);

  const ToggleVisivilityIcon = ( ) =>{
    dispatch({
      type:"TOGGLE-PASSWORD-VISIBILITY",
      PasswordVisible:!initialCustomInputState.PasswordVisible
    });
}

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

  const inputDataChangeHandler = (event) =>{
    event.preventDefault();
    let value = event.target.value;  
    dispatch({
      type:"INPUT_CHANGE",
      value:value,
      isValid:validator
    })
  }

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
        <div style={{padding:"3px 0"}}>
          {!valid && finalValue?(
          <p className={classes.errMegStyl}>
            Please enter your valid {placeholder}
          </p>):null}
          <div 
          className={!valid && finalValue?classes.notValid:classes.inputBorder}
           style = {OuterInputStyle}
          >
           <InputsIcons IconType={IconName}/>
           <input  
           className={classes.inputStyle}
           type={type}
           style={InnerInputStyle}
           placeholder={placeholder}
            onChange={inputDataChangeHandler}
           />       
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
              type={initialCustomInputState.PasswordVisible?"text":"password"}
              placeholder={placeholder}
              {...rest}
              onChange={inputDataChangeHandler}
              />
              <div 
              style={{
                width:"40px",
                paddingTop:"10px",
              }}
              onClick={ToggleVisivilityIcon}
              >
                { initialCustomInputState.PasswordVisible?( 
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
