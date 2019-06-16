import React, {Component} from 'react';
import './App.css';

const menuItems = [
  {
    category: "Appitizer",
    price: "$3.50",
    name: "Side-Salad"
  }, {
    category: "Appitizer",
    price: "$9.00",
    name: "1/2 Dozen Chicken Wings"
  }, {
    category: "Appitizer",
    price: "$14.50",
    name: "Shrimp Cocktail"
  }, {
    category: "Appitizer",
    price: "$19.00",
    name: "Oysters Rockefeller"
  }, {
    category: "Entree",
    price: "8.50",
    name: "Cobb Salad"
  }, {
    category: "Entree",
    price: "$9.50",
    name: "Hamburger Plate"
  }, {
    category: "Entree",
    price: "$13.50",
    name: "Chicken Plate"
  }, {
    category: "Entree",
    price: "$25.00",
    name: "Steak and Potatoes Plate"
  }, {
    category: "Entree",
    price: "$5.50",
    name: "Ice Cream Mega Cup"
  }, {
    category: "Entree",
    price: "$7.50",
    name: "Sweet Potatoe Pie ala Mode"
  }, {
    category: "Entree",
    price: "$12.00",
    name: "Seven Layer Triple Chocolate Cake"
  }, {
    category: "Entree",
    price: "$15.00",
    name: "Cheesecake with Fresh Berry Compote"
  }
];

const ShoppingCart = (props) => {
  if (props.items.length === 0) {
    return (<div className="EmptyCart">
      <Header notMobile={props.notMobile}/>
      Nothing in Cart, please add something.
    </div>)
  } else {
    return (<div className="shoppingCart" id="shoppingCartScrool" onClick={(e) => props.lockScroll(e)}>
      <Header notMobile={props.notMobile}/>
      <ProductDisplay removeItem={props.removeItem} productUpdate={props.productUpdate} items={props.items} checkout={props.checkout} Price={props.price}/>
    </div>)
  };
}

class MenuItem extends Component {
  render() {
    // console.log(this.props)
    return (<li>
      <span className="item-name">{this.props.item.name}</span>
      <span className="item-price">{this.props.item.price}</span>
      <button className="order" onClick={this.handleChange}>Order</button>
    </li>)
  };

}
class MenuItemSeclector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      MenuItem: this.props.type
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = async (event) => {
    await this.setState({type: event.target.value});
    this.props.menuItemCallback(this.state.type);
  }

  render() {
    return (
      <label>
        <select value={this.state.MenuItem} onChange={(event) => this.handleChange(event)}>
           {this.MenuItem}
        </select>
     </label>)
  }
}






class Menu extends Component {
  render() {

    let Menu = this.props.menuItems.map(function(item, index) {
      return <MenuItem key={index} item={item}/>
    });
    return (<div>{Menu}</div>)
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuItems: []
    }
  }

  componentDidMount() {
    this.setState({menuItems: menuItems});
  }

  render() {
    console.log(this.state.menuItems);
    return (<div>
      <Menu menuItems={this.state.menuItems}/>
    </div>)
  }
}

export default App;
