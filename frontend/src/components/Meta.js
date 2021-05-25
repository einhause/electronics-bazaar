import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Electronics Bazzar',
  keywords: 'electronics, cheap electronics, buy electronics, shop, eCommerce',
  description: 'We sell the best electronics for cheap',
};

export default Meta;
