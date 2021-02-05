/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var baseUrl = _ref.baseUrl,
        headers = _ref.headers;

    _classCallCheck(this, Api);

    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _createClass(Api, [{
    key: "_checkResponse",
    value: function _checkResponse(res) {
      return res.ok ? res.json() : Promise.reject("Error!" + res.statusText);
    }
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch(this._baseUrl + "/cards", {
        headers: this._headers
      }).then(this._checkResponse).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "_checkResponse",
    value: function _checkResponse(res) {
      return res.ok ? res.json() : Promise.reject("Error!" + res.statusText);
    } //GET https://around.nomoreparties.co/v1/groupId/users/me

  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch(this._baseUrl + "/users/me", {
        headers: this._headers
      }).then(this._checkResponse).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "getAllInfo",
    value: function getAllInfo() {
      return Promise.all([this.getUserInfo(), this.getInitialCards()]);
    } //PATCH https://around.nomoreparties.co/v1/groupId/users/me

  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
          about = _ref2.about;
      return fetch(this._baseUrl + "/users/me", {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(this._checkResponse).catch(function (err) {
        return console.log(err);
      });
    } //POST https://around.nomoreparties.co/v1/groupId/cards

  }, {
    key: "addCard",
    value: function addCard(_ref3) {
      var name = _ref3.name,
          link = _ref3.link;
      return fetch(this._baseUrl + "/cards", {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(this._checkResponse).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "removeCard",
    value: function removeCard(cardId) {
      //fetch cards + cardid
      return fetch(this._baseUrl + "/cards/" + cardId, {
        method: "DELETE",
        headers: this._headers
      }).then(this._checkResponse).catch(function (err) {
        return console.log(err);
      });
    } //PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar

  }, {
    key: "setAvatar",
    value: function setAvatar(_ref4) {
      var avatar = _ref4.avatar;
      return fetch(this._baseUrl + "/users/me/avatar", {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(this._checkResponse).catch(function (err) {
        return console.log("Error! " + err);
      });
    } // PUT https://around.nomoreparties.co/v1/groupId/cards/likes/cardId
    // DELETE https://around.nomoreparties.co/v1/groupId/cards/likes/cardId

  }, {
    key: "changeLikeCardStatus",
    value: function changeLikeCardStatus(cardId, like) {
      //PUT AND DELETE
      var whichMethod = like ? "DELETE" : "PUT";
      return fetch(this._baseUrl + "/cards/likes/" + cardId, {
        method: whichMethod,
        headers: this._headers
      }).then(this._checkResponse).catch(function (err) {
        return console.log(err);
      });
    }
  }]);

  return Api;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Api);

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(_ref) {
    var cardData = _ref.cardData,
        templateElement = _ref.templateElement,
        handleCardImgClick = _ref.handleCardImgClick,
        handleDeleteClick = _ref.handleDeleteClick,
        handleLikes = _ref.handleLikes,
        myId = _ref.myId;

    _classCallCheck(this, Card);

    // the text and the image are private fields,
    // they're only needed inside the class
    this._name = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes;
    this._templateElement = templateElement;
    this._handleCardImgClick = handleCardImgClick;
    this._id = cardData._id;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikes = handleLikes;
    this._myId = myId;
    this._cardOwner = cardData.owner;
    this._id = cardData._id;
    this._cardElement = this._getTemplate();
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._templateElement).content.querySelector(".grid__card").cloneNode(true);
      return cardElement;
    }
  }, {
    key: "_handleLike",
    value: function _handleLike(evt) {
      evt.target.classList.toggle("grid__heart_active");
    }
  }, {
    key: "id",
    value: function id() {
      return this._id;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      //Search for Elements
      this._cardElement.querySelector(".grid__heart").addEventListener("click", function () {
        _this._handleLikes(_this.id());
      });

      this._cardElement.querySelector(".grid__btn_del").addEventListener("click", function (e) {
        _this._handleDeleteClick(_this.id());
      });

      this._cardElement.querySelector(".grid__image").addEventListener("click", function () {
        return _this._handleCardImgClick(_this._link, _this._text);
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard() {
      this._cardElement.remove(".grid__card");
    }
  }, {
    key: "_handleDeleteCard",
    value: function _handleDeleteCard() {
      this._handleDeleteClick(this.id());
    }
  }, {
    key: "isLiked",
    value: function isLiked() {
      return this._cardElement.querySelector(".grid__heart").classList.contains("grid__heart_active");
    }
  }, {
    key: "showLiked",
    value: function showLiked(myId) {
      var _this2 = this;

      this._likes.forEach(function (like) {
        if (like._id === myId) {
          _this2._cardElement.querySelector(".grid__heart").classList.add("grid__heart_active");
        }
      });
    }
  }, {
    key: "likeCard",
    value: function likeCard() {
      this._cardElement.querySelector(".grid__heart").classList.add("grid__heart_active");
    }
  }, {
    key: "getLikeCount",
    value: function getLikeCount(count) {
      this._likesCt.textContent = count;
    }
  }, {
    key: "_removeDelBtn",
    value: function _removeDelBtn() {
      if (this._cardOwner._id !== this._myId) {
        this._cardElement.querySelector(".grid__btn_del").style.display = "none";
      }
    }
  }, {
    key: "dislikeCard",
    value: function dislikeCard() {
      this._cardElement.querySelector(".grid__heart").classList.remove("grid__heart_active");
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._cardElement = this._getTemplate().cloneNode(true);
      this._cardElement.querySelector(".grid__caption").textContent = this._name;
      this._cardImage = this._cardElement.querySelector(".grid__image");
      this._likesCt = this._cardElement.querySelector(".grid__like-count");
      this.getLikeCount(this._likes.length);
      this.showLiked(this._myId);
      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;
      this._likesCt.textContent = this._likes.length;

      this._removeDelBtn();

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    this._inputSelector = settingsObject.inputSelector;
    this._inputs = _toConsumableArray(this._formElement.querySelectorAll(this._inputSelector));
    this._subButton = this._formElement.querySelector(this._settings.submitButtonSelector);
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
    value: function _toggleButtonState() {
      if (this._hasInvalidInput(this._inputs)) {
        this._subButton.classList.add(this._settings.inactiveButtonClass);

        this._subButton.disabled = true;
      } else {
        this._subButton.classList.remove(this._settings.inactiveButtonClass);

        this._subButton.disabled = false;
      }
    } // _toggleButtonState() {
    //   const isFormValid = this._inputs.every((input) => {
    //     return input.validity.valid;
    //   });
    //   if (isFormValid) {
    //     this._button.classList.remove(this._inactiveButtonClass);
    //     this._button.disabled = false;
    //   } else {
    //     this._button.classList.add(this._inactiveButtonClass);
    //     this._button.disabled = true;
    //   }
    // }

  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputs.some(function (inputElement) {
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
      var inputsList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)); //Go through each input individually

      inputsList.forEach(function (inputElement) {
        //If that input is touched, we immediately check validity
        inputElement.addEventListener("input", function () {
          _this._checkInputValidity(inputElement); // Step 3


          _this._toggleButtonState(); // Step 4

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
  }, {
    key: "resetValidation",
    value: function resetValidation() {
      var _this2 = this;

      this._inputs.forEach(function (input) {
        _this2._hideInputError(input);
      });

      this._toggleButtonState();
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
      this._popup.classList.add("popup_visible");

      document.addEventListener("keyup", this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove("popup_visible");

      document.removeEventListener("keyup", this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(e) {
      if (e.key === "Escape") {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._popup.addEventListener("click", function (e) {
        if (e.target.classList.contains("popup__close") || e.target.classList.contains("popup_visible")) {
          _this.close();
        }
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
    _this._form = _this._popup.querySelector(".form");
    _this._submitHandler = submitHandler;
    _this._submitHandler = _this._submitHandler.bind(_assertThisInitialized(_this));
    _this._inputs = _this._form.querySelectorAll(".form_input");
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "replSubmitHandler",
    value: function replSubmitHandler(_replSubmitHandler) {
      this._submitHandler = _replSubmitHandler;
    }
  }, {
    key: "_getInputValues",
    value: function _getInputValues() {
      var values = {};

      this._inputs.forEach(function (input) {
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

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._form.addEventListener("submit", function (e) {
        e.preventDefault();

        _this2._submitHandler(_this2._getInputValues());
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
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._image = _this._popup.querySelector(".grid__image_active");
    _this._caption = _this._popup.querySelector(".popup__image_capt");
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(newSrc, newCapt) {
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);

      this._image.src = newSrc;
      this._caption.textContent = newCapt;
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWithImage);

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, classSelector) {
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._array = items;
    this._renderer = renderer;
    this._container = document.querySelector(classSelector);
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      this._array.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }]);

  return Section;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
        titleSelector = _ref.titleSelector,
        avatarSelector = _ref.avatarSelector;

    _classCallCheck(this, UserInfo);

    this._nameEl = document.querySelector(nameSelector);
    this._titleEl = document.querySelector(titleSelector);
    this._avatarEl = document.querySelector(avatarSelector);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var name = this._nameEl.textContent;
      var title = this._titleEl.textContent;
      this._userInfos = {
        name: name,
        title: title
      };
      return this._userInfos;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(elements) {
      this._nameEl.textContent = elements.name;
      this._titleEl.textContent = elements.about;
    }
  }, {
    key: "changeAvatar",
    value: function changeAvatar(elements) {
      this._avatarEl.src = elements;
    }
  }]);

  return UserInfo;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInfo);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/constants.js */ "./src/scripts/constants.js");
/* harmony import */ var _components_Popup_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Popup.js */ "./src/components/Popup.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var myId;
var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_6__.default({
  baseUrl: "https://around.nomoreparties.co/v1/group-8",
  headers: {
    authorization: "d687320c-42a6-463a-9f18-8c281b207460",
    "Content-Type": "application/json"
  }
});
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__.default({
  nameSelector: ".profile__name",
  titleSelector: ".profile__title",
  avatarSelector: ".profile__avatar"
});

function handleLoad(isLoading, popup, text) {
  if (isLoading) {
    popup.querySelector(".form__submit").textContent = text;
  } else {
    popup.querySelector(".form__submit").textContent = text;
  }
}

api.getAllInfo().then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      userData = _ref2[0],
      initialCardData = _ref2[1];

  myId = userData._id;
  userInfo.setUserInfo({
    name: userData.name,
    about: userData.about
  });
  userInfo.changeAvatar(userData.avatar);
  var initialCardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__.default({
    items: initialCardData,
    renderer: function renderer(cardData) {
      var cardEl = createNewCard(cardData, myId);
      initialCardList.addItem(cardEl);
    }
  }, ".grid__list");
  initialCardList.renderItems();
  var addCardPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__.default(".popup__card", function (values) {
    handleLoad(true, _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.addPopup, "Creating...");
    var cardData = {
      name: values.placeName,
      link: values.placeFileName
    };
    api.addCard(cardData).then(function (res) {
      var cardEl2 = createNewCard(res, myId);
      initialCardList.addItem(cardEl2);
    }).catch(function (err) {
      return console.log("Error!" + err);
    });
    addCardPopup.close();
    handleLoad(false, _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.addPopup, "Create");
  });
  addCardPopup.setEventListeners();
  _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.addBtn.addEventListener("click", function () {
    addCardValidator.resetValidation();
    addCardPopup.open();
  });
}).catch(function (err) {
  return console.log(err);
});
var deletePopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__.default(".popup__delete", function (values) {
  console.log(values);
});
deletePopup.setEventListeners();

function createNewCard(cardData, myId) {
  var newCard = new _components_Card_js__WEBPACK_IMPORTED_MODULE_0__.default({
    cardData: cardData,
    templateElement: "#cardTemplate",
    handleCardImgClick: function handleCardImgClick() {
      imagePopup.open(cardData.link, cardData.name);
    },
    handleDeleteClick: function handleDeleteClick(cardId) {
      deletePopup.open();
      deletePopup.replSubmitHandler(function () {
        //remove the card
        handleLoad(true, _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.delPopup, "Deleting...");
        api.removeCard(cardId).then(function () {
          newCard.deleteCard();
          deletePopup.close();
          handleLoad(true, _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.delPopup, "Yes");
        }).catch(function (err) {
          return console.log("Error! " + err);
        });
      });
    },
    handleLikes: function handleLikes(cardId) {
      if (newCard.isLiked(myId)) {
        api.changeLikeCardStatus(cardId, true).then(function (res) {
          newCard.getLikeCount(res.likes.length);
        }).then(function () {
          newCard.dislikeCard();
        }).catch(function (err) {
          return console.log("Error! " + err);
        });
      } else {
        api.changeLikeCardStatus(cardId, false).then(function (res) {
          newCard.getLikeCount(res.likes.length);
        }).then(function () {
          newCard.likeCard();
        }).catch(function (err) {
          return console.log("Error! " + err);
        });
      }
    },
    myId: myId
  });
  var cardElement = newCard.generateCard();
  return cardElement;
} //Create Form Validation


var editProfileValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(_scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.config, _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.editProfileForm);
var addCardValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(_scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.config, _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.addCardForm);
var avatarFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__.default(_scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.config, _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.avatarForm); //Fire em up

editProfileValidator.enableValidation();
addCardValidator.enableValidation();
avatarFormValidator.enableValidation();
var imagePopup = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__.default(".popup__image");
imagePopup.setEventListeners();
var editProfilePopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__.default(".popup_edit", function () {
  handleLoad(true, _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.edProfPopup, "Saving...");
  api.setUserInfo({
    name: _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputName.value,
    about: _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputTitle.value
  }).then(function (res) {
    userInfo.setUserInfo({
      name: res.name,
      about: res.about
    });
    editProfilePopup.close();
    handleLoad(true, _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.edProfPopup, "Save");
  }).catch(function (err) {
    return console.log("Error! " + err);
  });
  editProfilePopup.close();
});
editProfilePopup.setEventListeners();
_scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.editBtn.addEventListener("click", function () {
  var _userInfo$getUserInfo = userInfo.getUserInfo(),
      name = _userInfo$getUserInfo.name,
      title = _userInfo$getUserInfo.title;

  _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputName.value = name;
  _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.inputTitle.value = title;
  editProfileValidator.resetValidation();
  editProfilePopup.open();
});
var avPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__.default(".popup__avatar", function (data) {
  handleLoad(true, _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.avatarPopup, "Saving...");
  api.setAvatar({
    avatar: data.link
  }).then(function (res) {
    userInfo.changeAvatar(res.avatar);
    avPopup.close();
  }).catch(function (err) {
    return console.log("Error! " + err);
  });
});
avPopup.setEventListeners();
_scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.avEditBtn.addEventListener("click", function () {
  avatarFormValidator.resetValidation();
  avPopup.open();
  handleLoad(false, _scripts_constants_js__WEBPACK_IMPORTED_MODULE_8__.avatarPopup, "Save");
});

/***/ }),

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editBtn": () => /* binding */ editBtn,
/* harmony export */   "addBtn": () => /* binding */ addBtn,
/* harmony export */   "inputName": () => /* binding */ inputName,
/* harmony export */   "inputTitle": () => /* binding */ inputTitle,
/* harmony export */   "currentName": () => /* binding */ currentName,
/* harmony export */   "currentTitle": () => /* binding */ currentTitle,
/* harmony export */   "cardTemplate": () => /* binding */ cardTemplate,
/* harmony export */   "editProfileForm": () => /* binding */ editProfileForm,
/* harmony export */   "addCardForm": () => /* binding */ addCardForm,
/* harmony export */   "gridList": () => /* binding */ gridList,
/* harmony export */   "delPopup": () => /* binding */ delPopup,
/* harmony export */   "avatarPopup": () => /* binding */ avatarPopup,
/* harmony export */   "addPopup": () => /* binding */ addPopup,
/* harmony export */   "edProfPopup": () => /* binding */ edProfPopup,
/* harmony export */   "avatarForm": () => /* binding */ avatarForm,
/* harmony export */   "avEditBtn": () => /* binding */ avEditBtn,
/* harmony export */   "config": () => /* binding */ config
/* harmony export */ });
var editBtn = document.querySelector(".profile__editbtn");
var addBtn = document.querySelector(".profile__addbtn");
var inputName = document.querySelector("#inputName");
var inputTitle = document.querySelector("#inputTitle");
var currentName = document.querySelector(".profile__name");
var currentTitle = document.querySelector(".profile__title");
var cardTemplate = document.querySelector("#cardTemplate").content;
var editProfileForm = document.querySelector(".popup__form-selector");
var addCardForm = document.querySelector(".popup__card_form-selector");
var gridList = document.querySelector(".grid__list");
var delPopup = document.querySelector(".popup__delete");
var avatarPopup = document.querySelector(".popup__avatar");
var addPopup = document.querySelector(".popup__card");
var edProfPopup = document.querySelector(".popup_edit");
var avatarForm = document.querySelector(".popup__avatar_form-selector");
var avEditBtn = document.querySelector(".profile__avatar-edit");
var config = {
  formSelector: ".form",
  inputSelector: ".form_input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__card_submit-disabled",
  inputErrorClass: "popup__form_input_type_error"
};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9scy8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9scy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL2xzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL2xzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL2xzLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvc2NyaXB0cy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vbHMvLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovL2xzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9scy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbHMvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkFwaSIsImJhc2VVcmwiLCJoZWFkZXJzIiwiX2Jhc2VVcmwiLCJfaGVhZGVycyIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXNUZXh0IiwiZmV0Y2giLCJ0aGVuIiwiX2NoZWNrUmVzcG9uc2UiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJhbGwiLCJnZXRVc2VySW5mbyIsImdldEluaXRpYWxDYXJkcyIsIm5hbWUiLCJhYm91dCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibGluayIsImNhcmRJZCIsImF2YXRhciIsImxpa2UiLCJ3aGljaE1ldGhvZCIsIkNhcmQiLCJjYXJkRGF0YSIsInRlbXBsYXRlRWxlbWVudCIsImhhbmRsZUNhcmRJbWdDbGljayIsImhhbmRsZURlbGV0ZUNsaWNrIiwiaGFuZGxlTGlrZXMiLCJteUlkIiwiX25hbWUiLCJfbGluayIsIl9saWtlcyIsImxpa2VzIiwiX3RlbXBsYXRlRWxlbWVudCIsIl9oYW5kbGVDYXJkSW1nQ2xpY2siLCJfaWQiLCJfaGFuZGxlRGVsZXRlQ2xpY2siLCJfaGFuZGxlTGlrZXMiLCJfbXlJZCIsIl9jYXJkT3duZXIiLCJvd25lciIsIl9jYXJkRWxlbWVudCIsIl9nZXRUZW1wbGF0ZSIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsImV2dCIsInRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpZCIsImUiLCJfdGV4dCIsInJlbW92ZSIsImNvbnRhaW5zIiwiZm9yRWFjaCIsImFkZCIsImNvdW50IiwiX2xpa2VzQ3QiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwiZGlzcGxheSIsIl9jYXJkSW1hZ2UiLCJnZXRMaWtlQ291bnQiLCJsZW5ndGgiLCJzaG93TGlrZWQiLCJzcmMiLCJhbHQiLCJfcmVtb3ZlRGVsQnRuIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzT2JqZWN0IiwiZm9ybUVsZW1lbnQiLCJfc2V0dGluZ3MiLCJfZm9ybUVsZW1lbnQiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfaW5wdXRzIiwicXVlcnlTZWxlY3RvckFsbCIsIl9zdWJCdXR0b24iLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsImVycm9yRWxlbWVudCIsImlucHV0RXJyb3JDbGFzcyIsIl9oYXNJbnZhbGlkSW5wdXQiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiZGlzYWJsZWQiLCJzb21lIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9zaG93SW5wdXRFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hpZGVJbnB1dEVycm9yIiwiaW5wdXRzTGlzdCIsIkFycmF5IiwiZnJvbSIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwIiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXkiLCJjbG9zZSIsInJlcXVpcmUiLCJkZWZhdWx0IiwiUG9wdXBXaXRoRm9ybSIsInN1Ym1pdEhhbmRsZXIiLCJfZm9ybSIsIl9zdWJtaXRIYW5kbGVyIiwicmVwbFN1Ym1pdEhhbmRsZXIiLCJ2YWx1ZXMiLCJ2YWx1ZSIsInJlc2V0IiwiX2dldElucHV0VmFsdWVzIiwiUG9wdXBXaXRoSW1hZ2UiLCJfaW1hZ2UiLCJfY2FwdGlvbiIsIm5ld1NyYyIsIm5ld0NhcHQiLCJTZWN0aW9uIiwiY2xhc3NTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfYXJyYXkiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiaXRlbSIsImVsZW1lbnQiLCJwcmVwZW5kIiwiVXNlckluZm8iLCJuYW1lU2VsZWN0b3IiLCJ0aXRsZVNlbGVjdG9yIiwiYXZhdGFyU2VsZWN0b3IiLCJfbmFtZUVsIiwiX3RpdGxlRWwiLCJfYXZhdGFyRWwiLCJ0aXRsZSIsIl91c2VySW5mb3MiLCJlbGVtZW50cyIsImFwaSIsImF1dGhvcml6YXRpb24iLCJ1c2VySW5mbyIsImhhbmRsZUxvYWQiLCJpc0xvYWRpbmciLCJwb3B1cCIsInRleHQiLCJnZXRBbGxJbmZvIiwidXNlckRhdGEiLCJpbml0aWFsQ2FyZERhdGEiLCJzZXRVc2VySW5mbyIsImNoYW5nZUF2YXRhciIsImluaXRpYWxDYXJkTGlzdCIsImNhcmRFbCIsImNyZWF0ZU5ld0NhcmQiLCJhZGRJdGVtIiwicmVuZGVySXRlbXMiLCJhZGRDYXJkUG9wdXAiLCJhZGRQb3B1cCIsInBsYWNlTmFtZSIsInBsYWNlRmlsZU5hbWUiLCJhZGRDYXJkIiwiY2FyZEVsMiIsInNldEV2ZW50TGlzdGVuZXJzIiwiYWRkQnRuIiwiYWRkQ2FyZFZhbGlkYXRvciIsInJlc2V0VmFsaWRhdGlvbiIsIm9wZW4iLCJkZWxldGVQb3B1cCIsIm5ld0NhcmQiLCJpbWFnZVBvcHVwIiwiZGVsUG9wdXAiLCJyZW1vdmVDYXJkIiwiZGVsZXRlQ2FyZCIsImlzTGlrZWQiLCJjaGFuZ2VMaWtlQ2FyZFN0YXR1cyIsImRpc2xpa2VDYXJkIiwibGlrZUNhcmQiLCJnZW5lcmF0ZUNhcmQiLCJlZGl0UHJvZmlsZVZhbGlkYXRvciIsImNvbmZpZyIsImVkaXRQcm9maWxlRm9ybSIsImFkZENhcmRGb3JtIiwiYXZhdGFyRm9ybVZhbGlkYXRvciIsImF2YXRhckZvcm0iLCJlbmFibGVWYWxpZGF0aW9uIiwiZWRpdFByb2ZpbGVQb3B1cCIsImVkUHJvZlBvcHVwIiwiaW5wdXROYW1lIiwiaW5wdXRUaXRsZSIsImVkaXRCdG4iLCJhdlBvcHVwIiwiZGF0YSIsImF2YXRhclBvcHVwIiwic2V0QXZhdGFyIiwiYXZFZGl0QnRuIiwiY3VycmVudE5hbWUiLCJjdXJyZW50VGl0bGUiLCJjYXJkVGVtcGxhdGUiLCJncmlkTGlzdCIsImZvcm1TZWxlY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsRztBQUNKLHFCQUFrQztBQUFBLFFBQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxRQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQUE7O0FBQ2hDLFNBQUtDLFFBQUwsR0FBZ0JGLE9BQWhCO0FBQ0EsU0FBS0csUUFBTCxHQUFnQkYsT0FBaEI7QUFD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Q0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFwQjtBQUNBLElBQU1tSixVQUFVLEdBQUdwSixRQUFRLENBQUNDLGFBQVQsQ0FDeEIsOEJBRHdCLENBQW5CO0FBR0EsSUFBTThKLFNBQVMsR0FBRy9KLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBbEI7QUFDQSxJQUFNK0ksTUFBTSxHQUFHO0FBQ3BCb0IsY0FBWSxFQUFFLE9BRE07QUFFcEJqSSxlQUFhLEVBQUUsYUFGSztBQUdwQkksc0JBQW9CLEVBQUUsZUFIRjtBQUlwQk0scUJBQW1CLEVBQUUsNkJBSkQ7QUFLcEJGLGlCQUFlLEVBQUU7QUFMRyxDQUFmLEM7Ozs7Ozs7Ozs7O0FDbEJQOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3Rvcih7IGJhc2VVcmwsIGhlYWRlcnMgfSkge1xuICAgIHRoaXMuX2Jhc2VVcmwgPSBiYXNlVXJsO1xuICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xuICB9XG4gIF9jaGVja1Jlc3BvbnNlKHJlcykge1xuICAgIHJldHVybiByZXMub2sgPyByZXMuanNvbigpIDogUHJvbWlzZS5yZWplY3QoXCJFcnJvciFcIiArIHJlcy5zdGF0dXNUZXh0KTtcbiAgfVxuXG4gIGdldEluaXRpYWxDYXJkcygpIHtcbiAgICByZXR1cm4gZmV0Y2godGhpcy5fYmFzZVVybCArIFwiL2NhcmRzXCIsIHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgfSlcbiAgICAgIC50aGVuKHRoaXMuX2NoZWNrUmVzcG9uc2UpXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cbiAgX2NoZWNrUmVzcG9uc2UocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5vayA/IHJlcy5qc29uKCkgOiBQcm9taXNlLnJlamVjdChcIkVycm9yIVwiICsgcmVzLnN0YXR1c1RleHQpO1xuICB9XG5cbiAgLy9HRVQgaHR0cHM6Ly9hcm91bmQubm9tb3JlcGFydGllcy5jby92MS9ncm91cElkL3VzZXJzL21lXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHJldHVybiBmZXRjaCh0aGlzLl9iYXNlVXJsICsgXCIvdXNlcnMvbWVcIiwge1xuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KVxuICAgICAgLnRoZW4odGhpcy5fY2hlY2tSZXNwb25zZSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfVxuICBnZXRBbGxJbmZvKCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbdGhpcy5nZXRVc2VySW5mbygpLCB0aGlzLmdldEluaXRpYWxDYXJkcygpXSk7XG4gIH1cblxuICAvL1BBVENIIGh0dHBzOi8vYXJvdW5kLm5vbW9yZXBhcnRpZXMuY28vdjEvZ3JvdXBJZC91c2Vycy9tZVxuICBzZXRVc2VySW5mbyh7IG5hbWUsIGFib3V0IH0pIHtcbiAgICByZXR1cm4gZmV0Y2godGhpcy5fYmFzZVVybCArIFwiL3VzZXJzL21lXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgYWJvdXQsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4odGhpcy5fY2hlY2tSZXNwb25zZSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfVxuICAvL1BPU1QgaHR0cHM6Ly9hcm91bmQubm9tb3JlcGFydGllcy5jby92MS9ncm91cElkL2NhcmRzXG4gIGFkZENhcmQoeyBuYW1lLCBsaW5rIH0pIHtcbiAgICByZXR1cm4gZmV0Y2godGhpcy5fYmFzZVVybCArIFwiL2NhcmRzXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBsaW5rLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKHRoaXMuX2NoZWNrUmVzcG9uc2UpXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH1cbiAgcmVtb3ZlQ2FyZChjYXJkSWQpIHtcbiAgICAvL2ZldGNoIGNhcmRzICsgY2FyZGlkXG4gICAgcmV0dXJuIGZldGNoKHRoaXMuX2Jhc2VVcmwgKyBcIi9jYXJkcy9cIiArIGNhcmRJZCwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KVxuICAgICAgLnRoZW4odGhpcy5fY2hlY2tSZXNwb25zZSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgfVxuICAvL1BBVENIIGh0dHBzOi8vYXJvdW5kLm5vbW9yZXBhcnRpZXMuY28vdjEvZ3JvdXBJZC91c2Vycy9tZS9hdmF0YXJcbiAgc2V0QXZhdGFyKHsgYXZhdGFyIH0pIHtcbiAgICByZXR1cm4gZmV0Y2godGhpcy5fYmFzZVVybCArIFwiL3VzZXJzL21lL2F2YXRhclwiLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGF2YXRhcixcbiAgICAgIH0pLFxuICAgIH0pXG4gICAgICAudGhlbih0aGlzLl9jaGVja1Jlc3BvbnNlKVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKFwiRXJyb3IhIFwiICsgZXJyKSk7XG4gIH1cbiAgLy8gUFVUIGh0dHBzOi8vYXJvdW5kLm5vbW9yZXBhcnRpZXMuY28vdjEvZ3JvdXBJZC9jYXJkcy9saWtlcy9jYXJkSWRcbiAgLy8gREVMRVRFIGh0dHBzOi8vYXJvdW5kLm5vbW9yZXBhcnRpZXMuY28vdjEvZ3JvdXBJZC9jYXJkcy9saWtlcy9jYXJkSWRcbiAgY2hhbmdlTGlrZUNhcmRTdGF0dXMoY2FyZElkLCBsaWtlKSB7XG4gICAgLy9QVVQgQU5EIERFTEVURVxuICAgIGNvbnN0IHdoaWNoTWV0aG9kID0gbGlrZSA/IFwiREVMRVRFXCIgOiBcIlBVVFwiO1xuICAgIHJldHVybiBmZXRjaCh0aGlzLl9iYXNlVXJsICsgXCIvY2FyZHMvbGlrZXMvXCIgKyBjYXJkSWQsIHtcbiAgICAgIG1ldGhvZDogd2hpY2hNZXRob2QsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgIH0pXG4gICAgICAudGhlbih0aGlzLl9jaGVja1Jlc3BvbnNlKVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBBcGk7XG4iLCJjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGNhcmREYXRhLFxuICAgIHRlbXBsYXRlRWxlbWVudCxcbiAgICBoYW5kbGVDYXJkSW1nQ2xpY2ssXG4gICAgaGFuZGxlRGVsZXRlQ2xpY2ssXG4gICAgaGFuZGxlTGlrZXMsXG4gICAgbXlJZCxcbiAgfSkge1xuICAgIC8vIHRoZSB0ZXh0IGFuZCB0aGUgaW1hZ2UgYXJlIHByaXZhdGUgZmllbGRzLFxuICAgIC8vIHRoZXkncmUgb25seSBuZWVkZWQgaW5zaWRlIHRoZSBjbGFzc1xuICAgIHRoaXMuX25hbWUgPSBjYXJkRGF0YS5uYW1lO1xuICAgIHRoaXMuX2xpbmsgPSBjYXJkRGF0YS5saW5rO1xuICAgIHRoaXMuX2xpa2VzID0gY2FyZERhdGEubGlrZXM7XG4gICAgdGhpcy5fdGVtcGxhdGVFbGVtZW50ID0gdGVtcGxhdGVFbGVtZW50O1xuICAgIHRoaXMuX2hhbmRsZUNhcmRJbWdDbGljayA9IGhhbmRsZUNhcmRJbWdDbGljaztcbiAgICB0aGlzLl9pZCA9IGNhcmREYXRhLl9pZDtcbiAgICB0aGlzLl9oYW5kbGVEZWxldGVDbGljayA9IGhhbmRsZURlbGV0ZUNsaWNrO1xuICAgIHRoaXMuX2hhbmRsZUxpa2VzID0gaGFuZGxlTGlrZXM7XG4gICAgdGhpcy5fbXlJZCA9IG15SWQ7XG4gICAgdGhpcy5fY2FyZE93bmVyID0gY2FyZERhdGEub3duZXI7XG4gICAgdGhpcy5faWQgPSBjYXJkRGF0YS5faWQ7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICB9XG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl90ZW1wbGF0ZUVsZW1lbnQpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2NhcmRcIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xuICB9XG5cbiAgX2hhbmRsZUxpa2UoZXZ0KSB7XG4gICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiZ3JpZF9faGVhcnRfYWN0aXZlXCIpO1xuICB9XG4gIGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAvL1NlYXJjaCBmb3IgRWxlbWVudHNcbiAgICB0aGlzLl9jYXJkRWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9faGVhcnRcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVMaWtlcyh0aGlzLmlkKCkpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLl9jYXJkRWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9fYnRuX2RlbFwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVEZWxldGVDbGljayh0aGlzLmlkKCkpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLl9jYXJkRWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9faW1hZ2VcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgICAgdGhpcy5faGFuZGxlQ2FyZEltZ0NsaWNrKHRoaXMuX2xpbmssIHRoaXMuX3RleHQpXG4gICAgICApO1xuICB9XG4gIGRlbGV0ZUNhcmQoKSB7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucmVtb3ZlKFwiLmdyaWRfX2NhcmRcIik7XG4gIH1cblxuICBfaGFuZGxlRGVsZXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9oYW5kbGVEZWxldGVDbGljayh0aGlzLmlkKCkpO1xuICB9XG4gIGlzTGlrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5ncmlkX19oZWFydFwiKVxuICAgICAgLmNsYXNzTGlzdC5jb250YWlucyhcImdyaWRfX2hlYXJ0X2FjdGl2ZVwiKTtcbiAgfVxuXG4gIHNob3dMaWtlZChteUlkKSB7XG4gICAgdGhpcy5fbGlrZXMuZm9yRWFjaCgobGlrZSkgPT4ge1xuICAgICAgaWYgKGxpa2UuX2lkID09PSBteUlkKSB7XG4gICAgICAgIHRoaXMuX2NhcmRFbGVtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9faGVhcnRcIilcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcImdyaWRfX2hlYXJ0X2FjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxpa2VDYXJkKCkge1xuICAgIHRoaXMuX2NhcmRFbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5ncmlkX19oZWFydFwiKVxuICAgICAgLmNsYXNzTGlzdC5hZGQoXCJncmlkX19oZWFydF9hY3RpdmVcIik7XG4gIH1cbiAgZ2V0TGlrZUNvdW50KGNvdW50KSB7XG4gICAgdGhpcy5fbGlrZXNDdC50ZXh0Q29udGVudCA9IGNvdW50O1xuICB9XG4gIF9yZW1vdmVEZWxCdG4oKSB7XG4gICAgaWYgKHRoaXMuX2NhcmRPd25lci5faWQgIT09IHRoaXMuX215SWQpIHtcbiAgICAgIHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9fYnRuX2RlbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9XG5cbiAgZGlzbGlrZUNhcmQoKSB7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2hlYXJ0XCIpXG4gICAgICAuY2xhc3NMaXN0LnJlbW92ZShcImdyaWRfX2hlYXJ0X2FjdGl2ZVwiKTtcbiAgfVxuICBnZW5lcmF0ZUNhcmQoKSB7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpLmNsb25lTm9kZSh0cnVlKTtcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2NhcHRpb25cIikudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuICAgIHRoaXMuX2NhcmRJbWFnZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9faW1hZ2VcIik7XG4gICAgdGhpcy5fbGlrZXNDdCA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JpZF9fbGlrZS1jb3VudFwiKTtcbiAgICB0aGlzLmdldExpa2VDb3VudCh0aGlzLl9saWtlcy5sZW5ndGgpO1xuICAgIHRoaXMuc2hvd0xpa2VkKHRoaXMuX215SWQpO1xuICAgIHRoaXMuX2NhcmRJbWFnZS5zcmMgPSB0aGlzLl9saW5rO1xuICAgIHRoaXMuX2NhcmRJbWFnZS5hbHQgPSB0aGlzLl9uYW1lO1xuICAgIHRoaXMuX2xpa2VzQ3QudGV4dENvbnRlbnQgPSB0aGlzLl9saWtlcy5sZW5ndGg7XG4gICAgdGhpcy5fcmVtb3ZlRGVsQnRuKCk7XG5cbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2NhcmRFbGVtZW50O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIiwiY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzT2JqZWN0LCBmb3JtRWxlbWVudCkge1xuICAgIC8vIHRoZSB0ZXh0IGFuZCB0aGUgaW1hZ2UgYXJlIHByaXZhdGUgZmllbGRzLFxuICAgIC8vIHRoZXkncmUgb25seSBuZWVkZWQgaW5zaWRlIHRoZSBjbGFzc1xuICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3NPYmplY3Q7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3NPYmplY3QuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9pbnB1dHMgPSBbLi4udGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKV07XG4gICAgdGhpcy5fc3ViQnV0dG9uID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIHRoaXMuX3NldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yXG4gICAgKTtcbiAgfVxuXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkge1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3MpO1xuICB9XG5cbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgfVxuXG4gIF90b2dnbGVCdXR0b25TdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KHRoaXMuX2lucHV0cykpIHtcbiAgICAgIHRoaXMuX3N1YkJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX3NldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgdGhpcy5fc3ViQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3ViQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICB0aGlzLl9zdWJCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XG4gIC8vICAgY29uc3QgaXNGb3JtVmFsaWQgPSB0aGlzLl9pbnB1dHMuZXZlcnkoKGlucHV0KSA9PiB7XG4gIC8vICAgICByZXR1cm4gaW5wdXQudmFsaWRpdHkudmFsaWQ7XG4gIC8vICAgfSk7XG4gIC8vICAgaWYgKGlzRm9ybVZhbGlkKSB7XG4gIC8vICAgICB0aGlzLl9idXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgLy8gICAgIHRoaXMuX2J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICB0aGlzLl9idXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgLy8gICAgIHRoaXMuX2J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgX2hhc0ludmFsaWRJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRzLnNvbWUoKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XG4gICAgfSk7XG4gIH1cblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIC8vTWFrZSBhbiBhcnJheSBvZiBhbGwgdGhlIGlucHV0cyB0aGF0IGFyZSBpbiB0aGUgZm9ybUVsZW1lbnRcbiAgICBjb25zdCBpbnB1dHNMaXN0ID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2V0dGluZ3MuaW5wdXRTZWxlY3RvcilcbiAgICApO1xuXG4gICAgLy9HbyB0aHJvdWdoIGVhY2ggaW5wdXQgaW5kaXZpZHVhbGx5XG4gICAgaW5wdXRzTGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIC8vSWYgdGhhdCBpbnB1dCBpcyB0b3VjaGVkLCB3ZSBpbW1lZGlhdGVseSBjaGVjayB2YWxpZGl0eVxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpOyAvLyBTdGVwIDNcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTsgLy8gU3RlcCA0XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX2Zvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnModGhpcy5fZm9ybUVsZW1lbnQsIHRoaXMuX3NldHRpbmdzKTtcbiAgfVxuICByZXNldFZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dCk7XG4gICAgfSk7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xuIiwiY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF92aXNpYmxlXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX3Zpc2libGVcIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcbiAgfVxuICBfaGFuZGxlRXNjQ2xvc2UoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cF9fY2xvc2VcIikgfHxcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfdmlzaWJsZVwiKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cDtcbiIsImNvbnN0IHsgZGVmYXVsdDogUG9wdXAgfSA9IHJlcXVpcmUoXCIuL1BvcHVwXCIpO1xuXG5jbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBzdWJtaXRIYW5kbGVyKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuXG4gICAgdGhpcy5fc3VibWl0SGFuZGxlciA9IHN1Ym1pdEhhbmRsZXI7XG4gICAgdGhpcy5fc3VibWl0SGFuZGxlciA9IHRoaXMuX3N1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9pbnB1dHMgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybV9pbnB1dFwiKTtcbiAgfVxuICByZXBsU3VibWl0SGFuZGxlcihyZXBsU3VibWl0SGFuZGxlcikge1xuICAgIHRoaXMuX3N1Ym1pdEhhbmRsZXIgPSByZXBsU3VibWl0SGFuZGxlcjtcbiAgfVxuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB7fTtcbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBzdXBlci5jbG9zZSgpO1xuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9zdWJtaXRIYW5kbGVyKHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgIH0pO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQb3B1cFdpdGhGb3JtO1xuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2ltYWdlX2FjdGl2ZVwiKTtcbiAgICB0aGlzLl9jYXB0aW9uID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2VfY2FwdFwiKTtcbiAgfVxuICBvcGVuKG5ld1NyYywgbmV3Q2FwdCkge1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgICB0aGlzLl9pbWFnZS5zcmMgPSBuZXdTcmM7XG4gICAgdGhpcy5fY2FwdGlvbi50ZXh0Q29udGVudCA9IG5ld0NhcHQ7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBvcHVwV2l0aEltYWdlO1xuIiwiY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNsYXNzU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9hcnJheSA9IGl0ZW1zO1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc1NlbGVjdG9yKTtcbiAgfVxuICByZW5kZXJJdGVtcygpIHtcbiAgICB0aGlzLl9hcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcbiAgICB9KTtcbiAgfVxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IG5hbWVTZWxlY3RvciwgdGl0bGVTZWxlY3RvciwgYXZhdGFyU2VsZWN0b3IgfSkge1xuICAgIHRoaXMuX25hbWVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZVNlbGVjdG9yKTtcbiAgICB0aGlzLl90aXRsZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aXRsZVNlbGVjdG9yKTtcbiAgICB0aGlzLl9hdmF0YXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXZhdGFyU2VsZWN0b3IpO1xuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuX25hbWVFbC50ZXh0Q29udGVudDtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX3RpdGxlRWwudGV4dENvbnRlbnQ7XG4gICAgdGhpcy5fdXNlckluZm9zID0geyBuYW1lLCB0aXRsZSB9O1xuICAgIHJldHVybiB0aGlzLl91c2VySW5mb3M7XG4gIH1cblxuICBzZXRVc2VySW5mbyhlbGVtZW50cykge1xuICAgIHRoaXMuX25hbWVFbC50ZXh0Q29udGVudCA9IGVsZW1lbnRzLm5hbWU7XG4gICAgdGhpcy5fdGl0bGVFbC50ZXh0Q29udGVudCA9IGVsZW1lbnRzLmFib3V0O1xuICB9XG4gIGNoYW5nZUF2YXRhcihlbGVtZW50cykge1xuICAgIHRoaXMuX2F2YXRhckVsLnNyYyA9IGVsZW1lbnRzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJbmZvO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xuaW1wb3J0IEFwaSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcGkuanNcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuaW1wb3J0IHtcbiAgZWRpdEJ0bixcbiAgYWRkQnRuLFxuICBpbnB1dE5hbWUsXG4gIGlucHV0VGl0bGUsXG4gIGVkaXRQcm9maWxlRm9ybSxcbiAgYWRkQ2FyZEZvcm0sXG4gIGNvbmZpZyxcbiAgYWRkUG9wdXAsXG4gIGF2RWRpdEJ0bixcbiAgYXZhdGFyRm9ybSxcbiAgZGVsUG9wdXAsXG4gIGF2YXRhclBvcHVwLFxuICBlZFByb2ZQb3B1cCxcbn0gZnJvbSBcIi4uL3NjcmlwdHMvY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcbmxldCBteUlkO1xuXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcbiAgYmFzZVVybDogXCJodHRwczovL2Fyb3VuZC5ub21vcmVwYXJ0aWVzLmNvL3YxL2dyb3VwLThcIixcbiAgaGVhZGVyczoge1xuICAgIGF1dGhvcml6YXRpb246IFwiZDY4NzMyMGMtNDJhNi00NjNhLTlmMTgtOGMyODFiMjA3NDYwXCIsXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59KTtcblxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xuICBuYW1lU2VsZWN0b3I6IFwiLnByb2ZpbGVfX25hbWVcIixcbiAgdGl0bGVTZWxlY3RvcjogXCIucHJvZmlsZV9fdGl0bGVcIixcbiAgYXZhdGFyU2VsZWN0b3I6IFwiLnByb2ZpbGVfX2F2YXRhclwiLFxufSk7XG5cbmZ1bmN0aW9uIGhhbmRsZUxvYWQoaXNMb2FkaW5nLCBwb3B1cCwgdGV4dCkge1xuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcG9wdXAucXVlcnlTZWxlY3RvcihcIi5mb3JtX19zdWJtaXRcIikudGV4dENvbnRlbnQgPSB0ZXh0O1xuICB9IGVsc2Uge1xuICAgIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fc3VibWl0XCIpLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfVxufVxuXG5hcGlcbiAgLmdldEFsbEluZm8oKVxuICAudGhlbigoW3VzZXJEYXRhLCBpbml0aWFsQ2FyZERhdGFdKSA9PiB7XG4gICAgbXlJZCA9IHVzZXJEYXRhLl9pZDtcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyh7IG5hbWU6IHVzZXJEYXRhLm5hbWUsIGFib3V0OiB1c2VyRGF0YS5hYm91dCB9KTtcbiAgICB1c2VySW5mby5jaGFuZ2VBdmF0YXIodXNlckRhdGEuYXZhdGFyKTtcblxuICAgIGNvbnN0IGluaXRpYWxDYXJkTGlzdCA9IG5ldyBTZWN0aW9uKFxuICAgICAge1xuICAgICAgICBpdGVtczogaW5pdGlhbENhcmREYXRhLFxuICAgICAgICByZW5kZXJlcjogKGNhcmREYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2FyZEVsID0gY3JlYXRlTmV3Q2FyZChjYXJkRGF0YSwgbXlJZCk7XG4gICAgICAgICAgaW5pdGlhbENhcmRMaXN0LmFkZEl0ZW0oY2FyZEVsKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBcIi5ncmlkX19saXN0XCJcbiAgICApO1xuICAgIGluaXRpYWxDYXJkTGlzdC5yZW5kZXJJdGVtcygpO1xuXG4gICAgY29uc3QgYWRkQ2FyZFBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXBfX2NhcmRcIiwgKHZhbHVlcykgPT4ge1xuICAgICAgaGFuZGxlTG9hZCh0cnVlLCBhZGRQb3B1cCwgXCJDcmVhdGluZy4uLlwiKTtcbiAgICAgIGNvbnN0IGNhcmREYXRhID0ge1xuICAgICAgICBuYW1lOiB2YWx1ZXMucGxhY2VOYW1lLFxuICAgICAgICBsaW5rOiB2YWx1ZXMucGxhY2VGaWxlTmFtZSxcbiAgICAgIH07XG4gICAgICBhcGlcbiAgICAgICAgLmFkZENhcmQoY2FyZERhdGEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zdCBjYXJkRWwyID0gY3JlYXRlTmV3Q2FyZChyZXMsIG15SWQpO1xuICAgICAgICAgIGluaXRpYWxDYXJkTGlzdC5hZGRJdGVtKGNhcmRFbDIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coXCJFcnJvciFcIiArIGVycikpO1xuXG4gICAgICBhZGRDYXJkUG9wdXAuY2xvc2UoKTtcbiAgICAgIGhhbmRsZUxvYWQoZmFsc2UsIGFkZFBvcHVwLCBcIkNyZWF0ZVwiKTtcbiAgICB9KTtcbiAgICBhZGRDYXJkUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFkZENhcmRWYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XG4gICAgICBhZGRDYXJkUG9wdXAub3BlbigpO1xuICAgIH0pO1xuICB9KVxuICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbmNvbnN0IGRlbGV0ZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXBfX2RlbGV0ZVwiLCAodmFsdWVzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHZhbHVlcyk7XG59KTtcbmRlbGV0ZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0NhcmQoY2FyZERhdGEsIG15SWQpIHtcbiAgY29uc3QgbmV3Q2FyZCA9IG5ldyBDYXJkKHtcbiAgICBjYXJkRGF0YSxcbiAgICB0ZW1wbGF0ZUVsZW1lbnQ6IFwiI2NhcmRUZW1wbGF0ZVwiLFxuICAgIGhhbmRsZUNhcmRJbWdDbGljazogKCkgPT4ge1xuICAgICAgaW1hZ2VQb3B1cC5vcGVuKGNhcmREYXRhLmxpbmssIGNhcmREYXRhLm5hbWUpO1xuICAgIH0sXG4gICAgaGFuZGxlRGVsZXRlQ2xpY2s6IChjYXJkSWQpID0+IHtcbiAgICAgIGRlbGV0ZVBvcHVwLm9wZW4oKTtcbiAgICAgIGRlbGV0ZVBvcHVwLnJlcGxTdWJtaXRIYW5kbGVyKCgpID0+IHtcbiAgICAgICAgLy9yZW1vdmUgdGhlIGNhcmRcbiAgICAgICAgaGFuZGxlTG9hZCh0cnVlLCBkZWxQb3B1cCwgXCJEZWxldGluZy4uLlwiKTtcbiAgICAgICAgYXBpXG4gICAgICAgICAgLnJlbW92ZUNhcmQoY2FyZElkKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIG5ld0NhcmQuZGVsZXRlQ2FyZCgpO1xuICAgICAgICAgICAgZGVsZXRlUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWQodHJ1ZSwgZGVsUG9wdXAsIFwiWWVzXCIpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKFwiRXJyb3IhIFwiICsgZXJyKSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGhhbmRsZUxpa2VzOiAoY2FyZElkKSA9PiB7XG4gICAgICBpZiAobmV3Q2FyZC5pc0xpa2VkKG15SWQpKSB7XG4gICAgICAgIGFwaVxuICAgICAgICAgIC5jaGFuZ2VMaWtlQ2FyZFN0YXR1cyhjYXJkSWQsIHRydWUpXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgbmV3Q2FyZC5nZXRMaWtlQ291bnQocmVzLmxpa2VzLmxlbmd0aCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBuZXdDYXJkLmRpc2xpa2VDYXJkKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coXCJFcnJvciEgXCIgKyBlcnIpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFwaVxuICAgICAgICAgIC5jaGFuZ2VMaWtlQ2FyZFN0YXR1cyhjYXJkSWQsIGZhbHNlKVxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIG5ld0NhcmQuZ2V0TGlrZUNvdW50KHJlcy5saWtlcy5sZW5ndGgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbmV3Q2FyZC5saWtlQ2FyZCgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKFwiRXJyb3IhIFwiICsgZXJyKSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBteUlkLFxuICB9KTtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXdDYXJkLmdlbmVyYXRlQ2FyZCgpO1xuICByZXR1cm4gY2FyZEVsZW1lbnQ7XG59XG5cbi8vQ3JlYXRlIEZvcm0gVmFsaWRhdGlvblxuY29uc3QgZWRpdFByb2ZpbGVWYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIGVkaXRQcm9maWxlRm9ybSk7XG5jb25zdCBhZGRDYXJkVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBhZGRDYXJkRm9ybSk7XG5jb25zdCBhdmF0YXJGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBhdmF0YXJGb3JtKTtcblxuLy9GaXJlIGVtIHVwXG5lZGl0UHJvZmlsZVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5hZGRDYXJkVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcbmF2YXRhckZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5jb25zdCBpbWFnZVBvcHVwID0gbmV3IFBvcHVwV2l0aEltYWdlKFwiLnBvcHVwX19pbWFnZVwiKTtcbmltYWdlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuY29uc3QgZWRpdFByb2ZpbGVQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiLnBvcHVwX2VkaXRcIiwgKCkgPT4ge1xuICBoYW5kbGVMb2FkKHRydWUsIGVkUHJvZlBvcHVwLCBcIlNhdmluZy4uLlwiKTtcblxuICBhcGlcbiAgICAuc2V0VXNlckluZm8oe1xuICAgICAgbmFtZTogaW5wdXROYW1lLnZhbHVlLFxuICAgICAgYWJvdXQ6IGlucHV0VGl0bGUudmFsdWUsXG4gICAgfSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICB1c2VySW5mby5zZXRVc2VySW5mbyh7IG5hbWU6IHJlcy5uYW1lLCBhYm91dDogcmVzLmFib3V0IH0pO1xuICAgICAgZWRpdFByb2ZpbGVQb3B1cC5jbG9zZSgpO1xuICAgICAgaGFuZGxlTG9hZCh0cnVlLCBlZFByb2ZQb3B1cCwgXCJTYXZlXCIpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKFwiRXJyb3IhIFwiICsgZXJyKSk7XG4gIGVkaXRQcm9maWxlUG9wdXAuY2xvc2UoKTtcbn0pO1xuXG5lZGl0UHJvZmlsZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbmVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgeyBuYW1lLCB0aXRsZSB9ID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcbiAgaW5wdXROYW1lLnZhbHVlID0gbmFtZTtcbiAgaW5wdXRUaXRsZS52YWx1ZSA9IHRpdGxlO1xuICBlZGl0UHJvZmlsZVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgZWRpdFByb2ZpbGVQb3B1cC5vcGVuKCk7XG59KTtcblxuY29uc3QgYXZQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiLnBvcHVwX19hdmF0YXJcIiwgKGRhdGEpID0+IHtcbiAgaGFuZGxlTG9hZCh0cnVlLCBhdmF0YXJQb3B1cCwgXCJTYXZpbmcuLi5cIik7XG4gIGFwaVxuICAgIC5zZXRBdmF0YXIoe1xuICAgICAgYXZhdGFyOiBkYXRhLmxpbmssXG4gICAgfSlcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICB1c2VySW5mby5jaGFuZ2VBdmF0YXIocmVzLmF2YXRhcik7XG4gICAgICBhdlBvcHVwLmNsb3NlKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coXCJFcnJvciEgXCIgKyBlcnIpKTtcbn0pO1xuXG5hdlBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5hdkVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYXZhdGFyRm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcbiAgYXZQb3B1cC5vcGVuKCk7XG4gIGhhbmRsZUxvYWQoZmFsc2UsIGF2YXRhclBvcHVwLCBcIlNhdmVcIik7XG59KTtcbiIsImV4cG9ydCBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0YnRuXCIpO1xuZXhwb3J0IGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkYnRuXCIpO1xuZXhwb3J0IGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXROYW1lXCIpO1xuZXhwb3J0IGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0VGl0bGVcIik7XG5leHBvcnQgY29uc3QgY3VycmVudE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIik7XG5leHBvcnQgY29uc3QgY3VycmVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX190aXRsZVwiKTtcbmV4cG9ydCBjb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmRUZW1wbGF0ZVwiKS5jb250ZW50O1xuZXhwb3J0IGNvbnN0IGVkaXRQcm9maWxlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm0tc2VsZWN0b3JcIik7XG5leHBvcnQgY29uc3QgYWRkQ2FyZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jYXJkX2Zvcm0tc2VsZWN0b3JcIik7XG5leHBvcnQgY29uc3QgZ3JpZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyaWRfX2xpc3RcIik7XG5leHBvcnQgY29uc3QgZGVsUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19kZWxldGVcIik7XG5leHBvcnQgY29uc3QgYXZhdGFyUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19hdmF0YXJcIik7XG5leHBvcnQgY29uc3QgYWRkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jYXJkXCIpO1xuZXhwb3J0IGNvbnN0IGVkUHJvZlBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9lZGl0XCIpO1xuZXhwb3J0IGNvbnN0IGF2YXRhckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIi5wb3B1cF9fYXZhdGFyX2Zvcm0tc2VsZWN0b3JcIlxuKTtcbmV4cG9ydCBjb25zdCBhdkVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhci1lZGl0XCIpO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgZm9ybVNlbGVjdG9yOiBcIi5mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLmZvcm1faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLmZvcm1fX3N1Ym1pdFwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19jYXJkX3N1Ym1pdC1kaXNhYmxlZFwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwicG9wdXBfX2Zvcm1faW5wdXRfdHlwZV9lcnJvclwiLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==