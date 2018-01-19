console.log('App.js trci!')
//  App objekat title subtitle

let book = {
    title: 'Konji',
    subtitle: 'Ponovo jure',
    options: []
}

// JSX 
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
        book.options.push(option);
        e.target.elements.option.value = '';
        renderAgain();
    }

}
const removeAll = () => {
    book.options = [];
    renderAgain();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * book.options.length);
    const option = book.options[randomNum];
    alert(option)
}

const appRoot = document.getElementById('app')

const numbers = [55, 66, 77];

const renderAgain = () => {
    let template = (
        <div>
            <h1>{book.title}</h1>
            {(book.subtitle && <p>{book.subtitle}</p>)}
            <p>{ book.options.length > 0 ? 'Here are Your options:' : 'No options' }</p>
            <button disabled={book.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={removeAll}>Remove all</button>
            <ol>
               {
                   book.options.map(e => <li key={e}>{e}</li>)
               }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type= "text" name="option" />
                <button>Add options</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}


renderAgain();
