import React , {useContext} from "react";
import RecentArticle from "./RecentArticle";
import axios from "axios";
import toast from "react-hot-toast";

import { LoadingContext } from "../../utils/LoadingContext";

export default function RecentBlogs({blogs}) {
  const { isLoading, setIsLoading } = React.useContext(LoadingContext);


  return (
    <>
      <div className="recentBLog">
        {blogs?.map((blog) => (
          <RecentArticle key={blog.id} card={blog} />
        ))}
      </div>
    </>
  );
}
