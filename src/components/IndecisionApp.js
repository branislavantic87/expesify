import React from 'react';
import Header from './Header';
import Options from './Options';
import AddOptions from './AddOption';
import Action from './Action';


export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOne = this.handleDeleteOne.bind(this);
        this.state = {
            options: []
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

