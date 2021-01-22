/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
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
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._templateElement).content.querySelector(".grid__card");
      return cardElement;
    }
  }, {
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
      this._cardElement.querySelector(".grid__heart").addEventListener("click", function () {
        return _this._handleLikeIcon();
      });

      this._cardElement.querySelector(".grid__btn_del").addEventListener("click", function () {
        return _this._handleDeleteCard();
      });

      this._cardElement.querySelector(".grid__image").addEventListener("click", function () {
        return _this._handlePreviewPicture(_this._link, _this._text);
      });
    }
  }, {
    key: "_handleLikeIcon",
    value: function _handleLikeIcon() {
      this._cardElement.querySelector(".grid__heart").classList.toggle("grid__heart_active");
    }
  }, {
    key: "_handleDeleteCard",
    value: function _handleDeleteCard() {
      this.remove;
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._cardElement = this._getTemplate().cloneNode(true);
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

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
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

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
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

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
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

var _require = __webpack_require__(/*! ./Popup */ "./src/components/Popup.js"),
    Popup = _require.default;

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(popupSelector, submitHandler) {
    var _this;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._submitHandler = submitHandler;
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

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _scripts_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/constants.js */ "./src/scripts/constants.js");
/* harmony import */ var _scripts_initialCards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/initialCards */ "./src/scripts/initialCards.js");
/* harmony import */ var _scripts_initialCards__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_initialCards__WEBPACK_IMPORTED_MODULE_6__);


var _this = undefined;








var editProfileForm = document.querySelector(".popup__form-selector");
var addCardForm = document.querySelector(".popup__card_form-selector");
var config = {
  formSelector: ".form",
  inputSelector: ".form_input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__card_submit-disabled",
  inputErrorClass: "popup__form_input_type_error"
}; //Create Form Validation

var editProfileValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(config, editProfileForm);
var addCardValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(config, addCardForm);
editProfileValidator.enableValidation();
addCardValidator.enableValidation(); //CreateCards

function createCard(cardData) {
  var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_0__.default(cardData, "#cardTemplate", function (link, text) {
    imagePopup.open(link, text);
  });
  var cardElement = newCard.generateCard();
  return cardElement;
} //Create Default Carts


_scripts_initialCards__WEBPACK_IMPORTED_MODULE_6___default().forEach(function (cardData) {
  var cardElement = createCard(cardData);
  _scripts_constants_js__WEBPACK_IMPORTED_MODULE_5__.gridList.prepend(cardElement);
}); //Create Popups with Forms

var addCardPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__.default(".popup__card_form-selector", function () {
  var cardData = _this._getInputValues;
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_0__.default(cardData, "#cardTemplate", function (link, text) {
    imagePopup.open(link, text);
  });
  var cardElement = newCard.generateCard();

  _this._close();

  _scripts_constants_js__WEBPACK_IMPORTED_MODULE_5__.gridList.prepend(cardElement);
});
var editProfilePopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__.default(".popup__form-selector", function () {
  var userData = _this._getInputValues;

  _this._close();

  _scripts_constants_js__WEBPACK_IMPORTED_MODULE_5__.currentName.textContent = userData.profileName;
  _scripts_constants_js__WEBPACK_IMPORTED_MODULE_5__.currentTitle.textContent = userData.profileTitle;
  resetCardForm();
});
var imagePopup = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__.default(".popup__image"); // //Accepts Submit Event for Adding a New Card
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

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editBtn": () => /* binding */ editBtn,
/* harmony export */   "addBtn": () => /* binding */ addBtn,
/* harmony export */   "inputName": () => /* binding */ inputName,
/* harmony export */   "inputTitle": () => /* binding */ inputTitle,
/* harmony export */   "currentName": () => /* binding */ currentName,
/* harmony export */   "currentTitle": () => /* binding */ currentTitle,
/* harmony export */   "cardTemplate": () => /* binding */ cardTemplate,
/* harmony export */   "gridList": () => /* binding */ gridList,
/* harmony export */   "popUpProfile": () => /* binding */ popUpProfile,
/* harmony export */   "popUpCard": () => /* binding */ popUpCard,
/* harmony export */   "popupImageBlock": () => /* binding */ popupImageBlock,
/* harmony export */   "popupImage": () => /* binding */ popupImage,
/* harmony export */   "popupCaption": () => /* binding */ popupCaption,
/* harmony export */   "profileForm": () => /* binding */ profileForm,
/* harmony export */   "name": () => /* binding */ name,
/* harmony export */   "title": () => /* binding */ title,
/* harmony export */   "addForm": () => /* binding */ addForm,
/* harmony export */   "placeName": () => /* binding */ placeName,
/* harmony export */   "fileName": () => /* binding */ fileName,
/* harmony export */   "addButton": () => /* binding */ addButton,
/* harmony export */   "submitPlaceBtn": () => /* binding */ submitPlaceBtn
/* harmony export */ });
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

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/desireebradish/Documents/Dev/web_project_4/src/scripts/initialCards.js: Unterminated string constant (6:61)\n\n\u001b[0m \u001b[90m 4 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mGovernorPark\u001b[39m from \u001b[32m\"../images/GovernorDodgeStatePark.jpeg\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mHockingHillsPark\u001b[39m from \u001b[32m\"../images/HockingHillsStatePark.jpeg\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 6 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mStonePark\u001b[39m from \u001b[32m\"../images/StoneMountainStatePark.jpeg\"\u001b[39m\u001b[32m\";\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m                                                             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 7 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mValleyPark\u001b[39m from \u001b[32m\"../images/ValleyOfFireStatePark.jpeg\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 8 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 9 | \u001b[39m\u001b[36mconst\u001b[39m initialCards \u001b[33m=\u001b[39m [\u001b[0m\n    at Parser._raise (/Users/desireebradish/Documents/Dev/web_project_4/node_modules/@babel/parser/lib/index.js:748:17)\n    at Parser.raiseWithData (/Users/desireebradish/Documents/Dev/web_project_4/node_modules/@babel/parser/lib/index.js:741:17)\n    at Parser.raise (/Users/desireebradish/Documents/Dev/web_project_4/node_modules/@babel/parser/lib/index.js:735:17)\n    at Parser.readString (/Users/desireebradish/Documents/Dev/web_project_4/node_modules/@babel/parser/lib/index.js:8724:20)\n    at Parser.getTokenFromCode (/Users/desireebradish/Documents/Dev/web_project_4/node_modules/@babel/parser/lib/index.js:8362:14)\n    at Parser.nextToken (/Users/desireebradish/Documents/Dev/web_project_4/node_modules/@babel/parser/lib/index.js:7889:12)\n    at Parser.next (/Users/desireebradish/Documents/Dev/web_project_4/node_modules/@babel/parser/lib/index.js:7819:10)\n    at Parser.parseLiteral (/Users/desireebradish/Documents/Dev/web_project_4/node_modules/@babel/parser/lib/index.js:10707:10)\n    at Parser.parseExprAtom (/Users/desireebradish/Documents/Dev/web_project_4/node_modules/@babel/parser/lib/index.js:10458:21)\n    at Parser.parseImportSource (/Users/desireebradish/Documents/Dev/web_project_4/node_modules/@babel/parser/lib/index.js:13124:17)");

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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/pages/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9scy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL2xzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL2xzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvc2NyaXB0cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL2xzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9scy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbHMvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkNhcmQiLCJjYXJkRGF0YSIsInRlbXBsYXRlRWxlbWVudCIsImhhbmRsZUNhcmRDbGljayIsIl9uYW1lIiwibmFtZSIsIl9saW5rIiwibGluayIsIl90ZW1wbGF0ZUVsZW1lbnQiLCJfaGFuZGxlQ2FyZENsaWNrIiwiY2FyZEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiaGFuZGxlUHJldmlld1BpYyIsImV2dCIsInRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNsb3Nlc3QiLCJyZW1vdmUiLCJfY2FyZEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZUxpa2VJY29uIiwiX2hhbmRsZURlbGV0ZUNhcmQiLCJfaGFuZGxlUHJldmlld1BpY3R1cmUiLCJfdGV4dCIsIl9nZXRUZW1wbGF0ZSIsImNsb25lTm9kZSIsInRleHRDb250ZW50IiwiX2NhcmRJbWFnZSIsInNyYyIsImFsdCIsIl9zZXRFdmVudExpc3RlbmVycyIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5nc09iamVjdCIsImZvcm1FbGVtZW50IiwiX3NldHRpbmdzIiwiX2Zvcm1FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JFbGVtZW50IiwiaWQiLCJhZGQiLCJpbnB1dEVycm9yQ2xhc3MiLCJpbnB1dHNMaXN0IiwiYnV0dG9uRWxlbWVudCIsIl9oYXNJbnZhbGlkSW5wdXQiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiZGlzYWJsZWQiLCJzb21lIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9zaG93SW5wdXRFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hpZGVJbnB1dEVycm9yIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImlucHV0U2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwicHJldmVudERlZmF1bHQiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXAiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwiY2xhc3NMSXN0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIndoaWNoIiwiRVNDX0tFWUNPREUiLCJjbG9zZSIsImNsb3NlQnRuIiwiY2xvc2VCdXRuIiwicmVxdWlyZSIsImRlZmF1bHQiLCJQb3B1cFdpdGhGb3JtIiwic3VibWl0SGFuZGxlciIsIl9zdWJtaXRIYW5kbGVyIiwiaW5wdXRzIiwiX2Zvcm0iLCJ2YWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZSIsIm5ld1NyYyIsIm5ld0NhcHRpb24iLCJpbWFnZSIsImNhcHRpb24iLCJlZGl0UHJvZmlsZUZvcm0iLCJhZGRDYXJkRm9ybSIsImNvbmZpZyIsImZvcm1TZWxlY3RvciIsImVkaXRQcm9maWxlVmFsaWRhdG9yIiwiYWRkQ2FyZFZhbGlkYXRvciIsImVuYWJsZVZhbGlkYXRpb24iLCJjcmVhdGVDYXJkIiwibmV3Q2FyZCIsInRleHQiLCJpbWFnZVBvcHVwIiwib3BlbiIsImdlbmVyYXRlQ2FyZCIsImluaXRpYWxDYXJkcyIsImdyaWRMaXN0IiwiYWRkQ2FyZFBvcHVwIiwiX2dldElucHV0VmFsdWVzIiwiY2FyZCIsIl9jbG9zZSIsImVkaXRQcm9maWxlUG9wdXAiLCJ1c2VyRGF0YSIsImN1cnJlbnROYW1lIiwicHJvZmlsZU5hbWUiLCJjdXJyZW50VGl0bGUiLCJwcm9maWxlVGl0bGUiLCJyZXNldENhcmRGb3JtIiwiZWRpdEJ0biIsImFkZEJ0biIsImlucHV0TmFtZSIsImlucHV0VGl0bGUiLCJjYXJkVGVtcGxhdGUiLCJwb3BVcFByb2ZpbGUiLCJwb3BVcENhcmQiLCJwb3B1cEltYWdlQmxvY2siLCJwb3B1cEltYWdlIiwicG9wdXBDYXB0aW9uIiwicHJvZmlsZUZvcm0iLCJmb3JtcyIsImVsZW1lbnRzIiwidGl0bGUiLCJhZGRGb3JtIiwicGxhY2VOYW1lIiwiZmlsZU5hbWUiLCJwbGFjZUZpbGVOYW1lIiwiYWRkQnV0dG9uIiwiY3JlYXRlX2J0biIsInN1Ym1pdFBsYWNlQnRuIiwiYWRkRm9ybVN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsSTtBQUNKLGdCQUFZQyxRQUFaLEVBQXNCQyxlQUF0QixFQUF1Q0MsZUFBdkMsRUFBd0Q7QUFBQTs7QUFDdEQ7QUFDQTtBQUNBLFNBQUtDLEtBQUwsR0FBYUgsUUFBUSxDQUFDSSxJQUF0QjtBQUNBLFNBQUtDLEtBQUwsR0FBYUwsUUFBUSxDQUFDTSxJQUF0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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihjYXJkRGF0YSwgdGVtcGxhdGVFbGVtZW50LCBoYW5kbGVDYXJkQ2xpY2spIHtcbiAgICAvLyB0aGUgdGV4dCBhbmQgdGhlIGltYWdlIGFyZSBwcml2YXRlIGZpZWxkcyxcbiAgICAvLyB0aGV5J3JlIG9ubHkgbmVlZGVkIGluc2lkZSB0aGUgY2xhc3NcbiAgICB0aGlzLl9uYW1lID0gY2FyZERhdGEubmFtZTtcbiAgICB0aGlzLl9saW5rID0gY2FyZERhdGEubGluaztcbiAgICB0aGlzLl90ZW1wbGF0ZUVsZW1lbnQgPSB0ZW1wbGF0ZUVsZW1lbnQ7XG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICB9XG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl90ZW1wbGF0ZUVsZW1lbnQpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2NhcmRcIik7XG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xuICB9XG4gIF9oYW5kbGVQcmV2aWV3UGljKCkge1xuICAgIGhhbmRsZVByZXZpZXdQaWModGhpcyk7XG4gIH1cblxuICBfaGFuZGxlTGlrZShldnQpIHtcbiAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJncmlkX19oZWFydF9hY3RpdmVcIik7XG4gIH1cbiAgX2hhbmRsZURlbGV0ZShldnQpIHtcbiAgICBldnQudGFyZ2V0LmNsb3Nlc3QoXCIuZ3JpZF9fY2FyZFwiKS5yZW1vdmUoKTtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvL1NlYXJjaCBmb3IgRWxlbWVudHNcbiAgICB0aGlzLl9jYXJkRWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9faGVhcnRcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5faGFuZGxlTGlrZUljb24oKSk7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2J0bl9kZWxcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCgpKTtcbiAgICB0aGlzLl9jYXJkRWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9faW1hZ2VcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgICAgdGhpcy5faGFuZGxlUHJldmlld1BpY3R1cmUodGhpcy5fbGluaywgdGhpcy5fdGV4dClcbiAgICAgICk7XG4gIH1cbiAgX2hhbmRsZUxpa2VJY29uKCkge1xuICAgIHRoaXMuX2NhcmRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5ncmlkX19oZWFydFwiKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJncmlkX19oZWFydF9hY3RpdmVcIik7XG4gIH1cbiAgX2hhbmRsZURlbGV0ZUNhcmQoKSB7XG4gICAgdGhpcy5yZW1vdmU7XG4gIH1cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5ncmlkX19jYXB0aW9uXCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICB0aGlzLl9jYXJkSW1hZ2UgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2ltYWdlXCIpO1xuXG4gICAgdGhpcy5fY2FyZEltYWdlLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgdGhpcy5fY2FyZEltYWdlLmFsdCA9IHRoaXMuX25hbWU7XG5cbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2NhcmRFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzT2JqZWN0LCBmb3JtRWxlbWVudCkge1xuICAgIC8vIHRoZSB0ZXh0IGFuZCB0aGUgaW1hZ2UgYXJlIHByaXZhdGUgZmllbGRzLFxuICAgIC8vIHRoZXkncmUgb25seSBuZWVkZWQgaW5zaWRlIHRoZSBjbGFzc1xuICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3NPYmplY3Q7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgfVxuXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkge1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgfVxuXG4gIF90b2dnbGVCdXR0b25TdGF0ZShpbnB1dHNMaXN0LCBidXR0b25FbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dChpbnB1dHNMaXN0KSkge1xuICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX3NldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9zZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAgIGJ1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBfaGFzSW52YWxpZElucHV0KGlucHV0c0xpc3QpIHtcbiAgICByZXR1cm4gaW5wdXRzTGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xuICAgIH0pO1xuICB9XG5cbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50LCBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvL01ha2UgYW4gYXJyYXkgb2YgYWxsIHRoZSBpbnB1dHMgdGhhdCBhcmUgaW4gdGhlIGZvcm1FbGVtZW50XG4gICAgY29uc3QgaW5wdXRzTGlzdCA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NldHRpbmdzLmlucHV0U2VsZWN0b3IpXG4gICAgKTtcblxuICAgIC8vU3VibWl0IEJ1dHRvbiBhc3NvY2lhdGVkIHdpdGggdGhhdCBmb3JtXG4gICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLl9zZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvclxuICAgICk7XG5cbiAgICAvL0dvIHRocm91Z2ggZWFjaCBpbnB1dCBpbmRpdmlkdWFsbHlcbiAgICBpbnB1dHNMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgLy9JZiB0aGF0IGlucHV0IGlzIHRvdWNoZWQsIHdlIGltbWVkaWF0ZWx5IGNoZWNrIHZhbGlkaXR5XG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7IC8vIFN0ZXAgM1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZShpbnB1dHNMaXN0LCBidXR0b25FbGVtZW50KTsgLy8gU3RlcCA0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnModGhpcy5fZm9ybUVsZW1lbnQsIHRoaXMuX3NldHRpbmdzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xuIiwiY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMuX3BvcHVwLmNsYXNzTElzdC5hZGQoXCJwb3B1cF92aXNpYmxlXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMSXN0LnJlbW92ZShcInBvcHVwX3Zpc2libGVcIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KSB7XG4gICAgaWYgKGV2dC53aGljaCA9PT0gRVNDX0tFWUNPREUpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgfVxuICB9XG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGNsb3NlQnRuID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2xvc2VcIik7XG4gICAgY2xvc2VCdXRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XG4iLCJjb25zdCB7IGRlZmF1bHQ6IFBvcHVwIH0gPSByZXF1aXJlKFwiLi9Qb3B1cFwiKTtcblxuY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvciwgc3VibWl0SGFuZGxlcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX3N1Ym1pdEhhbmRsZXIgPSBzdWJtaXRIYW5kbGVyO1xuICAgIHRoaXMuX3N1Ym1pdEhhbmRsZXIgPSB0aGlzLl9zdWJtaXRIYW5kbGVyLmJpbmQodGhpcyk7XG4gIH1cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faW5wdXRcIik7XG4gICAgY29uc3QgdmFsdWVzID0ge307XG5cbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBzdXBlci5jbG9zZSgpO1xuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLnNldEV2ZW50TElzdGVuZXJzKCk7XG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5fc3VibWl0SGFuZGxlcigpO1xuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQb3B1cFdpdGhGb3JtO1xuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gIH1cbiAgb3BlbihuZXdTcmMsIG5ld0NhcHRpb24pIHtcbiAgICBzdXBlci5vcGVuKCk7XG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2ltYWdlX2FjdGl2ZVwiKTtcbiAgICBjb25zdCBjYXB0aW9uID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2VfY2FwdFwiKTtcbiAgICBpbWFnZS5zcmMgPSBuZXdTcmM7XG4gICAgY2FwdGlvbi50ZXh0Q29udGVudCA9IG5ld0NhcHRpb247XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBvcHVwV2l0aEltYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuaW1wb3J0IHtcbiAgZWRpdEJ0bixcbiAgYWRkQnRuLFxuICBpbnB1dE5hbWUsXG4gIGlucHV0VGl0bGUsXG4gIGN1cnJlbnROYW1lLFxuICBjdXJyZW50VGl0bGUsXG4gIGNhcmRUZW1wbGF0ZSxcbiAgZ3JpZExpc3QsXG4gIHBvcFVwUHJvZmlsZSxcbiAgcG9wVXBDYXJkLFxuICBwb3B1cEltYWdlQmxvY2ssXG4gIHBvcHVwSW1hZ2UsXG4gIHBvcHVwQ2FwdGlvbixcbiAgcHJvZmlsZUZvcm0sXG4gIG5hbWUsXG4gIHRpdGxlLFxuICBhZGRGb3JtLFxuICBwbGFjZU5hbWUsXG4gIGZpbGVOYW1lLFxuICBhZGRCdXR0b24sXG4gIHN1Ym1pdFBsYWNlQnRuLFxufSBmcm9tIFwiLi4vc2NyaXB0cy9jb25zdGFudHMuanNcIjtcblxuaW1wb3J0IGluaXRpYWxDYXJkcyBmcm9tIFwiLi4vc2NyaXB0cy9pbml0aWFsQ2FyZHNcIjtcblxuY29uc3QgZWRpdFByb2ZpbGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybS1zZWxlY3RvclwiKTtcbmNvbnN0IGFkZENhcmRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2FyZF9mb3JtLXNlbGVjdG9yXCIpO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGZvcm1TZWxlY3RvcjogXCIuZm9ybVwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5mb3JtX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtX19zdWJtaXRcIixcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJwb3B1cF9fY2FyZF9zdWJtaXQtZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcInBvcHVwX19mb3JtX2lucHV0X3R5cGVfZXJyb3JcIixcbn07XG5cbi8vQ3JlYXRlIEZvcm0gVmFsaWRhdGlvblxuY29uc3QgZWRpdFByb2ZpbGVWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIGVkaXRQcm9maWxlRm9ybSk7XG5jb25zdCBhZGRDYXJkVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBhZGRDYXJkRm9ybSk7XG5cbmVkaXRQcm9maWxlVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbmFkZENhcmRWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG4vL0NyZWF0ZUNhcmRzXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGNhcmREYXRhKSB7XG4gIGNvbnN0IG5ld0NhcmQgPSBuZXcgQ2FyZChjYXJkRGF0YSwgXCIjY2FyZFRlbXBsYXRlXCIsIChsaW5rLCB0ZXh0KSA9PiB7XG4gICAgaW1hZ2VQb3B1cC5vcGVuKGxpbmssIHRleHQpO1xuICB9KTtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXdDYXJkLmdlbmVyYXRlQ2FyZCgpO1xuICByZXR1cm4gY2FyZEVsZW1lbnQ7XG59XG4vL0NyZWF0ZSBEZWZhdWx0IENhcnRzXG5pbml0aWFsQ2FyZHMuZm9yRWFjaCgoY2FyZERhdGEpID0+IHtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjcmVhdGVDYXJkKGNhcmREYXRhKTtcbiAgZ3JpZExpc3QucHJlcGVuZChjYXJkRWxlbWVudCk7XG59KTtcbi8vQ3JlYXRlIFBvcHVwcyB3aXRoIEZvcm1zXG5jb25zdCBhZGRDYXJkUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5wb3B1cF9fY2FyZF9mb3JtLXNlbGVjdG9yXCIsICgpID0+IHtcbiAgY29uc3QgY2FyZERhdGEgPSB0aGlzLl9nZXRJbnB1dFZhbHVlcztcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGNhcmREYXRhLCBcIiNjYXJkVGVtcGxhdGVcIiwgKGxpbmssIHRleHQpID0+IHtcbiAgICBpbWFnZVBvcHVwLm9wZW4obGluaywgdGV4dCk7XG4gIH0pO1xuICBjb25zdCBjYXJkRWxlbWVudCA9IG5ld0NhcmQuZ2VuZXJhdGVDYXJkKCk7XG4gIHRoaXMuX2Nsb3NlKCk7XG4gIGdyaWRMaXN0LnByZXBlbmQoY2FyZEVsZW1lbnQpO1xufSk7XG5cbmNvbnN0IGVkaXRQcm9maWxlUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShcIi5wb3B1cF9fZm9ybS1zZWxlY3RvclwiLCAoKSA9PiB7XG4gIGNvbnN0IHVzZXJEYXRhID0gdGhpcy5fZ2V0SW5wdXRWYWx1ZXM7XG4gIHRoaXMuX2Nsb3NlKCk7XG4gIGN1cnJlbnROYW1lLnRleHRDb250ZW50ID0gdXNlckRhdGEucHJvZmlsZU5hbWU7XG4gIGN1cnJlbnRUaXRsZS50ZXh0Q29udGVudCA9IHVzZXJEYXRhLnByb2ZpbGVUaXRsZTtcbiAgcmVzZXRDYXJkRm9ybSgpO1xufSk7XG5cbmNvbnN0IGltYWdlUG9wdXAgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoXCIucG9wdXBfX2ltYWdlXCIpO1xuXG4vLyAvL0FjY2VwdHMgU3VibWl0IEV2ZW50IGZvciBBZGRpbmcgYSBOZXcgQ2FyZFxuLy8gZnVuY3Rpb24gaGFuZGxlQ2FyZEZvcm1TdWJtaXQoZXZ0KSB7XG4vLyAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBjb25zdCBjYXJkRGF0YSA9IHtcbi8vICAgICBuYW1lOiBpbnB1dFBsYWNlLnZhbHVlLFxuLy8gICAgIGxpbms6IGlucHV0VXJsLnZhbHVlLFxuLy8gICAgIGFsdDogaW5wdXRQbGFjZS52YWx1ZSxcbi8vICAgfTtcbi8vICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjcmVhdGVDYXJkKGNhcmREYXRhKTtcbi8vICAgY2xvc2VQb3BVcChwb3BVcENhcmQpOyAvL1xuLy8gICBncmlkTGlzdC5wcmVwZW5kKGNhcmRFbGVtZW50KTtcbi8vICAgcmVzZXRDYXJkRm9ybSgpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiByZXNldENhcmRGb3JtKCkge1xuLy8gICBhZGRGb3JtLnJlc2V0KCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGhhbmRsZVVzZXJGb3JtU3VibWl0KGV2dCkge1xuLy8gICAvLyBUaGlzIGxpbmUgc3RvcHMgdGhlIGJyb3dzZXIgZnJvbSBzdWJtaXR0aW5nIHRoZSBmb3JtIGluIHRoZSBkZWZhdWx0IHdheS5cbi8vICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbi8vIEluc2VydCBuZXcgdmFsdWVzIHVzaW5nIHRoZSB0ZXh0Q29udGVudCBwcm9wZXJ0eSBvZiB0aGVcbi8vIHF1ZXJ5U2VsZWN0b3IoKSBtZXRob2Rcbi8vIGN1cnJlbnROYW1lLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlO1xuLy8gICBjdXJyZW50VGl0bGUudGV4dENvbnRlbnQgPSBpbnB1dFRpdGxlLnZhbHVlO1xuLy8gICBjbG9zZVBvcFVwKCk7IC8vXG4vLyB9XG5cbi8vIHByb2ZpbGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlVXNlckZvcm1TdWJtaXQpO1xuLy8gcG9wVXBDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlQ2FyZEZvcm1TdWJtaXQpO1xuLy8gYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgIG9wZW5Qb3BVcChwb3BVcENhcmQpO1xuLy8gfSk7XG5cbi8vIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgaW5wdXROYW1lLnZhbHVlID0gY3VycmVudE5hbWUudGV4dENvbnRlbnQ7XG4vLyAgIGlucHV0VGl0bGUudmFsdWUgPSBjdXJyZW50VGl0bGUudGV4dENvbnRlbnQ7XG4vLyAgIG9wZW5Qb3BVcChwb3BVcFByb2ZpbGUpO1xuLy8gfSk7XG5cbi8vIGNvbnN0IHBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBcIik7XG5cbi8vIHBvcHVwcy5mb3JFYWNoKChwb3B1cCkgPT4ge1xuLy8gICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4ge1xuLy8gICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX3Zpc2libGVcIikpIHtcbi8vICAgICAgIGNsb3NlUG9wVXAocG9wdXApO1xuLy8gICAgIH1cbi8vICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cF9fY2xvc2VcIikpIHtcbi8vICAgICAgIGNsb3NlUG9wVXAoZXZ0LnRhcmdldCk7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH0pO1xuIiwiZXhwb3J0IGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXRidG5cIik7XG5leHBvcnQgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGRidG5cIik7XG5leHBvcnQgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dE5hbWVcIik7XG5leHBvcnQgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRUaXRsZVwiKTtcbmV4cG9ydCBjb25zdCBjdXJyZW50TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fbmFtZVwiKTtcbmV4cG9ydCBjb25zdCBjdXJyZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3RpdGxlXCIpO1xuZXhwb3J0IGNvbnN0IGNhcmRUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FyZFRlbXBsYXRlXCIpLmNvbnRlbnQ7XG5leHBvcnQgY29uc3QgZ3JpZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2xpc3RcIik7XG5leHBvcnQgY29uc3QgcG9wVXBQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcbmV4cG9ydCBjb25zdCBwb3BVcENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jYXJkXCIpO1xuZXhwb3J0IGNvbnN0IHBvcHVwSW1hZ2VCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlXCIpO1xuZXhwb3J0IGNvbnN0IHBvcHVwSW1hZ2UgPSBwb3B1cEltYWdlQmxvY2sucXVlcnlTZWxlY3RvcihcIi5ncmlkX19pbWFnZV9hY3RpdmVcIik7XG5leHBvcnQgY29uc3QgcG9wdXBDYXB0aW9uID0gcG9wdXBJbWFnZUJsb2NrLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlX2NhcHRcIik7XG5cbmV4cG9ydCBjb25zdCBwcm9maWxlRm9ybSA9IGRvY3VtZW50LmZvcm1zLnByb2ZpbGVGb3JtO1xuZXhwb3J0IGNvbnN0IG5hbWUgPSBwcm9maWxlRm9ybS5lbGVtZW50cy5wcm9maWxlTmFtZTtcbmV4cG9ydCBjb25zdCB0aXRsZSA9IHByb2ZpbGVGb3JtLmVsZW1lbnRzLnByb2ZpbGVUaXRsZTtcbmV4cG9ydCBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQuZm9ybXMuYWRkRm9ybTtcbmV4cG9ydCBjb25zdCBwbGFjZU5hbWUgPSBhZGRGb3JtLmVsZW1lbnRzLnBsYWNlTmFtZTtcbmV4cG9ydCBjb25zdCBmaWxlTmFtZSA9IGFkZEZvcm0uZWxlbWVudHMucGxhY2VGaWxlTmFtZTtcbmV4cG9ydCBjb25zdCBhZGRCdXR0b24gPSBhZGRGb3JtLmVsZW1lbnRzLmNyZWF0ZV9idG47XG5leHBvcnQgY29uc3Qgc3VibWl0UGxhY2VCdG4gPSBhZGRGb3JtLmVsZW1lbnRzLmFkZEZvcm1TdWJtaXQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9