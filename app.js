var prompt = require('prompt');

console.log("Insérer le prix d'un article, une quantité d'article et un état.");
console.log("");
console.log("Selectionner un Etat dans cette liste :");
console.log("UT - NV - TX -  AL - CA");
console.log("");
prompt.start();

prompt.get(['PrixArticle', 'quantite', 'etat'], function (err, result){
    if (err) { 
        return onErr(err); 
    }
    if(result.etat === "UT" || result.etat === "NV" || result.etat === "TX" || result.etat === "AL" || result.etat === "CA"){
        let prixArticle = result.PrixArticle; // pas être négatif
        let quantite = result.quantite; //not negatif
        let etat = result.etat;
        let prixTotal = prixArticle*quantite;
        console.log("Prix de base : " + prixTotal + "$");
        
        switch (etat) {
            case "UT":
                console.log("");
                let taxeUT = 6.85;
                calcul(prixTotal);
                totalTaxeUT = (taxeUT*prixTotal)/100
                prixTotal = prixTotal + totalTaxeUT
                console.log("Prix après taxe : " + prixTotal);
                console.log("Vous allez donc payer : " + prixTotal + "$");
            break;
    
            case "NV":
                console.log("");
                let taxeNV = 8.00;
                calcul(prixTotal);
                totalTaxeNV = (taxeNV*prixTotal)/100
                prixTotal = prixTotal + totalTaxeNV
                console.log("Prix après taxe : " + prixTotal);
                console.log("Vous allez donc payer : " + prixTotal + "$");
            break;
    
            case "TX":
                console.log("");
                let taxeTX = 6.25;
                calcul(prixTotal);
                totalTaxeTX = (taxeTX*prixTotal)/100
                prixTotal = prixTotal + totalTaxeTX
                console.log("Prix après taxe : " + prixTotal);
                console.log("Vous allez donc payer : " + prixTotal + "$");
            break;
    
            case "AL":
                console.log("");
                let taxeAL = 4.00;
                calcul(prixTotal);
                totalTaxeAL = (taxeAL*prixTotal)/100
                prixTotal = prixTotal + totalTaxeAL
                console.log("Prix après taxe : " + prixTotal);
                console.log("Vous allez donc payer : " + prixTotal + "$");
            break;
    
            case "CA":
                console.log("");
                let taxeCA = 8.25;
                calcul(prixTotal);
                totalTaxeCA = (taxeCA*prixTotal)/100
                prixTotal = prixTotal + totalTaxeCA
                console.log("Prix après taxe : " + prixTotal);
                console.log("Vous allez donc payer : " + prixTotal + "$");
            break;
        
            default:
                break;
        }

        function calcul(prixTotal){
            if(prixTotal <= 1000){
                remise = (0*prixArticle)/100;
                console.log("Vous n'avez pas le droit de remise");
                prixTotal = prixTotal-remise
                console.log("Prix après remise : " + prixTotal);
            } else if(prixTotal <= 5000){
                remise = (3*prixArticle)/100;
                console.log("Vous avez une remise de 3%");
                prixTotal = prixTotal-remise
                console.log("Prix après remise : " + prixTotal);
            } else if(prixTotal <= 7000){
                remise = (5*prixArticle)/100;
                console.log("Vous avez une remise de 5%");
                prixTotal = prixTotal-remise
                console.log("Prix après remise : " + prixTotal);
            } else if(prixTotal <= 10000){
                remise = (7*prixArticle)/100;
                console.log("Vous avez une remise de 7%");
                prixTotal = prixTotal-remise
                console.log("Prix après remise : " + prixTotal);
            } else if(prixTotal<= 50000){
                remise = (10*prixArticle)/100;
                console.log("Vous avez une remise de 10%");
                prixTotal = prixTotal-remise
                console.log("Prix après remise : " + prixTotal);
            } else if(prixTotal> 50000){
                remise = (15*prixArticle)/100;
                console.log("Vous avez une remise de 15%");
                prixTotal = prixTotal-remise
                console.log("Prix après remise : " + prixTotal);
            }
        }
    }
    else{
        console.log("ERROR : ");
        console.log("l'état inscrit n'est pas dans la liste");
    }
})

function onErr(err) {
    console.log(err);
    return 1;
}