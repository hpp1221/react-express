import React from 'react';
import {Link} from 'react-router-dom';
class Home extends React.Component{
    render(){
        return(
            <div>
                <div>
                    this is Home！
                </div>
                <div>
                    <Link to="/page1/" style={{color:'#f40',fontSize:"16px"}}>
                        <div>点击跳转到Page1</div>
                    </Link>
                    <Link to="/page2/" style={{color:'black'}}>
                        <div>点击跳转到Page2</div>
                    </Link>
                    <Link to="/page3/" style={{color:'black'}}>
                        <div>点击跳转到Page3</div>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Home;