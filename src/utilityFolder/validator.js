const VALIDATOR_TYPE_REQUIRED = "REQUIRED";

export const VALIDATOR_REQUIRED = ( ) =>({type:VALIDATOR_TYPE_REQUIRED});

export const validation = (value , validators) =>{
   console.log(validators);
}