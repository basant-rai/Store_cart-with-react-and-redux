import classNames from "classnames";
import React from "react";

const MenuList = ({ menus, setCategoryId, categoryId }) => {
  return (
    <main>
      <section class="text-center container">
        <div class="row pt-2 pb-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Menu List</h1>
            <p class="lead text-body-secondary">
              Experience the Heart of Korea in Every Bite!
            </p>
          </div>
        </div>
      </section>

      <div class="album bg-body-tertiary">
        <div class="container">
          <div className="d-flex rounded-pill p-2 border shadow gap-2 overflow-auto">
            {menus.map((menu, idx) => (
              <div key={idx} class="list-group rounded-pill">
                <button
                  type="button"
                  className={classNames(
                    "list-group-item list-group-item-action fw-bold",
                    categoryId === menu._id && "active bg-dark"
                  )}
                  aria-current="true"
                  style={{ fontSize: "12px" }}
                  onClick={() => setCategoryId(menu._id)}
                >
                  {menu.category_name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MenuList;
