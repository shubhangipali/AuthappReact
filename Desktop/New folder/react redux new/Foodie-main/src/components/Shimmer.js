import React from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";
import { ShimmerTitle } from "react-shimmer-effects";
import { ShimmerCircularImage } from "react-shimmer-effects";
import { ShimmerCategoryList } from "react-shimmer-effects";

export const Shimmer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <ShimmerTitle line={2} gap={10} variant="primary" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <ShimmerTitle line={2} gap={10} variant="primary" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ShimmerThumbnail height={250} rounded />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ShimmerThumbnail height={250} rounded />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ShimmerThumbnail height={250} rounded />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ShimmerThumbnail height={250} rounded />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ShimmerThumbnail height={250} rounded />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ShimmerThumbnail height={250} rounded />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ShimmerThumbnail height={250} rounded />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ShimmerThumbnail height={250} rounded />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ShimmerSlider = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <ShimmerCircularImage size={180} />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <ShimmerCircularImage size={180} />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <ShimmerCircularImage size={180} />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <ShimmerCircularImage size={180} />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <ShimmerCircularImage size={180} />
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <ShimmerCircularImage size={180} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ShimmerMenu1 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto d-flex justify-content-center">
            <ShimmerThumbnail height={250} width={900} rounded />
          </div>
          <div className="col-lg-2 m-auto d-flex justify-content-center"></div>
          <div className="col-lg-8 m-auto d-flex justify-content-center mt-2">
            <ShimmerCategoryList
              categoryStyle="STYLE_SEVEN"
              items={1}
              width={900}
              height={100}
            />
          </div>
          <div className="col-lg-2 m-auto d-flex justify-content-center"></div>
          <div className="col-lg-2 m-auto d-flex justify-content-center"></div>
          <div className="col-lg-8 m-auto d-flex justify-content-center mt-2">
            <ShimmerCategoryList
              categoryStyle="STYLE_SEVEN"
              items={1}
              width={900}
              height={100}
            />
          </div>
          <div className="col-lg-2 m-auto d-flex justify-content-center"></div>
          <div className="col-lg-2 m-auto d-flex justify-content-center"></div>
          <div className="col-lg-8 m-auto d-flex justify-content-center mt-2">
            <ShimmerCategoryList
              categoryStyle="STYLE_SEVEN"
              items={1}
              width={900}
              height={100}
            />
          </div>
          <div className="col-lg-2 m-auto d-flex justify-content-center"></div>
        </div>
      </div>
    </div>
  );
};
