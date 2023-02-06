import { App } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "../templates";
import { index } from "../../api/post";
import { useEffect, useState } from "react";
import { setErrors } from "../../store/errors";
import { errors } from "../../helpers/errors";
import { Post } from "../organisms/post/Post";
import { NoResults, Loading } from "../molecules";
import { store } from "../../store";

export const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const token = user.token;
  let isLoggedIn = user.isLoggedIn;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    index(token)
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        dispatch(setErrors(errors(error)));
      })
      .finally(() => setLoading(false));
  }, []);

  store.subscribe(() => {
    const state = store.getState();
    isLoggedIn = state.user.user.isLoggedIn;

    if (!isLoggedIn) {
      setPosts([]);
      setLoading(false);
    }
  });

  if (isLoggedIn) {
    window.Echo
      .channel(`posts`)
      .subscribed(() => {
        console.log('Subscribed');
      })
      .listen('PostCreatedEvent', (result) => {
        setPosts([result.post, ...posts]);
      });
  }

  const showPosts = posts.length > 0
    ? posts.map((post, index) => (
      <Post
        key={index}
        title={post.title}
        content={post.content}
        createdAt={post.created_at}
        userName={post.user.name}
      />
    ))
    : <NoResults content={"No posts found"} />

  return (
    <App>
      <Grid classes={"gap-3 grid-cols-1 grid-rows-1"}>
        {
          loading
            ? <Loading content={"Loading..."} />
            : showPosts
        }
      </Grid>
    </App>
  )
};