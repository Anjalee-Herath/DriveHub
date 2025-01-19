import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Card from "../../Card/Card";

const Categories = ({ title, data }) => {
  return (
    <>
      <SectionHeading title={title} />
      <div className="flex px-8">
        {data &&
          data.map((item, index) => (
            <Card
              title={item?.title}
              description={item?.description}
              imagePath={item?.image}
              actionArrow={true}
            />
          ))}
      </div>
    </>
  );
};

export default Categories;
