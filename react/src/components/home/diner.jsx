/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const HomeProduct = () => {
  return (
    <div>
      <div className="container marketing mx-auto">
        {/* <div className="row">
          <div className="col-lg-4">
            <img src="/images/momo.jpeg" className="h-50 w-50 rounded-circle" />
            <h2 className="fw-normal">Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a className="btn btn-success" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img src="/images/momo.jpeg" className="h-50 w-50 rounded-circle" />

            <h2 className="fw-normal">Heading</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
          <div className="col-lg-4">
            <img src="/images/momo.jpeg" className="h-50 w-50 rounded-circle" />

            <h2 className="fw-normal">Heading</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a className="btn btn-secondary" href="#">
                View details &raquo;
              </a>
            </p>
          </div>
        </div> */}
        <hr className="featurette-divider my-5" />

        <div className="row featurette ">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              Samgyeopsal/Chicken BBQ
            </h2>
            <p className="lead">
              Samgyeopsal is a popular Korean dish of thick, grilled pork belly
              slices. It's often enjoyed with dipping sauces, garlic, onions,
              kimchi, and wrapped in lettuce leaves with rice and condiments.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src="/images/home3.jpeg"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
            />
          </div>
        </div>
        <hr className="featurette-divider my-5" />
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Japchae</h2>
            <p className="lead">
              Japchae is a Korean dish made from stir-fried glass noodles,
              typically mixed with vegetables, soy sauce, and sesame oil. It
              often includes pork or Chicken and is garnished with sesame seeds.
              Japchae is known for its savory and slightly sweet flavor.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src="/images/home2.jpeg"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
            />
          </div>
        </div>
        <hr className="featurette-divider my-5" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">CUTLET</h2>
            <p className="lead">
              A cutlet is a breaded and fried or baked piece of meat, usually
              made from chicken. It is typically pounded thin, coated in
              breadcrumbs, and seasoned before cooking. Cutlets are enjoyed for
              their crispy exterior and tender, flavorful meat.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src="/images/home1.jpeg"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
