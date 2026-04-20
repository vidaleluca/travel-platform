// Bilingue IT/EN con switcher
(function(){
  const DICT = {
    it: {
      'nav.destinations':'Esperienze',
      'nav.categories':'Categorie',
      'nav.rome':'Roma',
      'nav.italy':'Italia',
      'nav.b2b':'Partner',
      'nav.journal':'Journal',
      'nav.signin':'Accedi',
      'nav.cart':'Carrello',

      'hero.eyebrow':'Primavera 2026 · Collezione Roma',
      'hero.title':'ROMA',
      'hero.title2':'come non l\'hai mai vista',
      'hero.sub':'Esperienze curate, guide locali e skip-the-line su Colosseo, Vaticano e oltre. Prenotazione in meno di 3 minuti, voucher immediato, cancellazione gratuita.',
      'hero.stats.exp':'Esperienze',
      'hero.stats.guides':'Guide locali',
      'hero.stats.travellers':'Ospiti/anno',
      'hero.stats.rating':'Rating medio',

      'search.where':'Dove',
      'search.where.val':'Roma, Italia',
      'search.when':'Quando',
      'search.when.val':'8 – 11 maggio',
      'search.people':'Partecipanti',
      'search.people.val':'2 adulti',
      'search.cta':'CERCA',

      'cats.kicker':'Le nostre categorie',
      'cats.title':'Sette modi di <span class="ital">scoprire</span> Roma.',
      'cats.sub':'Dal tour in golf cart al food tour in Trastevere, ogni esperienza è testata dai nostri guide residenti.',

      'cat.golf':'Golf Cart Tour',
      'cat.golf.desc':'Il centro storico in 3 ore, senza salire e scendere.',
      'cat.walk':'Walking Tour',
      'cat.walk.desc':'Colosseo, Ghetto, Vaticano — tre percorsi leggendari.',
      'cat.daytrip':'Day Trip',
      'cat.daytrip.desc':'Tivoli, Pompei, Castelli Romani. Tornate prima di cena.',
      'cat.cook':'Cooking Class',
      'cat.cook.desc':'Pasta, carbonara, tiramisù — con nonne vere.',
      'cat.food':'Food Tour',
      'cat.food.desc':'Otto tappe, quattro quartieri, zero turisti in vista.',
      'cat.transfer':'Transfer Privati',
      'cat.transfer.desc':'Aeroporto, stazione, porto. Mercedes Classe V.',
      'cat.tickets':'Biglietti Monumenti',
      'cat.tickets.desc':'Colosseo, Pantheon, Borghese. Skip-the-line garantito.',

      'pop.kicker':'Più prenotate',
      'pop.title':'Esperienze <span class="ital">iconiche</span>.',
      'pop.more':'Tutte le esperienze →',
      'pop.from':'da',
      'pop.duration':'Durata',
      'pop.group':'Max ospiti',
      'pop.lang':'Lingue',

      'why.kicker':'Perché SocialTravels',
      'why.title':'Il viaggio,<br>senza <span class="ital">intermediari.</span>',
      'why.sub':'Direttamente con chi organizza il tour. Niente commissioni nascoste, niente call-center offshore.',
      'why.1.t':'Guide residenti',
      'why.1.d':'Le nostre 34 guide vivono a Roma. Parlano italiano, inglese, francese, tedesco, spagnolo.',
      'why.2.t':'Skip-the-line garantito',
      'why.2.d':'Ingresso prioritario su Colosseo, Vaticano, Borghese. Se si aspetta più di 10 minuti, si rimborsa.',
      'why.3.t':'Cancellazione gratuita',
      'why.3.d':'Fino a 24 ore prima, rimborso totale. Senza domande.',
      'why.4.t':'Supporto 24/7',
      'why.4.d':'WhatsApp, email, telefono. In italiano ed inglese, con persone vere.',

      'b2b.kicker':'Per hotel, agenzie, concierge',
      'b2b.title':'Un canale B2B<br><span class="ital">pensato per voi.</span>',
      'b2b.sub':'Prezzi netti riservati, prenotazioni immediate a nome dei vostri ospiti, dashboard commissioni in tempo reale.',
      'b2b.cta':'Diventa partner →',

      'cta.title':'PRONTI?',
      'cta.sub':'Dicci quando arrivate, cosa vi piace, quanti siete. Costruiamo il vostro itinerario in 24 ore.',
      'cta.btn':'Pianifica il viaggio',
      'cta.btn2':'Parla con un umano',

      'foot.about':'SocialTravels opera a Roma dal 2011. Un team di 34 guide, 4 coordinatori e due bassotti di nome Pino e Olga — tutti con un debole per il caffè al Sant\'Eustachio.',
      'foot.explore':'Esplora',
      'foot.company':'Azienda',
      'foot.help':'Aiuto',
      'foot.newsletter':'Newsletter',
      'foot.newsletter.d':'Un\'email ogni due settimane: nuove esperienze, storie da Roma, zero spam.',

      'cat.page.title':'Walking Tours',
      'cat.page.sub':'Tre percorsi a piedi per vedere Roma come la vedono i romani. Tre ore, un massimo di 8 persone, zero selfie stick.',

      'exp.reserve':'Prenota',
      'exp.slots':'Scegli l\'orario',
      'exp.participants':'Partecipanti',
      'exp.total':'Totale',
      'exp.pay':'Paga e conferma',
      'exp.meeting':'Punto di ritrovo',
      'exp.policy':'Cancellazione gratuita fino a 24h prima',
      'exp.included':'Incluso',
      'exp.not':'Non incluso',
      'exp.reviews':'Recensioni',

      'acc.title':'Le tue prenotazioni',
      'acc.upcoming':'Prossime',
      'acc.past':'Passate',
      'acc.wish':'Wishlist',
      'acc.voucher':'Voucher',

      'partner.title':'Portale Partner',
      'partner.welcome':'Bentornata, Hotel Raphaël',
      'partner.commission':'Commissioni maturate',
      'partner.bookings':'Prenotazioni',
      'partner.catalog':'Catalogo netto',
      'partner.bookfor':'Prenota per ospite',
      'partner.reports':'Report',

      'admin.title':'Backoffice',
    },
    en: {
      'nav.destinations':'Experiences',
      'nav.categories':'Categories',
      'nav.rome':'Rome',
      'nav.italy':'Italy',
      'nav.b2b':'Partners',
      'nav.journal':'Journal',
      'nav.signin':'Sign in',
      'nav.cart':'Cart',

      'hero.eyebrow':'Spring 2026 · Rome Collection',
      'hero.title':'ROME',
      'hero.title2':'the way locals live it',
      'hero.sub':'Curated experiences, resident guides, skip-the-line at the Colosseum, Vatican & beyond. Book in under 3 minutes, instant voucher, free cancellation.',
      'hero.stats.exp':'Experiences',
      'hero.stats.guides':'Local guides',
      'hero.stats.travellers':'Guests / year',
      'hero.stats.rating':'Avg. rating',

      'search.where':'Where',
      'search.where.val':'Rome, Italy',
      'search.when':'When',
      'search.when.val':'May 8 – May 11',
      'search.people':'Travellers',
      'search.people.val':'2 adults',
      'search.cta':'SEARCH',

      'cats.kicker':'Our categories',
      'cats.title':'Seven ways to <span class="ital">see</span> Rome.',
      'cats.sub':'From golf-cart glides across the Centro Storico to pasta nights with a Trastevere nonna. Every trip is tested by a local.',

      'cat.golf':'Golf Cart Tours',
      'cat.golf.desc':'The historic centre in 3 hours, no hopping on and off.',
      'cat.walk':'Walking Tours',
      'cat.walk.desc':'Colosseum, Jewish Ghetto, Vatican — three legendary routes.',
      'cat.daytrip':'Day Trips',
      'cat.daytrip.desc':'Tivoli, Pompeii, Alban Hills. Back before dinner.',
      'cat.cook':'Cooking Class',
      'cat.cook.desc':'Pasta, carbonara, tiramisù — with actual Roman grandmothers.',
      'cat.food':'Food Tours',
      'cat.food.desc':'Eight stops, four neighborhoods, zero tourist traps.',
      'cat.transfer':'Private Transfers',
      'cat.transfer.desc':'Airport, station, port. Mercedes V-Class fleet.',
      'cat.tickets':'Monument Tickets',
      'cat.tickets.desc':'Colosseum, Pantheon, Borghese. Skip-the-line guaranteed.',

      'pop.kicker':'Most booked',
      'pop.title':'The <span class="ital">iconic</span> Rome list.',
      'pop.more':'All experiences →',
      'pop.from':'from',
      'pop.duration':'Duration',
      'pop.group':'Max guests',
      'pop.lang':'Languages',

      'why.kicker':'Why SocialTravels',
      'why.title':'Travel<br>without <span class="ital">middlemen.</span>',
      'why.sub':'Straight from the people who run the tour. No hidden fees, no offshore call centre.',
      'why.1.t':'Resident guides',
      'why.1.d':'All 34 of our guides live in Rome. They speak Italian, English, French, German, Spanish.',
      'why.2.t':'Guaranteed skip-the-line',
      'why.2.d':'Priority entry at Colosseum, Vatican, Borghese. Wait more than 10 minutes and you\'re refunded.',
      'why.3.t':'Free cancellation',
      'why.3.d':'Up to 24h before — full refund. No questions asked.',
      'why.4.t':'24/7 support',
      'why.4.d':'WhatsApp, email, phone. In English & Italian. Real people, not a bot.',

      'b2b.kicker':'For hotels, agencies, concierge',
      'b2b.title':'A B2B channel<br><span class="ital">built for partners.</span>',
      'b2b.sub':'Reserved net rates, instant bookings in your guest\'s name, real-time commission dashboard.',
      'b2b.cta':'Become a partner →',

      'cta.title':'READY?',
      'cta.sub':'Tell us when you arrive, what you love, how many you are. We\'ll build your itinerary in 24h.',
      'cta.btn':'Plan my trip',
      'cta.btn2':'Talk to a human',

      'foot.about':'SocialTravels has run tours in Rome since 2011. A team of 34 guides, 4 coordinators and two dachshunds named Pino and Olga — all with a weakness for Sant\'Eustachio espresso.',
      'foot.explore':'Explore',
      'foot.company':'Company',
      'foot.help':'Help',
      'foot.newsletter':'Newsletter',
      'foot.newsletter.d':'One dispatch every other week — new trips, Rome stories, zero spam.',

      'cat.page.title':'Walking Tours',
      'cat.page.sub':'Three walking routes to see Rome the way Romans do. Three hours, max 8 people, zero selfie sticks.',

      'exp.reserve':'Book now',
      'exp.slots':'Pick a time',
      'exp.participants':'Travellers',
      'exp.total':'Total',
      'exp.pay':'Pay & confirm',
      'exp.meeting':'Meeting point',
      'exp.policy':'Free cancellation up to 24h before',
      'exp.included':'Included',
      'exp.not':'Not included',
      'exp.reviews':'Reviews',

      'acc.title':'Your bookings',
      'acc.upcoming':'Upcoming',
      'acc.past':'Past',
      'acc.wish':'Wishlist',
      'acc.voucher':'Voucher',

      'partner.title':'Partner Portal',
      'partner.welcome':'Welcome back, Hotel Raphaël',
      'partner.commission':'Commission earned',
      'partner.bookings':'Bookings',
      'partner.catalog':'Net-rate catalogue',
      'partner.bookfor':'Book for a guest',
      'partner.reports':'Reports',

      'admin.title':'Back office',
    }
  };

  function getLang(){
    return localStorage.getItem('st_lang') || 'en';
  }
  function setLang(l){
    localStorage.setItem('st_lang', l);
    applyLang();
  }
  function applyLang(){
    const l = getLang();
    document.documentElement.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k = el.getAttribute('data-i18n');
      if(DICT[l] && DICT[l][k] !== undefined){
        el.innerHTML = DICT[l][k];
      }
    });
    document.querySelectorAll('.lang-switch button').forEach(b=>{
      b.classList.toggle('on', b.dataset.lang === l);
    });
  }
  window.STI18N = {getLang, setLang, applyLang, DICT};
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.lang-switch button').forEach(b=>{
      b.addEventListener('click',()=>setLang(b.dataset.lang));
    });
    applyLang();
  });
})();
