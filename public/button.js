const c = React.createElement

export default (props) => {
    return c('div', {value: props.text}, props.children)
}