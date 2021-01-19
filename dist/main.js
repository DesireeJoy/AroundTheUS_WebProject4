/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/Card.js */ "./src/scripts/Card.js");
/* harmony import */ var _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/FormValidator.js */ "./src/scripts/FormValidator.js");
/* harmony import */ var _scripts_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/PopupWithForm.js */ "./src/scripts/PopupWithForm.js");
/* harmony import */ var _scripts_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/PopupWithImage.js */ "./src/scripts/PopupWithImage.js");
/* harmony import */ var _scripts_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/constants.js */ "./src/scripts/constants.js");
/* harmony import */ var _scripts_constants_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_constants_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_initialCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/initialCards */ "./src/scripts/initialCards.js");
/* harmony import */ var _scripts_initialCards__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_initialCards__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_jacques_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/jacques.png */ "./src/images/jacques.png");
/* harmony import */ var _images_Logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/Logo.svg */ "./src/images/Logo.svg");


var _this = undefined;






__webpack_require__(/*! ./index.css */ "./src/pages/index.css");





var jaqImage = document.getElementById("jacques-img");
jaqImage.src = _images_jacques_png__WEBPACK_IMPORTED_MODULE_6__;
var logoImage = document.getElementById("logo-img");
logoImage.src = _images_Logo_svg__WEBPACK_IMPORTED_MODULE_7__;
var editProfileForm = document.querySelector(".popup__form-selector");
var addCardForm = document.querySelector(".popup__card_form-selector");
var config = {
  formSelector: ".form",
  inputSelector: ".form_input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__card_submit-disabled",
  inputErrorClass: "popup__form_input_type_error"
}; //Create Form Validation

var editProfileValidator = new _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(config, editProfileForm);
var addCardValidator = new _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(config, addCardForm);
editProfileValidator.enableValidation();
addCardValidator.enableValidation(); //CreateCards

function createCard(cardData) {
  var newCard = new _scripts_Card_js__WEBPACK_IMPORTED_MODULE_0__.default(cardData, "#cardTemplate", function (link, text) {
    imagePopup.open(link, text);
  });
  var cardElement = newCard.generateCard();
  return cardElement;
} //Create Default Carts


initialCards.forEach(function (cardData) {
  var cardElement = createCard(cardData);
  gridList.prepend(cardElement);
}); //Create Popups with Forms

var addCardPopup = new _scripts_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__.default(".popup__card_form-selector", function () {
  var cardData = _this._getInputValues;
  var card = new _scripts_Card_js__WEBPACK_IMPORTED_MODULE_0__.default(cardData, "#cardTemplate", function (link, text) {
    imagePopup.open(link, text);
  });
  var cardElement = newCard.generateCard();

  _this._close();

  gridList.prepend(cardElement);
});
var editProfilePopup = new _scripts_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__.default(".popup__form-selector", function () {
  var userData = _this._getInputValues;

  _this._close();

  currentName.textContent = userData.profileName;
  currentTitle.textContent = userData.profileTitle;
  resetCardForm();
});
var imagePopup = new _scripts_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__.default(".popup__image"); // //Accepts Submit Event for Adding a New Card
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

/***/ "./src/scripts/Card.js":
/*!*****************************!*\
  !*** ./src/scripts/Card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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
      handlePreviewPic(this);
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

/***/ "./src/scripts/FormValidator.js":
/*!**************************************!*\
  !*** ./src/scripts/FormValidator.js ***!
  \**************************************/
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

/***/ "./src/scripts/Popup.js":
/*!******************************!*\
  !*** ./src/scripts/Popup.js ***!
  \******************************/
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

/***/ "./src/scripts/PopupWithForm.js":
/*!**************************************!*\
  !*** ./src/scripts/PopupWithForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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

var _require = __webpack_require__(/*! ./Popup */ "./src/scripts/Popup.js"),
    Popup = _require.default;

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(popupSelector, submitHandler) {
    var _this;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._submitHandler = _this._submitHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var inputs = this._form.querySelectorAll(".popup__input");

      var values = {};
      inputs.forEach(function (input) {
        values[input.name] = input.value;
      });
      return values;
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);

      this._form.reset();
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventLIsteners", this).call(this);

      this._form = this._popup.querySelector(".form");

      this._form.addEventListener("submit", function () {
        _this2._submitHandler();
      });
    }
  }]);

  return PopupWithForm;
}(Popup);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithForm);

/***/ }),

/***/ "./src/scripts/PopupWithImage.js":
/*!***************************************!*\
  !*** ./src/scripts/PopupWithImage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/scripts/Popup.js");
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

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
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

/***/ "./src/scripts/initialCards.js":
/*!*************************************!*\
  !*** ./src/scripts/initialCards.js ***!
  \*************************************/
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

/***/ "./src/images/Logo.svg":
/*!*****************************!*\
  !*** ./src/images/Logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d7c909d833538e8ca214.svg";

/***/ }),

/***/ "./src/images/jacques.png":
/*!********************************!*\
  !*** ./src/images/jacques.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "06ec6b25022e2d164d35.png";

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/pages/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9scy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9scy8uL3NyYy9zY3JpcHRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvc2NyaXB0cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL2xzLy4vc3JjL3NjcmlwdHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvc2NyaXB0cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL2xzLy4vc3JjL3NjcmlwdHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvc2NyaXB0cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvc2NyaXB0cy9pbml0aWFsQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL2xzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9scy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbHMvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJqYXFJbWFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzcmMiLCJqYXFTcmMiLCJsb2dvSW1hZ2UiLCJsb2dvU3JjIiwiZWRpdFByb2ZpbGVGb3JtIiwicXVlcnlTZWxlY3RvciIsImFkZENhcmRGb3JtIiwiY29uZmlnIiwiZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVkaXRQcm9maWxlVmFsaWRhdG9yIiwiRm9ybVZhbGlkYXRvciIsImFkZENhcmRWYWxpZGF0b3IiLCJlbmFibGVWYWxpZGF0aW9uIiwiY3JlYXRlQ2FyZCIsImNhcmREYXRhIiwibmV3Q2FyZCIsIkNhcmQiLCJsaW5rIiwidGV4dCIsImltYWdlUG9wdXAiLCJvcGVuIiwiY2FyZEVsZW1lbnQiLCJnZW5lcmF0ZUNhcmQiLCJpbml0aWFsQ2FyZHMiLCJmb3JFYWNoIiwiZ3JpZExpc3QiLCJwcmVwZW5kIiwiYWRkQ2FyZFBvcHVwIiwiUG9wdXBXaXRoRm9ybSIsIl9nZXRJbnB1dFZhbHVlcyIsImNhcmQiLCJfY2xvc2UiLCJlZGl0UHJvZmlsZVBvcHVwIiwidXNlckRhdGEiLCJjdXJyZW50TmFtZSIsInRleHRDb250ZW50IiwicHJvZmlsZU5hbWUiLCJjdXJyZW50VGl0bGUiLCJwcm9maWxlVGl0bGUiLCJyZXNldENhcmRGb3JtIiwiUG9wdXBXaXRoSW1hZ2UiLCJ0ZW1wbGF0ZUVsZW1lbnQiLCJoYW5kbGVDYXJkQ2xpY2siLCJfbmFtZSIsIm5hbWUiLCJfbGluayIsIl90ZW1wbGF0ZUVsZW1lbnQiLCJfaGFuZGxlQ2FyZENsaWNrIiwiaGFuZGxlUHJldmlld1BpYyIsImV2dCIsInRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNsb3Nlc3QiLCJyZW1vdmUiLCJsaWtlQnRuIiwiX2NhcmRFbGVtZW50IiwiZGVsQnRuIiwiY3JkSW1hZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZUxpa2UiLCJfaGFuZGxlRGVsZXRlIiwiX2NhcmRJbWFnZSIsIl9oYW5kbGVQcmV2aWV3UGljIiwiY2FyZFRlbXBsYXRlIiwiY29udGVudCIsImNsb25lTm9kZSIsImFsdCIsIl9zZXRFdmVudExpc3RlbmVycyIsInNldHRpbmdzT2JqZWN0IiwiZm9ybUVsZW1lbnQiLCJfc2V0dGluZ3MiLCJfZm9ybUVsZW1lbnQiLCJpbnB1dEVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckVsZW1lbnQiLCJpZCIsImFkZCIsImlucHV0c0xpc3QiLCJidXR0b25FbGVtZW50IiwiX2hhc0ludmFsaWRJbnB1dCIsImRpc2FibGVkIiwic29tZSIsInZhbGlkaXR5IiwidmFsaWQiLCJfc2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwicHJldmVudERlZmF1bHQiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXAiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwiY2xhc3NMSXN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIndoaWNoIiwiRVNDX0tFWUNPREUiLCJjbG9zZSIsImNsb3NlQnRuIiwiY2xvc2VCdXRuIiwiZGVmYXVsdCIsInN1Ym1pdEhhbmRsZXIiLCJfc3VibWl0SGFuZGxlciIsImlucHV0cyIsIl9mb3JtIiwidmFsdWVzIiwiaW5wdXQiLCJ2YWx1ZSIsInJlc2V0IiwibmV3U3JjIiwibmV3Q2FwdGlvbiIsImltYWdlIiwiY2FwdGlvbiIsImVkaXRCdG4iLCJhZGRCdG4iLCJpbnB1dE5hbWUiLCJpbnB1dFRpdGxlIiwicG9wVXBQcm9maWxlIiwicG9wVXBDYXJkIiwicG9wdXBJbWFnZUJsb2NrIiwicG9wdXBJbWFnZSIsInBvcHVwQ2FwdGlvbiIsInByb2ZpbGVGb3JtIiwiZm9ybXMiLCJlbGVtZW50cyIsInRpdGxlIiwiYWRkRm9ybSIsInBsYWNlTmFtZSIsImZpbGVOYW1lIiwicGxhY2VGaWxlTmFtZSIsImFkZEJ1dHRvbiIsImNyZWF0ZV9idG4iLCJzdWJtaXRQbGFjZUJ0biIsImFkZEZvcm1TdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFhOzs7O0FBQ2I7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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BLDJCOzs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL3NjcmlwdHMvQ2FyZC5qc1wiO1xuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL3NjcmlwdHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL3NjcmlwdHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9zY3JpcHRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XG5cbnJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKTtcbmltcG9ydCBcIi4uL3NjcmlwdHMvY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgXCIuLi9zY3JpcHRzL2luaXRpYWxDYXJkc1wiO1xuaW1wb3J0IGphcVNyYyBmcm9tIFwiLi4vaW1hZ2VzL2phY3F1ZXMucG5nXCI7XG5pbXBvcnQgbG9nb1NyYyBmcm9tIFwiLi4vaW1hZ2VzL0xvZ28uc3ZnXCI7XG5jb25zdCBqYXFJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiamFjcXVlcy1pbWdcIik7XG5qYXFJbWFnZS5zcmMgPSBqYXFTcmM7XG5jb25zdCBsb2dvSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ28taW1nXCIpO1xubG9nb0ltYWdlLnNyYyA9IGxvZ29TcmM7XG5cbmNvbnN0IGVkaXRQcm9maWxlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm0tc2VsZWN0b3JcIik7XG5jb25zdCBhZGRDYXJkRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2NhcmRfZm9ybS1zZWxlY3RvclwiKTtcblxuY29uc3QgY29uZmlnID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLmZvcm1cIixcbiAgaW5wdXRTZWxlY3RvcjogXCIuZm9ybV9pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIuZm9ybV9fc3VibWl0XCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwicG9wdXBfX2NhcmRfc3VibWl0LWRpc2FibGVkXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJwb3B1cF9fZm9ybV9pbnB1dF90eXBlX2Vycm9yXCIsXG59O1xuXG4vL0NyZWF0ZSBGb3JtIFZhbGlkYXRpb25cbmNvbnN0IGVkaXRQcm9maWxlVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBlZGl0UHJvZmlsZUZvcm0pO1xuY29uc3QgYWRkQ2FyZFZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZywgYWRkQ2FyZEZvcm0pO1xuXG5lZGl0UHJvZmlsZVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5hZGRDYXJkVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcblxuLy9DcmVhdGVDYXJkc1xuZnVuY3Rpb24gY3JlYXRlQ2FyZChjYXJkRGF0YSkge1xuICBjb25zdCBuZXdDYXJkID0gbmV3IENhcmQoY2FyZERhdGEsIFwiI2NhcmRUZW1wbGF0ZVwiLCAobGluaywgdGV4dCkgPT4ge1xuICAgIGltYWdlUG9wdXAub3BlbihsaW5rLCB0ZXh0KTtcbiAgfSk7XG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gbmV3Q2FyZC5nZW5lcmF0ZUNhcmQoKTtcbiAgcmV0dXJuIGNhcmRFbGVtZW50O1xufVxuLy9DcmVhdGUgRGVmYXVsdCBDYXJ0c1xuaW5pdGlhbENhcmRzLmZvckVhY2goKGNhcmREYXRhKSA9PiB7XG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gY3JlYXRlQ2FyZChjYXJkRGF0YSk7XG4gIGdyaWRMaXN0LnByZXBlbmQoY2FyZEVsZW1lbnQpO1xufSk7XG4vL0NyZWF0ZSBQb3B1cHMgd2l0aCBGb3Jtc1xuY29uc3QgYWRkQ2FyZFBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXBfX2NhcmRfZm9ybS1zZWxlY3RvclwiLCAoKSA9PiB7XG4gIGNvbnN0IGNhcmREYXRhID0gdGhpcy5fZ2V0SW5wdXRWYWx1ZXM7XG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChjYXJkRGF0YSwgXCIjY2FyZFRlbXBsYXRlXCIsIChsaW5rLCB0ZXh0KSA9PiB7XG4gICAgaW1hZ2VQb3B1cC5vcGVuKGxpbmssIHRleHQpO1xuICB9KTtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXdDYXJkLmdlbmVyYXRlQ2FyZCgpO1xuICB0aGlzLl9jbG9zZSgpO1xuICBncmlkTGlzdC5wcmVwZW5kKGNhcmRFbGVtZW50KTtcbn0pO1xuXG5jb25zdCBlZGl0UHJvZmlsZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXBfX2Zvcm0tc2VsZWN0b3JcIiwgKCkgPT4ge1xuICBjb25zdCB1c2VyRGF0YSA9IHRoaXMuX2dldElucHV0VmFsdWVzO1xuICB0aGlzLl9jbG9zZSgpO1xuICBjdXJyZW50TmFtZS50ZXh0Q29udGVudCA9IHVzZXJEYXRhLnByb2ZpbGVOYW1lO1xuICBjdXJyZW50VGl0bGUudGV4dENvbnRlbnQgPSB1c2VyRGF0YS5wcm9maWxlVGl0bGU7XG4gIHJlc2V0Q2FyZEZvcm0oKTtcbn0pO1xuXG5jb25zdCBpbWFnZVBvcHVwID0gbmV3IFBvcHVwV2l0aEltYWdlKFwiLnBvcHVwX19pbWFnZVwiKTtcblxuLy8gLy9BY2NlcHRzIFN1Ym1pdCBFdmVudCBmb3IgQWRkaW5nIGEgTmV3IENhcmRcbi8vIGZ1bmN0aW9uIGhhbmRsZUNhcmRGb3JtU3VibWl0KGV2dCkge1xuLy8gICBldnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgY29uc3QgY2FyZERhdGEgPSB7XG4vLyAgICAgbmFtZTogaW5wdXRQbGFjZS52YWx1ZSxcbi8vICAgICBsaW5rOiBpbnB1dFVybC52YWx1ZSxcbi8vICAgICBhbHQ6IGlucHV0UGxhY2UudmFsdWUsXG4vLyAgIH07XG4vLyAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY3JlYXRlQ2FyZChjYXJkRGF0YSk7XG4vLyAgIGNsb3NlUG9wVXAocG9wVXBDYXJkKTsgLy9cbi8vICAgZ3JpZExpc3QucHJlcGVuZChjYXJkRWxlbWVudCk7XG4vLyAgIHJlc2V0Q2FyZEZvcm0oKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gcmVzZXRDYXJkRm9ybSgpIHtcbi8vICAgYWRkRm9ybS5yZXNldCgpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBoYW5kbGVVc2VyRm9ybVN1Ym1pdChldnQpIHtcbi8vICAgLy8gVGhpcyBsaW5lIHN0b3BzIHRoZSBicm93c2VyIGZyb20gc3VibWl0dGluZyB0aGUgZm9ybSBpbiB0aGUgZGVmYXVsdCB3YXkuXG4vLyAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4vLyBJbnNlcnQgbmV3IHZhbHVlcyB1c2luZyB0aGUgdGV4dENvbnRlbnQgcHJvcGVydHkgb2YgdGhlXG4vLyBxdWVyeVNlbGVjdG9yKCkgbWV0aG9kXG4vLyBjdXJyZW50TmFtZS50ZXh0Q29udGVudCA9IGlucHV0TmFtZS52YWx1ZTtcbi8vICAgY3VycmVudFRpdGxlLnRleHRDb250ZW50ID0gaW5wdXRUaXRsZS52YWx1ZTtcbi8vICAgY2xvc2VQb3BVcCgpOyAvL1xuLy8gfVxuXG4vLyBwcm9maWxlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVVzZXJGb3JtU3VibWl0KTtcbi8vIHBvcFVwQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUNhcmRGb3JtU3VibWl0KTtcbi8vIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBvcGVuUG9wVXAocG9wVXBDYXJkKTtcbi8vIH0pO1xuXG4vLyBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgIGlucHV0TmFtZS52YWx1ZSA9IGN1cnJlbnROYW1lLnRleHRDb250ZW50O1xuLy8gICBpbnB1dFRpdGxlLnZhbHVlID0gY3VycmVudFRpdGxlLnRleHRDb250ZW50O1xuLy8gICBvcGVuUG9wVXAocG9wVXBQcm9maWxlKTtcbi8vIH0pO1xuXG4vLyBjb25zdCBwb3B1cHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwXCIpO1xuXG4vLyBwb3B1cHMuZm9yRWFjaCgocG9wdXApID0+IHtcbi8vICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbi8vICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cF92aXNpYmxlXCIpKSB7XG4vLyAgICAgICBjbG9zZVBvcFVwKHBvcHVwKTtcbi8vICAgICB9XG4vLyAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfX2Nsb3NlXCIpKSB7XG4vLyAgICAgICBjbG9zZVBvcFVwKGV2dC50YXJnZXQpO1xuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9KTtcbiIsImNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihjYXJkRGF0YSwgdGVtcGxhdGVFbGVtZW50LCBoYW5kbGVDYXJkQ2xpY2spIHtcbiAgICAvLyB0aGUgdGV4dCBhbmQgdGhlIGltYWdlIGFyZSBwcml2YXRlIGZpZWxkcyxcbiAgICAvLyB0aGV5J3JlIG9ubHkgbmVlZGVkIGluc2lkZSB0aGUgY2xhc3NcbiAgICB0aGlzLl9uYW1lID0gY2FyZERhdGEubmFtZTtcbiAgICB0aGlzLl9saW5rID0gY2FyZERhdGEubGluaztcbiAgICB0aGlzLl90ZW1wbGF0ZUVsZW1lbnQgPSB0ZW1wbGF0ZUVsZW1lbnQ7XG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICB9XG4gIF9oYW5kbGVQcmV2aWV3UGljKCkge1xuICAgIGhhbmRsZVByZXZpZXdQaWModGhpcyk7XG4gIH1cblxuICBfaGFuZGxlTGlrZShldnQpIHtcbiAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJncmlkX19oZWFydF9hY3RpdmVcIik7XG4gIH1cbiAgX2hhbmRsZURlbGV0ZShldnQpIHtcbiAgICBldnQudGFyZ2V0LmNsb3Nlc3QoXCIuZ3JpZF9fY2FyZFwiKS5yZW1vdmUoKTtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvL1NlYXJjaCBmb3IgRWxlbWVudHNcbiAgICBjb25zdCBsaWtlQnRuID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkX19oZWFydFwiKTtcbiAgICBjb25zdCBkZWxCdG4gPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2J0bl9kZWxcIik7XG4gICAgY29uc3QgY3JkSW1hZ2UgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xuXG4gICAgLy9TdWJzY3JpYmUgdG8gRWxlbWVudHNcbiAgICBsaWtlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVMaWtlKTtcbiAgICBkZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuX2hhbmRsZURlbGV0ZSk7XG4gICAgdGhpcy5fY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVQcmV2aWV3UGljKTtcbiAgICBjcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl9saW5rLCB0aGlzLl9uYW1lKVxuICAgICk7XG4gIH1cblxuICBnZW5lcmF0ZUNhcmQoKSB7XG4gICAgY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX3RlbXBsYXRlRWxlbWVudClcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9fY2FyZFwiKTtcblxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gY2FyZEVsZW1lbnQ7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkX19jYXB0aW9uXCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICB0aGlzLl9jYXJkSW1hZ2UgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2ltYWdlXCIpO1xuXG4gICAgdGhpcy5fY2FyZEltYWdlLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgdGhpcy5fY2FyZEltYWdlLmFsdCA9IHRoaXMuX25hbWU7XG5cbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2NhcmRFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzT2JqZWN0LCBmb3JtRWxlbWVudCkge1xuICAgIC8vIHRoZSB0ZXh0IGFuZCB0aGUgaW1hZ2UgYXJlIHByaXZhdGUgZmllbGRzLFxuICAgIC8vIHRoZXkncmUgb25seSBuZWVkZWQgaW5zaWRlIHRoZSBjbGFzc1xuICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3NPYmplY3Q7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgfVxuXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkge1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgfVxuXG4gIF90b2dnbGVCdXR0b25TdGF0ZShpbnB1dHNMaXN0LCBidXR0b25FbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dChpbnB1dHNMaXN0KSkge1xuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX3NldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9zZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAgIGJ1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBfaGFzSW52YWxpZElucHV0KGlucHV0c0xpc3QpIHtcbiAgICByZXR1cm4gaW5wdXRzTGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xuICAgIH0pO1xuICB9XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50LCBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvL01ha2UgYW4gYXJyYXkgb2YgYWxsIHRoZSBpbnB1dHMgdGhhdCBhcmUgaW4gdGhlIGZvcm1FbGVtZW50XG4gICAgY29uc3QgaW5wdXRzTGlzdCA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NldHRpbmdzLmlucHV0U2VsZWN0b3IpXG4gICAgKTtcblxuICAgIC8vU3VibWl0IEJ1dHRvbiBhc3NvY2lhdGVkIHdpdGggdGhhdCBmb3JtXG4gICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLl9zZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvclxuICAgICk7XG5cbiAgICAvL0dvIHRocm91Z2ggZWFjaCBpbnB1dCBpbmRpdmlkdWFsbHlcbiAgICBpbnB1dHNMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgLy9JZiB0aGF0IGlucHV0IGlzIHRvdWNoZWQsIHdlIGltbWVkaWF0ZWx5IGNoZWNrIHZhbGlkaXR5XG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7IC8vIFN0ZXAgM1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZShpbnB1dHNMaXN0LCBidXR0b25FbGVtZW50KTsgLy8gU3RlcCA0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnModGhpcy5fZm9ybUVsZW1lbnQsIHRoaXMuX3NldHRpbmdzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xuIiwiY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMuX3BvcHVwLmNsYXNzTElzdC5hZGQoXCJwb3B1cF92aXNpYmxlXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMSXN0LnJlbW92ZShcInBvcHVwX3Zpc2libGVcIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KSB7XG4gICAgaWYgKGV2dC53aGljaCA9PT0gRVNDX0tFWUNPREUpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgfVxuICB9XG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGNsb3NlQnRuID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2xvc2VcIik7XG4gICAgY2xvc2VCdXRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XG4iLCJjb25zdCB7IGRlZmF1bHQ6IFBvcHVwIH0gPSByZXF1aXJlKFwiLi9Qb3B1cFwiKTtcblxuY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvciwgc3VibWl0SGFuZGxlcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX3N1Ym1pdEhhbmRsZXIgPSB0aGlzLl9zdWJtaXRIYW5kbGVyLmJpbmQodGhpcyk7XG4gIH1cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faW5wdXRcIik7XG4gICAgY29uc3QgdmFsdWVzID0ge307XG5cbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBzdXBlci5jbG9zZSgpO1xuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLnNldEV2ZW50TElzdGVuZXJzKCk7XG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5fc3VibWl0SGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQb3B1cFdpdGhGb3JtO1xuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gIH1cbiAgb3BlbihuZXdTcmMsIG5ld0NhcHRpb24pIHtcbiAgICBzdXBlci5vcGVuKCk7XG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2ltYWdlX2FjdGl2ZVwiKTtcbiAgICBjb25zdCBjYXB0aW9uID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2VfY2FwdFwiKTtcbiAgICBpbWFnZS5zcmMgPSBuZXdTcmM7XG4gICAgY2FwdGlvbi50ZXh0Q29udGVudCA9IG5ld0NhcHRpb247XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBvcHVwV2l0aEltYWdlO1xuIiwiY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdGJ0blwiKTtcbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkYnRuXCIpO1xuY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dE5hbWVcIik7XG5jb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dFRpdGxlXCIpO1xuY29uc3QgY3VycmVudE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIik7XG5jb25zdCBjdXJyZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3RpdGxlXCIpO1xuY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkVGVtcGxhdGVcIikuY29udGVudDtcbmNvbnN0IGdyaWRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkX19saXN0XCIpO1xuY29uc3QgcG9wVXBQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcbmNvbnN0IHBvcFVwQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2NhcmRcIik7XG5jb25zdCBwb3B1cEltYWdlQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcbmNvbnN0IHBvcHVwSW1hZ2UgPSBwb3B1cEltYWdlQmxvY2sucXVlcnlTZWxlY3RvcihcIi5ncmlkX19pbWFnZV9hY3RpdmVcIik7XG5jb25zdCBwb3B1cENhcHRpb24gPSBwb3B1cEltYWdlQmxvY2sucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2VfY2FwdFwiKTtcblxuY29uc3QgcHJvZmlsZUZvcm0gPSBkb2N1bWVudC5mb3Jtcy5wcm9maWxlRm9ybTtcbmNvbnN0IG5hbWUgPSBwcm9maWxlRm9ybS5lbGVtZW50cy5wcm9maWxlTmFtZTtcbmNvbnN0IHRpdGxlID0gcHJvZmlsZUZvcm0uZWxlbWVudHMucHJvZmlsZVRpdGxlO1xuY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LmZvcm1zLmFkZEZvcm07XG5jb25zdCBwbGFjZU5hbWUgPSBhZGRGb3JtLmVsZW1lbnRzLnBsYWNlTmFtZTtcbmNvbnN0IGZpbGVOYW1lID0gYWRkRm9ybS5lbGVtZW50cy5wbGFjZUZpbGVOYW1lO1xuY29uc3QgYWRkQnV0dG9uID0gYWRkRm9ybS5lbGVtZW50cy5jcmVhdGVfYnRuO1xuY29uc3Qgc3VibWl0UGxhY2VCdG4gPSBhZGRGb3JtLmVsZW1lbnRzLmFkZEZvcm1TdWJtaXQ7XG4iLCIvL0luaXRpYWwgQXJyYXlcblxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgbmFtZTogXCJFY29sYSBTdGF0ZSBQYXJrXCIsXG4gICAgbGluazogXCJpbWFnZXMvRWNvbGFTdGF0ZVBhcmsuanBlZ1wiLFxuICAgIGFsdDogXCJFY29sYSBTdGF0ZSBQYXJrXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkZvbnRhaW5lYmxlYXUgU3RhdGUgUGFya1wiLFxuICAgIGxpbms6IFwiaW1hZ2VzL0ZvbnRhaW5lYmxlYXVTdGF0ZVBhcmsuanBlZ1wiLFxuICAgIGFsdDogXCJGb250YWluZWJsZWF1IFN0YXRlIFBhcmtcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR292ZXJub3IgRG9kZ2UgU3RhdGUgUGFya1wiLFxuICAgIGxpbms6IFwiaW1hZ2VzL0dvdmVybm9yRG9kZ2VTdGF0ZVBhcmsuanBlZ1wiLFxuICAgIGFsdDogXCJHb3Zlcm5vciBEb2RnZSBTdGF0ZSBQYXJrXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkhvY2tpbmcgSGlsbHMgU3RhdGUgUGFya1wiLFxuICAgIGxpbms6IFwiaW1hZ2VzL0hvY2tpbmdIaWxsc1N0YXRlUGFyay5qcGVnXCIsXG4gICAgYWx0OiBcIkhvY2tpbmcgSGlsbHMgU3RhdGUgUGFya1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTdG9uZSBNb3VudGFpbiBTdGF0ZSBQYXJrXCIsXG4gICAgbGluazogXCJpbWFnZXMvU3RvbmVNb3VudGFpblN0YXRlUGFyay5qcGVnXCIsXG4gICAgYWx0OiBcIlN0b25lIE1vdW50YWluIFN0YXRlIFBhcmtcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVmFsbGV5IG9mIEZpcmUgU3RhdGUgUGFya1wiLFxuICAgIGxpbms6IFwiaW1hZ2VzL1ZhbGxleU9mRmlyZVN0YXRlUGFyay5qcGVnXCIsXG4gICAgYWx0OiBcIlZhbGxleSBvZiBGaXJlIFN0YXRlIFBhcmtcIixcbiAgfSxcbl07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=