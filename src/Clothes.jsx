
function Clothes(props) {
  return (
    <div className="products">
      {props.clothes.map((element) => {
        const { id, name, searchTerm, price, image } = element;

        return (
          <div className="product-card" key={id}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>${price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Clothes;
