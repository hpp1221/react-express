import React from 'react';

class Page2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mytext: '',
        }
    }

    getData() {
        fetch(`http://127.0.0.1:8081/json`, {
            method: 'GET'
        }).then(res => res.json()).then(
            data => {
                console.log('res',data)
                this.setState({mytext: data})
                console.log('res',this.state.mytext)
            }
        )
    }

    componentWillMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <div>{this.state.mytext.name}</div>
                <div>{this.state.mytext.price}</div>
                <div>{this.state.mytext.date}</div>
            </div>

        )
    }
}

export default Page2;