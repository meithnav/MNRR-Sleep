import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import toast from "react-hot-toast";

const base_url = "http://f2cf-2409-4040-e10-c1ba-45b4-c25d-1796-6b2b.ngrok.io";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "96%",
}));

export default function Blogs() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/blog/get-blogs/")
      .then((res) => {
        setBlogs(res.data);
        console.log(res);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, []);

  return (
    <>
      <h1> Blogs </h1>
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Grid container spacing={2}>
          {blogs.map((blog) => (
            <Grid item xs={6} key={blog.id}>
              <Item>
                <div
                  style={{ display: "flex", flexDirection: "row", padding: 5 }}
                >
                  <div>
                    <h3>{blog.title}</h3>
                    <p style={{ textAlign: "left" }}>
                      {blog.blog.slice(0, 75)}...
                    </p>
                    <p style={{ textAlign: "right", paddingRight: 20 }}>
                      ~{blog.author}
                    </p>
                  </div>
                  <div>
                    <img
                      src={base_url + blog.image}
                      style={{ height: 150, width: 200 }}
                    />
                  </div>
                </div>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
