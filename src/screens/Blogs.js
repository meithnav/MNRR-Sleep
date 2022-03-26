import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/blogs.css";
import { LoadingContext } from "../utils/LoadingContext";
import LoaderComp from "../components/LoaderComp";
import { base_url } from "../data/data";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "96%",
  minHeight: 200,
}));

export default function Blogs() {
  const [blogs, setBlogs] = React.useState([]);
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = React.useContext(LoadingContext);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get("/blog/get-blogs/")
      .then((res) => {
        setBlogs(res.data);
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });

  }, []);

  return (
    <>
      {isLoading ? (
        <LoaderComp />
      ) : (
        <>
          <h1 className="header"> Blogs </h1>
          <Box sx={{ flexGrow: 1, padding: 3 }}>
            <Grid container spacing={3}>
              {blogs.map((blog) => (
                <Grid item xs={4} key={blog.id}>
                  <a
                    onClick={() => navigate(`/blog/get-single-blog/${blog.id}`)}
                  >
                    <Item elevation={4}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          padding: 15,
                        }}
                      >
                        <div>
                          <h3 className="blog_header">{blog.title}</h3>
                          <p style={{ textAlign: "left" }}>
                            {blog.blog.slice(0, 75)}...
                          </p>
                          <p
                            className="author"
                            style={{ textAlign: "right", paddingRight: 20 }}
                          >
                            ~{blog.author}
                          </p>
                        </div>
                        <div className="blog_img">
                          <img
                            src={base_url + blog.image}
                            style={{ height: 150, width: 200 }}
                          />
                        </div>
                      </div>
                    </Item>
                  </a>
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      )}
    </>
  );
}
