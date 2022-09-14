import React from "react";
import DetailItem from "./detail_item";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleft } from 'react-icons/io';

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            itemId: 3,
            DataisLoaded: false
        };
    }
    //fetch data
    componentDidMount() {
        fetch(
            "https://fakestoreapi.com/products?limit=5")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;

        if (!items) { return }
        if (!DataisLoaded) return <div><h1> The page is loading.... </h1> </div>;

        //filter products
        const productItem1 = items
            .filter((item) => (item.id <= 3))
            
        return (
            <div className="all-items-box">
                <h1>Hot Products</h1>
                <p>Looking for some new gear to add to your wardrobe? Check out these hot products that are sure to become your new favorites!</p>
                <div className="all-info">
                <div className="info-left">
                    <div className="item-info">
                            <BrowserRouter>
                                <Link to={`/${productItem1[2].id}`} onClick={() => this.setState({ itemId: 3 })}>
                            <img onClick={this.handleClick} src={productItem1[2].image} className="product-img" alt="Cotton Jacket" />
                            <div className="item-name" onClick={this.handleClick}>Cotton Jacket</div>
                            <div onClick={this.handleClick}>
                                {this.state.itemId === 3 ?
                                    <IoIosArrowDroprightCircle className="active-icon" />
                                    : <IoIosArrowDropleft className="icon" />
                                }
                            </div>
                            </Link>
                            </BrowserRouter>

                    </div>

                    <div className="item-info">
                        <div>
                            <BrowserRouter>
                                <Link to={`/${productItem1[0].id}`} onClick={() => this.setState({ itemId: 1 })}>
                            <img onClick={this.handleClick} src={productItem1[0].image} className="product-img" alt="Backpack" />
                            <div className="item-name" onClick={this.handleClick}>Backpack</div>
                            <div onClick={this.handleClick}>
                                {this.state.itemId === 1 ?
                                    <IoIosArrowDroprightCircle className="active-icon" />
                                    : <IoIosArrowDropleft className="icon" />
                                }
                            </div>
                                </Link>
                                </BrowserRouter>
                        </div>

                    </div>

                    <div className="item-info">
                        <div>
                            <BrowserRouter>
                                <Link to={`/${productItem1[0].id}`} onClick={() => this.setState({ itemId: 2 })}>
                            <img onClick={this.handleClick} src={productItem1[1].image} className="product-img" alt="Slim Fit T-Shirts" />
                            <div className="item-name" onClick={this.handleClick}>Slim Fit T-Shirts</div>
                            <div onClick={this.handleClick}>
                                {this.state.itemId === 2 ?
                                    <IoIosArrowDroprightCircle className="active-icon" />
                                    : <IoIosArrowDropleft className="icon" />
                                }
                            </div>
                            </Link>
                            </BrowserRouter>
                        </div>
                    </div>
                </div>
                
                <div className="info-right">
                    <DetailItem price={productItem1[this.state.itemId - 1].price} des={productItem1[this.state.itemId - 1].description} rate={productItem1[this.state.itemId - 1].rating.rate} count={productItem1[this.state.itemId - 1].rating.count} itemId={productItem1[this.state.itemId - 1].id} />
                </div>
                </div>
            </div>
        );
    }

}

export default ProductIndex;