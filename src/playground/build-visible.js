console.log('VISIBLE.js trci!');

class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.changeState = this.changeState.bind(this)
        this.state = {
            visibility: false
        }
    }
    changeState(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Toogle Visibility</h1>
                <button onClick={this.changeState}>
                    {this.state.visibility ? 'Hide details' : 'Show Details'}
                </button>
                {this.state.visibility && <p>There are some details</p>}
            </div>
        );
    }
}


ReactDOM.render(<Visibility />, document.getElementById('app'))








// const appRoot = document.getElementById('app')

// let toogle = {
//     title: 'Visibility Toogle',
//     details: 'There are some details'
// }
// let visibility = false;
// const prikazi = () => {
//     visibility = !visibility
//     render();
// }

// const render = () => {
//     let template = (
//         <div>
//             <h1>{toogle.title}</h1>
//             <button onClick={prikazi}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && <p>{toogle.details}</p>}
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// }


// render();

