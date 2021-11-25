const VALIDATOR_TYPE_REQUIRED = "REQUIRED";
const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH";
const VALIDATOR_TYPE_EMAIL = "EMAIL";


export const VALIDATION_REQUIRED = ( ) =>({
   type:VALIDATOR_TYPE_REQUIRED
});

export const VALIDATION_MINLENGTH = ( value ) =>({
   type:VALIDATOR_TYPE_MINLENGTH,
   value:value
});

export const VALIDATION_EMAIL = ( value ) => ({
   type:VALIDATOR_TYPE_EMAIL    
});


export const validation = (value , validators) =>{
   
   let forIsValid = true;
   for(let validator in validators){
      if(validators[validator].type === VALIDATOR_TYPE_REQUIRED){
         forIsValid = forIsValid && value.trim().length > 0;
      }
      if(validators[validator].type === VALIDATOR_TYPE_MINLENGTH ){
         forIsValid = forIsValid && value.trim().length >= validators[validator].value;
      }
      if(validators[validator].type === VALIDATOR_TYPE_EMAIL){
         forIsValid = forIsValid && /^\S+@\S+\.\S+$/.test(value)
      }
   }
   return forIsValid;
}