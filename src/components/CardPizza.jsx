
import { pizzas } from "./pizzas";
import { formatNumber } from "./CambioM";

const CardPizza = ({ catchPizza }) => {
  return (
    <div>
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="card">
          <img className="card-img-top" src={pizza.img} alt={pizza.name} style={{ width: "280px", margin: "10px" }} />
          <div className="card-body">
            <h5 className="card-title">
              <strong>{pizza.name}</strong>
            </h5>
            <hr />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
              <p>Ingredientes:</p>
            </div>
            <p>🍕{pizza.ingredients.join(", ")}</p>
            <hr />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
              <h6 className="card-text" style={{ margin: "0 auto" }}>
                <b>Precio: ${formatNumber(pizza.price)}</b>
              </h6>
            </div>
            <p></p>
            <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
              <button className="btn btn-light btn-sm border border-dark" onClick={() => alert("Ver más 👀")}>Ver más 👀</button>
              <button className="btn btn-dark" onClick={() => alert("Añadido 👍")}>Añadir 🛒</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPizza;