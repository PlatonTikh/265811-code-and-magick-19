'use strict';
// removing hidden from setup block
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
// number of wizards
var N_OBJECTS = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomElement = function (array) {
  var randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

var createWizard = function () {
  return {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(SURNAMES),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
  };
};

var generateRandomWizards = function (numberOfObjects) {
  // wizars array
  var characters = [];

  for (var i = 0; i < numberOfObjects; i++) {
    characters.push(createWizard());
  }

  return characters;
};

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = userDialog.querySelector('.setup-similar-list');


var renderWizard = function (template, character) {
  var characterElement = template.cloneNode(true);

  characterElement.querySelector('.setup-similar-label').textContent = character.name;
  characterElement.querySelector('.wizard-coat').style.fill = character.coatColor;
  characterElement.querySelector('.wizard-eyes').style.fill = character.eyesColor;

  return characterElement;
};

var wizards = generateRandomWizards(N_OBJECTS);

var fillWIthElements = function (elements, container) {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < elements.length; j++) {
    fragment.appendChild(renderWizard(similarWizardTemplate, elements[j]));
  }
  container.appendChild(fragment);
};
fillWIthElements(wizards, similarListElement);

// removing hidden from setup-similar block
userDialog.querySelector('.setup-similar').classList.remove('hidden');
