// getElement
var titleElt = document.getElementById("title")
var descElt = document.getElementById("essais")

// Configuration de la partie 
var submitElt = document.getElementsByClassName("submit")[0]
submitElt.addEventListener("click" , changeScene)

function changeScene(event){
    event.preventDefault()
    // Création des variables
    var tableauDelements = document.getElementsByTagName("input")
    var input1 = tableauDelements[0]
    var input2 = tableauDelements[1]
    var input3 = tableauDelements[2]

    var nbEssaiesRestants = input2.value
    var nbAChercherMaximal = input1.value

    // Création de la nouvelle scène
    input2.style.display= "none"
    input1.placeholder= "Entrez un nombre entre 0 et " + nbAChercherMaximal
    input3.value="Tester !"
    descElt.style.display= "block"

    startGame(nbAChercherMaximal,nbEssaiesRestants)
}

function startGame(nbAChercherMaximal, nbEssaiesRestants) {
    
    // Programme
    var texteTitle = "Que la partie commence !"
    var texteDesc = " Il vous reste " + nbEssaiesRestants + " essais"
    var nbAuHasard = Math.floor(Math.random() * Math.floor(parseInt( nbAChercherMaximal , 10 ) + 1))

    for ( nbEssaiesRestants ; nbEssaiesRestants >= 0 ; nbEssaiesRestants-- ) {
        // Modification de scène
        var tableauDelements = document.getElementsByTagName("input")
        var input1 = tableauDelements[0]
        var input2 = tableauDelements[1]
        var input3 = tableauDelements[2]
        input1.value = ""
        input2.value = ""
        descElt.textContent = texteDesc
        titleElt.textContent = texteTitle 
        //var input = prompt(texte)
        descElt.textContent = texteDesc
        input = document.getElementsByTagName("input")[0].value
        console.info(input == nbAuHasard)
        if ( input == nbAuHasard ){
            alert("BRAVO ! Vous avez trouvé le nombre")
            nbEssaiesRestants = -1
        } else if ( input > nbAuHasard ) {
            texteTitle = "Le nombre est moins grand"
            texteDesc = "Il vous reste " + nbEssaiesRestants + " essaies"
        } else if ( input < nbAuHasard ) {
            texteTitle = "Le nombre est plus grand"
            texteDesc = "Il vous reste " + nbEssaiesRestants + " essaies"
        } else {
            alert("erreur")
        }
    }
}