import React from 'react';
import styled from 'styled-components';

import { ProductCategories } from 'Store';
import { Link, Section } from 'elements';

interface Props {}

const Collections: React.FC<Props> = () => {
  const categories: ProductCategories[] = ['MENS', 'WOMENS', 'CHILDRENS'];

  return (
    <Section title='Shop by Category'>
      <CollectionList>
        {categories.map(c => (
          <li key={c}>
            <h3>
              <Link to={`/shop/${c.toLowerCase()}`}>{c}</Link>
            </h3>

            {/* TODO: Possibly have an image of a random/ recent product here? */}
          </li>
        ))}
      </CollectionList>
    </Section>
  );
};

export default Collections;

const CollectionList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;

  h3 {
    font-weight: normal;
  }
`;
