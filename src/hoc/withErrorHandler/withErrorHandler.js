import React, {Component} from 'react';
import Modal from "../../ComponentsMaterialUi/Modal/Modal";

const withErrorHandler = (WrappedComponent,axios) => {
    return class extends Component{
        state={
            error:null,
        }

        componentWillMount(){
           this.interceptorsReq = axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req;
            });
            this.interceptorsRes = axios.interceptors.response.use(res=>res,error =>{
                this.setState({error:error});
            })
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.interceptorsReq);
            axios.interceptors.response.eject(this.interceptorsRes);
        }

        errorConfirmedHandler = ( ) =>{
            this.setState({error:null});
        }

       render(){
         
         
       return(
           <div>
              <Modal show={this.state.error} BlackDrop={this.errorConfirmedHandler}>
                {this.state.error?this.state.error.message:null}
              </Modal>
              <WrappedComponent {...this.props}/>
          </div>
       )
    }   
}
}

export default withErrorHandler;