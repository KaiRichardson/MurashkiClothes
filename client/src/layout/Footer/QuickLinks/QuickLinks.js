import React from 'react';
import { Link as L } from 'react-router-dom';
import styled from 'styled-components';
import { Section } from 'elements';

const QuickLinks = () => {
  const items = [
    {
      name: 'cart',
      link: '/cart'
    },
    {
      name: 'shop',
      link: '/shop',
      options: [
        {
          name: 'men',
          link: '/shop/men'
        },
        {
          name: 'women',
          link: '/shop/women'
        },
        {
          name: 'children',
          link: '/shop/children'
        }
      ]
    },
    {
      name: 'contact',
      link: '/contact'
    }
  ];
  return (
    <Wrapper title='quick links' titleTag='h3'>
      <List>
        {items.map(item => (
          <Item key={item.link}>
            <Link to={item.link}>{item.name}</Link>
            {item.options && (
              <List>
                {item.options.map(item => (
                  <Item key={item.link}>
                    <Link to={item.link}>{item.name}</Link>
                  </Item>
                ))}
              </List>
            )}
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default QuickLinks;

const Wrapper = styled(Section)`
  grid-area: QuickLinks;
`;

const List = styled.ul``;

const Item = styled.li``;

const Link = styled(L)``;
