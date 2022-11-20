import mockPosts from "./mockPosts";
import Post from "./Post";

export default function Posts() {
  return (
    <div>
      {mockPosts.map((el) => (
        <Post key={el.name} el={el} />
      ))}
    </div>
  );
}
