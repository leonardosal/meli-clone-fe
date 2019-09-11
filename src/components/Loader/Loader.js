import React from 'react';
import ContentLoader from 'react-content-loader';

import './Loader.scss';

const ItemLoader = () => (
  <ContentLoader
    height={60}
    speed={1}
    primaryColor="#f0f0f0"
    secondaryColor="#e0e0e0"
  >
    <rect x="0" y="0" rx="5" ry="5" width="50" height="50" />
    <rect x="80" y="0" rx="2" ry="4" width="120" height="13" />
    <rect x="80" y="30" rx="2" ry="3" width="150" height="10" />
    <rect x="360" y="0" rx="2" ry="3" width="30" height="10" />
  </ContentLoader>
);

const DetailLoader = () => (
  <ContentLoader
    height={100}
    speed={1}
    primaryColor="#f0f0f0"
    secondaryColor="#e0e0e0"
  >
    <rect x="10" y="0" rx="5" ry="5" width="100" height="100" />
    <rect x="150" y="0" rx="2" ry="3" width="150" height="13" />
    <rect x="150" y="30" rx="2" ry="3" width="120" height="10" />
    <rect x="150" y="60" rx="2" ry="3" width="100" height="10" />
  </ContentLoader>
);

export const LoaderList = () => (
  <div className="loader" data-testid="LoaderList">
    <ItemLoader />
    <ItemLoader />
    <ItemLoader />
    <ItemLoader />
  </div>
);

export const LoaderDetail = () => (
  <div className="loader" data-testid="LoaderDetails">
    <DetailLoader />
  </div>
);
