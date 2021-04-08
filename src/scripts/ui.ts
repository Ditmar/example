import Products from "./Product"
import MagementProduct from "./app";
class Ui {
    list: Array<Products>
    container: any;
    mangement: MagementProduct;
    constructor() {
        this.list = new Array<Products>();
        this.container = document.getElementById("container");
        /*if (container != null) {
            this.container = container;
        }*/
        //Init
        this.mangement = new MagementProduct();
        this.list = this.mangement.getList();
        console.log(this.list);
        this.render();
    }
    eventListener() {
        const data = document.getElementsByClassName("button");
    }
    render() {
        var html: string = "<ul>";
        this.list.forEach((item: Products) => {
            html += `<li>${item.name} ${item.description} <button id="${item.id}">Eliminar</button></li>`
        });
        html += "</ul>";

        this.container.innerHTML = html;
        this.addEventListenerButtons();
    }
    addEventListenerButtons() {
        const elemets: any = document.getElementsByTagName("button");
        for (var i = 0; i < elemets.length; i++) {
            elemets[i].addEventListener("click", (e: any) => {
                this.mangement.removeProduct(e.target.getAttribute("id"));
                //*/dsfñksdkfjsdkjfjksdf 
                ///dsgfdfljgkdfjgikfjk
            });
        }
    }
}
new Ui();