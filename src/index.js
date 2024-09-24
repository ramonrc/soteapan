var Receta = "Bebida caliente: una bola de 80gr, un litro de leche, un litro de agua, endulzando al gusto.";

var NarracionCafe = m("div", 
	m("p", "El pueblo originario popoluca está arraigado en Veracruz desde la época precolombina. Está ubicada mayoritariamente en los municipios de Soteapan y Hueyapan de Ocampo y tienen una vinculación cultural con los mayas, aunque con elementos diferenciados propios veracruzanos que los hacen únicos, no superando las pocas decenas de miles en su conjunto. No está relacionada de forma directa con ninguna otra etnia por lo que su ámbito geográfico se circunscribe apenas a 5 municipios de Veracruz. Los popolucas siempre han estado vinculados a la selva, lo cual les valió para no ser nunca conquistados por los españoles y, de hecho gracias a ellos, independizarse de los aztecas y salvaguardar su cultura e idioma. Por todo ello la vinculación de los popolucas con la naturaleza  es ancestral y co-responsable."), 
	m("p", "En la dinámica histórica post-colonial los popolucas sobrevivieron como Dios les dio a entender, y en la época post-revolucionaria ellos mismos tomaron sus decisiones acerca de cómo lograr su supervivencia productiva. Por ese camino, algunas poblaciones de comunidades comenzaron a sembrar café. Inicialmente los popolucas fueron productores de café como materia prima, mismo que compraban empresarios para su elaboración comercial, pagando lo mínimo a una población, de por sí necesitada, pero dándoles un beneficio mínimo que diese continuidad a la productividad. En esa época difícil, algunos popolucas seguían sembrando el café. Ya bien avanzado el siglo XX el gobierno federal conformó INMECAFE, un instituto para fomentar la producción de café y que daba precios de garantía a los productores como materia prima con lo cual se incrementó mucho la cantidad de productores que se dedicaron a este cultivo. Los popolucas vieron nacer y desaparecer INMECAFE, y tras la crisis del ramo que siguió siguieron aferrados a su cultivo ya tradicional."),
	m("p", "El camino de fin de siglo XX y principios del siglo XXI fue tortuoso. Los cafetales popolucas se encuentran entre los 600 y los 1200 metros de altura sobre el nivel del mar, siendo el más alto el de la comunidad de San Fernando, donde vivimos nosotros, quienes hacemos llegar este café hasta tu casa. Con la caída de INMECAFE hicieron presencia los intermediarios que no dudaron en aprovecharse, comprándonos el café en pergamino a muy bajo precio, apenas suficiente para cubrir los gastos de cosecha y empaque, pero obteniendo un gran beneficio con su proceso. Muchas marcas de café veracruzano, especialmente las de Coatepec, tienen una buena parte de grano popoluca de café. De este modo un grupo de productores decidieron construir un beneficio rústico y por sus propios medios comenzaron a tostar el café y a ofertarlo por las comunidades aledañas por medida, lo cual lo hacía mucho más rentable."),
	m("p", "A partir del año 2000 nos enfocamos ya en la comercialización del café acabado y en ese camino aprendimos a empacar y a hacer diferentes tostados. Aprendimos a hacer café europeo, americano, gourmet y expreso y lo empacamos en papel craft para no perjudicar el medio ambiente con las bolsas especiales de café. No tenemos mucho café y no queremos hacernos ricos, solo queremos una vida digna con nuestro trabajo y es por eso que te lo ofrecemos con mucho cariño y con la garantía de que a nosotros nos sirve mucho tu compra, no sirve para que nadie se haga una mansión o se compre un coche de lujo, sirve para toda la comunidad se beneficie. Muchas gracias por tu ayuda.")
);

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
                    m('li', {class: "menu__button"}, m("a", {href: "#!/cafe"}, "Cafe")),
                    m('li', {class: "menu__button"}, m("a", {href: "#!/chocolate"}, "Chocolate"))
                    )))
            )),
        m("div", {class: "title"}, m('h1', "San Fernando, Soteapan")),
	NarracionCafe,
	m("div", {class: "video-container"}, m("iframe", {src: "media/VideoCafe.mp4", allowfullscreen: "" } ))
        ))
    }
}

