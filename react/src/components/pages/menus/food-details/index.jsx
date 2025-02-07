import React, { useEffect, useState } from "react";

import FoodDetail from "./food-detail";
import { useNavigate, useParams } from "react-router-dom";
import { getRelatedProducts, productDetail } from "../../../../Api/ProductApi";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../../Redux/Action/cartAction";
import { ToastContainer, toast } from "react-toastify";
import FoodCard from "../../../reusable/food-card";
import { isAuthenticated } from "../../../../Api/userApi";
import { EsewaPayment } from "../../../../Api/payment";

const FoodDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const authenticate = isAuthenticated();

  const [foodDetail, setFoodDetail] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);

  const addToCart = () => {
    if (authenticate) {
      setSuccess(false);
      dispatch(addItemToCart(id, 1)).then(() => {
        toast.success(" ITEM ADDED TO CART");
        setSuccess(true);
      });
    } else {
      toast.success("Please login to continue");
    }
  };

  useEffect(() => {
    productDetail(id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setFoodDetail(data);
      }
    });
    getRelatedProducts(id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelatedProducts(data);
      }
    });
  }, [id]);

  const handleBuy = async (amount) => {
    if (authenticate) {
      setSuccess(false);
      dispatch(addItemToCart(id, 1)).then(() => {
        toast.success(" ITEM ADDED TO CART");
        setSuccess(true);
      });
      navigate("/cart");
    } else {
      toast.success("Please login to continue");
    }
  };

  return (
    <div className="container mx-auto">
      <ToastContainer them="colored" position="top-right" />

      {foodDetail && (
        <FoodDetail
          foodDetail={foodDetail}
          addToCart={addToCart}
          onBuy={handleBuy}
        />
      )}
      <div className="w-75 mx-auto mt-4">
        <hr className="my-2" />
        <div className="fw-bold fs-4">Similar Food Items</div>
        {relatedProducts && (
          <div className="row row-cols-3">
            <FoodCard foodItems={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDetailPage;
