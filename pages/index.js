import MainLayout from "../components/MainLayout/MainLayout";
import Post from "../components/Post/Post";

export default function Home() {
  return (
    <MainLayout title={"Home Page"}>
      <div className="container">
        <h1>Home Page</h1>
        <Post
          title="Post 1"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac nibh gravida, tempor mi maximus, dapibus augue. Duis ut semper nulla. Maecenas placerat scelerisque sagittis. Sed at odio eu magna posuere laoreet quis tincidunt massa. Quisque a consectetur est. Maecenas vitae aliquet sem. Etiam a ornare metus."
        />
        <Post
          title="Post 2"
          body="Morbi placerat vel enim non fermentum. Sed porttitor leo non augue commodo, eget pulvinar nisi faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum at nisi convallis, laoreet nisi vel, sollicitudin nibh. Ut neque turpis, vulputate vitae tempor et, rutrum at erat."
        />
      </div>
    </MainLayout>
  );
}
