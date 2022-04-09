import MainLayout from "../components/MainLayout/MainLayout";
import Post from "../components/Post/Post";

export default function Home() {
  return (
    <MainLayout title={"Home Page"}>
      <Post
        title="Post 1"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac nibh gravida, tempor mi maximus, dapibus augue. Duis ut semper nulla. Maecenas placerat scelerisque sagittis. Sed at odio eu magna posuere laoreet quis tincidunt massa. Quisque a consectetur est. Maecenas vitae aliquet sem. Etiam a ornare metus."
      />
      <Post
        title="Post 2"
        body="Morbi placerat vel enim non fermentum. Sed porttitor leo non augue commodo, eget pulvinar nisi faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum at nisi convallis, laoreet nisi vel, sollicitudin nibh. Ut neque turpis, vulputate vitae tempor et, rutrum at erat."
      />
      <Post
        title="Post 3"
        body="Ut pulvinar fringilla sem vitae commodo. Nam blandit dui quis quam convallis, a sollicitudin dui condimentum. Ut sit amet magna sed nunc pharetra mattis. Nullam ex tortor, porttitor nec tortor quis, molestie pellentesque dolor. Morbi eget urna at risus venenatis viverra ut sit amet mi. Maecenas vel ante scelerisque, accumsan sapien nec, suscipit metus."
      />
      <Post
        title="Post 4"
        body="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Aliquam vel mi blandit turpis pellentesque semper eget at eros. Etiam tempor sem ut facilisis blandit. Cras sollicitudin consequat dictum. Quisque commodo velit quis auctor sodales. Vivamus lacinia convallis porta."
      />
    </MainLayout>
  );
}
