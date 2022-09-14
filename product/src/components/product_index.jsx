import React from "react";
import DetailItem from "./detail_item";
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleft } from 'react-icons/io';

class ProductIndex extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            items: [],
            DataisLoaded: false,
            displayDetail: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch(
            "http://fakestoreapi.com/products?limit=5")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    handleClick(e){
        if (this.state.displayDetail) {
            this.setState({ displayDetail: false });
        } else {
            this.setState({ displayDetail: true });
        }
    }

    render() {
        const { DataisLoaded, items } = this.state;

        // console.log(items)
        if (!items) { return }
        if (!DataisLoaded) return <div><h1> The page is loading.... </h1> </div>;

        const productItem1 = items
            .filter((item) => (item.title.includes("Cotton Jacket")))
            // .map((item, index) => (
            //     <div key={index} > {item.title}</div>
            // ))

        const productItem2 = items
            .filter((item) => (item.title.includes("Backpack")))
        
        const productItem3 = items
            .filter((item) => (item.title.includes("Slim Fit T-Shirts")))

        // console.log(productItem1)
        return (
            <div className="all-items-box">
                <h1>Hot Products</h1>  
                <div className="item-info">
                    <div>
                        <img onClick={this.handleClick} src={productItem1[0].image} className="product-img" alt="Cotton Jacket" />
                        <div onClick={this.handleClick}>Cotton Jacket</div>
                        <div onClick={this.handleClick}>
                            {this.state.displayDetail ? 
                                <IoIosArrowDroprightCircle className="active-icon" />
                                : <IoIosArrowDropleft />
                            }
                        </div>
                    </div>
                    {this.state.displayDetail ?
                        <div>
                            <DetailItem price={productItem1[0].price} des={productItem1[0].description} rate={productItem1[0].rating.rate} count={productItem1[0].rating.count}/>
                        </div>
                        : <div></div>
                    }
                </div>

                <div className="item-info">
                    <div>
                        <img onClick={this.handleClick} src={productItem2[0].image} className="product-img" alt="Backpack" />
                        <div onClick={this.handleClick}>Backpack</div>
                        <div onClick={this.handleClick}>
                                {this.state.displayDetail ? 
                                    <IoIosArrowDroprightCircle className="active-icon" />
                                    : <IoIosArrowDropleft />
                                }
                        </div>
                    </div>
                    {this.state.displayDetail ?
                        <div>
                            <DetailItem price={productItem2[0].price} des={productItem1[0].description} rate={productItem1[0].rating.rate} count={productItem1[0].rating.count}/>
                        </div>
                        : <div></div>
                    }
                </div>

                <div className="item-info">
                    <div>
                        <img src={productItem3[0].image} className="product-img" alt="Slim Fit T-Shirts" />
                        <div>Slim Fit T-Shirts</div>
                        <div onClick={this.handleClick}>
                            {this.state.displayDetail ?
                                <IoIosArrowDroprightCircle className="active-icon" />
                                : <IoIosArrowDropleft />
                            }
                        </div>
                    </div>
                    {this.state.displayDetail ?
                        <div>
                            <DetailItem price={productItem3[0].price} des={productItem1[0].description} rate={productItem1[0].rating.rate} count={productItem1[0].rating.count} />
                        </div>
                        : <div></div>
                    }
                </div>
                {/* {
                    items.map((item) => (
                        <ol key={item.id} >
                            Product_Name: {item.title},
                            <img src={item.image} alt="" /> 
                        </ol>
                    ))
                } */}
            </div>
        );
    }

}

export default ProductIndex;