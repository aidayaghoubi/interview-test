import styledComponents from "styled-components";
import Navbar from "../navbar/Navbar";

const Container = styledComponents.div`
display:flex;
justify-content:space-between;
`

const Home = () => {
  return (
    <Container>
      <aside>
          <Navbar />
      </aside>
      <section>

      </section>
    </Container>
  );
};
export default Home;
