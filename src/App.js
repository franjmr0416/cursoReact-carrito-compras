import { Component } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Productos from "./components/Productos";
import Title from "./components/Title";

class App extends Component {
  state = {
    productos: [
      {
        name: "MacBook Air M1",
        price: 25999,
        img: "/productos/macbook-air.jpg",
      },
      { name: "Mac Mini M1", price: 17999, img: "/productos/mac-mini.jpg" },
      { name: "iMac M1", price: 43999, img: "/productos/imac.jpg" },
    ],
  };
  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={() => console.log("hola")}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
