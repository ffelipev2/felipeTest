document.getElementById("inicio").
        addEventListener("click", parte1);
        function parte1() {
        document.getElementById("principal").innerHTML =
                '<h2>¿Qué es Frontend?</h2>\n\
                    <p>\n\
                Frontend es la parte de un programa o dispositivo a la que un usuario puede acceder directamente. Son todas las tecnologías de diseño y desarrollo web que corren en el navegador y que se encargan de la interactividad con los usuarios.\n\
                Para convertirte en Frontend Developer debes saber HTML y CSS, los lenguajes de maquetación que nos permiten definir la estructura y estilos de una página web. Y también JavaScript, un lenguaje de programación para definir la lógica de nuestra aplicación, recibir las solicitudes de los usuarios y enviárselos al backend.\n\
            </p>\n\
            <h2>HTML , CSS y JS</h2>\n\
            <p>\n\
                El contenido de esta información se estructura en tres apartados:\n\
            </p>\n\
            <ul id="contenido">\n\
                <li><strong> HTML </strong>(Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML, generalmente se utilizan otras tecnologías para describir la apariencia/presentación de una página web (CSS) o la funcionalidad/comportamiento (JavaScript).\n\
                    "Hipertexto" hace referencia a los enlaces que conectan páginas web entre sí, ya sea dentro de un único sitio web o entre sitios web. Los enlaces son un aspecto fundamental de la Web. Al subir contenido a Internet y vincularlo a las páginas creadas por otras personas, te conviertes en un participante activo en la «World Wide Web» (Red Informática Mundial)\n\
                </li>\n\
                <li><strong>JavaScript</strong> (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,2 basado en prototipos, imperativo, débilmente tipado y dinámico.\n\
                    Se utiliza principalmente del lado del cliente, implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas3 y JavaScript del lado del servidor (Server-side JavaScript o SSJS). Su uso en aplicaciones externas a la web, por ejemplo en documentos PDF, aplicaciones de escritorio (mayoritariamente widgets) es también significativo.\n\
                </li>\n\
                <li><strong>CSS</strong> (siglas en inglés de Cascading Style Sheets), en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.2 Es muy usado para establecer el diseño visual de los documentos web, e interfaces de usuario escritas en HTML o XHTML; el lenguaje puede ser aplicado a cualquier documento XML, incluyendo XHTML, SVG, XUL, RSS, etcétera. Te puede ayudar a crear tu propio sitio web. Junto con HTML y JavaScript, CSS es una tecnología usada por muchos sitios web para crear páginas visualmente atractivas, interfaces de usuario para aplicaciones web y GUIs para muchas aplicaciones móviles (como Firefox OS).3</li>\n\
            </ul>';
                }
document.getElementById("noticias").
        addEventListener("click", parte2);
        function parte2() {
        document.getElementById("principal").innerHTML = "<img src='https://blog.facialix.com/wp-content/uploads/2021/03/curso-html-css-javascript-bootstrap-facialix.jpg' width='800' height='500'>";
                }
function miMensaje() {
var nombre = document.getElementById("nombre").value;
        var mensaje = nombre + ", Tu mensaje ha sido enviado";
        alert(mensaje);
        }