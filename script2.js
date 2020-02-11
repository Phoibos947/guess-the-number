// Configuration de la partie 
var nbEssaiesRestants = prompt ("choisis un nombre d'essaie")
var nbAChercherMaximal = prompt ("choisis un nombre max")

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