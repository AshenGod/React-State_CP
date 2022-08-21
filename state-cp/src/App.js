import Bio from './Profile/Bio';
import React from 'react';
import './App.css';

class App extends React.Component{
  
  state={
    show : false
  }
  render() {
    return (
      <div>
          <button onClick={()=>this.setState({show : !this.state.show})}>{this.state.show ? 'Close' : 'Open'}</button>
       {this.state.show &&
       
        <Bio FullName={'Elon Musk'} Profession={'CEO of SpaceX'}
          Bio={'Elon Musk is a South African-born American entrepreneur and businessman who founded X.com in 1999 (which later became PayPal), SpaceX in 2002 and Tesla Motors in 2003. Musk became a multimillionaire in his late 20s when he sold his start-up company, Zip2, to a division of Compaq Computers.'}>
        </Bio>
        
        }
        
        
      </div>
    )
  }
}

export default App;