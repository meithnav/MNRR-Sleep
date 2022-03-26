import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../styles/home2.css";
import "../styles/donation.css";
import "../styles/events.css";
import "../styles/blogs.css";
import BlogDesc from "../components/Blogs/BlogDesc";
import BlogCategories from "../components/Blogs/BlogCategories";
import RecentBlogs from "../components/Blogs/RecentBlogs";
import axios from "axios";
import { LoadingContext } from "../utils/LoadingContext";
import LoaderComp from "../components/LoaderComp";
import { base_url } from "../data/data";

export default function BlogDetails() {
  const { id } = useParams();
  console.log("ID", id);
  const [card, setCard] = useState();
  const [blogs, setBlogs] = React.useState([]);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/blog/get-single-blog/${id}/`)
      .then((res) => {
        console.log("RESPONSE : ", res.data);
        setCard(res.data);
        console.log("CARD", card);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/blog/get-blogs/")
      .then((res) => {
        setBlogs(() => res.data);
        console.log(blogs);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, []);

  // useEffect(()=>{}, [isLoading])

  return (
    <>
      {isLoading ? (
        <LoaderComp />
      ) : (
        <div className="donateNow eventDetails">
          <div className="banner2">
            {/* <p className="date">{card.date}</p> */}
            <p className="date">12th JAN</p>
            <img src={base_url + card?.image} alt={card?.title} />
          </div>
          <div className="left_form">
            <BlogDesc card={card} />
          </div>

          <div className="campaign blog left_info">
            <RecentBlogs blogs={blogs} />
            <BlogCategories />
          </div>
        </div>
      )}
    </>
  );
}
