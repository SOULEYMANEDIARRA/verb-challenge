import { irregularVerbs } from './irregularVerbs.js';
import { regularVerbs } from './regularVerbs.js';

function verbe(data, type) {
    return data.map(item => item[type]);
}

function element(id) {
    return document.getElementById(id);
}

// Variables globales
let score = 0;
let er_i = 0;
let tab_er = [];
let cle, valeur, essai, tab, index, mon_index, totale;

// Sélection des éléments DOM
const anglais = element('anglais');
const mode_an = element('mode_an');
const mode_fr = element('mode_fr');
const mode_anglais = element('mode_anglais');
const mode_français = element('mode_français');
const francais = element('français');
const input = element('input');
const span = element('span');
const form = element('formulaire');
const resultat_form = element('resultat_form');
const interface_div2 = element('interface_div2');
const start_form1 = element('start_form1');
const start_form2 = element('start_form2');
const start_form3 = element('start_form3');
const start_form4 = element('start_form4');
const start_form5 = element('start_form5');
const start_form6 = element('start_form6');
const start_form7 = element('start_form7');
const start_form8 = element('start_form8');
const resultat = element('resultat');
const button2 = element('button2');
const button1 = element('button1');
const strong = element('strong');
const interface1 = element('interface');
const button_start = element('button_start');
const score_message = element('score_message');
const message = element('message');
const nombre_essay = element('nombre_essay');
const menu = element('menu');
const recommencer_forme = element('recommencer_forme');
const menu_forme = element('menu_forme');

// Fonction principale pour démarrer le jeu
function evenement(e, cle, valeur, taille) {
    e.preventDefault();
    initialiserJeu(cle, valeur, taille);
    recommencer_forme.addEventListener('submit', resetJeu);
    form.addEventListener('submit', verifierReponse);
    resultat_form.addEventListener('submit', gererResultat);
}

// Initialisation du jeu
function initialiserJeu(cle, valeur, taille) {
    input.value = '';
    menu.classList.remove('none');
    interface1.classList.remove('none');
    button_start.classList.add('none');
    totale = taille
    score = 0;
    essai = totale;
    index = 0;
    let i = 0
    tab = []
    // Génération aléatoire des indices
    // tab = Array.from({ length: totale }, () => Math.floor(Math.random() * cle.length));
    while (i < taille) {
        let nombre_aleatoire = Math.floor(Math.random() * cle.length)
        if (!tab.includes(nombre_aleatoire)) {
            tab.push(nombre_aleatoire)
            i++
        }
    }
    mon_index = tab[index];

    // Mise à jour des textes d'interface
    span.textContent = `${score}/${totale}`;
    nombre_essay.textContent = `Vous avez ${totale} essais`;
    anglais.textContent = valeur[mon_index];
}

// Réinitialiser le jeu
function resetJeu(e) {
    e.preventDefault();
    resultat.classList.remove('monte', 'bad_answer');
    button1.classList.remove('none');
    initialiserJeu(cle, valeur, totale);
}

// Vérifier la réponse saisie par l'utilisateur
function verifierReponse(e) {
    e.preventDefault();

    const message = input.value.trim();
    let regex = new RegExp(`\\b${message}\\b`, 'i');
    if (message.length <= 0) {
        regex = new RegExp(`\\b${'vide'}\\b`, 'i');
    }

    resultat.classList.add('monte');
    button1.classList.add('none');

    if (regex.test(cle[mon_index]) ) {
        score++;
        francais.textContent = "C'était la bonne réponse !" + cle[mon_index];
    } else {
        tab_er[er_i] = cle[mon_index]
        er_i++
        francais.textContent = 'La bonne réponse était : ';
        strong.textContent = cle[mon_index];
        interface_div2.classList.add('couleur');
        setTimeout(() => interface_div2.classList.remove('couleur'), 300);
        resultat.classList.add('bad_answer');
    }

    span.textContent = `${score}/${totale}`;
    essai--;
    index++;
    mon_index = tab[index];
    nombre_essay.textContent = essai > 0 ? `Il vous reste ${essai} essais` : 'Le jeu est terminé';
}

// Gérer l'affichage du résultat final
function gererResultat(e) {
    e.preventDefault();
    resultat.classList.remove('monte', 'bad_answer');
    button1.classList.remove('none');
    input.value = '';
    francais.textContent = '';
    strong.textContent = '';

    if (essai === 0) {
        score_message.textContent = `Vous avez obtenu ${score}/${totale}`;
        message.textContent = 'Appuyez sur Start pour rejouer !';
        button_start.classList.remove('none');
        button1.classList.remove('none');
        interface1.classList.add('none');
        menu.classList.add('none');
        tab_er.forEach(element => {
            console.log(element)
        });
    } else {
        anglais.textContent = valeur[mon_index];
    }
}

// Gestion des formulaires de démarrage
start_form1.addEventListener('submit', (e) => {
    cle = verbe(irregularVerbs, 'french');
    valeur = verbe(irregularVerbs, 'infinitive');
    evenement(e, cle, valeur, 10);
});

start_form2.addEventListener('submit', (e) => {
    cle = verbe(regularVerbs, 'french');
    valeur = verbe(regularVerbs, 'infinitive');
    evenement(e, cle, valeur, 10);
});
start_form3.addEventListener('submit', (e) => {
    cle = verbe(irregularVerbs, 'infinitive');
    valeur = verbe(irregularVerbs, 'french');
    evenement(e, cle, valeur, 10);
});
start_form4.addEventListener('submit', (e) => {
    cle = verbe(regularVerbs, 'infinitive');
    valeur = verbe(regularVerbs, 'french');
    evenement(e, cle, valeur, 10);
});

start_form5.addEventListener('submit', (e) => {
    cle = verbe(irregularVerbs, 'french');
    valeur = verbe(irregularVerbs, 'infinitive');
    evenement(e, cle, valeur, valeur.length);
});

start_form6.addEventListener('submit', (e) => {
    cle = verbe(regularVerbs, 'french');
    valeur = verbe(regularVerbs, 'infinitive');
    evenement(e, cle, valeur, valeur.length);
});
start_form7.addEventListener('submit', (e) => {
    cle = verbe(irregularVerbs, 'infinitive');
    valeur = verbe(irregularVerbs, 'french');
    evenement(e, cle, valeur, valeur.length);
});
start_form8.addEventListener('submit', (e) => {
    cle = verbe(regularVerbs, 'infinitive');
    valeur = verbe(regularVerbs, 'french');
    evenement(e, cle, valeur, valeur.length);
});

mode_an.addEventListener('click', () => {
    mode_anglais.classList.add('none')
    mode_français.classList.remove('none')
    mode_an.classList.add('none')
    mode_fr.classList.remove('none')
})
mode_fr.addEventListener('click', () => {
    mode_français.classList.add('none')
    mode_anglais.classList.remove('none')
    mode_fr.classList.add('none')
    mode_an.classList.remove('none')
})

menu_forme.addEventListener('submit', (e) => {
    e.preventDefault()
    score_message.textContent = 'Vous avez eu ' + score + '/' + totale
    message.textContent = 'Appuyer sur start pour jouer !'
    interface1.classList.add('none')
    button_start.classList.remove('none')
    menu.classList.add('none')
    resultat.classList.remove('bad_answer')
    interface_div2.classList.remove('couleur')
    resultat.classList.remove('monte')
    button1.classList.remove('none')
})


