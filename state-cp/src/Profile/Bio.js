import React from "react";

class Bio extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 0,

        }

    }
    componentDidMount (){
        this.myInterval = setInterval (() => {
            this.setState ( a=> ( {
      
              count : this.state.count + 1
            }))
              
          } ,1000 )

    }
        render () {
            const {FullName,Profession,Bio,} = this.props
            const a = this.state.count
            return(
                <div>
                  
                    <div className="Info">
                    <h4>{a}</h4>
                  <h1>{FullName}</h1>
                  <img src="/pic1.jpg" alt="Not Found" width="500" height="500"/>
                  <h3>{Profession}</h3>
                  <h5>{Bio}</h5>
                  </div>                          
                  
                </div>
            )
        }
}

     export default Bio