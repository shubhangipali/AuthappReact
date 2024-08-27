import React from "react";
import "./ItemList.css";
import { CDN_URL } from "./utils/constants";
import { useDispatch } from "react-redux";
import { removeItem } from "./utils/cartSlice";

const ItemListRemove = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <>
      {items.map((item) => (
        <div className="item-main-list" key={item.card.info.id}>
          <div className="item-1-side">
            <div className="item-side-name">{item.card.info.name}</div>
            <div className="item-side-price">
              ₹{" "}
              {item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </div>
            <div className="item-side-description">
              {item.card.info.description}
            </div>
          </div>
          <div className="item-2-side">
            <div className="item-image-positioning">
              <img
                className="item-side-image"
                src={CDN_URL + item.card.info.imageId}
                alt="food-img"
                width={"50px"}
              />
              {/* <button
                className="item-side-button"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button> */}
              <div>
                <button
                  type="button"
                  className="item-side-button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => handleAddItem(item)}
                >
                  Remove
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Item Removed 🍕
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemListRemove;
