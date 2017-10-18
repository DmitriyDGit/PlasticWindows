class Build{
    constructor(form){
        this.DOMElements = form;
    }



		showHide(elem, status) {
				return elem.style.display = status;
		}			
			


		showLeaf1(){
		  this.showHide(this.DOMElements.leaf1, "flex");
		  this.showHide(this.DOMElements.leaf2, "none");
    	this.showHide(this.DOMElements.leaf3, "none");
		}

    showLeaf2(){
    	this.showHide(this.DOMElements.leaf1, "flex");
    	this.showHide(this.DOMElements.leaf2, "flex");
			this.showHide(this.DOMElements.leaf3, "none");
    }
     showLeaf3(){
     	this.showHide(this.DOMElements.leaf1, "flex");
     	this.showHide(this.DOMElements.leaf2, "flex");
    	this.showHide(this.DOMElements.leaf3, "flex");
    }

		 changeConstruction1() {
					if(event.target.tagName == "SELECT") {
							if( event.target.value == 2) {
									this.showHide(this.DOMElements.simpleleaf1, "none");
				    			this.showHide(this.DOMElements.foldingleaf1, "flex");
								}
							if( event.target.value == 1) {
									this.showHide(this.DOMElements.simpleleaf1, "flex");
				    			this.showHide(this.DOMElements.foldingleaf1, "none");
								}
					}
			}



    changeConstruction2() {
			if(event.target.tagName == "SELECT") {
					if( event.target.value == 2) {
							this.showHide(this.DOMElements.simpleleaf2, "none");
		    			this.showHide(this.DOMElements.foldingleaf2, "flex");
						}
					if( event.target.value == 1) {
							this.showHide(this.DOMElements.simpleleaf2, "flex");
		    			this.showHide(this.DOMElements.foldingleaf2, "none");
					}
				}
		}


		changeConstruction3() {
			if(event.target.tagName == "SELECT") {
					if( event.target.value == 2) {
							this.showHide(this.DOMElements.simpleleaf3, "none");
		    			this.showHide(this.DOMElements.foldingleaf3, "flex");
						}
					if( event.target.value == 1) {
							this.showHide(this.DOMElements.simpleleaf3, "flex");
		    			this.showHide(this.DOMElements.foldingleaf3, "none");
					}
			}
		}


		showColorField(){
			if( this.DOMElements.color.value == 3) {
				this.showHide(this.DOMElements.colorPrivat, "block");
			}
			if( this.DOMElements.color.value == 1||this.DOMElements.color.value == 2) {
				this.showHide(this.DOMElements.colorPrivat, "none");
			}
		}

		calculate() {
				let type = this.DOMElements.type.value;
				let color = this.DOMElements.color.value;
				let komplekt = document.querySelector('.komplekt:checked').value;
				let leafConstr1 = this.DOMElements.construction1.value;
				let leafConstr2 = this.DOMElements.construction2.value;
				let leafConstr3 = this.DOMElements.construction3.value;
				let leafsViewArr = this.DOMElements.construction;
				let price = null;
				let basis = () => {
						if (type==1&&color == 1){
							return 100;
						}
						if (type==1&&color == 2){
							return 120;
						}
						if (type==1&&color == 3){
							return 140;
						}
						if (type==2&&color == 1){
							return 150;
						}
						if (type==2&&color == 2){
							return 195;
						}
						if (type==2&&color == 3){
							return 225;
						}
					}
				let priceLeaf = () => {
							for(let i=0;i<leafsViewArr.length;i++) {
									if (type==1 && leafsViewArr[i] == 2){
										price = basis() * 2;
									} else {
										price = basis();
									}
									if (type==2 && leafsViewArr[i] == 2){
										price = basis() * 2.2;
				 					} else {
										price = basis();
							}
					}
				}
		this.DOMElements.price.innerHTML = price;
		}

		/*
Цена за 1 створку
1 камерное белое = 100$
(коричневый * 1,2; другой цвет * 1,4)
(поворотная створка *2)

Цена за 1 створку
2 камерное белое = 150$
(коричневый * 1,3; другой цвет * 1,5 )
(поворотная створка *2,2)

		*/

		initListeners(){
			this.DOMElements.komplekt1.addEventListener("click",()=>{this.showLeaf1()});
			this.DOMElements.komplekt2.addEventListener("click",()=>{this.showLeaf2()});
			this.DOMElements.komplekt3.addEventListener("click",()=>{this.showLeaf3()});
			this.DOMElements.construction1.addEventListener("change",()=>{this.changeConstruction1()});
			this.DOMElements.construction2.addEventListener("change",()=>{this.changeConstruction2()});
			this.DOMElements.construction3.addEventListener("change",()=>{this.changeConstruction3()});
			this.DOMElements.color.addEventListener("change",()=>{this.showColorField()});
			this.DOMElements.submitBtn.addEventListener("click",()=>{this.calculate()});
		}
}

var win = new Build({
	type: document.querySelector("#wintype"),
	color:document.querySelector("#wincolor"),
	colorPrivat:document.querySelector("#wincolorprivat"),
	komplekt1: document.querySelector("#komplekt1"),
	komplekt2: document.querySelector("#komplekt2"),
	komplekt3: document.querySelector("#komplekt3"),
	mainleafs:document.querySelector("#mainleafs"),
	leaf1:document.querySelector("#leaf1"),
	leaf2:document.querySelector("#leaf2"),
	leaf3:document.querySelector("#leaf3"),
	allleafs:document.querySelectorAll(".komplekt"),
	construction1: document.querySelector("#winconstruction1"),
	construction2: document.querySelector("#winconstruction2"),
	construction3: document.querySelector("#winconstruction3"),
	construction:document.querySelectorAll(".construction"),
	simpleleaf1: document.querySelector(".simpleleaf1"),
	simpleleaf2: document.querySelector(".simpleleaf2"),
	simpleleaf3: document.querySelector(".simpleleaf3"),
	foldingleaf1: document.querySelector(".foldingleaf1"),
	foldingleaf2: document.querySelector(".foldingleaf2"),
	foldingleaf3: document.querySelector(".foldingleaf3"),
	width: document.querySelector("#winwidth"),
	height:document.querySelector("#height"),
	price:document.querySelector("#price"),
	leafprice:document.querySelector("#leafprice"),
	submitBtn:document.querySelector("#submit")
		});

win.initListeners();

console.log(win.DOMElements);



