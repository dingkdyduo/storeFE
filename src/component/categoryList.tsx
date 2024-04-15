import React, { SyntheticEvent } from "react";
 
 

interface Props {}

const CategoryList: React.FC<Props> = ({
}: Props): JSX.Element => {
  return (
       <ul>
          <li> <a href="/category">category</a></li>
          <li> <a href="/product">Products</a></li>
       </ul>
  );
};

export default CategoryList;
