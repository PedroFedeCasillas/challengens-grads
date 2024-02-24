import {useParams} from "react-router-dom";
import {useState, useEffect, Fragment} from "react";
import {useContext} from "react";
import {CategoriesContext} from "../../contexts/categories.context";
import "./category.styles.scss";
import Card from "../../components/card/card.component";

const Category = () => {
  const {category} = useParams();
  const {categoriesMap} = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  //? WE ARE RENDERING A COMPONENT THAT DEPENDS ON AN ASYNC FUNTION THET FETCHES THE PRODUCTS FOR FIRESTORE THEHS WHY WE HAVE TO PUT A SAFEGUARD TO PREVENT THE COMPONENT TO RENDER WITH AN EMPTY OBJECT, WE DO THIS BY ADDIN A SHORTCIRCUIT WITH &&

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-product-container">
        {products &&
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
