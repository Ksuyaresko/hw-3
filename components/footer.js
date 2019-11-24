const e = React.createElement;

export default function Footer(props) {
    const link = (href, title) => (
        e('a', {href, key: title}, title)
    );
    const leftLinksArr = props.links.filter( (link, index) => index <= 3);
    const rightLinksArr = props.links.filter( (link, index) => index > 3);

    return (
        e('footer', {className: 'footer'},
            e('div', {className: 'footer__item'},
                leftLinksArr.map( el => (link(el.href, el.title)))),
            e('div', {className: 'footer__item'},
                rightLinksArr.map( el => (link(el.href, el.title))))
        )
    )
}