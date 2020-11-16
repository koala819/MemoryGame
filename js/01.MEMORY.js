document.addEventListener("DOMContentLoaded", 
function(){
     /*On cache la div score*/
     let score = document.getElementById("score");
     score.style.display = "none";
     let nbscore = 0;
     
     
     /*Variables temporaires*/
    let clicks = 0;
    let cardOne = 0;
    let cardTwo = 0;

     
     /*Nombre de cartes à afficher
     * x2 => pour les doubles*/
     let numberS = 0;
     
    
    
    
    
    
    
    
    
     /*Tableau pour gérer les cartes
     carte : carte aléatoire tirée par l'ordinateur
     compte & compteCarte : taleau pour compter les doubles de carte */
     let carte = new Array;
     let distributeCards = new Array;
     //Tableau compteCarte (n° de la carte, nb de paires)
     function compteCarte(numeroCarte, paire, ) {
         this.carte = numeroCarte;
         this.max = paire;
     }
/*Mémoire pour connaître la carte cliquée*/
let MCard = 0;
/*Mémoire pour conserver les 2 id des cartes cliquées*/
let Mid = 0;
let mem = new Array;


     
     





    //ECOUTEUR
    let validation = document.getElementById('bouton_envoi');
    validation.addEventListener('click',GetSelectedValue);
    
    function GetSelectedValue(){
         numberS = document.getElementById('number-select').value;
         //console.log("verif nombre de cartes tirées :: " + numberS);
         document.getElementById("number-select").style.display = "none";
         document.getElementById("bouton_envoi").style.display = "none";
         document.getElementById("nbCartes").style.display = "none"; 
         distributeCards =  new Array(numberS);
         for (let i = 1; i <= numberS; i++) {
             distributeCards[i] = new compteCarte(i, 0);
         }
         // console.log('A LA FIN');
         // for (j = 1 ; j <= numberS; j++){
         //     console.log(compte[j].carte + ' ' + compte[j].max); 
         // }  
         nbCartes();
     }
     


     /*CREATION DES CARTES EN DOUBLE
     Postulat : On a choisi 4 cartes
     Première boucle sert à connaître les 8 valeurs de chacune des cartes
        carte[i] va contenir les 8 valeurs de chacune des cartes 
    Deuxième boucle crée les cartes qui vont compter les doubles
        première condition respectée on augmente la mémoire pour ne pas avoir plus de 2 cartes identiques
        deuxième condition : quand la mémoire est remplie (>2) il est nécessaire de créer une nouvelle carte
            et de vérifier que sa mémoire n'est pas pleine.
     break dance :)*/

     function nbCartes() {
         
        //  console.log('AU DEBUT');
        //      for (j = 1 ; j <= numberS; j++){
        //           console.log(distributeCards[j].carte + ' ' + distributeCards[j].max + '\ncarte[i] :: ' + carte[j]);
        //      }
         for (i = 1; i <= numberS ; i++) {
             carte[i] = Math.floor((Math.random() * (numberS/2)) + 1);
            //   console.log('carte' + i + " = " + carte[i])
             dance:
                 for (j = 1; j <= numberS/2; j++) {
                     // console.log('for (j = 1 ; j <= numberS; j++)');
                     // console.log("ENTREE \nligne " + j +" \n" + compte[j].carte + " " + compte[j].max);
                     if (carte[i] == distributeCards[j].carte) {
                         distributeCards[j].max = distributeCards[j].max + 1;
                     }
                     if (carte[i] == distributeCards[j].carte && distributeCards[j].max > 2) {
                         //console.log ('FULL MEMORY');
                         for (k = 1; k <= numberS; k++) {
                             // console.log('for (k=1 ; k<=numberS ; k++)');
                             if (distributeCards[k].max <= 1) {
                                 carte[i] = k;
                                 distributeCards[k].max = distributeCards[k].max + 1;
                                 // console.log ('FULL MEMORY, \ncarte = ' + k + " mémoire = " + compte[k].max);
                                 break dance;
                             }

                         }
                     }

                 }
         }
        //      console.log('A LA FIN');
        //      for (j = 1 ; j <= numberS/2; j++){
        //  console.log(distributeCards[j].carte + ' ' + distributeCards[j].max);}
        
        
         // //CONTROLE DES CARTES TIREES 
         // for (j = 1; j <= numberS ; j++) {
         //     document.getElementById("resultat").innerHTML += "carte n°" + j + " :: " + carte[j] + "<br>";
         // }
         createTable();
     };




     /*AFFICHAGE DU DOS DES CARTES SOUS FORMAT D'UN TABLEAU
     ______     ______      ______      ______
    |     |    |     |     |     |     |     |
    |     |    |     |     |     |     |     |
    |     |    |     |     |     |     |     |
    |_____|    |_____|     |_____|     |_____|
     si le nombre de cartes est inférieur à 4 => tableau 1 ligne 
     sinon creation de lignes avec 6 cartes max*/
     function createTable() {
        let element;
        let jump;
        let empty;
        let cartes = document.getElementById("cartes");
        if (numberS == 4) {
            for (j = 1 ; j <= 4 ; j++) {
                element = document.createElement("div")
                element.id = j;
                element.style.backgroundImage = "url(\"img/dos1.jpg\")";
                element.style.width ="150px";
                element.style.height ="200px";
                element.style.backgroundSize = "cover";
                //element.style.backgroundSize = "50% 50%";
                cartes.append(element);
            }
            drawCard();
        }
        if (numberS == 6) {
            for (j = 1 ; j <= 3 ; j++) {
                element = document.createElement("div")
                element.id = j;
                element.style.backgroundImage = "url(\"img/dos1.jpg\")";
                element.style.width ="150px";
                element.style.height ="200px";
                element.style.backgroundSize = "cover";
                cartes.append(element);
            }
            for (j = 4 ; j <= 6 ; j++) {
                element = document.createElement("div")
                element.id = j;
                element.style.backgroundImage = "url(\"img/dos1.jpg\")";
                element.style.width ="150px";
                element.style.height ="200px";
                element.style.backgroundSize = "cover";
                cartes2.append(element);
            }
            drawCard();
        }
        if (numberS == 8) {
            for (j = 1 ; j <= 4 ; j++) {
                element = document.createElement("div")
                element.id = j;
                element.style.backgroundImage = "url(\"img/dos1.jpg\")";
                element.style.width ="150px";
                element.style.height ="200px";
                element.style.backgroundSize = "cover";
                cartes.append(element);
            }
            for (j = 5 ; j <= 8 ; j++) {
                element = document.createElement("div")
                element.id = j;
                element.style.backgroundImage = "url(\"img/dos1.jpg\")";
                element.style.width ="150px";
                element.style.height ="200px";
                element.style.backgroundSize = "cover";
                cartes2.append(element);
            }
            drawCard();
        }
        if (numberS == 10) {
            for (j = 1 ; j <= 4 ; j++) {
                element = document.createElement("div")
                element.id = j;
                element.style.backgroundImage = "url(\"img/dos1.jpg\")";
                element.style.width ="150px";
                element.style.height ="200px";
                element.style.backgroundSize = "cover";
                cartes.append(element);
            }
            for (j = 5 ; j <= 7 ; j++) {
                element = document.createElement("div")
                element.id = j;
                element.style.backgroundImage = "url(\"img/dos1.jpg\")";
                element.style.width ="150px";
                element.style.height ="200px";
                element.style.backgroundSize = "cover";
                cartes2.append(element);
            }
            for (j = 8 ; j <= 10 ; j++) {
                element = document.createElement("div")
                element.id = j;
                element.style.backgroundImage = "url(\"img/dos1.jpg\")";
                element.style.width ="150px";
                element.style.height ="200px";
                element.style.backgroundSize = "cover";
                cartes3.append(element);
            }
            drawCard();
        }
        if (numberS == 12) {
            for (j = 1 ; j <= 4 ; j++) {
                element = document.createElement("div")
                element.id = j;
                element.style.backgroundImage = "url(\"img/dos1.jpg\")";
                element.style.width ="150px";
                element.style.height ="200px";
                element.style.backgroundSize = "cover";
                cartes.append(element);
            }
            for (j = 5 ; j <= 8 ; j++) {
                element = document.createElement("div")
                element.id = j;
                element.style.backgroundImage = "url(\"img/dos1.jpg\")";
                element.style.width ="150px";
                element.style.height ="200px";
                element.style.backgroundSize = "cover";
                cartes2.append(element);
            }
            for (j = 9 ; j <= 12 ; j++) {
                element = document.createElement("div")
                element.id = j;
                element.style.backgroundImage = "url(\"img/dos1.jpg\")";
                element.style.width ="150px";
                element.style.height ="200px";
                element.style.backgroundSize = "cover";
                cartes3.append(element);
            }
            drawCard();
        }
        if (numberS == 14) {
            for (j = 1 ; j <= 5 ; j++) {
                element = document.createElement("div")
                element.id = j;
                element.style.backgroundImage = "url(\"img/dos1.jpg\")";
                element.style.width ="150px";
                element.style.height ="200px";
                element.style.backgroundSize = "cover";
                cartes.append(element);
            }
            for (j = 6 ; j <= 10 ; j++) {
                element = document.createElement("div")
                element.id = j;
                element.style.backgroundImage = "url(\"img/dos1.jpg\")";
                element.style.width ="150px";
                element.style.height ="200px";
                element.style.backgroundSize = "cover";
                cartes2.append(element);
            }
            for (j = 11 ; j <= 14 ; j++) {
                element = document.createElement("div")
                element.id = j;
                element.style.backgroundImage = "url(\"img/dos1.jpg\")";
                element.style.width ="150px";
                element.style.height ="200px";
                element.style.backgroundSize = "cover";
                cartes3.append(element);
            }
            drawCard();
        }
     }




     


     
     
     /*AFFICHAGE COTE DESSIN DE LA CARTE
        function draw() :: quand l'image s'affiche il n'est plus possible de cliquer dessus.
        function onClick() :: */
     function drawCard() {
        
         //let onglet = document.querySelectorAll('td');
         //console.log(onglet);
         for (j = 1; j <= numberS ; j++ ) {
             document.getElementById(j).addEventListener('click',draw)
             
         }
         
         function draw() {
             let idElt = this.getAttribute('id');
                 //console.log(idElt + " blabla :: " + carte[idElt]);
                 switch (carte[idElt]){
                 case 1 :
                     document.getElementById(idElt).innerHTML = "<img src=img/011.jpg>";
                     document.getElementById(idElt).removeEventListener('click',draw);
                     //console.log('id photo cliqué' + idElt);
                     onClick(idElt);
                     break;
                 case 2 :
                     document.getElementById(idElt).innerHTML = "<img src=img/021.jpg>";
                     document.getElementById(idElt).removeEventListener('click',draw);
                     onClick(idElt);
                     break;
                 case 3 :
                     document.getElementById(idElt).innerHTML = "<img src=img/031.jpg>";
                     document.getElementById(idElt).removeEventListener('click',draw);
                     onClick(idElt);
                     break;
                 case 4 :
                     document.getElementById(idElt).innerHTML = "<img src=img/041.jpg>";
                     document.getElementById(idElt).removeEventListener('click',draw);
                     onClick(idElt);
                     break;
                 case 5 :
                     document.getElementById(idElt).innerHTML = "<img src=img/051.jpg>";
                     document.getElementById(idElt).removeEventListener('click',draw);
                     
                     onClick(idElt);
                     break;
                 case 6 :
                     document.getElementById(idElt).innerHTML = "<img src=img/061.jpg>";
                     document.getElementById(idElt).removeEventListener('click',draw);
                     onClick(idElt);
                     break;
                 case 7 :
                     document.getElementById(idElt).innerHTML = "<img src=img/071.jpg>";
                     document.getElementById(idElt).removeEventListener('click',draw);
                     onClick(idElt);
                     break;
                 }
                 
         }


         /*Fonction pour vérifier le nombre de click dépasse pas 2
         si 2 fois la même carte ajoute 1 point
         si 2 cartes différents => pause 2s et remet toutes les cartes de dos*/
         function onClick (e) {
             
            clicks++;
            //console.log("verif onCLick :: "+e);
            mem[Mid] = e;
            
            //console.log("compteur de clicks :: " + clicks + " mem=" + mem[Mid]);
            Mid++;
            if (clicks >2) {
                //console.log("TO MUCH CLICKS");
                setTimeout(turnOffCard, 2000);
               }
            else if (clicks == 2){
                clicks++;
                //console.log("NO MORE CLICKS mem1=" +mem[0]+" mem2="+mem[1])
                for (j = 1; j <= numberS ; j++) {
                    //console.log(j);
                    document.getElementById(j).removeEventListener('click',draw);
                }
                tempo = carte[mem[0]];
                tempo2 = carte[mem[1]]
                if (tempo == tempo2) {
                    //console.log ("BRAVO UNE PAIRE  mem1=" +carte[mem[0]]+" mem2="+carte[mem[1]]+ "score :: " + nbscore);
                    Mid=0;
                    clicks=0;
                    nbscore++;
                    score.style.display = "block";
                    document.getElementById('score').innerHTML = "SCORE :: " + nbscore;
                    setTimeout(clickForbiden, 2000);
                    if (nbscore == numberS/2) {
                        document.getElementById('score').style.color = '#f00';
                        document.getElementById('score').innerHTML = "BRAVO TU AS GAGNÉ :: la partie va recommencer dans 5s";
                        setTimeout(Final, 5000);
                    }
                }else{
                    //console.log ("TRY AGAIN");
                    Mid=0;
                    setTimeout(turnOffCard, 2000);
                }
            } 
           
        
        
        
        }
        
         //EMPECHER LE CLIC SUR LES CARTES DEJA TROUVEES
         function clickForbiden(){
             tempo = carte[mem[0]];
             document.getElementById(tempo).removeEventListener('click',drawCard);
             tempo = carte[mem[1]];
             document.getElementById(tempo).removeEventListener('click',drawCard);
             Mid = 0 ;
             drawCard();
         }


         //REMET LES CARTES DE DOS
         function turnOffCard()
         {
            clicks=0; 
             //console.log("turnOffCard mem1=" + mem[0] + " mem2=" + mem[1]);
             //document.getElementById(mem[0]).innerHTML = '<img src=img/dos.jpg><br>carte n°' + mem[0] + ' :: ' + carte[mem[0]];
             document.getElementById(mem[0]).innerHTML = '<img src=img/dos1.jpg>';
             if (mem[1]!= 0) {
                //  document.getElementById(mem[1]).innerHTML = '<img src=img/dos.jpg><br>carte n°' + mem[1] + ' :: ' + carte[mem[1]];
                document.getElementById(mem[1]).innerHTML = '<img src=img/dos1.jpg>';
            }
             drawCard();
         }
         function Final() {
             console.log("fin fin fin")
             window.location.reload()
         }

         // function disappear() {
         //     let div_section = document.querySelectorAll('td');
         //     for(let element of div_section){
         //         element.parentNode.style.display = "none";
         //     }
         // }
         
     }
});
