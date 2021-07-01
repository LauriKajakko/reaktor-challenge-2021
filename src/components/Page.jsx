import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Page = forwardRef(({
  children,
  title,
}, ref) => (
  <div
    ref={ref}
  >
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Page;
