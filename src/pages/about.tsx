import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <p>Somos um projeto para compartilhar musica e talento, de forma pratica e facil.</p>
    </Content>
  </Main>
);

export default About;
