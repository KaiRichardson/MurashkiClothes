import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { spacing } from 'utils';
import { Link } from '../Link';

interface Props {
  productName?: string;
}

const Breadcrumbs: React.FC<Props> = ({ productName }) => {
  const { url } = useRouteMatch();
  const trail: string[] = url.split('/').slice(1);

  return (
    <List>
      {trail.map((page, i) => (
        <Item key={page}>
          {/*URL is constructed by joining the current item and all subsequent items */}
          <Breadcrumb to={`/${trail.slice(0, i + 1).join('/')}`}>
            {/* If the current iteration is a number it is a productid,
                  in which case the passed in productName is used instead*/}
            {parseInt(page) && productName ? productName : page}
          </Breadcrumb>
        </Item>
      ))}
    </List>
  );
};

export default Breadcrumbs;

const Breadcrumb = styled(Link).attrs({ light: true, 'data-testid': 'breadcrumbLink' })`
  padding: 0 ${spacing.xxs};
  text-transform: uppercase;
  letter-spacing: 2px;

  &::before {
    content: '/';
    padding: 0 ${spacing.xxs};
    font-weight: bold;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  display: inline-block;
`;

Breadcrumbs.propTypes = {
  productName: PropTypes.string
};
