import React from "react";
import { useParams } from "react-router-dom";

const SingleTemplate = () => {
  const { params } = useParams();
  return <div>{params || "hello world"}</div>;
};

export default SingleTemplate;
