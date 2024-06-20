
const ajouter = document.getElementById("enregistrement-client");
if(ajouter){
ajouter.addEventListener('submit',function(event){
     event.preventDefault();
     var tva = document.getElementById("tva").value;
     var nom = document.getElementById("nom").value;
     var tel = document.getElementById("telephone").value;
     var adresse = document.getElementById("adresse").value;

     var messageTva = document.getElementById("messageTva");
     var messageNom = document.getElementById("messageNom");
     var messageTel = document.getElementById("messageTel");
     var messageAdresse = document.getElementById("messageAdre");
     var messageAjouter = document.getElementById("messageAjouter");
     
     messageTva.innerText = '';
     messageNom.innerText = '';
     messageTel.innerText = '';
     messageAdresse.innerText = '';
     messageAjouter.innerText = '';
    
    console.log("testing");
   
     var validation=true;

     if(tva.length !== 9) {
             messageTva.innerText='Attention, TVA est fixée à 9 caractères.';
             messageTva.style.color='red';
             validation=false;
     }
     if (nom === '') {
        messageNom.innerText = 'Le nom ne peut pas être vide.';
        messageNom.style.color = 'red';
        validation = false;
    }
    if (tel === '') {
        messageTel.innerText = 'Le numéro de téléphone ne peut pas être vide.';
        messageTel.style.color = 'red';
        validation = false;
    }
    
    if (adresse === '') {
        messageAdresse.innerText = 'L\'adresse ne peut pas être vide.';
        messageAdresse.style.color = 'red';
        validation = false;
    }


     if(validation){
       
        var noms = JSON.parse(window.localStorage.getItem('noms'));
        noms.push(nom);

        window.localStorage.setItem('noms', JSON.stringify(noms));
        messageAjouter.innerText = 'Client ajouté avec succès.';
        messageAjouter.style.color = 'green';

 }

 document.getElementById('vider').addEventListener('click', function(event){
    event.preventDefault(); 
    document.getElementById('tva').value = '';
    document.getElementById('nom').value = '';
    document.getElementById('telephone').value = '';
    document.getElementById('adresse').value = '';
    document.getElementById('messageTva').innerText = '';
    document.getElementById('messageNom').innerText = '';
    document.getElementById('messageTel').innerText = '';
    document.getElementById('messageAdre').innerText = '';
});


 



});
}


document.addEventListener('DOMContentLoaded', function() {
    var expediteur = document.getElementById("expediteur");
    var destinataire = document.getElementById("destinataire");

    var noms = JSON.parse(window.localStorage.getItem('noms'));

    console.log('Clients chargés depuis localStorage:',noms); 

    for (var i = 0; i < noms.length; i++) {
        var client = noms[i];
        var optionExpediteur = document.createElement('option');
        optionExpediteur.value = client;
        optionExpediteur.textContent = client;
        expediteur.appendChild(optionExpediteur);
    
        var optionDestinataire = document.createElement('option');
        optionDestinataire.value = client;
        optionDestinataire.textContent = client;
        destinataire.appendChild(optionDestinataire);
    }
    
});
document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById("orderForm");
    const messageClient = document.getElementById("messageClient");
    const messagePoids = document.getElementById("messagePoids");
    const messageCommandes = document.getElementById("messageCommandes");

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        var destinataire = document.getElementById("destinataire").value;
        var expediteur = document.getElementById("expediteur").value;
        var poids = document.getElementById("poids").value;
       

        messageClient.innerText = '';
        messagePoids.innerText = '';
        messageCommandes.innerText = '';
       

        var validation = true;

        if (destinataire === expediteur) {
            messageClient.innerText = 'Sélectionnez différents clients pour ajouter des commandes.';
            messageClient.style.color = 'red';
            validation = false;
        }

        var poidsNombre = parseFloat(poids);

        if (isNaN(poidsNombre) || poidsNombre < 0) {
            messagePoids.innerText = 'Le poids doit être un nombre positif !';
            messagePoids.style.color = 'red';
            validation = false;
        }

        if (validation) {
            messageCommandes.innerText = 'Commande ajoutée avec succès.';
            messageCommandes.style.color = 'green';
        }
    });
});



