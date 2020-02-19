import React, { FunctionComponent, PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';

export const Layout: FunctionComponent = (props: PropsWithChildren<{}>) => (
  <Container>
    {props.children}
  </Container>
);
