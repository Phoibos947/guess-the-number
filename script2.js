// Configuration de la partie 
var submitElt = document.getElementsByClassName("submit")[0]
submitElt.addEventListener("click" , startgame)

function startgame(event){
    event.preventDefault()

    // Création des variables
    var tableauDelements = document.getElementsByTagName("input")
    var nombreMaximumElt = tableauDelements[0]
    var nombreEssaisElt = tableauDelements[1]
    

    var nbEssaiesRestants = nombreEssaisElt.value
    var nbAChercherMaximal = nombreMaximumElt.value

    // Programme
   
    var isWin = "perdu"
    var texte = "Bienvenue dans la partie de guess the number !\nVeuillez taper un nombre entre 0 et " + nbAChercherMaximal
    var nbAuHasard = Math.floor(Math.random() * Math.floor(parseInt( nbAChercherMaximal , 10 ) + 1))

    for ( nbEssaiesRestants ; nbEssaiesRestants >= 0 ; nbEssaiesRestants-- ) {
        var input = prompt(texte)
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
    alert("C'est la fin, vous avez " + isWin )
}