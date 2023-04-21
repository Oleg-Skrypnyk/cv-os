import { langArr } from './lang-data.js';
const selectMob = document.getElementById('select-mob');
const select = document.getElementById('standard-select');
const allLang = ['en', 'ua'];

selectMob.addEventListener('change', changeURLLanguageMob);
select.addEventListener('change', changeURLLanguage);

// перенаправлення на url з індикатором мови
function changeURLLanguageMob() {
  let lang = selectMob.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }
  select.value = hash;
  selectMob.value = hash;

  document.querySelector('title').innerHTML = langArr['title'][hash];

  for (let key in langArr) {
    // let elem = document.querySelector('.lng-' + key);
    let elemAll = document.querySelectorAll('.lng-' + key);

    // if (elem) {
    //   elem.innerHTML = langArr[key][hash];
    // }
    if (elemAll.length > 0) {
      elemAll.forEach(el => {
        if (langArr[key][hash]) {
          return (el.innerHTML = langArr[key][hash]);
        }
        return (el.innerHTML = langArr[key]['en']);
      });
    }
  }
}

changeLanguage();
