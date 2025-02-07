import React, { useEffect, useState } from "react";
import { viewCategory } from "../../../Api/categoryApi";
import MenuList from "./list";
import FoodItem from "./food-details/food-item";
import { getProductByCategory } from "../../../Api/ProductApi";
import { toast } from "react-toastify";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [categoryId, setCategoryId] = useState();

  useEffect(() => {
    viewCategory()
      .then((res) => {
        setMenus(res);
        setCategoryId(res[0]._id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getProductByCategory(categoryId)
      .then((res) => {
        setFoodItems(res);
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  }, [categoryId]);

  return (
    <div className="container mx-auto">
      {menus && (
        <MenuList
          menus={menus}
          setCategoryId={setCategoryId}
          categoryId={categoryId}
        />
      )}
      {foodItems.length > 0 ? (
        <FoodItem foodItems={foodItems} />
      ) : (
        <p className="text-center my-5 fw-bold fs-2">Coming Soon</p>
      )}
    </div>
  );
};

export default Menu;
