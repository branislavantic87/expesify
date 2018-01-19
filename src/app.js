


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOne = this.handleDeleteOne.bind(this);
        this.state = {
            options: props.options,
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('fetching data')
        }
    }

    componentWillUnmount() {
        console.log('saving data')
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOne(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add Item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Allready exist';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    render() {
        const subtitle = 'Put your life in hands of computer!';
        { this.state.options }
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOne={this.handleDeleteOne} />
                <AddOptions handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What should i do
                </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all!</button>
            {props.options.length === 0 && <p>Please add option to get started!!</p>}
            {
                props.options.map((ele) => (
                    <Option
                        key={ele}
                        optionText={ele}
                        handleDeleteOne={props.handleDeleteOne}
                    />
                ))
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOne(props.optionText)
                }}
            >
                Remove
            </button>
        </div>
    );

}

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const err = this.props.handleAddOption(option)

        this.setState(() => ({ error: err }))

        if(!err) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option!</button>
                </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))