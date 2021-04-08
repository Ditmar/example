import Products from "./Product";
class MagementProduct {
    list: Array<Products>
    searchList: Array<Products>
    constructor() {
        this.list = new Array();
        //test case
        this.list.push({ id: 1, name: "Cocacola", description: "Cocacola Zero", price: 10, date: new Date(), quantity: 100 });
        this.list.push({ id: 1, name: "Mani", description: "Mani Tostado", price: 10, date: new Date(), quantity: 50 });
        this.list.push({ id: 1, name: "Papas Fritas", description: "Bob sponja", price: 5, date: new Date(), quantity: 50 });
        this.list.push({ id: 1, name: "Mantequilla", description: "Mantequilla pil", price: 22, date: new Date(), quantity: 20 });

        this.searchList = new Array();
    }
    getList() {
        return this.list;
    }
    addProduct(product: Products) {
        this.list.push(product);
    }
    removeProduct(id: Number) {
        this.list = this.list.filter((item: Products) => {
            if (item.id == id) {
                return false;
            }
            return true;
        });
    }
    updateProduct(id: Number, product: Products) {
        this.list = this.list.map((item: Products) => {
            if (item.id == id) {
                item = product;
            }
            return item;
        });
    }
    searchProduct(key: string) {
        var keyExpression: RegExp = new RegExp(key, "i");
        this.searchList = this.list.filter((item: Products) => {
            if (item.name.match(keyExpression) != null) {
                return true;
            }
            return false;
        });
        return this.searchList;
    }
}
export default MagementProduct;