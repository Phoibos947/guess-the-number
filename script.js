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
    input1.value=""
    input2.value=""
    input3.value="Tester !"
    descElt.style.display= "block"
    descElt.textContent=" Il vous reste " + nbEssaiesRestants + " essais"
    titleElt.textContent="Que la partie commence !"

    startGame(nbAChercherMaximal,nbEssaiesRestants)
}

function startgame(nbAChercherMaximal, nbEssaiesRestants){
    
    // Programme
    var texte = "Bienvenue dans la partie de guess the number !\nVeuillez taper un nombre entre 0 et " + nbAChercherMaximal
    var nbAuHasard = Math.floor(Math.random() * Math.floor(parseInt( nbAChercherMaximal , 10 ) + 1))

    for ( nbEssaiesRestants ; nbEssaiesRestants >= 0 ; nbEssaiesRestants-- ) {
        //var input = prompt(texte)
        console.info(input == nbAuHasard)
        if ( input == nbAuHasard ){
            alert("BRAVO ! Vous avez trouvé le nombre")
            nbEssaiesRestants = -1
            isWin = "gagné"
        } else if ( input > nbAuHasard ) {
            texte = "Le nombre est moins grand \nIl vous reste " + nbEssaiesRestants + " essaies"
        } else if ( input < nbAuHasard ) {
            texte = "Le nombre est plus grand \nIl vous reste " + nbEssaiesRestants + " essaies"
        } else {
            alert("erreur")
        }
    }
}