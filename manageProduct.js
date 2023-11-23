let product = [
    "Iphone 14 Pro Max",
    "Iphone 15 Pro Max",
    "Iphone 16 Pro Max",
    "Iphone 17 Pro Max",

];

function showAllProduct(){
    let content = "";
    for (let i = 0; i < product.length; i++) {
        content += ` <tr>
        <td>${product[i]}</td>
        <td onclick="editProduct(${i})"><button>Edit</button></td>
        <td onclick="deleteProduct(${i})"><button>Delete</button></td>
    </tr> `
    }
    document.getElementById("productList").innerHTML=content;
}
showAllProduct();
// them 1 product
function addProduct(){
    let inputProduct = document.getElementById("inputProduct").value; // lay du lieu tu o inpud New product
    if (inputProduct !== null){
        product.push(inputProduct);
    }else {
        alert("Xin thử nhập lại")
    }
    showAllProduct(); // goi lai lenh để hiển thị product
    document.getElementById("inputProduct").value=""; // xóa dữ lieu trong input thành trống
    document.getElementById("inputProduct").focus(); // trỏ chuột tự chỉ vào input

}
// xoa 1 product
function deleteProduct(index){
    //xoa phan tu tai vi tri index
    product.splice(index, 1);
    //goi lai ham showAll()
    showAllProduct();
}
// sửa 1 product
function editProduct(index){
    let newProduct = prompt("Nhập thông tin sản phẩm mới:", product[index]);
    if (newProduct !== null){
        product[index] =newProduct;
    }
    showAllProduct();

}