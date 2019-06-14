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

class MenuItem extends Component{
    render(){
      // console.log(this.props)
      return(
        <li>
        <span>{this.props.item.name}</span>
        <span>{this.props.item.price}</span>
        <button onClick={this.handleSubmit}>Order</button>
        </li>
      )};


}
    class Menu extends Component {
      render() {

        let Menu = this.props.menuItems.map(function(item, index){
          return <MenuItem key={index} item={item}/>
        });
        return(<div>{Menu}</div>)
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
