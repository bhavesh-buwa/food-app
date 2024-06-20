const RestaurantCard = (props) => {
  const {restaurant} = props

  const {cloudinaryImageId, name, areaName, avgRating, costForTwo, cuisines} = restaurant
  const imgSrc = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId

  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img src={imgSrc} />
      </div>
      <div className="restaurant-name">{name}</div>
      <div className="restaurant-location">{areaName}</div>
      <div className="restaurant-ratings-time">{avgRating} rating</div>
      <div className="restaurant-cost">{costForTwo}</div>
      <div className="restaurant-cuisines">{cuisines.join(', ')}</div>
    </div>
  );
};

export default RestaurantCard;
