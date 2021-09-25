import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getUsers,savetask} from '../actions/userActions';
class New extends Component{
    state={
        'test':"Hello",
        'textbox':false,
        'data':'',
        'taskname':''
    }


   // constructor(props){
    //}
    componentDidMount(){
        this.props.getUsers().then(response=>{
            console.log(this.props.users);


            console.log()
        })
        
    }

    createtask(event){
        this.setState({taskname:event.target.value})

        console.log(this.state.taskname);
    }

    savethistask(){
        console.log("savinf");
        this.props.savetask(this.state.taskname).then(response=>{
            this.props.getUsers()
        })
    }

    showtextbox(){
        this.setState({'textbox':true})
    }
    render(){
        
        return(
            //<h1>TEst change {this.state.test}</h1>
           <div>

         
 <h1>TASKS</h1>
           <p>Add a task..!!!</p>
           <button onClick={()=>this.showtextbox()}>+Add a task</button>
          {this.state.textbox?<div><input type="text" onChange={this.createtask.bind(this)} id="ts1"/>
           <br/>
           <button onClick={()=>this.savethistask()}>   SUBMIT</button>
           <br/>
           <br/>
           </div>:null}
           
           {this.props.users.map((myList)=>{  
               console.log(myList.task)
                return <div> <input type="radio" id="rd1" value="Task1"/>
                <label for="Task1">{myList.task}</label></div>;   
            }) }

           
           
           </div>
           
        )
    }
}
const mapStateToProps  = (state) => ({users:state.users})
export default connect(mapStateToProps, {getUsers,savetask})(New);