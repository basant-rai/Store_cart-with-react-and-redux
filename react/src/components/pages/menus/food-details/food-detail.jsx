import { IMAGE } from "../../../../config";

const FoodDetail = ({ foodDetail, addToCart, onBuy }) => {
  return (
    <div className="w-50 mx-auto mt-4">
      <div className="position-relative">
        <div style={{ height: "300px" }}>
          <img
            className="w-100 h-100 rounded"
            src={
              `${IMAGE}/${foodDetail.product_image}` ||
              "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
            }
            alt={foodDetail.product_name}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="bg-white rounded-4 px-3 py-2 food-detail">
          <p className="fw-bold text-secondary" style={{ fontSize: "14px" }}>
            ({foodDetail?.product_category?.category_name})
          </p>
          <h5 className="fs-3 fw-bold">{foodDetail.product_name}</h5>

          <p className="fw-bold">
            Price:{" "}
            <span className="fw-semibold">Rs.{foodDetail.product_price}</span>
          </p>
          <hr className="my-3" />
          <div className="mt-3">
            <div className="fw-bold fs-4">
              About Receipe:&nbsp;
              <p className="fw-normal " style={{ fontSize: "14px" }}>
                {foodDetail.product_description}
              </p>
            </div>
            <div className=" ms-auto mt-4 d-flex gap-2">
              <button
                onClick={addToCart}
                type="button"
                class="btn btn-outline-secondary w-100"
              >
                Add To Cart
              </button>
              <button
                onClick={()=>onBuy(foodDetail.product_price)}
                type="button"
                class="btn btn-outline-dark w-100"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
