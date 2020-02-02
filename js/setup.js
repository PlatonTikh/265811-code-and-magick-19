'use strict';
// removing hidden from setup block
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
// number of wizards
var N_OBJECTS = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
// function to generate integer between min and max
var generateRandomNumber = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};
// wizars array
var characters = [];
// function to create wizard
var createWizard = function () {
  var firstName = NAMES[generateRandomNumber(0, NAMES.length - 1)];
  var secondName = SURNAMES[generateRandomNumber(0, SURNAMES.length - 1)];
  var coatColor = COAT_COLORS[generateRandomNumber(0, COAT_COLORS.length - 1)];
  var eyesColor = EYES_COLORS[generateRandomNumber(0, EYES_COLORS.length - 1)];
  var wizard = {
    'name': firstName + ' ' + secondName,
    'coatColor': coatColor,
    'eyesColor': eyesColor
  };
  return wizard;
};
// creating N_OBJECTS wizards
for (var i = 0; i < N_OBJECTS; i++) {
  characters.push(createWizard());
}


var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = userDialog.querySelector('.setup-similar-list');

var renderWizard = function (character) {
  var characterElement = similarWizardTemplate.cloneNode(true);
  characterElement.querySelector('.setup-similar-label').textContent = character.name;
  characterElement.querySelector('.wizard-coat').style.fill = character.coatColor;
  characterElement.querySelector('.wizard-eyes').style.fill = character.eyesColor;
  return characterElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < characters.length; j++) {
  fragment.appendChild(renderWizard(characters[j]));
}

similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
