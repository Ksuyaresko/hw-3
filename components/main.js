const e = React.createElement;

export default function Main() {
    let [value, setValue] = React.useState('');
    const handleInput = (event) => {
        if(event.target.value.match(/^[a-zA-Z0-9 ]*$/g)) setValue(event.target.value)
    }
    return (
        e('main', {className: 'main'},
            e('a', {href: '#'},
                e('img', {src: './assets/google.png'})),
            e('div', {className: 'search'},
                e('input', {className: 'search__input', value, onChange: handleInput})),
            e('div', {className: 'search__btns'},
                e('button', {className: 'search__btn'}, 'Поиск в гугл'),
                e('button', {className: 'search__btn'}, 'Мне повезет!'))
        )
    )
}