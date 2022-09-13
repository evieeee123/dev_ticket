import React from "react";


class ProductIndex extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            items: [],
            DataisLoaded: false
        };
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

    render() {
        const { DataisLoaded, items } = this.state;
        // debugger
        console.log(items)
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;

        return (
            <div>
                <h1> Fetch data from an api in react </h1>  
                {/* <p>{items}</p> */}
                {
                    items.map((item) => (
                        <ol key={item.id} >
                            Product_Name: {item.title},
                            User_Email: {item.image}
                        </ol>
                    ))
                }
            </div>
        );
    }

}

export default ProductIndex;