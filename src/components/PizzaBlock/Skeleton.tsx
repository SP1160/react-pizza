import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={468}
        viewBox="0 0 280 468"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <circle cx="136" cy="136" r="116" />
        <rect x="0" y="268" rx="10" ry="10" width="280" height="28" />
        <rect x="0" y="326" rx="10" ry="10" width="280" height="85" />
        <rect x="0" y="430" rx="10" ry="10" width="95" height="30" />
        <rect x="125" y="420" rx="24" ry="24" width="152" height="45" />
    </ContentLoader>
);
