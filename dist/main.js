/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/Card.js":
/*!*************************!*\
  !*** ./scripts/Card.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./scripts/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Card = /*#__PURE__*/function () {
  function Card(cardData, templateElement, handleCardClick) {
    _classCallCheck(this, Card);

    // the text and the image are private fields,
    // they're only needed inside the class
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateElement = templateElement;
    this._handleCardClick = handleCardClick;
  }

  _createClass(Card, [{
    key: "_handlePreviewPic",
    value: function _handlePreviewPic() {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.handlePreviewPic)(this);
    }
  }, {
    key: "_handleLike",
    value: function _handleLike(evt) {
      evt.target.classList.toggle("grid__heart_active");
    }
  }, {
    key: "_handleDelete",
    value: function _handleDelete(evt) {
      evt.target.closest(".grid__card").remove();
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      //Search for Elements
      var likeBtn = this._cardElement.querySelector(".grid__heart");

      var delBtn = this._cardElement.querySelector(".grid__btn_del");

      var crdImage = this._cardElement.querySelector(".card__image"); //Subscribe to Elements


      likeBtn.addEventListener("click", this._handleLike);
      delBtn.addEventListener("click", this._handleDelete);

      this._cardImage.addEventListener("click", this._handlePreviewPic);

      crdImage.addEventListener("click", function () {
        return _this._handleCardClick(_this._link, _this._name);
      });
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      var cardTemplate = document.querySelector(this._templateElement).content.querySelector(".grid__card");
      var cardElement = cardTemplate.cloneNode(true);
      this._cardElement = cardElement;
      this._cardElement.querySelector(".grid__caption").textContent = this._name;
      this._cardImage = this._cardElement.querySelector(".grid__image");
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;

      this._setEventListeners();

      return this._cardElement;
    }
  }]);

  return Card;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./scripts/FormValidator.js":
/*!**********************************!*\
  !*** ./scripts/FormValidator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settingsObject, formElement) {
    _classCallCheck(this, FormValidator);

    // the text and the image are private fields,
    // they're only needed inside the class
    this._settings = settingsObject;
    this._formElement = formElement;
  }

  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(inputElement, errorMessage) {
      var errorElement = this._formElement.querySelector(".".concat(inputElement.id, "-error"));

      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._settings.inputErrorClass);
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      var errorElement = this._formElement.querySelector(".".concat(inputElement.id, "-error"));

      errorElement.classList.remove(this._settings.inputErrorClass);
      errorElement.textContent = "";
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState(inputsList, buttonElement) {
      if (this._hasInvalidInput(inputsList)) {
        buttonElement.classList.add(this._settings.inactiveButtonClass);
        buttonElement.disabled = true;
      } else {
        buttonElement.classList.remove(this._settings.inactiveButtonClass);
        buttonElement.disabled = false;
      }
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput(inputsList) {
      return inputsList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      //Make an array of all the inputs that are in the formElement
      var inputsList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)); //Submit Button associated with that form

      var buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector); //Go through each input individually


      inputsList.forEach(function (inputElement) {
        //If that input is touched, we immediately check validity
        inputElement.addEventListener("input", function () {
          _this._checkInputValidity(inputElement); // Step 3


          _this._toggleButtonState(inputsList, buttonElement); // Step 4

        });
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });

      this._setEventListeners(this._formElement, this._settings);
    }
  }]);

  return FormValidator;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);

/***/ }),

/***/ "./scripts/Popup.js":
/*!**************************!*\
  !*** ./scripts/Popup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classLIst.add("popup_visible");

      document.addEventListener("keyup", this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classLIst.remove("popup_visible");

      document.removeEventListener("keyup", this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.which === ESC_KEYCODE) {
        close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      var closeBtn = this._popup.querySelector(".popup__close");

      closeButn.addEventListener("click", function () {
        _this.close();
      });
    }
  }]);

  return Popup;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }),

/***/ "./scripts/PopupWithImage.js":
/*!***********************************!*\
  !*** ./scripts/PopupWithImage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./scripts/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    _classCallCheck(this, PopupWithImage);

    return _super.call(this, popupSelector);
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(newSrc, newCaption) {
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);

      var image = this._popup.querySelector(".grid__image_active");

      var caption = this._popup.querySelector(".popup__image_capt");

      image.src = newSrc;
      caption.textContent = newCaption;
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithImage);

/***/ }),

/***/ "./scripts/constants.js":
/*!******************************!*\
  !*** ./scripts/constants.js ***!
  \******************************/
/***/ (() => {

var editBtn = document.querySelector(".profile__editbtn");
var addBtn = document.querySelector(".profile__addbtn");
var inputName = document.querySelector("#inputName");
var inputTitle = document.querySelector("#inputTitle");
var currentName = document.querySelector(".profile__name");
var currentTitle = document.querySelector(".profile__title");
var cardTemplate = document.querySelector("#cardTemplate").content;
var gridList = document.querySelector(".grid__list");
var popUpProfile = document.querySelector(".popup");
var popUpCard = document.querySelector(".popup__card");
var popupImageBlock = document.querySelector(".popup__image");
var popupImage = popupImageBlock.querySelector(".grid__image_active");
var popupCaption = popupImageBlock.querySelector(".popup__image_capt");
var profileForm = document.forms.profileForm;
var name = profileForm.elements.profileName;
var title = profileForm.elements.profileTitle;
var addForm = document.forms.addForm;
var placeName = addForm.elements.placeName;
var fileName = addForm.elements.placeFileName;
var addButton = addForm.elements.create_btn;
var submitPlaceBtn = addForm.elements.addFormSubmit;

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.js */ "./scripts/Card.js");
/* harmony import */ var _FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormValidator.js */ "./scripts/FormValidator.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './PopupWithForm,js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _PopupWithImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PopupWithImage */ "./scripts/PopupWithImage.js");
/* harmony import */ var _scripts_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/constants.js */ "./scripts/constants.js");
/* harmony import */ var _scripts_constants_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_constants_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_initialCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/initialCards */ "./scripts/initialCards.js");
/* harmony import */ var _scripts_initialCards__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_initialCards__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined;






__webpack_require__(/*! ../pages/index.css */ "./pages/index.css");



var editProfileForm = document.querySelector(".popup__form-selector");
var addCardForm = document.querySelector(".popup__card_form-selector");
var config = {
  formSelector: ".form",
  inputSelector: ".form_input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__card_submit-disabled",
  inputErrorClass: "popup__form_input_type_error"
}; //Create Form Validation

var editProfileValidator = new _FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(config, editProfileForm);
var addCardValidator = new _FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(config, addCardForm);
editProfileValidator.enableValidation();
addCardValidator.enableValidation(); //CreateCards

function createCard(cardData) {
  var newCard = new _Card_js__WEBPACK_IMPORTED_MODULE_0__.default(cardData, "#cardTemplate", function (link, text) {
    imagePopup.open(link, text);
  });
  var cardElement = newCard.generateCard();
  return cardElement;
} //Create Default Carts


initialCards.forEach(function (cardData) {
  var cardElement = createCard(cardData);
  gridList.prepend(cardElement);
}); //Create Popups with Forms

var addCardPopup = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './PopupWithForm,js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(".popup__card_form-selector", function () {
  var cardData = _this._getInputValues;
  var card = new _Card_js__WEBPACK_IMPORTED_MODULE_0__.default(cardData, "#cardTemplate", function (link, text) {
    imagePopup.open(link, text);
  });
  var cardElement = newCard.generateCard();

  _this._close();

  gridList.prepend(cardElement);
});
var editProfilePopup = new Object(function webpackMissingModule() { var e = new Error("Cannot find module './PopupWithForm,js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(".popup__form-selector", function () {
  var userData = _this._getInputValues;

  _this._close();

  currentName.textContent = userData.profileName;
  currentTitle.textContent = userData.profileTitle;
  resetCardForm();
});
var imagePopup = new _PopupWithImage__WEBPACK_IMPORTED_MODULE_3__.default(".popup__image"); // //Accepts Submit Event for Adding a New Card
// function handleCardFormSubmit(evt) {
//   evt.preventDefault();
//   const cardData = {
//     name: inputPlace.value,
//     link: inputUrl.value,
//     alt: inputPlace.value,
//   };
//   const cardElement = createCard(cardData);
//   closePopUp(popUpCard); //
//   gridList.prepend(cardElement);
//   resetCardForm();
// }
// function resetCardForm() {
//   addForm.reset();
// }
// function handleUserFormSubmit(evt) {
//   // This line stops the browser from submitting the form in the default way.
//   evt.preventDefault();
// Insert new values using the textContent property of the
// querySelector() method
// currentName.textContent = inputName.value;
//   currentTitle.textContent = inputTitle.value;
//   closePopUp(); //
// }
// profileForm.addEventListener("submit", handleUserFormSubmit);
// popUpCard.addEventListener("submit", handleCardFormSubmit);
// addBtn.addEventListener("click", () => {
//   openPopUp(popUpCard);
// });
// editBtn.addEventListener("click", () => {
//   inputName.value = currentName.textContent;
//   inputTitle.value = currentTitle.textContent;
//   openPopUp(popUpProfile);
// });
// const popups = document.querySelectorAll(".popup");
// popups.forEach((popup) => {
//   popup.addEventListener("click", (evt) => {
//     if (evt.target.classList.contains("popup_visible")) {
//       closePopUp(popup);
//     }
//     if (evt.target.classList.contains("popup__close")) {
//       closePopUp(evt.target);
//     }
//   });
// });

/***/ }),

/***/ "./scripts/initialCards.js":
/*!*********************************!*\
  !*** ./scripts/initialCards.js ***!
  \*********************************/
/***/ (() => {

//Initial Array
var initialCards = [{
  name: "Ecola State Park",
  link: "images/EcolaStatePark.jpeg",
  alt: "Ecola State Park"
}, {
  name: "Fontainebleau State Park",
  link: "images/FontainebleauStatePark.jpeg",
  alt: "Fontainebleau State Park"
}, {
  name: "Governor Dodge State Park",
  link: "images/GovernorDodgeStatePark.jpeg",
  alt: "Governor Dodge State Park"
}, {
  name: "Hocking Hills State Park",
  link: "images/HockingHillsStatePark.jpeg",
  alt: "Hocking Hills State Park"
}, {
  name: "Stone Mountain State Park",
  link: "images/StoneMountainStatePark.jpeg",
  alt: "Stone Mountain State Park"
}, {
  name: "Valley of Fire State Park",
  link: "images/ValleyOfFireStatePark.jpeg",
  alt: "Valley of Fire State Park"
}];

/***/ }),

/***/ "./scripts/utils.js":
/*!**************************!*\
  !*** ./scripts/utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openPopUp": () => /* binding */ openPopUp,
/* harmony export */   "closeWithEsc": () => /* binding */ closeWithEsc,
/* harmony export */   "closePopUp": () => /* binding */ closePopUp,
/* harmony export */   "imageModalWindow": () => /* binding */ imageModalWindow,
/* harmony export */   "handlePreviewPic": () => /* binding */ handlePreviewPic
/* harmony export */ });
var openPopUp = function openPopUp(popUpSelect) {
  popUpSelect.classList.add("popup_visible");
  document.addEventListener("keyup", closeWithEsc);
};
var ESC_KEYCODE = 27;
var closeWithEsc = function closeWithEsc(evt) {
  if (evt.which === ESC_KEYCODE) {
    closePopUp();
  }
};
var closePopUp = function closePopUp() {
  var findCurrent = document.querySelector(".popup_visible");
  findCurrent.classList.remove("popup_visible");
  document.removeEventListener("keyup", closeWithEsc, false);
};
var imageModalWindow = document.querySelector(".popup__image");
var imageEl = imageModalWindow.querySelector(".grid__image_active");
var imageCap = imageModalWindow.querySelector(".popup__image_capt");
function handlePreviewPic(data) {
  imageEl.src = data.src;
  imageCap.innerHTML = data.alt;
  imageEl.alt = data.alt;
  openPopUp(imageModalWindow);
}

/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleParseError: Module parse failed: Unexpected character '\u0000' (1:4)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)\n    at handleParseError (/Users/desireebradish/Documents/Dev/web_project_4/node_modules/webpack/lib/NormalModule.js:803:19)\n    at /Users/desireebradish/Documents/Dev/web_project_4/node_modules/webpack/lib/NormalModule.js:904:5\n    at processResult (/Users/desireebradish/Documents/Dev/web_project_4/node_modules/webpack/lib/NormalModule.js:639:11)\n    at /Users/desireebradish/Documents/Dev/web_project_4/node_modules/webpack/lib/NormalModule.js:691:5\n    at /Users/desireebradish/Documents/Dev/web_project_4/node_modules/loader-runner/lib/LoaderRunner.js:406:3\n    at iterateNormalLoaders (/Users/desireebradish/Documents/Dev/web_project_4/node_modules/loader-runner/lib/LoaderRunner.js:232:10)\n    at Array.<anonymous> (/Users/desireebradish/Documents/Dev/web_project_4/node_modules/loader-runner/lib/LoaderRunner.js:223:4)\n    at runCallbacks (/Users/desireebradish/Documents/Dev/web_project_4/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:27:15)\n    at /Users/desireebradish/Documents/Dev/web_project_4/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:200:4\n    at /Users/desireebradish/Documents/Dev/web_project_4/node_modules/graceful-fs/graceful-fs.js:123:16");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./scripts/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9scy8uL3NjcmlwdHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9scy8uL3NjcmlwdHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9scy8uL3NjcmlwdHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbHMvLi9zY3JpcHRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL2xzLy4vc2NyaXB0cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbHMvLi9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL2xzLy4vc2NyaXB0cy9pbml0aWFsQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vbHMvLi9zY3JpcHRzL3V0aWxzLmpzIiwid2VicGFjazovL2xzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9scy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbHMvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkNhcmQiLCJjYXJkRGF0YSIsInRlbXBsYXRlRWxlbWVudCIsImhhbmRsZUNhcmRDbGljayIsIl9uYW1lIiwibmFtZSIsIl9saW5rIiwibGluayIsIl90ZW1wbGF0ZUVsZW1lbnQiLCJfaGFuZGxlQ2FyZENsaWNrIiwiaGFuZGxlUHJldmlld1BpYyIsImV2dCIsInRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNsb3Nlc3QiLCJyZW1vdmUiLCJsaWtlQnRuIiwiX2NhcmRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImRlbEJ0biIsImNyZEltYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVMaWtlIiwiX2hhbmRsZURlbGV0ZSIsIl9jYXJkSW1hZ2UiLCJfaGFuZGxlUHJldmlld1BpYyIsImNhcmRUZW1wbGF0ZSIsImRvY3VtZW50IiwiY29udGVudCIsImNhcmRFbGVtZW50IiwiY2xvbmVOb2RlIiwidGV4dENvbnRlbnQiLCJzcmMiLCJhbHQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3NPYmplY3QiLCJmb3JtRWxlbWVudCIsIl9zZXR0aW5ncyIsIl9mb3JtRWxlbWVudCIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsImVycm9yRWxlbWVudCIsImlkIiwiYWRkIiwiaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRzTGlzdCIsImJ1dHRvbkVsZW1lbnQiLCJfaGFzSW52YWxpZElucHV0IiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImRpc2FibGVkIiwic29tZSIsInZhbGlkaXR5IiwidmFsaWQiLCJfc2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dFNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJmb3JFYWNoIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl90b2dnbGVCdXR0b25TdGF0ZSIsInByZXZlbnREZWZhdWx0IiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwIiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsImNsYXNzTElzdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3aGljaCIsIkVTQ19LRVlDT0RFIiwiY2xvc2UiLCJjbG9zZUJ0biIsImNsb3NlQnV0biIsIlBvcHVwV2l0aEltYWdlIiwibmV3U3JjIiwibmV3Q2FwdGlvbiIsImltYWdlIiwiY2FwdGlvbiIsImVkaXRCdG4iLCJhZGRCdG4iLCJpbnB1dE5hbWUiLCJpbnB1dFRpdGxlIiwiY3VycmVudE5hbWUiLCJjdXJyZW50VGl0bGUiLCJncmlkTGlzdCIsInBvcFVwUHJvZmlsZSIsInBvcFVwQ2FyZCIsInBvcHVwSW1hZ2VCbG9jayIsInBvcHVwSW1hZ2UiLCJwb3B1cENhcHRpb24iLCJwcm9maWxlRm9ybSIsImZvcm1zIiwiZWxlbWVudHMiLCJwcm9maWxlTmFtZSIsInRpdGxlIiwicHJvZmlsZVRpdGxlIiwiYWRkRm9ybSIsInBsYWNlTmFtZSIsImZpbGVOYW1lIiwicGxhY2VGaWxlTmFtZSIsImFkZEJ1dHRvbiIsImNyZWF0ZV9idG4iLCJzdWJtaXRQbGFjZUJ0biIsImFkZEZvcm1TdWJtaXQiLCJyZXF1aXJlIiwiZWRpdFByb2ZpbGVGb3JtIiwiYWRkQ2FyZEZvcm0iLCJjb25maWciLCJmb3JtU2VsZWN0b3IiLCJlZGl0UHJvZmlsZVZhbGlkYXRvciIsImFkZENhcmRWYWxpZGF0b3IiLCJlbmFibGVWYWxpZGF0aW9uIiwiY3JlYXRlQ2FyZCIsIm5ld0NhcmQiLCJ0ZXh0IiwiaW1hZ2VQb3B1cCIsIm9wZW4iLCJnZW5lcmF0ZUNhcmQiLCJpbml0aWFsQ2FyZHMiLCJwcmVwZW5kIiwiYWRkQ2FyZFBvcHVwIiwiUG9wdXBXaXRoRm9ybSIsIl9nZXRJbnB1dFZhbHVlcyIsImNhcmQiLCJfY2xvc2UiLCJlZGl0UHJvZmlsZVBvcHVwIiwidXNlckRhdGEiLCJyZXNldENhcmRGb3JtIiwib3BlblBvcFVwIiwicG9wVXBTZWxlY3QiLCJjbG9zZVdpdGhFc2MiLCJjbG9zZVBvcFVwIiwiZmluZEN1cnJlbnQiLCJpbWFnZU1vZGFsV2luZG93IiwiaW1hZ2VFbCIsImltYWdlQ2FwIiwiZGF0YSIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLEk7QUFDSixnQkFBWUMsUUFBWixFQUFzQkMsZUFBdEIsRUFBdUNDLGVBQXZDLEVBQXdEO0FBQUE7O0FBQ3REO0FBQ0E7QUFDQSxTQUFLQyxLQUFMLEdBQWFILFFBQVEsQ0FBQ0ksSUFBdEI7QUFDQSxTQUFLQyxLQUFMLEdBQWFMLFFBQVEsQ0FBQ00sSUFB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V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlUHJldmlld1BpYyB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5cbmNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihjYXJkRGF0YSwgdGVtcGxhdGVFbGVtZW50LCBoYW5kbGVDYXJkQ2xpY2spIHtcbiAgICAvLyB0aGUgdGV4dCBhbmQgdGhlIGltYWdlIGFyZSBwcml2YXRlIGZpZWxkcyxcbiAgICAvLyB0aGV5J3JlIG9ubHkgbmVlZGVkIGluc2lkZSB0aGUgY2xhc3NcbiAgICB0aGlzLl9uYW1lID0gY2FyZERhdGEubmFtZTtcbiAgICB0aGlzLl9saW5rID0gY2FyZERhdGEubGluaztcbiAgICB0aGlzLl90ZW1wbGF0ZUVsZW1lbnQgPSB0ZW1wbGF0ZUVsZW1lbnQ7XG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICB9XG4gIF9oYW5kbGVQcmV2aWV3UGljKCkge1xuICAgIGhhbmRsZVByZXZpZXdQaWModGhpcyk7XG4gIH1cblxuICBfaGFuZGxlTGlrZShldnQpIHtcbiAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJncmlkX19oZWFydF9hY3RpdmVcIik7XG4gIH1cbiAgX2hhbmRsZURlbGV0ZShldnQpIHtcbiAgICBldnQudGFyZ2V0LmNsb3Nlc3QoXCIuZ3JpZF9fY2FyZFwiKS5yZW1vdmUoKTtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvL1NlYXJjaCBmb3IgRWxlbWVudHNcbiAgICBjb25zdCBsaWtlQnRuID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkX19oZWFydFwiKTtcbiAgICBjb25zdCBkZWxCdG4gPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2J0bl9kZWxcIik7XG4gICAgY29uc3QgY3JkSW1hZ2UgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xuXG4gICAgLy9TdWJzY3JpYmUgdG8gRWxlbWVudHNcbiAgICBsaWtlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVMaWtlKTtcbiAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX2hhbmRsZURlbGV0ZSk7XG4gICAgdGhpcy5fY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVQcmV2aWV3UGljKTtcbiAgICBjcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl9saW5rLCB0aGlzLl9uYW1lKVxuICAgICk7XG4gIH1cblxuICBnZW5lcmF0ZUNhcmQoKSB7XG4gICAgY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX3RlbXBsYXRlRWxlbWVudClcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9fY2FyZFwiKTtcblxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gY2FyZEVsZW1lbnQ7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkX19jYXB0aW9uXCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICB0aGlzLl9jYXJkSW1hZ2UgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2ltYWdlXCIpO1xuXG4gICAgdGhpcy5fY2FyZEltYWdlLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgdGhpcy5fY2FyZEltYWdlLmFsdCA9IHRoaXMuX25hbWU7XG5cbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2NhcmRFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzT2JqZWN0LCBmb3JtRWxlbWVudCkge1xuICAgIC8vIHRoZSB0ZXh0IGFuZCB0aGUgaW1hZ2UgYXJlIHByaXZhdGUgZmllbGRzLFxuICAgIC8vIHRoZXkncmUgb25seSBuZWVkZWQgaW5zaWRlIHRoZSBjbGFzc1xuICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3NPYmplY3Q7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgfVxuXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkge1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgfVxuXG4gIF90b2dnbGVCdXR0b25TdGF0ZShpbnB1dHNMaXN0LCBidXR0b25FbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dChpbnB1dHNMaXN0KSkge1xuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX3NldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9zZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAgIGJ1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBfaGFzSW52YWxpZElucHV0KGlucHV0c0xpc3QpIHtcbiAgICByZXR1cm4gaW5wdXRzTGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xuICAgIH0pO1xuICB9XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50LCBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvL01ha2UgYW4gYXJyYXkgb2YgYWxsIHRoZSBpbnB1dHMgdGhhdCBhcmUgaW4gdGhlIGZvcm1FbGVtZW50XG4gICAgY29uc3QgaW5wdXRzTGlzdCA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NldHRpbmdzLmlucHV0U2VsZWN0b3IpXG4gICAgKTtcblxuICAgIC8vU3VibWl0IEJ1dHRvbiBhc3NvY2lhdGVkIHdpdGggdGhhdCBmb3JtXG4gICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLl9zZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvclxuICAgICk7XG5cbiAgICAvL0dvIHRocm91Z2ggZWFjaCBpbnB1dCBpbmRpdmlkdWFsbHlcbiAgICBpbnB1dHNMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgLy9JZiB0aGF0IGlucHV0IGlzIHRvdWNoZWQsIHdlIGltbWVkaWF0ZWx5IGNoZWNrIHZhbGlkaXR5XG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7IC8vIFN0ZXAgM1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZShpbnB1dHNMaXN0LCBidXR0b25FbGVtZW50KTsgLy8gU3RlcCA0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnModGhpcy5fZm9ybUVsZW1lbnQsIHRoaXMuX3NldHRpbmdzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xuIiwiY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMuX3BvcHVwLmNsYXNzTElzdC5hZGQoXCJwb3B1cF92aXNpYmxlXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMSXN0LnJlbW92ZShcInBvcHVwX3Zpc2libGVcIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KSB7XG4gICAgaWYgKGV2dC53aGljaCA9PT0gRVNDX0tFWUNPREUpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgfVxuICB9XG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGNsb3NlQnRuID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2xvc2VcIik7XG4gICAgY2xvc2VCdXRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgfVxuICBvcGVuKG5ld1NyYywgbmV3Q2FwdGlvbikge1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9faW1hZ2VfYWN0aXZlXCIpO1xuICAgIGNvbnN0IGNhcHRpb24gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZV9jYXB0XCIpO1xuICAgIGltYWdlLnNyYyA9IG5ld1NyYztcbiAgICBjYXB0aW9uLnRleHRDb250ZW50ID0gbmV3Q2FwdGlvbjtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUG9wdXBXaXRoSW1hZ2U7XG4iLCJjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0YnRuXCIpO1xuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGRidG5cIik7XG5jb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0TmFtZVwiKTtcbmNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0VGl0bGVcIik7XG5jb25zdCBjdXJyZW50TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fbmFtZVwiKTtcbmNvbnN0IGN1cnJlbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGl0bGVcIik7XG5jb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmRUZW1wbGF0ZVwiKS5jb250ZW50O1xuY29uc3QgZ3JpZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2xpc3RcIik7XG5jb25zdCBwb3BVcFByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xuY29uc3QgcG9wVXBDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2FyZFwiKTtcbmNvbnN0IHBvcHVwSW1hZ2VCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlXCIpO1xuY29uc3QgcG9wdXBJbWFnZSA9IHBvcHVwSW1hZ2VCbG9jay5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2ltYWdlX2FjdGl2ZVwiKTtcbmNvbnN0IHBvcHVwQ2FwdGlvbiA9IHBvcHVwSW1hZ2VCbG9jay5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZV9jYXB0XCIpO1xuXG5jb25zdCBwcm9maWxlRm9ybSA9IGRvY3VtZW50LmZvcm1zLnByb2ZpbGVGb3JtO1xuY29uc3QgbmFtZSA9IHByb2ZpbGVGb3JtLmVsZW1lbnRzLnByb2ZpbGVOYW1lO1xuY29uc3QgdGl0bGUgPSBwcm9maWxlRm9ybS5lbGVtZW50cy5wcm9maWxlVGl0bGU7XG5jb25zdCBhZGRGb3JtID0gZG9jdW1lbnQuZm9ybXMuYWRkRm9ybTtcbmNvbnN0IHBsYWNlTmFtZSA9IGFkZEZvcm0uZWxlbWVudHMucGxhY2VOYW1lO1xuY29uc3QgZmlsZU5hbWUgPSBhZGRGb3JtLmVsZW1lbnRzLnBsYWNlRmlsZU5hbWU7XG5jb25zdCBhZGRCdXR0b24gPSBhZGRGb3JtLmVsZW1lbnRzLmNyZWF0ZV9idG47XG5jb25zdCBzdWJtaXRQbGFjZUJ0biA9IGFkZEZvcm0uZWxlbWVudHMuYWRkRm9ybVN1Ym1pdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZC5qc1wiO1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4vRm9ybVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4vUG9wdXBXaXRoRm9ybSxqc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuL1BvcHVwV2l0aEltYWdlXCI7XG5cbnJlcXVpcmUoXCIuLi9wYWdlcy9pbmRleC5jc3NcIik7XG5pbXBvcnQgXCIuLi9zY3JpcHRzL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IFwiLi4vc2NyaXB0cy9pbml0aWFsQ2FyZHNcIjtcblxuY29uc3QgZWRpdFByb2ZpbGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybS1zZWxlY3RvclwiKTtcbmNvbnN0IGFkZENhcmRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2FyZF9mb3JtLXNlbGVjdG9yXCIpO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGZvcm1TZWxlY3RvcjogXCIuZm9ybVwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtX19zdWJtaXRcIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJwb3B1cF9fY2FyZF9zdWJtaXQtZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcInBvcHVwX19mb3JtX2lucHV0X3R5cGVfZXJyb3JcIixcbn07XG5cbi8vQ3JlYXRlIEZvcm0gVmFsaWRhdGlvblxuY29uc3QgZWRpdFByb2ZpbGVWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIGVkaXRQcm9maWxlRm9ybSk7XG5jb25zdCBhZGRDYXJkVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBhZGRDYXJkRm9ybSk7XG5cbmVkaXRQcm9maWxlVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbmFkZENhcmRWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG4vL0NyZWF0ZUNhcmRzXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGNhcmREYXRhKSB7XG4gIGNvbnN0IG5ld0NhcmQgPSBuZXcgQ2FyZChjYXJkRGF0YSwgXCIjY2FyZFRlbXBsYXRlXCIsIChsaW5rLCB0ZXh0KSA9PiB7XG4gICAgaW1hZ2VQb3B1cC5vcGVuKGxpbmssIHRleHQpO1xuICB9KTtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXdDYXJkLmdlbmVyYXRlQ2FyZCgpO1xuICByZXR1cm4gY2FyZEVsZW1lbnQ7XG59XG4vL0NyZWF0ZSBEZWZhdWx0IENhcnRzXG5pbml0aWFsQ2FyZHMuZm9yRWFjaCgoY2FyZERhdGEpID0+IHtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjcmVhdGVDYXJkKGNhcmREYXRhKTtcbiAgZ3JpZExpc3QucHJlcGVuZChjYXJkRWxlbWVudCk7XG59KTtcbi8vQ3JlYXRlIFBvcHVwcyB3aXRoIEZvcm1zXG5jb25zdCBhZGRDYXJkUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5wb3B1cF9fY2FyZF9mb3JtLXNlbGVjdG9yXCIsICgpID0+IHtcbiAgY29uc3QgY2FyZERhdGEgPSB0aGlzLl9nZXRJbnB1dFZhbHVlcztcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGNhcmREYXRhLCBcIiNjYXJkVGVtcGxhdGVcIiwgKGxpbmssIHRleHQpID0+IHtcbiAgICBpbWFnZVBvcHVwLm9wZW4obGluaywgdGV4dCk7XG4gIH0pO1xuICBjb25zdCBjYXJkRWxlbWVudCA9IG5ld0NhcmQuZ2VuZXJhdGVDYXJkKCk7XG4gIHRoaXMuX2Nsb3NlKCk7XG4gIGdyaWRMaXN0LnByZXBlbmQoY2FyZEVsZW1lbnQpO1xufSk7XG5cbmNvbnN0IGVkaXRQcm9maWxlUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5wb3B1cF9fZm9ybS1zZWxlY3RvclwiLCAoKSA9PiB7XG4gIGNvbnN0IHVzZXJEYXRhID0gdGhpcy5fZ2V0SW5wdXRWYWx1ZXM7XG4gIHRoaXMuX2Nsb3NlKCk7XG4gIGN1cnJlbnROYW1lLnRleHRDb250ZW50ID0gdXNlckRhdGEucHJvZmlsZU5hbWU7XG4gIGN1cnJlbnRUaXRsZS50ZXh0Q29udGVudCA9IHVzZXJEYXRhLnByb2ZpbGVUaXRsZTtcbiAgcmVzZXRDYXJkRm9ybSgpO1xufSk7XG5cbmNvbnN0IGltYWdlUG9wdXAgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoXCIucG9wdXBfX2ltYWdlXCIpO1xuXG4vLyAvL0FjY2VwdHMgU3VibWl0IEV2ZW50IGZvciBBZGRpbmcgYSBOZXcgQ2FyZFxuLy8gZnVuY3Rpb24gaGFuZGxlQ2FyZEZvcm1TdWJtaXQoZXZ0KSB7XG4vLyAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBjb25zdCBjYXJkRGF0YSA9IHtcbi8vICAgICBuYW1lOiBpbnB1dFBsYWNlLnZhbHVlLFxuLy8gICAgIGxpbms6IGlucHV0VXJsLnZhbHVlLFxuLy8gICAgIGFsdDogaW5wdXRQbGFjZS52YWx1ZSxcbi8vICAgfTtcbi8vICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjcmVhdGVDYXJkKGNhcmREYXRhKTtcbi8vICAgY2xvc2VQb3BVcChwb3BVcENhcmQpOyAvL1xuLy8gICBncmlkTGlzdC5wcmVwZW5kKGNhcmRFbGVtZW50KTtcbi8vICAgcmVzZXRDYXJkRm9ybSgpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiByZXNldENhcmRGb3JtKCkge1xuLy8gICBhZGRGb3JtLnJlc2V0KCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGhhbmRsZVVzZXJGb3JtU3VibWl0KGV2dCkge1xuLy8gICAvLyBUaGlzIGxpbmUgc3RvcHMgdGhlIGJyb3dzZXIgZnJvbSBzdWJtaXR0aW5nIHRoZSBmb3JtIGluIHRoZSBkZWZhdWx0IHdheS5cbi8vICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbi8vIEluc2VydCBuZXcgdmFsdWVzIHVzaW5nIHRoZSB0ZXh0Q29udGVudCBwcm9wZXJ0eSBvZiB0aGVcbi8vIHF1ZXJ5U2VsZWN0b3IoKSBtZXRob2Rcbi8vIGN1cnJlbnROYW1lLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlO1xuLy8gICBjdXJyZW50VGl0bGUudGV4dENvbnRlbnQgPSBpbnB1dFRpdGxlLnZhbHVlO1xuLy8gICBjbG9zZVBvcFVwKCk7IC8vXG4vLyB9XG5cbi8vIHByb2ZpbGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlVXNlckZvcm1TdWJtaXQpO1xuLy8gcG9wVXBDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlQ2FyZEZvcm1TdWJtaXQpO1xuLy8gYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgIG9wZW5Qb3BVcChwb3BVcENhcmQpO1xuLy8gfSk7XG5cbi8vIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgaW5wdXROYW1lLnZhbHVlID0gY3VycmVudE5hbWUudGV4dENvbnRlbnQ7XG4vLyAgIGlucHV0VGl0bGUudmFsdWUgPSBjdXJyZW50VGl0bGUudGV4dENvbnRlbnQ7XG4vLyAgIG9wZW5Qb3BVcChwb3BVcFByb2ZpbGUpO1xuLy8gfSk7XG5cbi8vIGNvbnN0IHBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBcIik7XG5cbi8vIHBvcHVwcy5mb3JFYWNoKChwb3B1cCkgPT4ge1xuLy8gICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuLy8gICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX3Zpc2libGVcIikpIHtcbi8vICAgICAgIGNsb3NlUG9wVXAocG9wdXApO1xuLy8gICAgIH1cbi8vICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cF9fY2xvc2VcIikpIHtcbi8vICAgICAgIGNsb3NlUG9wVXAoZXZ0LnRhcmdldCk7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH0pO1xuIiwiLy9Jbml0aWFsIEFycmF5XG5cbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiRWNvbGEgU3RhdGUgUGFya1wiLFxuICAgIGxpbms6IFwiaW1hZ2VzL0Vjb2xhU3RhdGVQYXJrLmpwZWdcIixcbiAgICBhbHQ6IFwiRWNvbGEgU3RhdGUgUGFya1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJGb250YWluZWJsZWF1IFN0YXRlIFBhcmtcIixcbiAgICBsaW5rOiBcImltYWdlcy9Gb250YWluZWJsZWF1U3RhdGVQYXJrLmpwZWdcIixcbiAgICBhbHQ6IFwiRm9udGFpbmVibGVhdSBTdGF0ZSBQYXJrXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkdvdmVybm9yIERvZGdlIFN0YXRlIFBhcmtcIixcbiAgICBsaW5rOiBcImltYWdlcy9Hb3Zlcm5vckRvZGdlU3RhdGVQYXJrLmpwZWdcIixcbiAgICBhbHQ6IFwiR292ZXJub3IgRG9kZ2UgU3RhdGUgUGFya1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJIb2NraW5nIEhpbGxzIFN0YXRlIFBhcmtcIixcbiAgICBsaW5rOiBcImltYWdlcy9Ib2NraW5nSGlsbHNTdGF0ZVBhcmsuanBlZ1wiLFxuICAgIGFsdDogXCJIb2NraW5nIEhpbGxzIFN0YXRlIFBhcmtcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU3RvbmUgTW91bnRhaW4gU3RhdGUgUGFya1wiLFxuICAgIGxpbms6IFwiaW1hZ2VzL1N0b25lTW91bnRhaW5TdGF0ZVBhcmsuanBlZ1wiLFxuICAgIGFsdDogXCJTdG9uZSBNb3VudGFpbiBTdGF0ZSBQYXJrXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlZhbGxleSBvZiBGaXJlIFN0YXRlIFBhcmtcIixcbiAgICBsaW5rOiBcImltYWdlcy9WYWxsZXlPZkZpcmVTdGF0ZVBhcmsuanBlZ1wiLFxuICAgIGFsdDogXCJWYWxsZXkgb2YgRmlyZSBTdGF0ZSBQYXJrXCIsXG4gIH0sXG5dO1xuIiwiZXhwb3J0IGNvbnN0IG9wZW5Qb3BVcCA9IChwb3BVcFNlbGVjdCkgPT4ge1xuICBwb3BVcFNlbGVjdC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfdmlzaWJsZVwiKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGNsb3NlV2l0aEVzYyk7XG59O1xuXG5jb25zdCBFU0NfS0VZQ09ERSA9IDI3O1xuXG5leHBvcnQgY29uc3QgY2xvc2VXaXRoRXNjID0gKGV2dCkgPT4ge1xuICBpZiAoZXZ0LndoaWNoID09PSBFU0NfS0VZQ09ERSkge1xuICAgIGNsb3NlUG9wVXAoKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNsb3NlUG9wVXAgPSAoKSA9PiB7XG4gIGNvbnN0IGZpbmRDdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF92aXNpYmxlXCIpO1xuICBmaW5kQ3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfdmlzaWJsZVwiKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGNsb3NlV2l0aEVzYywgZmFsc2UpO1xufTtcbmV4cG9ydCBjb25zdCBpbWFnZU1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2VcIik7XG5jb25zdCBpbWFnZUVsID0gaW1hZ2VNb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2ltYWdlX2FjdGl2ZVwiKTtcbmNvbnN0IGltYWdlQ2FwID0gaW1hZ2VNb2RhbFdpbmRvdy5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZV9jYXB0XCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUHJldmlld1BpYyhkYXRhKSB7XG4gIGltYWdlRWwuc3JjID0gZGF0YS5zcmM7XG4gIGltYWdlQ2FwLmlubmVySFRNTCA9IGRhdGEuYWx0O1xuICBpbWFnZUVsLmFsdCA9IGRhdGEuYWx0O1xuXG4gIG9wZW5Qb3BVcChpbWFnZU1vZGFsV2luZG93KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NjcmlwdHMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9