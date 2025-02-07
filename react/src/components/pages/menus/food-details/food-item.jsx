import React from "react";
import { Link } from "react-router-dom";
import { IMAGE } from "../../../../config";

const FoodItem = ({ foodItems }) => {
  return (
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3 gy-5 mt-3">
      {foodItems.map((food, idx) => (
        <div class="col mt-3" key={idx}>
          <div class="card shadow-sm">
            <img
              src={`${IMAGE}/${food.product_image}`}
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              alt={food.product_name}
              style={{ objectFit: "cover" }}
            />
            <div class="card-body">
              <p class="card-text line-clamp-1" style={{ fontWeight: "bold" }}>
                {food.product_name}
              </p>
              <p
                class="card-text text-dark line-clamp-1"
                style={{ fontSize: "12px" }}
              >
                {food.product_description}
              </p>
              <p
                class="card-text text-dark line-clamp-1 fw-bold"
                style={{ fontSize: "12px" }}
              >
                Rs.{food.product_price}
              </p>
              <div class="d-flex justify-content-between align-items-center mt-1">
                <Link to={`/food/${food._id}`} class="btn-group w-100">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-dark w-100"
                  >
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodItem;
