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
    carro: [
      //{ name: "Mac Mini M1", price: 17999, img: "/productos/mac-mini.jpg", cantidad: 1},
    ],
    esCarroVisible: false,
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state; //lo que hay en el carro
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name ? { ...x, cantidad: x.cantidad + 1 } : x
      );
      return this.setState({ carro: newCarro });
    }

    return this.setState({
      carro: this.state.carro.concat({ ...producto, cantidad: 1 }),
    });
  };

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return;
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  render() {
    const { esCarroVisible } = this.state;
    return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
