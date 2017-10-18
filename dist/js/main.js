"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Build = function () {
	function Build(form) {
		_classCallCheck(this, Build);

		this.DOMElements = form;
	}

	_createClass(Build, [{
		key: "showHide",
		value: function showHide(elem, status) {
			return elem.style.display = status;
		}
	}, {
		key: "showLeaf1",
		value: function showLeaf1() {
			this.showHide(this.DOMElements.leaf1, "flex");
			this.showHide(this.DOMElements.leaf2, "none");
			this.showHide(this.DOMElements.leaf3, "none");
			this.DOMElements.komplekt2.checked = false;
			this.DOMElements.komplekt3.checked = false;
		}
	}, {
		key: "showLeaf2",
		value: function showLeaf2() {
			this.showHide(this.DOMElements.leaf1, "flex");
			this.showHide(this.DOMElements.leaf2, "flex");
			this.showHide(this.DOMElements.leaf3, "none");
			this.DOMElements.komplekt1.checked = false;
			this.DOMElements.komplekt3.checked = false;
		}
	}, {
		key: "showLeaf3",
		value: function showLeaf3() {
			this.showHide(this.DOMElements.leaf1, "flex");
			this.showHide(this.DOMElements.leaf2, "flex");
			this.showHide(this.DOMElements.leaf3, "flex");
			this.DOMElements.komplekt2.checked = false;
			this.DOMElements.komplekt1.checked = false;
		}
	}, {
		key: "changeConstruction1",
		value: function changeConstruction1() {
			if (event.target.tagName == "SELECT") {
				if (event.target.value == 2) {
					this.showHide(this.DOMElements.simpleleaf1, "none");
					this.showHide(this.DOMElements.foldingleaf1, "flex");
				}
				if (event.target.value == 1) {
					this.showHide(this.DOMElements.simpleleaf1, "flex");
					this.showHide(this.DOMElements.foldingleaf1, "none");
				}
			}
		}
	}, {
		key: "changeConstruction2",
		value: function changeConstruction2() {
			if (event.target.tagName == "SELECT") {
				if (event.target.value == 2) {
					this.showHide(this.DOMElements.simpleleaf2, "none");
					this.showHide(this.DOMElements.foldingleaf2, "flex");
				}
				if (event.target.value == 1) {
					this.showHide(this.DOMElements.simpleleaf2, "flex");
					this.showHide(this.DOMElements.foldingleaf2, "none");
				}
			}
		}
	}, {
		key: "changeConstruction3",
		value: function changeConstruction3() {
			if (event.target.tagName == "SELECT") {
				if (event.target.value == 2) {
					this.showHide(this.DOMElements.simpleleaf3, "none");
					this.showHide(this.DOMElements.foldingleaf3, "flex");
				}
				if (event.target.value == 1) {
					this.showHide(this.DOMElements.simpleleaf3, "flex");
					this.showHide(this.DOMElements.foldingleaf3, "none");
				}
			}
		}
	}, {
		key: "showColorField",
		value: function showColorField() {
			if (this.DOMElements.color.value == 3) {
				this.showHide(this.DOMElements.colorPrivat, "block");
			}
			if (this.DOMElements.color.value == 1 || this.DOMElements.color.value == 2) {
				this.showHide(this.DOMElements.colorPrivat, "none");
			}
		}
	}, {
		key: "validate",
		value: function validate() {
			this.showHide(this.DOMElements.mistakeMassage, "none");
			if (this.DOMElements.width.value && this.DOMElements.height.value) {
				this.showHide(this.DOMElements.mistakeMassage, "none");
				this.calculate();
			} else {
				this.showHide(this.DOMElements.mistakeMassage, "block");
			}
		}
	}, {
		key: "calculate",
		value: function calculate() {
			var type = this.DOMElements.type.value;
			var color = this.DOMElements.color.value;
			var komplekt = document.querySelector('.komplekt:checked').value;
			var leafConstr1 = this.DOMElements.construction1.value;
			var leafConstr2 = this.DOMElements.construction2.value;
			var leafConstr3 = this.DOMElements.construction3.value;
			var leafsViewArr = this.DOMElements.construction;
			var leafsQuantity = null;
			var price = null;
			var basis = function () {
				if (type == 1 && color == 1) {
					return 100;
				}
				if (type == 1 && color == 2) {
					return 120;
				}
				if (type == 1 && color == 3) {
					return 140;
				}
				if (type == 2 && color == 1) {
					return 150;
				}
				if (type == 2 && color == 2) {
					return 195;
				}
				if (type == 2 && color == 3) {
					return 225;
				}
			}();

			for (var i = 0; i < leafsViewArr.length; i++) {
				if (type == 1 && leafsViewArr[i].value == 1 && leafsViewArr[i].parentElement.style.display !== 'none') {
					price += basis;
					leafsQuantity++;
				}
				if (type == 1 && leafsViewArr[i].value == 2 && leafsViewArr[i].parentElement.style.display !== 'none') {
					price += basis * 2;
					leafsQuantity++;
				}
				if (type == 2 && leafsViewArr[i].value == 1 && leafsViewArr[i].parentElement.style.display !== 'none') {
					price += basis;
					leafsQuantity++;
				}
				if (type == 2 && leafsViewArr[i].value == 2 && leafsViewArr[i].parentElement.style.display !== 'none') {
					price += basis * 2.2;
					leafsQuantity++;
				}
			}
			this.DOMElements.price.innerHTML = price.toFixed(1);
			this.DOMElements.leafsize.innerHTML = (this.DOMElements.width.value / leafsQuantity).toFixed(1) + " x " + this.DOMElements.height.value;
		}
	}, {
		key: "resetForm",
		value: function resetForm() {
			location.reload();
		}
	}, {
		key: "initListeners",
		value: function initListeners() {
			var _this = this;

			this.DOMElements.komplekt1.addEventListener("click", function () {
				_this.showLeaf1();
			});
			this.DOMElements.komplekt2.addEventListener("click", function () {
				_this.showLeaf2();
			});
			this.DOMElements.komplekt3.addEventListener("click", function () {
				_this.showLeaf3();
			});
			this.DOMElements.construction1.addEventListener("change", function () {
				_this.changeConstruction1();
			});
			this.DOMElements.construction2.addEventListener("change", function () {
				_this.changeConstruction2();
			});
			this.DOMElements.construction3.addEventListener("change", function () {
				_this.changeConstruction3();
			});
			this.DOMElements.color.addEventListener("change", function () {
				_this.showColorField();
			});
			this.DOMElements.submitBtn.addEventListener("click", function () {
				_this.validate();
			});
			this.DOMElements.resetBtn.addEventListener("click", function () {
				_this.resetForm();
			});
		}
	}]);

	return Build;
}();

var win = new Build({
	type: document.querySelector("#wintype"),
	color: document.querySelector("#wincolor"),
	colorPrivat: document.querySelector("#wincolorprivat"),
	komplekt1: document.querySelector("#komplekt1"),
	komplekt2: document.querySelector("#komplekt2"),
	komplekt3: document.querySelector("#komplekt3"),
	mainleafs: document.querySelector("#mainleafs"),
	leaf1: document.querySelector("#leaf1"),
	leaf2: document.querySelector("#leaf2"),
	leaf3: document.querySelector("#leaf3"),
	allleafs: document.querySelectorAll(".komplekt"),
	construction1: document.querySelector("#winconstruction1"),
	construction2: document.querySelector("#winconstruction2"),
	construction3: document.querySelector("#winconstruction3"),
	construction: document.querySelectorAll(".construction"),
	simpleleaf1: document.querySelector(".simpleleaf1"),
	simpleleaf2: document.querySelector(".simpleleaf2"),
	simpleleaf3: document.querySelector(".simpleleaf3"),
	foldingleaf1: document.querySelector(".foldingleaf1"),
	foldingleaf2: document.querySelector(".foldingleaf2"),
	foldingleaf3: document.querySelector(".foldingleaf3"),
	width: document.querySelector("#winwidth"),
	height: document.querySelector("#winheight"),
	price: document.querySelector("#price"),
	leafsize: document.querySelector("#leafsize"),
	submitBtn: document.querySelector("#submit"),
	resetBtn: document.querySelector("#reset"),
	mistakeMassage: document.querySelector("#validation-msg")
});

win.initListeners();

console.log(win.DOMElements);

console.log(win.DOMElements.type.value);