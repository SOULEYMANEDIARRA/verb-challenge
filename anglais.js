const regularVerbs = [
    { 'infinitive': "accept", 'pastSimple': "accepted", 'pastParticiple': "accepted", 'french': "accepter" },
    { 'infinitive': "add", 'pastSimple': "added", 'pastParticiple': "added", 'french': "ajouter" },
    { 'infinitive': "answer", 'pastSimple': "answered", 'pastParticiple': "answered", 'french': "répondre" },
    { 'infinitive': "arrange", 'pastSimple': "arranged", 'pastParticiple': "arranged", 'french': "arranger" },
    { 'infinitive': "ask", 'pastSimple': "asked", 'pastParticiple': "asked", 'french': "demander" },
    { 'infinitive': "bake", 'pastSimple': "baked", 'pastParticiple': "baked", 'french': "cuire au four" },
    { 'infinitive': "borrow", 'pastSimple': "borrowed", 'pastParticiple': "borrowed", 'french': "emprunter" },
    { 'infinitive': "call", 'pastSimple': "called", 'pastParticiple': "called", 'french': "appeler" },
    { 'infinitive': "clean", 'pastSimple': "cleaned", 'pastParticiple': "cleaned", 'french': "nettoyer" },
    { 'infinitive': "climb", 'pastSimple': "climbed", 'pastParticiple': "climbed", 'french': "grimper" },
    { 'infinitive': "close", 'pastSimple': "closed", 'pastParticiple': "closed", 'french': "fermer" },
    { 'infinitive': "collect", 'pastSimple': "collected", 'pastParticiple': "collected", 'french': "collecter" },
    { 'infinitive': "compare", 'pastSimple': "compared", 'pastParticiple': "compared", 'french': "comparer" },
    { 'infinitive': "cook", 'pastSimple': "cooked", 'pastParticiple': "cooked", 'french': "cuisiner" },
    { 'infinitive': "count", 'pastSimple': "counted", 'pastParticiple': "counted", 'french': "compter" },
    { 'infinitive': "dance", 'pastSimple': "danced", 'pastParticiple': "danced", 'french': "danser" },
    { 'infinitive': "decide", 'pastSimple': "decided", 'pastParticiple': "decided", 'french': "décider" },
    { 'infinitive': "deliver", 'pastSimple': "delivered", 'pastParticiple': "delivered", 'french': "livrer" },
    { 'infinitive': "describe", 'pastSimple': "described", 'pastParticiple': "described", 'french': "décrire" },
    { 'infinitive': "discover", 'pastSimple': "discovered", 'pastParticiple': "discovered", 'french': "découvrir" },
    { 'infinitive': "enjoy", 'pastSimple': "enjoyed", 'pastParticiple': "enjoyed", 'french': "apprécier" },
    { 'infinitive': "finish", 'pastSimple': "finished", 'pastParticiple': "finished", 'french': "finir" },
    { 'infinitive': "follow", 'pastSimple': "followed", 'pastParticiple': "followed", 'french': "suivre" },
    { 'infinitive': "help", 'pastSimple': "helped", 'pastParticiple': "helped", 'french': "aider" },
    { 'infinitive': "hope", 'pastSimple': "hoped", 'pastParticiple': "hoped", 'french': "espérer" },
    { 'infinitive': "imagine", 'pastSimple': "imagined", 'pastParticiple': "imagined", 'french': "imaginer" },
    { 'infinitive': "invite", 'pastSimple': "invited", 'pastParticiple': "invited", 'french': "inviter" },
    { 'infinitive': "jump", 'pastSimple': "jumped", 'pastParticiple': "jumped", 'french': "sauter" },
    { 'infinitive': "listen", 'pastSimple': "listened", 'pastParticiple': "listened", 'french': "écouter" },
    { 'infinitive': "live", 'pastSimple': "lived", 'pastParticiple': "lived", 'french': "vivre" },
    { 'infinitive': "look", 'pastSimple': "looked", 'pastParticiple': "looked", 'french': "regarder" },
    { 'infinitive': "love", 'pastSimple': "loved", 'pastParticiple': "loved", 'french': "aimer" },
    { 'infinitive': "miss", 'pastSimple': "missed", 'pastParticiple': "missed", 'french': "manquer" },
    { 'infinitive': "need", 'pastSimple': "needed", 'pastParticiple': "needed", 'french': "avoir besoin" },
    { 'infinitive': "open", 'pastSimple': "opened", 'pastParticiple': "opened", 'french': "ouvrir" },
    { 'infinitive': "play", 'pastSimple': "played", 'pastParticiple': "played", 'french': "jouer" },
    { 'infinitive': "push", 'pastSimple': "pushed", 'pastParticiple': "pushed", 'french': "pousser" },
    { 'infinitive': "pull", 'pastSimple': "pulled", 'pastParticiple': "pulled", 'french': "tirer" },
    { 'infinitive': "read", 'pastSimple': "read", 'pastParticiple': "read", 'french': "lire" },
    { 'infinitive': "relax", 'pastSimple': "relaxed", 'pastParticiple': "relaxed", 'french': "se détendre" },
    { 'infinitive': "remember", 'pastSimple': "remembered", 'pastParticiple': "remembered", 'french': "se souvenir" },
    { 'infinitive': "repair", 'pastSimple': "repaired", 'pastParticiple': "repaired", 'french': "réparer" },
    { 'infinitive': "return", 'pastSimple': "returned", 'pastParticiple': "returned", 'french': "retourner" },
    { 'infinitive': "show", 'pastSimple': "showed", 'pastParticiple': "shown", 'french': "montrer" },
    { 'infinitive': "start", 'pastSimple': "started", 'pastParticiple': "started", 'french': "commencer" },
    { 'infinitive': "study", 'pastSimple': "studied", 'pastParticiple': "studied", 'french': "étudier" },
    { 'infinitive': "talk", 'pastSimple': "talked", 'pastParticiple': "talked", 'french': "parler" },
    { 'infinitive': "taste", 'pastSimple': "tasted", 'pastParticiple': "tasted", 'french': "goûter" },
    { 'infinitive': "travel", 'pastSimple': "traveled", 'pastParticiple': "traveled", 'french': "voyager" },
    { 'infinitive': "use", 'pastSimple': "used", 'pastParticiple': "used", 'french': "utiliser" },
    { 'infinitive': "wait", 'pastSimple': "waited", 'pastParticiple': "waited", 'french': "attendre" },
    { 'infinitive': "walk", 'pastSimple': "walked", 'pastParticiple': "walked", 'french': "marcher" },
    { 'infinitive': "watch", 'pastSimple': "watched", 'pastParticiple': "watched", 'french': "regarder" },
    { 'infinitive': "work", 'pastSimple': "worked", 'pastParticiple': "worked", 'french': "travailler" },
    { 'infinitive': "yell", 'pastSimple': "yelled", 'pastParticiple': "yelled", 'french': "crier" },
    { 'infinitive': "arrive", 'pastSimple': "arrived", 'pastParticiple': "arrived", 'french': "arriver" },
    { 'infinitive': "belong", 'pastSimple': "belonged", 'pastParticiple': "belonged", 'french': "appartenir" },
    { 'infinitive': "borrow", 'pastSimple': "borrowed", 'pastParticiple': "borrowed", 'french': "emprunter" },
    { 'infinitive': "call", 'pastSimple': "called", 'pastParticiple': "called", 'french': "appeler" },
    { 'infinitive': "change", 'pastSimple': "changed", 'pastParticiple': "changed", 'french': "changer" },
    { 'infinitive': "check", 'pastSimple': "checked", 'pastParticiple': "checked", 'french': "vérifier" },
    { 'infinitive': "climb", 'pastSimple': "climbed", 'pastParticiple': "climbed", 'french': "grimper" },
    { 'infinitive': "clean", 'pastSimple': "cleaned", 'pastParticiple': "cleaned", 'french': "nettoyer" },
    { 'infinitive': "close", 'pastSimple': "closed", 'pastParticiple': "closed", 'french': "fermer" },
    { 'infinitive': "collect", 'pastSimple': "collected", 'pastParticiple': "collected", 'french': "collecter" },
    { 'infinitive': "combine", 'pastSimple': "combined", 'pastParticiple': "combined", 'french': "combiner" },
    { 'infinitive': "cook", 'pastSimple': "cooked", 'pastParticiple': "cooked", 'french': "cuisiner" },
    { 'infinitive': "cross", 'pastSimple': "crossed", 'pastParticiple': "crossed", 'french': "traverser" },
    { 'infinitive': "dance", 'pastSimple': "danced", 'pastParticiple': "danced", 'french': "danser" },
    { 'infinitive': "depend", 'pastSimple': "depended", 'pastParticiple': "depended", 'french': "dépendre" },
    { 'infinitive': "describe", 'pastSimple': "described", 'pastParticiple': "described", 'french': "décrire" },
    { 'infinitive': "design", 'pastSimple': "designed", 'pastParticiple': "designed", 'french': "concevoir" },
    { 'infinitive': "discover", 'pastSimple': "discovered", 'pastParticiple': "discovered", 'french': "découvrir" },
    { 'infinitive': "enter", 'pastSimple': "entered", 'pastParticiple': "entered", 'french': "entrer" },
    { 'infinitive': "enjoy", 'pastSimple': "enjoyed", 'pastParticiple': "enjoyed", 'french': "apprécier" },
    { 'infinitive': "finish", 'pastSimple': "finished", 'pastParticiple': "finished", 'french': "finir" },
    { 'infinitive': "fix", 'pastSimple': "fixed", 'pastParticiple': "fixed", 'french': "réparer" },
    { 'infinitive': "follow", 'pastSimple': "followed", 'pastParticiple': "followed", 'french': "suivre" },
    { 'infinitive': "forget", 'pastSimple': "forgot", 'pastParticiple': "forgotten", 'french': "oublier" },
    { 'infinitive': "help", 'pastSimple': "helped", 'pastParticiple': "helped", 'french': "aider" },
    { 'infinitive': "hope", 'pastSimple': "hoped", 'pastParticiple': "hoped", 'french': "espérer" },
    { 'infinitive': "imagine", 'pastSimple': "imagined", 'pastParticiple': "imagined", 'french': "imaginer" },
    { 'infinitive': "invite", 'pastSimple': "invited", 'pastParticiple': "invited", 'french': "inviter" },
    { 'infinitive': "jump", 'pastSimple': "jumped", 'pastParticiple': "jumped", 'french': "sauter" },
    { 'infinitive': "kick", 'pastSimple': "kicked", 'pastParticiple': "kicked", 'french': "donner un coup de pied" },
    { 'infinitive': "kill", 'pastSimple': "killed", 'pastParticiple': "killed", 'french': "tuer" },
    { 'infinitive': "know", 'pastSimple': "knew", 'pastParticiple': "known", 'french': "savoir, connaître" },
    { 'infinitive': "laugh", 'pastSimple': "laughed", 'pastParticiple': "laughed", 'french': "rire" },
    { 'infinitive': "learn", 'pastSimple': "learned", 'pastParticiple': "learned", 'french': "apprendre" },
    { 'infinitive': "live", 'pastSimple': "lived", 'pastParticiple': "lived", 'french': "vivre" },
    { 'infinitive': "look", 'pastSimple': "looked", 'pastParticiple': "looked", 'french': "regarder" },
    { 'infinitive': "love", 'pastSimple': "loved", 'pastParticiple': "loved", 'french': "aimer" },
    { 'infinitive': "make", 'pastSimple': "made", 'pastParticiple': "made", 'french': "faire" },
    { 'infinitive': "mean", 'pastSimple': "meant", 'pastParticiple': "meant", 'french': "signifier" },
    { 'infinitive': "need", 'pastSimple': "needed", 'pastParticiple': "needed", 'french': "avoir besoin" },
    { 'infinitive': "open", 'pastSimple': "opened", 'pastParticiple': "opened", 'french': "ouvrir" },
    { 'infinitive': "order", 'pastSimple': "ordered", 'pastParticiple': "ordered", 'french': "commander" },
    { 'infinitive': "pay", 'pastSimple': "paid", 'pastParticiple': "paid", 'french': "payer" },
    { 'infinitive': "play", 'pastSimple': "played", 'pastParticiple': "played", 'french': "jouer" },
    { 'infinitive': "push", 'pastSimple': "pushed", 'pastParticiple': "pushed", 'french': "pousser" },
    { 'infinitive': "pull", 'pastSimple': "pulled", 'pastParticiple': "pulled", 'french': "tirer" },
    { 'infinitive': "clean", 'pastSimple': "cleaned", 'pastParticiple': "cleaned", 'french': "nettoyer" }
];

const irregularVerbs = [
    { 'infinitive': "Arise", 'pastSimple': "arose", 'pastParticiple': "arisen", 'french': "survenir" },
    { 'infinitive': "Awake", 'pastSimple': "awoke", 'pastParticiple': "awoken", 'french': "se réveiller" },
    { 'infinitive': "Be", 'pastSimple': "was / were", 'pastParticiple': "been", 'french': "être " },
    { 'infinitive': "Bear", 'pastSimple': "bore", 'pastParticiple': "borne, born", 'french': "porter, supporter" },
    { 'infinitive': "Beat", 'pastSimple': "beat", 'pastParticiple': "beaten", 'french': "battre, vaincre" },
    { 'infinitive': "Become", 'pastSimple': "became", 'pastParticiple': "become", 'french': "devenir" },
    { 'infinitive': "Beget", 'pastSimple': "begat, begot", 'pastParticiple': "begotten", 'french': "engendrer, causer" },
    { 'infinitive': "Begin", 'pastSimple': "began", 'pastParticiple': "begun", 'french': "commencer, débuter" },
    { 'infinitive': "Bend", 'pastSimple': "bent", 'pastParticiple': "bent", 'french': "plier, se courber, fléchir" },
    { 'infinitive': "Bereave", 'pastSimple': "bereft, bereaved", 'pastParticiple': "bereft, bereaved", 'french': "déposséder, priver" },
    { 'infinitive': "Bet", 'pastSimple': "bet", 'pastParticiple': "bet", 'french': "parier, miser" },
    { 'infinitive': "Bid", 'pastSimple': "bid, bade", 'pastParticiple': "bid, bidden", 'french': "offrir (faire une offre)" },
    { 'infinitive': "Bite", 'pastSimple': "bit", 'pastParticiple': "bitten", 'french': "mordre, piquer (moustique)" },
    { 'infinitive': "Bleed", 'pastSimple': "bled", 'pastParticiple': "bled", 'french': "saigner" },
    { 'infinitive': "Blow", 'pastSimple': "blew", 'pastParticiple': "blown", 'french': "souffler, gonfler" },
    { 'infinitive': "Break", 'pastSimple': "broke", 'pastParticiple': "broken", 'french': "casser, rompre, briser" },
    { 'infinitive': "Breed", 'pastSimple': "bred", 'pastParticiple': "bred", 'french': "élever (animaux)" },
    { 'infinitive': "Bring", 'pastSimple': "brought", 'pastParticiple': "brought", 'french': "apporter, amener" },
    { 'infinitive': "Broadcast", 'pastSimple': "broadcast", 'pastParticiple': "broadcast", 'french': "diffuser, émettre" },
    { 'infinitive': "Build", 'pastSimple': "built", 'pastParticiple': "built", 'french': "construire" },
    { 'infinitive': "Burn", 'pastSimple': "burnt, burned", 'pastParticiple': "burnt, burned", 'french': "brûler" },
    { 'infinitive': "Burst", 'pastSimple': "burst", 'pastParticiple': "burst", 'french': "éclater" },
    { 'infinitive': "Buy", 'pastSimple': "bought", 'pastParticiple': "bought", 'french': "acheter" },
    { 'infinitive': "Can", 'pastSimple': "could", 'pastParticiple': "could", 'french': "pouvoir (verbe modal)" },
    { 'infinitive': "Cast", 'pastSimple': "cast", 'pastParticiple': "cast", 'french': "jeter, distribuer (des rôles)" },
    { 'infinitive': "Catch", 'pastSimple': "caught", 'pastParticiple': "caught", 'french': "attraper" },
    { 'infinitive': "Chide", 'pastSimple': "chid", 'pastParticiple': "chiden", 'french': "gronder, blâmer, réprimander" },
    { 'infinitive': "Choose", 'pastSimple': "chose", 'pastParticiple': "chosen", 'french': "choisir" },
    { 'infinitive': "Cling", 'pastSimple': "clung", 'pastParticiple': "clung", 'french': "s’accrocher" },
    { 'infinitive': "Clothe", 'pastSimple': "clad, clothed", 'pastParticiple': "clad, clothed", 'french': "habiller, recouvrir" },
    { 'infinitive': "Come", 'pastSimple': "came", 'pastParticiple': "come", 'french': "venir" },
    { 'infinitive': "Cost", 'pastSimple': "cost", 'pastParticiple': "cost", 'french': "coûter" },
    { 'infinitive': "Creep", 'pastSimple': "crept", 'pastParticiple': "crept", 'french': "ramper" },
    { 'infinitive': "Cut", 'pastSimple': "cut", 'pastParticiple': "cut", 'french': "couper" },
    { 'infinitive': "Deal", 'pastSimple': "dealt", 'pastParticiple': "dealt", 'french': "distribuer, gérer, dealer" },
    { 'infinitive': "Dig", 'pastSimple': "dug", 'pastParticiple': "dug", 'french': "creuser, extraire du sol" },
    { 'infinitive': "Dive", 'pastSimple': "dived, dove", 'pastParticiple': "dived", 'french': "plonger" },
    { 'infinitive': "Do", 'pastSimple': "did", 'pastParticiple': "done", 'french': "faire (verbe auxiliaire)" },
    { 'infinitive': "Draw", 'pastSimple': "drew", 'pastParticiple': "drawn", 'french': "dessiner, tracer, tirer de" },
    { 'infinitive': "Dream", 'pastSimple': "dreamt, dreamed", 'pastParticiple': "dreamt, dreamed", 'french': "rêver" },
    { 'infinitive': "Drink", 'pastSimple': "drank", 'pastParticiple': "drunk", 'french': "boire" },
    { 'infinitive': "Drive", 'pastSimple': "drove", 'pastParticiple': "driven", 'french': "conduire, propulser" },
    { 'infinitive': "Dwell", 'pastSimple': "dwelt", 'pastParticiple': "dwelt, dwelled", 'french': "habiter, demeurer, résider" },
    { 'infinitive': "Eat", 'pastSimple': "ate", 'pastParticiple': "eaten", 'french': "manger" },
    { 'infinitive': "Fall", 'pastSimple': "fell", 'pastParticiple': "fallen", 'french': "tomber, chuter, diminuer" },
    { 'infinitive': "Feed", 'pastSimple': "fed", 'pastParticiple': "fed", 'french': "nourrir, alimenter" },
    { 'infinitive': "Feel", 'pastSimple': "felt", 'pastParticiple': "felt", 'french': "(se) sentir, ressentir" },
    { 'infinitive': "Fight", 'pastSimple': "fought", 'pastParticiple': "fought", 'french': "se battre, lutter" },
    { 'infinitive': "Find", 'pastSimple': "found", 'pastParticiple': "found", 'french': "trouver" },
    { 'infinitive': "Flee", 'pastSimple': "fled", 'pastParticiple': "fled", 'french': "fuir" },
    { 'infinitive': "Fling", 'pastSimple': "flung", 'pastParticiple': "flung", 'french': "lancer, jeter" },
    { 'infinitive': "Fly", 'pastSimple': "flew", 'pastParticiple': "flown", 'french': "voler (dans les airs)" },
    { 'infinitive': "Forbid", 'pastSimple': "forbade", 'pastParticiple': "forbidden", 'french': "interdire, proscrire" },
    { 'infinitive': "Foresee", 'pastSimple': "foresaw", 'pastParticiple': "foreseen", 'french': "prévoir, pressentir" },
    { 'infinitive': "Forgive", 'pastSimple': "forgave", 'pastParticiple': "forgiven", 'french': "pardonner" },
    { 'infinitive': "Forsake", 'pastSimple': "forsook", 'pastParticiple': "forsaken", 'french': "abandonner, renoncer à" },
    { 'infinitive': "Freeze", 'pastSimple': "froze", 'pastParticiple': "frozen", 'french': "geler" },
    { 'infinitive': "Get", 'pastSimple': "got", 'pastParticiple': "got, gotten", 'french': "obtenir, recevoir, devenir" },
    { 'infinitive': "Give", 'pastSimple': "gave", 'pastParticiple': "given", 'french': "donner" },
    { 'infinitive': "Go", 'pastSimple': "went", 'pastParticiple': "gone", 'french': "aller" },
    { 'infinitive': "Grow", 'pastSimple': "grew", 'pastParticiple': "grown", 'french': "croître, grandir" },
    { 'infinitive': "Hang", 'pastSimple': "hung", 'pastParticiple': "hung", 'french': "pendre" },
    { 'infinitive': "Have", 'pastSimple': "had", 'pastParticiple': "had", 'french': "avoir" },
    { 'infinitive': "Hear", 'pastSimple': "heard", 'pastParticiple': "heard", 'french': "entendre" },
    { 'infinitive': "Hide", 'pastSimple': "hid", 'pastParticiple': "hidden", 'french': "cacher" },
    { 'infinitive': "Hit", 'pastSimple': "hit", 'pastParticiple': "hit", 'french': "frapper" },
    { 'infinitive': "Hold", 'pastSimple': "held", 'pastParticiple': "held", 'french': "tenir" },
    { 'infinitive': "Hurt", 'pastSimple': "hurt", 'pastParticiple': "hurt", 'french': "blesser" },
    { 'infinitive': "Keep", 'pastSimple': "kept", 'pastParticiple': "kept", 'french': "garder, conserver" },
    { 'infinitive': "Kneel", 'pastSimple': "knelt", 'pastParticiple': "knelt", 'french': "s'agenouiller" },
    { 'infinitive': "Knit", 'pastSimple': "knit, knitted", 'pastParticiple': "knit, knitted", 'french': "tricoter" },
    { 'infinitive': "Know", 'pastSimple': "knew", 'pastParticiple': "known", 'french': "savoir, connaître" },
    { 'infinitive': "Lay", 'pastSimple': "laid", 'pastParticiple': "laid", 'french': "poser, coucher" },
    { 'infinitive': "Lead", 'pastSimple': "led", 'pastParticiple': "led", 'french': "conduire, diriger" },
    { 'infinitive': "Leap", 'pastSimple': "leapt", 'pastParticiple': "leapt", 'french': "sauter" },
    { 'infinitive': "Learn", 'pastSimple': "learnt, learned", 'pastParticiple': "learnt, learned", 'french': "apprendre" },
    { 'infinitive': "Leave", 'pastSimple': "left", 'pastParticiple': "left", 'french': "partir, laisser" },
    { 'infinitive': "Lend", 'pastSimple': "lent", 'pastParticiple': "lent", 'french': "prêter" },
    { 'infinitive': "Let", 'pastSimple': "let", 'pastParticiple': "let", 'french': "laisser" },
    { 'infinitive': "Lie", 'pastSimple': "lay", 'pastParticiple': "lain", 'french': "être allongé, mentir" },
    { 'infinitive': "Light", 'pastSimple': "lit, lighted", 'pastParticiple': "lit, lighted", 'french': "éclairer, allumer" },
    { 'infinitive': "Lose", 'pastSimple': "lost", 'pastParticiple': "lost", 'french': "perdre" },
    { 'infinitive': "Make", 'pastSimple': "made", 'pastParticiple': "made", 'french': "faire, fabriquer" },
    { 'infinitive': "Mean", 'pastSimple': "meant", 'pastParticiple': "meant", 'french': "signifier, vouloir dire" },
    { 'infinitive': "Meet", 'pastSimple': "met", 'pastParticiple': "met", 'french': "rencontrer" },
    { 'infinitive': "Melt", 'pastSimple': "melted", 'pastParticiple': "melted", 'french': "fondre" },
    { 'infinitive': "Mistake", 'pastSimple': "mistook", 'pastParticiple': "mistaken", 'french': "commettre une erreur" },
    { 'infinitive': "Mow", 'pastSimple': "mowed", 'pastParticiple': "mown", 'french': "tondre" },
    { 'infinitive': "Overcome", 'pastSimple': "overcame", 'pastParticiple': "overcome", 'french': "surmonter" },
    { 'infinitive': "Overtake", 'pastSimple': "overtook", 'pastParticiple': "overtaken", 'french': "doubler, dépasser" },
    { 'infinitive': "Pay", 'pastSimple': "paid", 'pastParticiple': "paid", 'french': "payer" },
    { 'infinitive': "Put", 'pastSimple': "put", 'pastParticiple': "put", 'french': "mettre" },
    { 'infinitive': "Quit", 'pastSimple': "quit", 'pastParticiple': "quit", 'french': "abandonner, quitter" },
    { 'infinitive': "Read", 'pastSimple': "read", 'pastParticiple': "read", 'french': "lire" },
    { 'infinitive': "Ride", 'pastSimple': "rode", 'pastParticiple': "ridden", 'french': "monter (vélo, cheval)" },
    { 'infinitive': "Ring", 'pastSimple': "rang", 'pastParticiple': "rung", 'french': "sonner" },
    { 'infinitive': "Rise", 'pastSimple': "rose", 'pastParticiple': "risen", 'french': "s'élever, se lever" },
    { 'infinitive': "Run", 'pastSimple': "ran", 'pastParticiple': "run", 'french': "courir" },
    { 'infinitive': "Saw", 'pastSimple': "sawed", 'pastParticiple': "sawn", 'french': "scier" },
    { 'infinitive': "Say", 'pastSimple': "said", 'pastParticiple': "said", 'french': "dire" },
    { 'infinitive': "See", 'pastSimple': "saw", 'pastParticiple': "seen", 'french': "voir" },
    { 'infinitive': "Sell", 'pastSimple': "sold", 'pastParticiple': "sold", 'french': "vendre" },
    { 'infinitive': "Send", 'pastSimple': "sent", 'pastParticiple': "sent", 'french': "envoyer" },
    { 'infinitive': "Set", 'pastSimple': "set", 'pastParticiple': "set", 'french': "mettre, poser" },
    { 'infinitive': "Shake", 'pastSimple': "shook", 'pastParticiple': "shaken", 'french': "secouer" },
    { 'infinitive': "Shine", 'pastSimple': "shone", 'pastParticiple': "shone", 'french': "briller" },
    { 'infinitive': "Shoot", 'pastSimple': "shot", 'pastParticiple': "shot", 'french': "tirer" },
    { 'infinitive': "Show", 'pastSimple': "showed", 'pastParticiple': "shown", 'french': "montrer" },
    { 'infinitive': "Shrink", 'pastSimple': "shrank", 'pastParticiple': "shrunk", 'french': "rétrécir" },
    { 'infinitive': "Shut", 'pastSimple': "shut", 'pastParticiple': "shut", 'french': "fermer" },
    { 'infinitive': "Sing", 'pastSimple': "sang", 'pastParticiple': "sung", 'french': "chanter" },
    { 'infinitive': "Sink", 'pastSimple': "sank", 'pastParticiple': "sunk", 'french': "couler" },
    { 'infinitive': "Sit", 'pastSimple': "sat", 'pastParticiple': "sat", 'french': "s'asseoir" },
    { 'infinitive': "Sleep", 'pastSimple': "slept", 'pastParticiple': "slept", 'french': "dormir" },
    { 'infinitive': "Slide", 'pastSimple': "slid", 'pastParticiple': "slid", 'french': "glisser" },
    { 'infinitive': "Smell", 'pastSimple': "smelt", 'pastParticiple': "smelt", 'french': "sentir" },
    { 'infinitive': "Speak", 'pastSimple': "spoke", 'pastParticiple': "spoken", 'french': "parler" },
    { 'infinitive': "Speed", 'pastSimple': "sped", 'pastParticiple': "sped", 'french': "accélérer" },
    { 'infinitive': "Spend", 'pastSimple': "spent", 'pastParticiple': "spent", 'french': "dépenser, passer (du temps)" },
    { 'infinitive': "Spin", 'pastSimple': "spun", 'pastParticiple': "spun", 'french': "tourner, filer" },
    { 'infinitive': "Spit", 'pastSimple': "spat", 'pastParticiple': "spat", 'french': "cracher" },
    { 'infinitive': "Split", 'pastSimple': "split", 'pastParticiple': "split", 'french': "diviser" },
    { 'infinitive': "Spread", 'pastSimple': "spread", 'pastParticiple': "spread", 'french': "répandre" },
    { 'infinitive': "Spring", 'pastSimple': "sprang", 'pastParticiple': "sprung", 'french': "jaillir" },
    { 'infinitive': "Stand", 'pastSimple': "stood", 'pastParticiple': "stood", 'french': "se tenir debout" },
    { 'infinitive': "Steal", 'pastSimple': "stole", 'pastParticiple': "stolen", 'french': "voler" },
    { 'infinitive': "Stick", 'pastSimple': "stuck", 'pastParticiple': "stuck", 'french': "coller, enfoncer" },
    { 'infinitive': "Strike", 'pastSimple': "struck", 'pastParticiple': "struck", 'french': "frapper" },
    { 'infinitive': "Swear", 'pastSimple': "swore", 'pastParticiple': "sworn", 'french': "jurer" },
    { 'infinitive': "Swim", 'pastSimple': "swam", 'pastParticiple': "swum", 'french': "nager" },
    { 'infinitive': "Take", 'pastSimple': "took", 'pastParticiple': "taken", 'french': "prendre" },
    { 'infinitive': "Teach", 'pastSimple': "taught", 'pastParticiple': "taught", 'french': "enseigner" },
    { 'infinitive': "Tear", 'pastSimple': "tore", 'pastParticiple': "torn", 'french': "déchirer" },
    { 'infinitive': "Tell", 'pastSimple': "told", 'pastParticiple': "told", 'french': "dire, raconter" },
    { 'infinitive': "Think", 'pastSimple': "thought", 'pastParticiple': "thought", 'french': "penser" },
    { 'infinitive': "Throw", 'pastSimple': "threw", 'pastParticiple': "thrown", 'french': "jeter" },
    { 'infinitive': "Understand", 'pastSimple': "understood", 'pastParticiple': "understood", 'french': "comprendre" },
    { 'infinitive': "Wake", 'pastSimple': "woke", 'pastParticiple': "woken", 'french': "réveiller" },
    { 'infinitive': "Wear", 'pastSimple': "wore", 'pastParticiple': "worn", 'french': "porter (vêtements)" },
    { 'infinitive': "Win", 'pastSimple': "won", 'pastParticiple': "won", 'french': "gagner" },
    { 'infinitive': "Write", 'pastSimple': "wrote", 'pastParticiple': "written", 'french': "écrire" }
]

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
const interface = element('interface');
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
    interface.classList.remove('none');
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
        interface.classList.add('none');
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
    interface.classList.add('none')
    button_start.classList.remove('none')
    menu.classList.add('none')
    resultat.classList.remove('bad_answer')
    interface_div2.classList.remove('couleur')
    resultat.classList.remove('monte')
    button1.classList.remove('none')
})


