//código para que ao scrollar os elementos se alterem
window.onscroll = function() {
    var header = document.getElementById("menuNav");
    var title = document.querySelector('.animated-title');
    var textTitle = document.querySelector(".animated-text-title")
    var textSpan = document.querySelector(".span-animation")
    var contact = document.getElementById("contact")
    if (window.scrollY > 50) { 
        header.style.backgroundColor = "rgba(44, 44, 44, 0.686)";
        title.style.animation = "title-animation 2.5s forwards"
        textTitle.style.animation = "title-text-animation 2.5s forwards"
        textSpan.style.animation = "title-text-animation-span 1.7s 1s forwards"
        contact.style.opacity = "100%"
    } else {
        header.style.backgroundColor = "rgba(44, 44, 44, 0)";
    }
    title = document.querySelector('#team .animated-title');
    textTitle = document.querySelector("#team .animated-text-title")
    textSpan = document.querySelector("#team .span-animation")
    if (window.scrollY > 640) { 
        title.style.animation = "title-animation 2.5s forwards"
        textTitle.style.animation = "title-text-animation 2.5s forwards"
        textSpan.style.animation = "title-text-animation-span 1.7s 1s forwards"
    }

    title = document.querySelector('#trabalhos .animated-title');
    textTitle = document.querySelector("#trabalhos .animated-text-title")
    textSpan = document.querySelector("#trabalhos .span-animation")
    if (window.scrollY > 1300) {
      title.style.animation = "title-animation 2.5s forwards"
        textTitle.style.animation = "title-text-animation 2.5s forwards"
        textSpan.style.animation = "title-text-animation-span 1.7s 1s forwards"
    }

    if (window.scrollY > 2650) {
      contact.style.position = "static";
      contact.style.float = "right";
      contact.style.margin = "45px";
      
      
    } else {
      contact.style.position = "fixed";
      contact.style.margin = "0";
    }
  };

  // Animação das setas
  var animateSvgArrow = (x) => x.style.color = "#a3a3a3";
  var normalSvg = (x) => x.style.color = "#636363";

  // Criar um carrossel
  // Desaparecer com as seções
  var ArrayStoredSections = [] // Declaração do Array para guardar as seções
  var slideAtual = 0 
  document.addEventListener('DOMContentLoaded', function() {
    for(var i = 0; i < 100; i++) {
      var section = document.getElementById(`carousel-item-${i}`);
      // Verificar se a seção existe
      if (section) {
        // Armazenar o conteúdo da seção
        window.sectionContent = section.outerHTML;
        window.ArrayStoredSections.push(window.sectionContent)
        section.parentNode.removeChild(section);
      } else {
        var localSection = document.getElementById("team")
        var tempSection = document.createElement('section');
        tempSection.innerHTML = window.ArrayStoredSections[0];
        // Obter o elemento da seção
        var newSection = tempSection.firstChild;
        // Adicionar a nova seção ao corpo do documento
        localSection.appendChild(newSection);
        break
      }
    }
    return ArrayStoredSections;
});

var x = 0

function carousselSvgControlNext() {
  var slideAtual = document.getElementById(`carousel-item-${x}`);
  slideAtual.style.animation = "carouselAnimationOUTR 1.5s forwards";
  slideAtual.addEventListener("animationend", function createNewSection() {
    slideAtual.parentNode.removeChild(slideAtual);
    var localSection = document.getElementById("team")
    var tempSection = document.createElement('section');
    x = (x+1) % window.ArrayStoredSections.length; 
    tempSection.innerHTML = window.ArrayStoredSections[x];
    
    // Obter o elemento da seção
    var newSection = tempSection.firstChild;
    newSection.style.transform = "translateX(-100vw)";
    // Adicionar a nova seção ao corpo do documento
    localSection.appendChild(newSection);
    slideAtual = document.getElementById(`carousel-item-${x}`); 
    slideAtual.style.animation = "carouselAnimationINR 1.5s forwards"
  });
}

function carousselSvgControlPrev() {
  var slideAtual = document.getElementById(`carousel-item-${x}`);
  slideAtual.style.animation = "carouselAnimationOUTL 1.5s forwards";
  slideAtual.addEventListener("animationend", function createNewSection() {
    slideAtual.parentNode.removeChild(slideAtual);
    var localSection = document.getElementById("team")
    var tempSection = document.createElement('section');
    x = ((x-1) + window.ArrayStoredSections.length) % window.ArrayStoredSections.length; 
    tempSection.innerHTML = window.ArrayStoredSections[x];
    
    // Obter o elemento da seção
    var newSection = tempSection.firstChild;
    newSection.style.transform = "translateX(100vw)";
    // Adicionar a nova seção ao corpo do documento
    localSection.appendChild(newSection);
    slideAtual = document.getElementById(`carousel-item-${x}`); 
    slideAtual.style.animation = "carouselAnimationINL 1.5s forwards"
  });
}
/**
// Titulos responsívos
const viewportWidth = window.innerWidth;
var title = document.querySelector('.animated-title');
var textTitle = document.querySelector(".animated-text-title")
var conatinerTitle = document.querySelector(".container-title")
conatinerTitle.style.height = `calc(${window.getComputedStyle(title).getPropertyValue('height')} * 2)`;
textTitle.style.fontSize = `calc(${window.getComputedStyle(title).getPropertyValue('height')}/${viewportWidth}*100)`
textTitle.style.lineHeight = `calc(${window.getComputedStyle(title).getPropertyValue('height')}/${viewportWidth}*88)`
console.log(window.getComputedStyle(conatinerTitle).getPropertyValue('height'))
**/