import Modal from './modal.js'

const e = React.createElement;

export default function Header(props) {
    let [isOpenMenu, setOpenMenu] = React.useState(false);
    const link = (title, href) => e('a', {href, className: 'header__link', key: title}, title);

    const handleClick = () => {
        setOpenMenu(!isOpenMenu)
    }
    return (
        e('header', {className: 'header'},
            props.links.map( (el, index) => (
                    link(el.title, el.href, index)
                )),
            e('div', {className: 'header__btn', onClick: handleClick},
                e('img', {src: './assets/menu.svg'})),
            isOpenMenu && e(Modal, {modalLinks: props.modalLinks, closeModal: setOpenMenu}, 'test')
        )
    );
}