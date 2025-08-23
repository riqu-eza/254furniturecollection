/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProduct from "@/components/FeaturedProduct";
import TopCategories from "@/components/TopCategories";
import { get_all_categories } from "@/Services/Admin/category";
import { get_all_products } from "@/Services/Admin/product";
import useSWR from "swr";
import { toast, ToastContainer } from "react-toastify";
import {
  setCategoryData,
  setCatLoading,
  setProdLoading,
  setProductData,
} from "@/utils/AdminSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "./loading";
import { setUserData } from "@/utils/UserDataSlice";
import { RootState } from "@/Store/store";

export const metadata = {
  title: "254 Furniture Collection - Affordable Furniture in Nairobi",
  description:
    "Shop quality, stylish, and affordable furniture in Nairobi with 254 Furniture Collection. Explore sofas, beds, dining sets, office desks, and custom-made designs delivered across Kenya.",
  keywords: [
    "furniture Nairobi",
    "furniture Kenya",
    "affordable furniture Nairobi",
    "buy furniture online Kenya",
    "Nairobi sofas",
    "beds in Nairobi",
    "office furniture Kenya",
    "dining sets Nairobi",
    "home furniture Kenya",
    "custom furniture Nairobi",
    "modern furniture Kenya",
    "wooden furniture Nairobi",
    "furniture shops Nairobi",
    "furniture delivery Nairobi",
    "living room sets Kenya",
    "254 Furniture Collection",
  ],
  openGraph: {
    type: "website",
    url: "https://www.254furniturecollection.co.ke/",

    title: "254 Furniture Collection - Online Furniture Store in Nairobi",
    description:
      "Experience comfort and style with 254 Furniture Collection. Shop quality sofas, beds, office furniture, and custom pieces online with delivery across Nairobi and Kenya.",
    // siteName: "254 Furniture Collection",
    images: [
      {
        url: "https://www.254furniturecollection.co.ke/og-furniture.png", // Ensure this image exists in your /public folder
        
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://www.254furniturecollection.co.ke/",
    title: "Dancah Technology – Smart Property Solutions",
    description:
      "Experience comfort and style with 254 Furniture Collection. Shop quality sofas, beds, office furniture, and custom pieces online with delivery across Nairobi and Kenya.",
    images: [
      "https://www.254furniturecollection.co.ke/og-furniture.png",
    ],
  },
};
export default function Home() {
  const dispatch = useDispatch();
  const categoryLoading = useSelector(
    (state: RootState) => state.Admin.catLoading
  );
  const productLoading = useSelector(
    (state: RootState) => state.Admin.productLoading
  );
  const [loading, setLoading] = useState(true);
  const [ratio, setRatio] = useState(16 / 9);
  // useEffect(() => {
  //   toast.warning("Application is under development , All data is dummy data")
  //   toast.warning('This is a demo website, to  heck how one of your own can look like')
  // }, [])

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) return;
    dispatch(setUserData(JSON.parse(userData)));
  }, []);

  useEffect(() => {
    FetchDataOFProductAndCategory();
  }, []);

  const FetchDataOFProductAndCategory = async () => {
    const categoryData = await get_all_categories();
    if (categoryData?.success !== true) toast.error(categoryData?.message);

    dispatch(setCategoryData(categoryData?.data));

    const productData = await get_all_products();
    if (productData?.success !== true) toast.error(productData?.message);

    dispatch(setProductData(productData?.data));

    setLoading(false);
  };

  useEffect(() => {
    dispatch(setCatLoading(loading));
    dispatch(setProdLoading(loading));
  }, [categoryLoading, productLoading, dispatch, loading]);

  return (
    <>
      <Navbar />
      <Hero setRatio={setRatio} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <TopCategories />
          <FeaturedProduct />
          <Footer />
        </>
      )}
      <ToastContainer />
    </>
  );
}
