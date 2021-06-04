import logo from './logo.svg';
import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component{
  constructor(){
    super();
    this.state={visible:'none'}
  }


  handChange=()=>{
    this.setState({visible:'none'})
  }
  render(){
    return(
      <div>
        <button className="btn1"onClick={()=>this.setState({visible:'block'})}>点击打开对话框</button>
        <div className='div' style={{display:this.state.visible}}>
          <h3 style={{textAlign:'center'}}>确认删除账号？</h3><br/>
          <button className="btn" onClick={this.handChange}>确认</button><button className="btn" style={{right:0}} onClick={this.handChange}>取消</button>
        </div>
      </div>
    )
  }
  


} 

export default App;
