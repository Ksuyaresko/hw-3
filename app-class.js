import Input from "./button.js";

const c = React.createElement;

class App extends React.Component  {
    state= {
        name: 'Vasya',
        counter: 0,
        color: '0, 0, 0'
    }

    randomColor = () => {
        return `${Math.round(Math.random()*256)}, 
                ${Math.round(Math.random()*256)},
                ${Math.round(Math.random()*256)}`
    }
    clickHandler = (event) => {
        this.setState({name: 'Petya'})
    }

    counterClick = (event) => {
        this.setState({counter: ++this.state.counter});
    }

    changeColor = () => {
        console.log('change color')
        this.setState({color: this.randomColor()});
    }

    render = () => {
        let {name, counter, color} = this.state
        return c('div', {style: {
                    color: `rgb(${color})`
                }, title: 'this is div title'},
            c('p', null,
                'This is span text',
                c('span', null, 'this is span text')),
            c('p', null, 'Second p', 1 === 2 ? 'true' : 'false'),
            c('div', {onClick: this.clickHandler }, name),
            c('div', null,
                c('button', {onClick: this.counterClick}, counter)
            ),
            c('div', null,
                c('button', {onClick: this.changeColor}, 'Click me to change color')),
            c(Input, {text: name}, c('p', {style: {color: "red"}}, 'Text'))
        )
    }
}

ReactDOM.render(c(App, null, null), document.getElementById('root'), );