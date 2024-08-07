const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function Header() {
  return <h1 className="header">Fast React Pizza</h1>;
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if(hour>=openHour&& hour<=closeHour)

  return (
    <footer>
      {`${isOpen} ${new Date().toLocaleTimeString()}`} We are currently Open
    </footer>
  );
}
function Pizza(props) {
  return (
    <div>
      Name:{props.name}
      <img src={props.photoName} alt="pizza" />
    </div>
  );
}
function PizzaApp() {
  return (
    <div>
      <Header />
      <img src="pizzas/spinaci.jpg" alt="pizza" />
      {pizzaData.map((pizza) => (
        <Pizza name={pizza.name} />
      ))}
      <Footer />
    </div>
  );
}

export default PizzaApp;
