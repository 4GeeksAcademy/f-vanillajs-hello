let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dominios = [".com", ".org", ".net", ".io"];

function generarNombresDeDominio() {
  let nombresDeDominio = [];

  pronoun.forEach(pronombre => {
    adj.forEach(adjetivo => {
      adj.forEach(sustantivo => {
        dominios.forEach(dominio => {
          let nombreDeDominio = pronombre + adjetivo + sustantivo + dominio;
          nombresDeDominio.push(nombreDeDominio);
        });
      });
    });
  });

  return nombresDeDominio;
}

const dominiosGenerados = generarNombresDeDominio();
// eslint-disable-next-line no-console
dominiosGenerados.forEach(nombre => console.log(nombre));
