import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

import Lottie from 'react-lottie';
import animationData from '../../public/images/animation.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, sou Eduardo Ramos</Name>
          <Function>FullStack Developer</Function>
          <Intro>Graduado em Sistemas de Informação,
            tenho experiência em desenvolvimento Web
            (React, Asp, JS e outros), mobile e criação de conteúdo para o YouTube.
          </Intro>
          <Link href="projects">
            <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src="/images/logo.png" alt="logo" />
        </Logo>
      </Content>
    </Container>
  )
}