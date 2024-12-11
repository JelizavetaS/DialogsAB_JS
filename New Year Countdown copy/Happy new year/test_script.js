//object variables. No HTML faila (index.html) nolasām noteiktus elementus (piem., id="countdown")
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');
const celebration = document.getElementById('celebration');
const procceedButton = document.getElementById('proceed');
const newYearCountdownTitle = document.getElementById('countdown-title');
const confettiContainer = document.getElementById('confetti-container');

// + pievienoju funkcionalitāti -> nospiežot uz pogas (proceed to next year) palaižam setNextYear funkciju
procceedButton.addEventListener('click', setNextYear);

// no Date objekta iegūstam tagadējo gadu
let currentYear = new Date().getFullYear(); // .getFullYear - iebūvētā funkcija, kura no objekta Date izņem tikai gada 4 ciparus

// izveidojam jaunu Date objektu, kas satur jaunā gada datus
let newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Piešķiram year html elementam (id='year') iekšējo teksta saturu (innerText) kā jauno gadu (esošais gads +1) 
year.innerText = currentYear + 1; //html object

// Izveidojam funkciju, kas atjaunos atskaites pulksteņa laiku Update countdown time
function updateCountdown() { 
  const currentTime = new Date(); // objekts - currentTime iegūstam tagadējo laiku
  //const diff = newYearTime - currentTime; //izrēķinam starpību starp jauna gada un tagadējo laiku
  var diff = -1;
  console.log('difference: ' + diff);
  //
  function startCelebrationAnimation() {
    // Fade-in the celebration text
    celebration.classList.add('celebration-text');
  
    // Generate confetti
    const confettiCount = 100;
    for (let i = 0; i < confettiCount; i++) {
      const confettiPiece = document.createElement('div');
      confettiPiece.classList.add('confetti');
      confettiPiece.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      confettiPiece.style.animationDelay = `${Math.random() * 3}s`; // Random start time
      confettiPiece.style.backgroundColor = getRandomColor(); // Random color
      confettiContainer.appendChild(confettiPiece);
  
      // Remove confetti after animation
      setTimeout(() => confettiPiece.remove(), 3000);
    }
  
    // Fade-out celebration text after 5 seconds
    setTimeout(() => {
      celebration.classList.remove('celebration-text');
      celebration.style.animation = 'fadeOut 2s ease-out forwards';
    }, 5000);
  }
  
  // Helper function to get a random color
  function getRandomColor() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
//  


  // + pievienoju pārbaudi, kas parāda jaunā gada apsveikumu, ja laiks ir 00:00:00 un >, tad paslēpj atskaiti un parāda apsveikumu
  if (diff <= 0) {
    countdown.style.display = 'none';
    newYearCountdownTitle.style.display = 'none';
    celebration.style.display = 'flex'; //apsveikuma atspoguļošana
    startCelebrationAnimation();
    return; // + apstādinam funkciju, kamēr neuzpiedīsim pogu 
  }

  // ar matematiskām darbībām konvertējam iegūto laika starpību dienās, stundās, minutēs, sekundēs
  const d = Math.floor(diff / 1000 / 60 / 60 / 24); // no Date objekta datiem izrēķina dienas vērtību
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Piešķiram jaunās vērtības html elementiem iekš "DOM" (Document object model = website) 
  days.innerHTML = d;
  //izmantojot nosacījuma operatorus pārveidojam laiku 24h formātā
  hours.innerHTML = h < 10 ? '0' + h : h; // if h<10 then pievieno 0 pirms skaitļa kas ir mazāks par 10 
                                          //(piem, 0+h<10 - 07, 08, 09), else stunda (h; 10, 11, 12 utt.)
  minutes.innerHTML = m < 10 ? '0' + m : m; // if m<10 then '0', else 'm'
  seconds.innerHTML = s < 10 ? '0' + s : s;// if s<10 then '0', else 's'
}

// Add animation to the celebration window
function startCelebrationAnimation() {

  //const confetti = celebration.querySelector('.confetti');

  // Simple fade-in animation for celebration text
  //celebration.style.animation = 'fadeIn 6s ease-out forwards';
  // window.setTimeout(function () {
  //   celebration.style.opacity = 0.1; // hide text
  //   }, 5000);
  //confetti.style.animation = 'confetti 4s ease-out forwards';
}


// pieveinoju funkciju, kas ļauj sākt atskaiti nākamajam jaunajam gadam
function setNextYear() {
  currentYear = currentYear + 1;
  newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

  celebration.style.display = 'none'; //paslēpj apsveikumu, sākoties jaunai atskaitei
  countdown.style.display = 'flex'; // atskaites izvietojums
  newYearCountdownTitle.style.display = 'block'; //atgriež atpakaļ nosaukumu "New Year Countdown"

  year.innerText = currentYear + 1; //nomainam gadu
  updateCountdown(); //palaižam atskaiti no jauna
}

// Izmantojam iebūvēto JavaScript metodi, kas novēloti palaiž tai padoto funkcionalitāti pēc ielādēšanas riņķa  id="loading"
// ->sākumā parāda tikai loader, tad rāda laika atskaiti
setTimeout(() => { 
  loading.remove(); // pēc 1000ms jeb 1s izdēš  id="loading" elementu no DOM
  countdown.style.display = 'flex'; // nomaina display stilu "none" uz "flex", tadējādi attēlojot skaitītāju 
}, 1000);  

// setInterval ir metode, kas palaiž atkārtoti padoto funkciju (updateCountdown) katras 1000ms
//-> katru sekundi atjauno laika atskaiti 
setInterval(updateCountdown, 1000);