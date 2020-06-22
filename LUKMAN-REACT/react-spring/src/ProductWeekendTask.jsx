import React from "react";
import Axios from "axios";
const API_URL = `http://localhost:8080/`;
class ProductWeekendTask extends React.Component {
    state = {
        selectedFile: null,
        getProducts: [],
        kondisiAwal: false,
        kondisiAdd: false,
        kondisiEdit: false,
        idEdit: 0,
        postProducts: {
            productName: "",
            price: 0,
        },
        editProducts: { id: 0, productName: "", price: 0, image: "" }
    }
    getProducts = () => {
        Axios.get(`${API_URL}/productsWeekendTask`)
            .then((res) => {
                this.setState({
                    getProducts: res.data,
                    kondisiAwal: true
                })
                // console.log(this.state.getProducts)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    componentDidMount(){
        this.getProducts()
    }
    inputHandler = (e, key, form) => {
        const { value } = e.target
        this.setState({
            [form]: {
                ...this.state[form],
                [key]: value
            }
        })
    }

    fileChangeHandler = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        });
    }
    addProducts = () => {
        let formData = new FormData();
        formData.append(
            "file",
            this.state.selectedFile,
            this.state.selectedFile.name
        )
        formData.append(
            "userData",
            JSON.stringify(this.state.postProducts)
        )
        JSON.stringify(this.state.postProducts)
        Axios.post(`${API_URL}/documentsWeekendTask`, formData)
            .then((res) => {
                console.log(res.data);
                alert("Data sudah Ditambah")
            })
            .catch((err) => {
                console.log(err);
            })
    }
    editRender = (idx) => {
        this.setState({
            kondisiEdit: true,
        })
        // alert(this.state.kondisiEdit)
        Axios.get(`${API_URL}/productsWeekendTask/${idx}`)
            .then((res) => {
                this.setState({
                    editProducts: res.data,
                    idEdit:res.data.id
                })
                console.log(this.state.editProducts)
                // console.log(this.state.idEdit)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    editProduct = () => {
        let formData = new FormData();
        formData.append(
            "file",
            this.state.selectedFile,
            this.state.selectedFile.name
        )
        formData.append(
            "editData",
            JSON.stringify(this.state.editProducts)
        )
        JSON.stringify(this.state.editProducts)
        Axios.put(`${API_URL}/documentsWeekendTask/${this.state.idEdit}`, formData)
            .then((res) => {
                console.log(res.data);
                alert("Data sudah Diedit")
            })
            .catch((err) => {
                console.log(err);
            })
    }
    deleteProduct = (idx) =>{
        Axios.delete(`${API_URL}/productsWeekendTask/delete/${idx}`)
        .then((res)=>{
            console.log(res.data)
            alert("Data Sudah Dihapus")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <h3>Daftar Product</h3>
                <input type="button" className="btn btn-primary" value="Refresh Product Here" onClick={this.getProducts} /> <br/><br/>
                <div>
                    {
                        this.state.kondisiAwal == false ? null : (
                            <div>
                                <table className="table ">
                                    <thead className="table-dark">
                                        <tr>
                                            <td>No.</td>
                                            <td>Product Name</td>
                                            <td>Price</td>
                                            <td>Image</td>
                                            <td>Edit</td>
                                            <td>Delete</td>
                                        </tr>
                                    </thead>
                                    {
                                        this.state.getProducts.map((val, idx) => {
                                            return (
                                                <tbody>
                                                    <td>{idx + 1}</td>
                                                    <td>{val.productName}</td>
                                                    <td>{val.price}</td>
                                                    <td>{val.image}</td>
                                                    <td><input type="button" value="Edit" onClick={() => this.editRender(val.id)} /></td>
                                                    <td><input type="button" value="Delete" onClick={()=>this.deleteProduct(val.id)}/></td>
                                                </tbody>
                                            )
                                        })
                                    }
                                </table>
                            </div>
                        )
                    }
                    {
                        this.state.kondisiEdit == false ? null : (
                            <div>
                                <input className="form-control" type="text" value={this.state.editProducts.productName} placeholder="Product Name" onChange={(e)=>this.inputHandler(e,"productName","editProducts")} /><br />
                                <input className="form-control" type="text" value={this.state.editProducts.price} placeholder="Price" onChange={(e)=>this.inputHandler(e,"price","editProducts")}/> <br/>
                                <input type="file" onChange={this.fileChangeHandler}/>
                                <input type="button" value="Save" onClick={this.editProduct}/>
                            </div>
                        )
                    }
                    <input type="button" value="Add Products" onClick={() => this.setState({ kondisiAdd: true })} /><br />
                    {
                        this.state.kondisiAdd == false ? null : (
                            <div>
                                <input className="form-control" type="text" placeholder="Product Name" onChange={(e) => this.inputHandler(e, "productName", "postProducts")} />
                                <br />
                                <input className="form-control" type="text" placeholder="Price" onChange={(e) => this.inputHandler(e, "price", "postProducts")} />
                                <br />
                                {/* {this.state.postProducts.productName}
                            {this.state.postProducts.price} */}
                                <input type="file" onChange={this.fileChangeHandler} />
                                <br />
                                <input type="button" value="Add Product" onClick={this.addProducts} />
                            </div>
                        )
                    }
                </div>

            </div>
        )
    }
}

export default ProductWeekendTask