import React from 'react';
import styled from 'styled-components';

import { spacing } from 'utils';
import { Link as L, Title3 } from 'elements';

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
    <Wrapper>
      <Title>quick links</Title>
      <List>
        {items.map(item => (
          <Item key={item.link}>
            <Link light to={item.link}>
              {item.name}
            </Link>
            {item.options && (
              <List>
                {item.options.map(item => (
                  <Item key={item.link}>
                    <Link light to={item.link}>
                      {item.name}
                    </Link>
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

const Wrapper = styled.section`
  grid-area: QuickLinks;

  text-transform: uppercase;
`;

const Title = styled(Title3)`
  margin-bottom: ${spacing.md};
`;

const List = styled.ul`
  list-style: none;
  margin-left: ${spacing.md};
`;

const Item = styled.li`
  > ${List} {
    margin-left: ${spacing.sm};
    font-size: 70%;
  }
`;

const Link = styled(L)`
  padding-bottom: ${spacing.md};
  display: inline-block;
`;
