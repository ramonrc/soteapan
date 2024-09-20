var Receta = "Bebida caliente: una bola de 80gr, un litro de leche, un litro de agua, endulzando al gusto.";

var VideoCh = [
            m("iframe", {src: "media/Chocolate-seleccion.mp4", allowfullscreen: "" } ),
            m("iframe", {src: "media/Chocolate-tostado.mp4", allowfullscreen: "" } ),
            m("iframe", {src: "media/Chocolate-tcanela.mp4", allowfullscreen: "" } ),
            m("iframe", {src: "media/Chocolate-molino.mp4", allowfullscreen: "" } ),
            m("iframe", {src: "media/Chocolate-metate.mp4", allowfullscreen: "" } ),
            m("iframe", {src: "media/Chocolate-moldeado.mp4", allowfullscreen: "" } ),
            m("iframe", {src: "media/Chocolate-empacado.mp4", allowfullscreen: "" } ),
            m("iframe", {src: "media/Chocolate-pesado.mp4", allowfullscreen: "" } )
];

var current_vid = 0;

function cycle_vid(){
	if(current_vid++ == 7) current_vid = 0;
}

var Chocolate = {
    view: function() {
      return(m("next",
      m("h1", {class: "title"}, "Chocolate"),
      m("div", {class: "content"},
        m("h2", "Variedades"),
	m("ul", m("li", "Con canela"), m("li", "Con cardamomo")),
        m("h2", "Proceso"),
	m("div", {class: "button", onclick: cycle_vid}, "Siguiente video"),
        m("div", {class: "video-container"}, VideoCh[current_vid] ),
        m("h2", "Receta"), 
        m("div", {class: "whell"}, Receta )
      ) 
))}}

var VideoCa = [
            m("iframe", {src: "media/Cafe-pelado.mp4", allowfullscreen: "" } ),
            m("iframe", {src: "media/Cafe-tostado.mp4", allowfullscreen: "" } ),
            m("iframe", {src: "media/Cafe-molido.mp4", allowfullscreen: "" } ),
            m("iframe", {src: "media/Cafe-empacado.mp4", allowfullscreen: "" } )];

function cycle_vic(){
	if(current_vid++ == 3) current_vid = 0;
}

var Cafe = {
    view: function() {
      return(m("next",
      m("h1", {class: "title"}, "Café"),
      m("div", {class: "content"},
        m("h2", "Variedades"),
	m("ul", m("li", "Americano"), m("li", "Europeo"), m("li", "Expreso"), m("li", "Gourmet")),
        m("h2", "Proceso"),
	m("div", {class: "button", onclick: cycle_vic}, "Siguiente video"),
        m("div", {class: "video-container"}, VideoCa[current_vid] ),
        m("img", {src: "media/Cafe-listo.jpeg", style: { width: '80%'}})
      ) 
))}}
    
var Home = {
    view: function() {
        return(m("main",
        m("h1", {class: "title"}, "Comunidad ", m("a", {href: "https://atlas.inpi.gob.mx/popolucas-de-la-sierra-veracruz/"}, "popoluca")),
        m('nav', m('ul', {class: "menu menu--background"},
            m('li', {class: "menu__button  menu__button--arrow"}, "Productos",
                m('div', {class: "dropdown-container"}, m('ul',
                    m('li', {class: "menu__button"}, m("a", {href: "#!/chocolate"}, "Chocolate")),
                    m('li', {class: "menu__button"}, m("a", {href: "#!/cafe"}, "Cafe"))
                    )))
            )),
        m("div", {class: "title"}, m('h1', "San Fernando, Soteapan"))
        ))
    }
}

