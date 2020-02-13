// getElement
var titleElt = document.getElementById("title")
var descElt = document.getElementById("essais")

// Configuration de la partie 
var submitElt = document.getElementsByClassName("submit")[0]
submitElt.addEventListener("click" , changeScene)

function changeScene(event){
    event.preventDefault()
    // Création des variables
    var input1 = document.getElementById("input1")
    var input2 = document.getElementById("input2")
    var input3 = document.getElementById("input3")

    var nbEssaiesRestants = input2.value
    var nbAChercherMaximal = input1.value

    // Création de la nouvelle scène
    input2.style.display= "none"
    input2.value = ""
    input1.value =""
    input1.placeholder= "Entrez un nombre entre 0 et " + nbAChercherMaximal
    input3.value="Tester !"
    descElt.style.display= "block"

    startGame(nbAChercherMaximal,nbEssaiesRestants)
}

function startGame(nbAChercherMaximal, nbEssaiesRestants) {
    
    // Programme
    titleElt.textContent = "Que la partie commence !"
    descElt.textContent= " Il vous reste " + nbEssaiesRestants + " essais"
    var nbAuHasard = Math.floor(Math.random() * Math.floor(parseInt( nbAChercherMaximal , 10 ) + 1))
    console.log("Nombre au hasard : " + nbAuHasard)
    var input3 = document.getElementById("input3")

    start()

    input3.removeEventListener("click", changeScene)
    input3.addEventListener("click", tampon)

    function tampon(e){
        e.preventDefault()
        start()
    }

    function start(){
        // Game
        var input = parseInt(document.getElementById("input1").value, 10)
        console.log(input)
        if ( nbEssaiesRestants <= 0 ){
            submitElt.removeEventListener("click" , tampon)
            reset("Vous avez perdus !\nVous referiez bien une petite partie !?")
        }
        else if ( input == nbAuHasard ){
            submitElt.removeEventListener("click" , tampon)
            reset("Bravo vous avez trouvé le nombre !\nVous referiez bien une petite partie !?")
            nbEssaiesRestants = -1
        } else if ( input > nbAuHasard ) {
            titleElt.textContent = "Le nombre est moins grand"
            descElt.textContent = "Il vous reste " + nbEssaiesRestants + " essaies"
        } else if ( input < nbAuHasard ) {
            titleElt.textContent = "Le nombre est plus grand"
            descElt.textContent = "Il vous reste " + nbEssaiesRestants + " essaies"
        } else {
            console.error("Error")
        }
        nbEssaiesRestants--
        input1.value = ""
    }
}

function reset(texte) {
    submitElt.addEventListener("click" , changeScene)
    var input1 = document.getElementById("input1")
    var input2 = document.getElementById("input2")
    var input3 = document.getElementById("input3")
    input2.style.display= "block"
    input2.value = ""
    input1.value =""
    input1.placeholder= "Nombre à trouver maximum"
    input3.value="LANCER LA PARTIE"
    descElt.style.display= "none"
    titleElt.textContent= texte
}