import { Container, Hamburger, Image, Section, Icon } from './trds';

function App() {
  return (
    <Section>
      <Hamburger isActive />
      <Container className="lol">
        <Image alt="wow" src="https://processing.org/static/44e21b6aa64cb77fa3b828c8c7ae86dc/d6138/PImage_copy_.png" />
        <Icon icon="x" />
      </Container>
    </Section>
  );
}

export default App;
