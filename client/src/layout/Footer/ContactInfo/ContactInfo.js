import React from 'react';
import styled from 'styled-components';

import { spacing } from 'utils';
import { Title3 } from 'elements';
import ContactItem from './ContactItem';

const ContactInfo = () => {
  const items = [
    {
      value: '(555)-555-5555',
      icon: 'fas fa-phone',
      link: 'tel://555-555-5555'
    },
    {
      value: 'contact@murashki.com',
      icon: 'fas fa-envelope',
      link: 'mailto://contact@murashki.com'
    },
    {
      value: '203 Fake St. Mountain View, San Francisco, California, USA',
      icon: 'fas fa-map-marker-alt',
      link: 'https://maps.google.com/?q=203 Fake St. Mountain View, San Francisco, California, USA'
    }
  ];

  return (
    <Wrapper>
      <Title>Contact Us</Title>
      <List>
        {items.map(item => (
          <ContactItem key={item.value} {...item} />
        ))}
      </List>
    </Wrapper>
  );
};

export default ContactInfo;

const Wrapper = styled.section`
  grid-area: ContactInfo;
`;

const Title = styled(Title3)`
  margin-bottom: ${spacing.sm};
`;

const List = styled.ul`
  list-style: none;
`;
