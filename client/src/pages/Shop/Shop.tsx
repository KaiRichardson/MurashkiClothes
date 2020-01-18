import React from 'react';

import { Breadcrumbs, Section } from 'elements';
import Collections from './Collections';

interface Props {}

const Shop: React.FC<Props> = () => (
  <>
    <Breadcrumbs />

    <Collections />

    <Section title='Featured'>
      <p>featured items here</p>
    </Section>
  </>
);

export default Shop;
