// Code goes here

var Product = React.createClass({

    getInitialState: function () {
        return (
            { qty: 0 }
        );
    },

    select: function () {
        this.props.selectHandler(this.props.name)
    },

    buyAlert: function () {
        this.setState({ qty: this.state.qty + 1 })
        this.props.totalHandler(this.props.price)
    },

    render: function () {
        return (
            <div>
                <p>{this.props.name} ${this.props.price}</p>
                <button onClick={this.buyAlert}>buy</button>
                <button onClick={this.select}>select</button>
                <p>Qty: {this.state.qty} items(s)</p>

            </div>
        );
    }
});

var Total = React.createClass({
    render: function () {
        return (
            <h4>Total amount sold is: {this.props.total}</h4>
        );
    }
});

var ProductList = React.createClass({

    getInitialState: function () {
        return { total: 0 }
    },

    selectProduct: function (name) {
        alert("you selected " + name)
    },

    claculateTotal: function (price) {
        this.setState({ total: this.state.total + price })
    },

    render: function () {
        return (
            <div>
                <Product name="Android" price={22}
                    selectHandler={this.selectProduct}
                    totalHandler={this.claculateTotal} />

                <Product name="Nokia" price={10}
                    selectHandler={this.selectProduct}
                    totalHandler={this.claculateTotal} />

                <Product name="Samsung" price={23}
                    selectHandler={this.selectProduct}
                    totalHandler={this.claculateTotal} />
                <Total total={this.state.total} />
            </div>
        );
    }

});

React.render(<ProductList />, document.getElementById("root"));
