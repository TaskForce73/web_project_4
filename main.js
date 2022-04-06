!function(){"use strict";var e={730:function(e,t,s){e.exports=s.p+"2f8a4cd99a9a7a10b10b.png"},14:function(e,t,s){e.exports=s.p+"4e8e0a1d604782a0dff8.svg"}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}s.p="",function(){function e(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class t{constructor(t,s,n){e(this,"_getTemplate",(()=>(this._element=document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0),this._element))),e(this,"_handleDeleteButton",(()=>{this._element.remove(),this._element=null})),e(this,"_handleLikeButton",(()=>{this._likeButton.classList.toggle("element__button_active")})),e(this,"_setEventListeners",(()=>{this._elementBin=this._element.querySelector(".element__bin"),this._elementBin.addEventListener("click",(()=>{this._handleDeleteButton()})),this._likeButton.addEventListener("click",this._handleLikeButton),this._elementPicture.addEventListener("click",(()=>{this._handleCardClick(this._name,this._link)}))})),e(this,"generateCard",(()=>(this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__button"),this._elementPicture=this._element.querySelector(".element__picture"),this._setEventListeners(),this._elementPicture.src=this._link,this._elementPicture.alt="Photo of ".concat(this._name),this._element.querySelector(".element__header").textContent=this._name,this._element))),this._name=t.name,this._link=t.link,this._cardSelector=s,this._handleCardClick=n}}function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class o{constructor(e){n(this,"close",(()=>{this._popup.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscapeClose)})),n(this,"_handleEscapeClose",(e=>{"Escape"===e.key&&this.close()})),this._popup=document.querySelector(e)}open(){this._popup.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscapeClose)}setEventListeners(){this._popup.addEventListener("mousedown",(e=>{(e.target.classList.contains("popup_open")||e.target.classList.contains("popup__close"))&&this.close()}))}}class r extends o{constructor(e,t){super(e),this._handleSubmit=t,this._form=this._popup.querySelector(".popup__form")}_getInputValues(){const e={};return[...this._form.querySelectorAll(".popup__input")].forEach((t=>{e[t.name]=t.value})),e}setEventListeners(){this._form.addEventListener("submit",(e=>{e.preventDefault(),this._handleSubmit(this._getInputValues()),this.close()})),super.setEventListeners()}close(){this._form.reset(),super.close()}}function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class l{constructor(e,t){i(this,"_showInputError",(e=>{this._errorElement=this._formElement.querySelector(".".concat(e.id,"-error")),e.classList.add(this._inputErrorClass),this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._errorClass)})),i(this,"_hideInputError",(e=>{this._errorElement=this._formElement.querySelector(".".concat(e.id,"-error")),e.classList.remove(this._inputErrorClass),this._errorElement.classList.remove(this._errorClass),this._errorElement.textContent=""})),i(this,"_checkInputValidity",(e=>{e.validity.valid?this._hideInputError(e):this._showInputError(e)})),i(this,"_hasInvalidInput",(e=>Array.from(e).some((e=>!e.validity.valid)))),i(this,"_toggleButtonState",(()=>{this._hasInvalidInput(this._inputsList)?(this._elementButton.classList.add(this._inactiveButtonClass),this._elementButton.setAttribute("disabled",!0)):(this._elementButton.classList.remove(this._inactiveButtonClass),this._elementButton.removeAttribute("disabled"))})),i(this,"_setEventListeners",(()=>{this._inputsList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._toggleButtonState(),this._inputsList.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this._toggleButtonState()}))}))})),i(this,"enableValidation",(()=>{this._formElement.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()})),i(this,"resetValidation",(()=>{this._inputsList.forEach((e=>{this._hideInputError(e)})),this._toggleButtonState()})),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=t,this._elementButton=this._formElement.querySelector(this._submitButtonSelector)}}const a={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},c=new class{constructor(e){let{baseUrl:t,headers:s}=e;this._baseUrl=t,this._headers=s}getInitialCards(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((e=>e.ok?e.json():Promise.reject(e.statusText))).catch((e=>console.log(e)))}}({baseUrl:"https://around.nomoreparties.co/v1/group-12",headers:{authorization:"32b9efa0-6f35-4afe-975e-e3a6be43cfcb","Content-Type":"application/json"}});var u=s(14),p=s(730);const _=document.querySelector(".profile__plus"),h=document.querySelector(".popup__form"),d=document.querySelector(".profile__edit"),m=document.querySelector(".popup__form_second"),f=document.querySelector(".elements__list"),b=document.querySelector(".popup__input-name"),v=document.querySelector(".popup__input-about");document.getElementById("around-the-us").src=u,document.getElementById("profile-image").src=p,c.getInitialCards().then((e=>{console.log("res",e)}));const E=new l(a,m);E.enableValidation();const y=new l(a,h);y.enableValidation();const S=new class extends o{open(e,t){const s=this._popup.querySelector(".popup__image");this._popup.querySelector(".popup__description").textContent=e,s.alt="Photo of ".concat(e),s.src=t,super.open()}}(".popup_big_image");S.setEventListeners();const g=new r(".popup_profile_adder",(e=>{k.setUserInfo(e)}));g.setEventListeners();const L=new r(".popup_card_publisher",(e=>{const t={link:e.link,name:e.description};C(t)}));L.setEventListeners();const C=e=>{const s=new t(e,"#card-template",((e,t)=>S.open(e,t))).generateCard();f.prepend(s)};new class{constructor(e,t){let{items:s,renderer:n}=e;this._items=s,this._renderer=n,this._container=document.querySelector(t)}addItem(e){this._container.prepend(e)}render(){this._items.forEach((e=>{this._renderer(e)}))}}({items:[{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}].reverse(),renderer:C},".elements__list").render();const k=new class{constructor(e){let{profileNameSelector:t,profileJobSelector:s}=e;this._profileName=document.querySelector(t),this._profileJob=document.querySelector(s)}getUserInfo(){return{name:this._profileName.textContent,job:this._profileJob.textContent}}setUserInfo(e){let{name:t,about:s}=e;this._profileName.textContent=t,this._profileJob.textContent=s}}({profileNameSelector:".profile__author",profileJobSelector:".profile__text"});d.addEventListener("click",(()=>{y.resetValidation(h),function(){const e=k.getUserInfo();b.value=e.name,v.value=e.job}(),g.open()})),_.addEventListener("click",(()=>{E.resetValidation(m),L.open()}))}()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxLQUMxQzJHLEVBQXFCOEIsZ0JBQWdCekMsR0FQdkMsV0FDRSxNQUFNMEMsRUFBVzNCLEVBQVN1QixjQUMxQmxDLEVBQWlCL0QsTUFBUXFHLEVBQVM5SCxLQUNsQ3lGLEVBQWtCaEUsTUFBUXFHLEVBQVNILElBS25DSSxHQUNBN0IsRUFBVXhGLFVBR1p5RSxFQUFrQi9GLGlCQUFpQixTQUFTLEtBQzFDeUcsRUFBa0JnQyxnQkFBZ0J2QyxHQUNsQ2UsRUFBYTNGLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0Zyb21WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9zY3JpcHRzL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihkYXRhLCBjYXJkU2VsZWN0b3IsIGhhbmRsZUNhcmRDbGljaykge1xuICAgIHRoaXMuX25hbWUgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy5fbGluayA9IGRhdGEubGluaztcbiAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICB9XG5cbiAgX2dldFRlbXBsYXRlID0gKCkgPT4ge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50XCIpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9O1xuXG4gIF9oYW5kbGVEZWxldGVCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgY2FyZC5yZW1vdmUoKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgfTtcblxuICBfaGFuZGxlTGlrZUJ1dHRvbiA9ICgpID0+IHtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJlbGVtZW50X19idXR0b25fYWN0aXZlXCIpO1xuICB9O1xuXG4gIF9zZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICB0aGlzLl9lbGVtZW50QmluID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRfX2JpblwiKTtcbiAgICB0aGlzLl9lbGVtZW50QmluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVCdXR0b24oKTtcbiAgICB9KTtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVMaWtlQnV0dG9uKTtcbiAgICB0aGlzLl9lbGVtZW50UGljdHVyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHRoaXMuX25hbWUsIHRoaXMuX2xpbmspO1xuICAgIH0pO1xuICB9O1xuXG4gIGdlbmVyYXRlQ2FyZCA9ICgpID0+IHtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcbiAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRfX2J1dHRvblwiKTtcbiAgICB0aGlzLl9lbGVtZW50UGljdHVyZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50X19waWN0dXJlXCIpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fZWxlbWVudFBpY3R1cmUuc3JjID0gdGhpcy5fbGluaztcbiAgICB0aGlzLl9lbGVtZW50UGljdHVyZS5hbHQgPSBgUGhvdG8gb2YgJHt0aGlzLl9uYW1lfWA7XG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmVsZW1lbnRfX2hlYWRlclwiKS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9vcGVuXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY2FwZUNsb3NlKTtcbiAgfVxuXG4gIGNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9vcGVuXCIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY2FwZUNsb3NlKTtcbiAgfTtcblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX29wZW5cIikgfHxcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfX2Nsb3NlXCIpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2hhbmRsZUVzY2FwZUNsb3NlID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGhhbmRsZVN1Ym1pdCkge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCA9IGhhbmRsZVN1Ym1pdDtcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcbiAgfVxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZXMgPSB7fTtcbiAgICBjb25zdCBpbnB1dHMgPSBbLi4udGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pbnB1dFwiKV07XG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dFZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBpbnB1dFZhbHVlcztcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5faGFuZGxlU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0pO1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XG4gICAgc3VwZXIuY2xvc2UoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XG4gICAgdGhpcy5fZWxlbWVudEJ1dHRvbiA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvclxuICAgICk7XG4gIH1cblxuICBfc2hvd0lucHV0RXJyb3IgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxuICAgICk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgX2hpZGVJbnB1dEVycm9yID0gKGlucHV0RWxlbWVudCkgPT4ge1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgfTtcblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGlucHV0RWxlbWVudCkgPT4ge1xuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH1cbiAgfTtcblxuICBfaGFzSW52YWxpZElucHV0ID0gKGlucHV0c0xpc3QpID0+IHtcbiAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGlucHV0c0xpc3QpO1xuICAgIHJldHVybiBpbnB1dHMuc29tZSgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZDtcbiAgICB9KTtcbiAgfTtcblxuICBfdG9nZ2xlQnV0dG9uU3RhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCh0aGlzLl9pbnB1dHNMaXN0KSkge1xuICAgICAgdGhpcy5fZWxlbWVudEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgdGhpcy5fZWxlbWVudEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZWxlbWVudEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgdGhpcy5fZWxlbWVudEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuX2lucHV0c0xpc3QgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxuICAgICk7XG4gICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcbiAgICB0aGlzLl9pbnB1dHNMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZW5hYmxlVmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgcmVzZXRWYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMuX2lucHV0c0xpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gIH07XG59XG4iLCJleHBvcnQgeyBpbml0aWFsQ2FyZHMsIHBhZ2VTZXR0aW5ncyB9O1xuXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUveW9zZW1pdGUuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxha2UgTG91aXNlXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXG4gICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiLFxuICB9LFxuXTtcblxuY29uc3QgcGFnZVNldHRpbmdzID0ge1xuICBmb3JtU2VsZWN0b3I6IFwiLnBvcHVwX19mb3JtXCIsXG4gIGlucHV0U2VsZWN0b3I6IFwiLnBvcHVwX19pbnB1dFwiLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIucG9wdXBfX2J1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcInBvcHVwX19idXR0b25fZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcInBvcHVwX19pbnB1dF90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwicG9wdXBfX2Vycm9yX3Zpc2libGVcIixcbn07XG5cbiIsImNsYXNzIEFwaSB7XG4gICAgY29uc3RydWN0b3Ioe2Jhc2VVcmwsIGhlYWRlcnN9KSB7XG4gICAgICB0aGlzLl9iYXNlVXJsID0gYmFzZVVybFxuICAgICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnNcbiAgICB9XG4gIFxuICAgIGdldEluaXRpYWxDYXJkcygpIHtcbiAgICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl9iYXNlVXJsfS9jYXJkc2AsIHtoZWFkZXJzOiB0aGlzLl9oZWFkZXJzfSlcbiAgICAgIC50aGVuKHJlcyA9PiByZXMub2sgPyByZXMuanNvbigpIDogUHJvbWlzZS5yZWplY3QocmVzLnN0YXR1c1RleHQpKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IGNvbnN0IGFwaSA9IG5ldyBBcGkoe1xuICAgIGJhc2VVcmw6IFwiaHR0cHM6Ly9hcm91bmQubm9tb3JlcGFydGllcy5jby92MS9ncm91cC0xMlwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIGF1dGhvcml6YXRpb246IFwiMzJiOWVmYTAtNmYzNS00YWZlLTk3NWUtZTNhNmJlNDNjZmNiXCIsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH1cbiAgfSk7ICIsImltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4uL3NjcmlwdHMvY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL3NjcmlwdHMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZVwiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL3NjcmlwdHMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL3NjcmlwdHMvY29tcG9uZW50cy9Vc2VySW5mb1wiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL3NjcmlwdHMvY29tcG9uZW50cy9TZWN0aW9uXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vc2NyaXB0cy9jb21wb25lbnRzL0Zyb21WYWxpZGF0b3JcIjtcbmltcG9ydCB7IGluaXRpYWxDYXJkcywgcGFnZVNldHRpbmdzIH0gZnJvbSBcIi4uL3NjcmlwdHMvdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vc2NyaXB0cy9jb21wb25lbnRzL0FwaVwiO1xuXG5jb25zdCBwbHVzUHJvZmlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fcGx1c1wiKTtcbmNvbnN0IHByb2ZpbGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcbmNvbnN0IGVkaXRQcm9maWxlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0XCIpO1xuY29uc3QgY2FyZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtX3NlY29uZFwiKTtcbmNvbnN0IGVsZW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50c19fbGlzdFwiKTtcbmNvbnN0IHByb2ZpbGVJbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dC1uYW1lXCIpO1xuY29uc3QgcHJvZmlsZUlucHV0QWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dC1hYm91dFwiKTtcblxuaW1wb3J0IGhlYWRlclNyYyBmcm9tIFwiLi4vaW1hZ2VzL2hlYWRlci5zdmdcIjtcbmNvbnN0IGhlYWRlckltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcm91bmQtdGhlLXVzXCIpO1xuaGVhZGVySW1hZ2Uuc3JjID0gaGVhZGVyU3JjO1xuXG5pbXBvcnQgcHJvZmlsZVNyYyBmcm9tIFwiLi4vaW1hZ2VzL0NvdXN0ZWF1LnBuZ1wiO1xuY29uc3QgcHJvZmlsZUltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlLWltYWdlXCIpO1xucHJvZmlsZUltYWdlLnNyYyA9IHByb2ZpbGVTcmM7XG5cbmFwaS5nZXRJbml0aWFsQ2FyZHMoKVxuLnRoZW4gKHJlcyA9PiB7XG4gIGNvbnNvbGUubG9nKCdyZXMnLCByZXMpXG59KVxuXG5jb25zdCBjYXJkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHBhZ2VTZXR0aW5ncywgY2FyZEZvcm0pO1xuY2FyZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5jb25zdCBwcm9maWxlRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHBhZ2VTZXR0aW5ncywgcHJvZmlsZUZvcm0pO1xucHJvZmlsZUZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5jb25zdCBpbWFnZU1vZGFsID0gbmV3IFBvcHVwV2l0aEltYWdlKFwiLnBvcHVwX2JpZ19pbWFnZVwiKTtcbmltYWdlTW9kYWwuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuY29uc3QgZWRpdE1vZGFsID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIucG9wdXBfcHJvZmlsZV9hZGRlclwiLCAoZGF0YSkgPT4ge1xuICB1c2VySW5mby5zZXRVc2VySW5mbyhkYXRhKTtcbn0pO1xuZWRpdE1vZGFsLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbmNvbnN0IGFkZENhcmRNb2RhbCA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiLnBvcHVwX2NhcmRfcHVibGlzaGVyXCIsIChkYXRhKSA9PiB7XG4gIGNvbnN0IG5ld0NhcmRPYmplY3QgPSB7XG4gICAgbGluazogZGF0YS5saW5rLFxuICAgIG5hbWU6IGRhdGEuZGVzY3JpcHRpb24sXG4gIH07XG4gIHJlbmRlckNhcmQobmV3Q2FyZE9iamVjdCk7XG59KTtcbmFkZENhcmRNb2RhbC5zZXRFdmVudExpc3RlbmVycygpO1xuXG5jb25zdCByZW5kZXJDYXJkID0gKGRhdGEpID0+IHtcbiAgY29uc3QgY2FyZCA9IGNyZWF0ZU5ld0NhcmQoZGF0YSk7XG4gIGVsZW1lbnRMaXN0LnByZXBlbmQoY2FyZCk7XG59O1xuXG5jb25zdCBzZWN0aW9uID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICBpdGVtczogaW5pdGlhbENhcmRzLnJldmVyc2UoKSxcbiAgICByZW5kZXJlcjogcmVuZGVyQ2FyZCxcbiAgfSxcbiAgXCIuZWxlbWVudHNfX2xpc3RcIlxuKTtcbnNlY3Rpb24ucmVuZGVyKCk7XG5cbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcbiAgcHJvZmlsZU5hbWVTZWxlY3RvcjogXCIucHJvZmlsZV9fYXV0aG9yXCIsXG4gIHByb2ZpbGVKb2JTZWxlY3RvcjogXCIucHJvZmlsZV9fdGV4dFwiLFxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld0NhcmQoaXRlbSkge1xuICBjb25zdCBjYXJkID0gbmV3IENhcmQoaXRlbSwgXCIjY2FyZC10ZW1wbGF0ZVwiLCAobmFtZSwgbGluaykgPT5cbiAgICBpbWFnZU1vZGFsLm9wZW4obmFtZSwgbGluaylcbiAgKTtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkLmdlbmVyYXRlQ2FyZCgpO1xuICByZXR1cm4gY2FyZEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGZpbGxQcm9maWxlRm9ybSgpIHtcbiAgY29uc3QgdXNlckRhdGEgPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xuICBwcm9maWxlSW5wdXROYW1lLnZhbHVlID0gdXNlckRhdGEubmFtZTtcbiAgcHJvZmlsZUlucHV0QWJvdXQudmFsdWUgPSB1c2VyRGF0YS5qb2I7XG59XG5cbmVkaXRQcm9maWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHByb2ZpbGVGb3JtVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbihwcm9maWxlRm9ybSk7XG4gIGZpbGxQcm9maWxlRm9ybSgpO1xuICBlZGl0TW9kYWwub3BlbigpO1xufSk7XG5cbnBsdXNQcm9maWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNhcmRGb3JtVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbihjYXJkRm9ybSk7XG4gIGFkZENhcmRNb2RhbC5vcGVuKCk7XG59KTtcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgb3BlbihuYW1lLCBsaW5rKSB7XG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcbiAgICBjb25zdCBjYXB0aW9uID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZGVzY3JpcHRpb25cIik7XG4gICAgY2FwdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgaW1hZ2UuYWx0ID0gYFBob3RvIG9mICR7bmFtZX1gO1xuICAgIGltYWdlLnNyYyA9IGxpbms7XG4gICAgc3VwZXIub3BlbigpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcihkYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IHByb2ZpbGVOYW1lU2VsZWN0b3IsIHByb2ZpbGVKb2JTZWxlY3RvciB9KSB7XG4gICAgdGhpcy5fcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVOYW1lU2VsZWN0b3IpO1xuICAgIHRoaXMuX3Byb2ZpbGVKb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVKb2JTZWxlY3Rvcik7XG4gIH1cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50LFxuICAgICAgam9iOiB0aGlzLl9wcm9maWxlSm9iLnRleHRDb250ZW50LFxuICAgIH07XG4gIH1cbiAgc2V0VXNlckluZm8oeyBuYW1lLCBhYm91dCB9KSB7XG4gICAgdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRoaXMuX3Byb2ZpbGVKb2IudGV4dENvbnRlbnQgPSBhYm91dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwicCIsIkNhcmQiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJjYXJkU2VsZWN0b3IiLCJoYW5kbGVDYXJkQ2xpY2siLCJ0aGlzIiwiX2VsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfY2FyZFNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsInJlbW92ZSIsIl9saWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2VsZW1lbnRCaW4iLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZURlbGV0ZUJ1dHRvbiIsIl9oYW5kbGVMaWtlQnV0dG9uIiwiX2VsZW1lbnRQaWN0dXJlIiwiX2hhbmRsZUNhcmRDbGljayIsIl9uYW1lIiwiX2xpbmsiLCJfZ2V0VGVtcGxhdGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJzcmMiLCJhbHQiLCJ0ZXh0Q29udGVudCIsIm5hbWUiLCJsaW5rIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVFc2NhcGVDbG9zZSIsImUiLCJrZXkiLCJjbG9zZSIsIm9wZW4iLCJhZGQiLCJzZXRFdmVudExpc3RlbmVycyIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZVN1Ym1pdCIsInN1cGVyIiwiX2hhbmRsZVN1Ym1pdCIsIl9mb3JtIiwiX2dldElucHV0VmFsdWVzIiwiaW5wdXRWYWx1ZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImlucHV0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0IiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZm9ybUVsZW1lbnQiLCJpbnB1dEVsZW1lbnQiLCJfZXJyb3JFbGVtZW50IiwiX2Zvcm1FbGVtZW50IiwiaWQiLCJfaW5wdXRFcnJvckNsYXNzIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfZXJyb3JDbGFzcyIsInZhbGlkaXR5IiwidmFsaWQiLCJfaGlkZUlucHV0RXJyb3IiLCJfc2hvd0lucHV0RXJyb3IiLCJpbnB1dHNMaXN0IiwiQXJyYXkiLCJmcm9tIiwic29tZSIsIl9oYXNJbnZhbGlkSW5wdXQiLCJfaW5wdXRzTGlzdCIsIl9lbGVtZW50QnV0dG9uIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfaW5wdXRTZWxlY3RvciIsIl90b2dnbGVCdXR0b25TdGF0ZSIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJldnQiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsInBhZ2VTZXR0aW5ncyIsImZvcm1TZWxlY3RvciIsImFwaSIsImJhc2VVcmwiLCJoZWFkZXJzIiwiX2Jhc2VVcmwiLCJfaGVhZGVycyIsImdldEluaXRpYWxDYXJkcyIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXNUZXh0IiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYXV0aG9yaXphdGlvbiIsInBsdXNQcm9maWxlQnV0dG9uIiwicHJvZmlsZUZvcm0iLCJlZGl0UHJvZmlsZUJ1dHRvbiIsImNhcmRGb3JtIiwiZWxlbWVudExpc3QiLCJwcm9maWxlSW5wdXROYW1lIiwicHJvZmlsZUlucHV0QWJvdXQiLCJnZXRFbGVtZW50QnlJZCIsImhlYWRlclNyYyIsInByb2ZpbGVTcmMiLCJjYXJkRm9ybVZhbGlkYXRvciIsImVuYWJsZVZhbGlkYXRpb24iLCJwcm9maWxlRm9ybVZhbGlkYXRvciIsImltYWdlTW9kYWwiLCJpbWFnZSIsImVkaXRNb2RhbCIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJhZGRDYXJkTW9kYWwiLCJuZXdDYXJkT2JqZWN0IiwiZGVzY3JpcHRpb24iLCJyZW5kZXJDYXJkIiwiY2FyZCIsImdlbmVyYXRlQ2FyZCIsInByZXBlbmQiLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiYWRkSXRlbSIsImVsZW1lbnQiLCJyZW5kZXIiLCJyZXZlcnNlIiwicHJvZmlsZU5hbWVTZWxlY3RvciIsInByb2ZpbGVKb2JTZWxlY3RvciIsIl9wcm9maWxlTmFtZSIsIl9wcm9maWxlSm9iIiwiZ2V0VXNlckluZm8iLCJqb2IiLCJhYm91dCIsInJlc2V0VmFsaWRhdGlvbiIsInVzZXJEYXRhIiwiZmlsbFByb2ZpbGVGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==