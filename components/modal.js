const e = React.createElement;

export default function Modal(props) {
    React.useEffect(
        () => {
            const removeModal = (event) => {
                let target = event.target
                while(target && !target.classList.contains('header__btn')) {
                    target = target.parentElement
                }
                target ? null : props.closeModal()
            }
            document.body.addEventListener('click', removeModal);
            return () => {
                document.body.removeEventListener('click', removeModal)
            }
        }
    )
    return (
        e('div', {className: 'modal'},
            props.modalLinks.map( link =>
                e('a', {href: link.href, key: link.title}, link.title)
            )
        )
    );
}