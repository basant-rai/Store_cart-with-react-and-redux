import React, { useEffect, useState } from "react";
import FoodItem from "../menus/food-details/food-item";
import { viewproducts } from "../../../Api/ProductApi";
import { toast } from "react-toastify";

const FoodPage = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    viewproducts("createdAt", "DESC", 2000)
      .then((res) => {
        setFoodItems(res);
      })
      .catch((err) => {
        toast.error("Something went wrong");
      });
  }, []);

  return (
    <div className="container mx-auto">
      {foodItems && foodItems.length > 0 ? (
        <FoodItem foodItems={foodItems} />
      ) : (
        <p className="text-center my-5 fw-bold fs-2">Coming Soon</p>
      )}
    </div>
  );
};

export default FoodPage;
