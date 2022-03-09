let texte = document.querySelector('.text');
let lettre = "e";

function analyse(texte, lettre) 
{
 var compteur = 0;
 for (var position = 0; position < texte.length; position++) 
 {
    if (str.charAt(position) == lettre) 
      {
      compteur += 1;
      }
    }
    let div = document.createElement('div');
    div.classList.add('analyse')
    div.innerHTML = compteur;
    document.querySelector('.analyse').appendChild(div)
}


console.log(analyse(texte, 'e'));