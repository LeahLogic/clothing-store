
function Buttons(props) {
  return (
    <div className="buttons">
      <button onClick={() => props.showAll()}>
        All
      </button>

      <button onClick={() => props.filteredClothes("dress")}>
        Dresses
      </button>

      <button onClick={() => props.filteredClothes("skirt")}>
        Skirts
      </button>

      <button onClick={() => props.filteredClothes("pants")}>
        Pants
      </button>

      <button onClick={() => props.filteredClothes("shoes")}>
        Shoes
      </button>

      <button onClick={() => props.filteredClothes("shirt")}>
        Shirts
      </button>
    </div>
  );
}

export default Buttons;
