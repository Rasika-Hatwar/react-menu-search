import "./MenuCard.scss";

export default function MenuCard({ cardData }) {
  const displayItems = () => {
    return cardData.map((item) => {
      const { name, price, description, cloudinaryImageId } = item;
      return (
        <div className="card-main">
          <div className="card-left">
            <div className="title"> {name}</div>
            <div className="price">
              <span>₹</span>
              {price / 100}
            </div>
            <div className="description">{description}</div>
          </div>

          <div className="card-right">
            <div className="image-container">
              <img src={cloudinaryImageId} alt="product-card" />
              <button className="add-btn" onClick={() => console.log(name)}>
                ADD
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div>{displayItems()}</div>;
}
