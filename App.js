import Header from "./components/header.js";
import Main from "./components/main.js";
import Footer from "./components/footer.js";

const e = React.createElement;

function App() {
  const headerLinks = [
    {title: 'Почта', href: '#'},
    {title: 'Картинки', href: '#'}
  ];

  const footerLinks = [
    {title: 'Реклама', href: '#'},
    {title: 'Для бизнеса', href: '#'},
    {title: 'Всё о Google', href: '#'},
    {title: 'Как работает Google Поиск', href: '#'},
    {title: 'Конфиденциальность', href: '#'},
    {title: 'Условия', href: '#'},
    {title: 'Настройки', href: '#'},
  ]

  const modalLinks = [
    {title: 'Аккаунт', href: '#'},
    {title: 'Поиск', href: '#'},
    {title: 'Карты', href: '#'},
    {title: 'Youtube', href: '#'},
    {title: 'Play', href: '#'},
    {title: 'Новости', href: '#'},
    {title: 'Почта', href: '#'},
    {title: 'Контакты', href: '#'},
    {title: 'Диск', href: '#'},
    {title: 'Календарь', href: '#'},
    {title: 'Переводчик', href: '#'},
    {title: 'Фото', href: '#'},
  ]

  return (
      e('div', {className: 'App'},
          e(Header, {className: 'App-header', links: headerLinks, modalLinks}),
          e(Main),
          e(Footer, {links: footerLinks})
      )
  );
}

ReactDOM.render(e(App, null, null), document.getElementById('root'), );
