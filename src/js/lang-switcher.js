// import { langArr } from './lang-data.js';
// const selectMob = document.getElementById('select-mob');
// const select = document.getElementById('standard-select');
// const allLang = ['en', 'ua'];

// selectMob.addEventListener('change', changeURLLanguageMob);
// select.addEventListener('change', changeURLLanguage);

// // перенаправлення на url з індикатором мови
// function changeURLLanguageMob() {
//   let lang = selectMob.value;
//   location.href = window.location.pathname + '#' + lang;
//   location.reload();
// }

// function changeURLLanguage() {
//   let lang = select.value;
//   location.href = window.location.pathname + '#' + lang;
//   location.reload();
// }

// function changeLanguage() {
//   let hash = window.location.hash;
//   hash = hash.substring(1);
//   if (!allLang.includes(hash)) {
//     location.href = window.location.pathname + '#en';
//     location.reload();
//   }
//   select.value = hash;
//   selectMob.value = hash;

//   document.querySelector('title').innerHTML = langArr['title'][hash];

//   for (let key in langArr) {
//     // let elem = document.querySelector('.lng-' + key);
//     let elemAll = document.querySelectorAll('.lng-' + key);

//     // if (elem) {
//     //   elem.innerHTML = langArr[key][hash];
//     // }
//     if (elemAll.length > 0) {
//       elemAll.forEach(el => {
//         if (langArr[key][hash]) {
//           return (el.innerHTML = langArr[key][hash]);
//         }
//         return (el.innerHTML = langArr[key]['en']);
//       });
//     }
//   }
// }

// changeLanguage();

import { langArr } from './lang-data.js';
const allLang = ['en', 'ua'];

const selectHeader = document.querySelectorAll('.select__header');
const selectItem = document.querySelectorAll('.select__item');

selectHeader.forEach(item => {
  item.addEventListener('click', selectToggle);
});

selectItem.forEach(item => {
  item.addEventListener('click', selectChoose);
});

function selectToggle() {
  this.parentElement.classList.toggle('is-active');
}

function selectChoose() {
  const text = this.innerText,
    select = this.closest('.select'),
    currentText = select.querySelector('.select__current');
  currentText.innerText = text;

  select.classList.remove('is-active');

  changeURLLanguage(text);
}

//change LanguageURL
function changeURLLanguage(option) {
  const lang = option.toLowerCase();
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

//translate content
function translateContent(hash) {
  document.querySelector('title').innerHTML = langArr['title'][hash];
  for (let key in langArr) {
    let elemAll = document.querySelectorAll('.lng-' + key);

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

//change language current
function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }

  const currentText = document.querySelectorAll('.select__current');
  currentText.forEach(item => {
    item.innerText = hash.toUpperCase();
  });

  translateContent(hash);
}

changeLanguage();
