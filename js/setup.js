'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var N_OBJECTS = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var generateRandomNumber = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

var characters = [];

for (var i = 0; i < N_OBJECTS; i++) {
  var firstName = NAMES[generateRandomNumber(0, NAMES.length - 1)];
  var secondName = SURNAMES[generateRandomNumber(0, SURNAMES.length - 1)];
  var coatColor = COAT_COLORS[generateRandomNumber(0, COAT_COLORS.length - 1)];
  var eyesColor = EYES_COLORS[generateRandomNumber(0, EYES_COLORS.length - 1)];
  var object = {
    'name': firstName + ' ' + secondName,
    'coatColor': coatColor,
    'eyesColor': eyesColor
  };
  characters.push(object);

}


var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = userDialog.querySelector('.setup-similar-list');

var renderWizard = function (character) {
  var characterElement = similarWizardTemplate.cloneNode(true);
  characterElement.querySelector('.setup-similar-label').textContent = character.name;
  characterElement.querySelector('.wizard-coat').style.fill = character.coatColor;
  characterElement.querySelector('.wizard-eyes').style.fill = character.eyesColor;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < characters.length; j++) {
  fragment.appendChild(renderWizard(characters[j]));
}

similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
