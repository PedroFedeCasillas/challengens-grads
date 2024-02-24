import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import "./category-item.styles.scss";

const CategoryItem = ({category}) => {
  const {title, imageUrl, route} = category;
  const navigate = useNavigate();

  const navigateHandler = () => navigate(route);

  return (
    <div className="category-container" onClick={navigateHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <Link to="/shop">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
