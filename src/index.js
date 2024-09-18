var Receta = "Preparar bebida caliente con una bola de 80gr, un litro de leche, un litro de agua, endulzando al gusto."

var Chocolate = {
    view: function() {
      return(m("next",
      m("h1", {class: "title"}, "Cocolate"),
      m("h2", "Proceso"),
      m("div", {class: "video-container"},
        m("iframe", {width="520", height: "300", src: "https://www.youtube.com/embed/olj88QaO9iM", allowfullscreen: "" } ) ),
      m("h2", "Receta"), 
      m("div", {class: "whell"}, Receta ) 
))}}

var Cafe = {
    view: function() {
      return(m("next",
      m("h1", {class: "title"}, "Café")
))}}
    
var Home = {
    view: function() {
        return(m("main",
        m("h1", {class: "title"}, "Comunidad ", m("a", {href: "https://atlas.inpi.gob.mx/popolucas-de-la-sierra-veracruz/"}, "popoluca")),
        m('nav', m('ul', {class: "menu menu--background"},
            m('li', {class: "menu__button  menu__button--arrow"}, "Productos",
                m('div', {class: "dropdown-container"}, m('ul',
                    m('li', {class: "menu__button"}, m("a", {href: "#!/ch"}, "Chocolate")),
                    m('li', {class: "menu__button"}, m("a", {href: "#!/ca"}, "Cafe"))
                    )))
            )),
        m("div", {class: "title"}, m('h1', "San Francisco, Soteapan"))
        ))
    }
}

