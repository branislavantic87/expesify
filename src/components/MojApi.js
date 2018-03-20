import React from 'react';

class MojApi extends React.Component {

    state = { dzejson: '' }

    componentWillMount() {
        fetch('http://localhost:3000/', { method: 'GET', mode: 'no-cors' })
            .then(res => res.json())
            .then(res => this.setState({ dzejson: JSON.stringify(res.statusCode) }))

    }
    render() {
        return (
            <div>
                <h1>Zdravo</h1>
                {this.state.dzejson && <p>{this.state.dzejson}</p>}
            </div>
        )
    }
}

export default MojApi;