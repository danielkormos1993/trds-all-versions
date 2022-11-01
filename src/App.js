import { useCallback, useContext, useEffect, useState } from 'react';
import { Container, Hamburger, Image, Section, Icon } from './trds';
import { toastContext } from './trds/components/Toast';
import Button from './trds/components/Button';
import { ModalContextProvider, Modal } from './trds/components/Modal';
import Header from './trds/components/Header';

function App() {

  const launchToast = useContext(toastContext);

  useEffect(() => {

    setTimeout(() => {
  
      launchToast('anyad', 'error')
  
    }, 3000)

    setTimeout(() => {
  
      launchToast('dikk', 'success')
  
    }, 8000)
  
  }, [launchToast]);

  const [modalOpened, setModalOpened] = useState(false);
  const [modalOpenedTwo, setModalOpenedTwo] = useState(false);

  const closeModal1 = useCallback(() => {

    setModalOpened(false);

  }, []);

  const closeModal2 = useCallback(() => {

    setModalOpenedTwo(false);

  }, []);

  return (
    <ModalContextProvider>
    <Header
      breakpoint="1000px"
      logo={<a href="/"><Image src="assets/image/logo.webp" alt="logo" /></a>}
    >
      <Button text="anzad" className="plain" />
      <Button text="anzad" className="plain" />
      <Button text="anzad" className="plain" />
      <Button text="anzad" className="plain" />
    </Header>
    <Section>
      <Hamburger isActive />
      <Container className="lol">
        <Image alt="wow" src="https://processing.org/static/44e21b6aa64cb77fa3b828c8c7ae86dc/d6138/PImage_copy_.png" />
        <Icon icon="x" />

        <Button text="anyad" onClick={() => setModalOpened(true)} />

      </Container>
    </Section>

    <Modal title="modal 1" isOpen={modalOpened} onClose={closeModal1}>
      loool
      <button onClick={() => setModalOpenedTwo(true)}>LOL OPNE 2.</button>
    </Modal>

    <Modal title="modal 2" isOpen={modalOpenedTwo} onClose={closeModal2}>
      loool2
    </Modal>

    </ModalContextProvider>
  );
}

export default App;
