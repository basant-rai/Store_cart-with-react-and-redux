/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const ProductList = () => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3 container mx-auto">
      <div className="">
        <img src="/images/momo.jpeg" className="h-50 w-50 rounded-circle" />
        <h2 className="fw-normal">Heading</h2>
        <p>
          Some representative placeholder content for the three columns of text
          below the carousel. This is the first column.
        </p>
        <p>
          <a className="btn btn-success btn-sm" href="#">
            View details &raquo;
          </a>
        </p>
      </div>
      <div className="">
        <img src="/images/momo.jpeg" className="h-50 w-50 rounded-circle" />

        <h2 className="fw-normal">Heading</h2>
        <p>
          Another exciting bit of representative placeholder content. This time,
          we've moved on to the second column.
        </p>
        <p>
          <a className="btn btn-secondary" href="#">
            View details &raquo;
          </a>
        </p>
      </div>
      <div className="">
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
    </div>
  );
};

export default ProductList;
