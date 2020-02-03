'use strict';
// removing hidden from setup block
var setup = document.querySelector('.setup');

// number of wizards
var N_OBJECTS = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
// function to generate integer between min and max
var generateRandomNumber = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);

  return Math.round(rand);
};
// function to create wizard
var createWizard = function () {
  var firstName = NAMES[generateRandomNumber(0, NAMES.length - 1)];
  var secondName = SURNAMES[generateRandomNumber(0, SURNAMES.length - 1)];
  var coatColor = COAT_COLORS[generateRandomNumber(0, COAT_COLORS.length - 1)];
  var eyesColor = EYES_COLORS[generateRandomNumber(0, EYES_COLORS.length - 1)];

  return {
    'name': firstName + ' ' + secondName,
    'coatColor': coatColor,
    'eyesColor': eyesColor
  };
};
// creating several wizards
var generateRandomWizards = function (numberOfObjects) {
  // wizars array
  var characters = [];
  for (var i = 0; i < numberOfObjects; i++) {
    characters.push(createWizard());
  }

  return characters;
};

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarListElement = setup.querySelector('.setup-similar-list');

// creating objects and adding details from random data
var renderWizard = function (template, character) {
  var characterElement = template.cloneNode(true);
  characterElement.querySelector('.setup-similar-label').textContent = character.name;
  characterElement.querySelector('.wizard-coat').style.fill = character.coatColor;
  characterElement.querySelector('.wizard-eyes').style.fill = character.eyesColor;

  return characterElement;
};

var wizards = generateRandomWizards(N_OBJECTS);
// fill container with new elements
var fillWIthElements = function (elements, container) {
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < elements.length; j++) {
    fragment.appendChild(renderWizard(similarWizardTemplate, elements[j]));
  }
  container.appendChild(fragment);
};
fillWIthElements(wizards, similarListElement);

// removing hidden from setup-similar block
setup.querySelector('.setup-similar').classList.remove('hidden');

// Нажатие на элемент .setup-open удаляет класс hidden
// у блока setup. Нажатие на элемент .setup-close, расположенный
// внутри блока setup возвращает ему класс hidden.
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var saveButton = setup.querySelector('.button setup-submit');
var coatElement = setup.querySelector('.setup-wizard .wizard-coat');
var eyesElement = setup.querySelector('.setup-wizard .wizard-eyes');
var fireballElement = setup.querySelector('.setup-fireball-wrap');
var coatInput = document.getElementsByName('coat-color');
var eyesInput = document.getElementsByName('eyes-color');
var setupName = setup.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupName.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});
setupName.addEventListener('focusout', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});


var changeElementColor = function (element, colors, input) {
  var newColor = colors[generateRandomNumber(0, colors.length - 1)];
  element.style.fill = newColor;
  input[0].value = newColor;
};

coatElement.addEventListener('click', function () {
  changeElementColor(coatElement, COAT_COLORS, coatInput);
});

eyesElement.addEventListener('click', function () {
  changeElementColor(eyesElement, EYES_COLORS, eyesInput);
});

fireballElement.addEventListener('click', function () {
  var newColor = FIREBALL_COLORS[generateRandomNumber(0, FIREBALL_COLORS.length - 1)];
  fireballElement.style = 'background-color: ' + newColor + ';';
});

saveButton.addEventListener('click', function () {
  closePopup();
});
