import React from 'react';

type FlipbookIframeCatalogProps = {
  src?: string;
  height?: string | number;
  width?: string | number;
};


const FlipbookIframeCatalog: React.FC<FlipbookIframeCatalogProps> = ({
  src = "https://heyzine.com/flip-book/a799c6d307.html",
  height = "calc(100vh - 64px)",
  width = "100%"
}) => (
  <iframe
    allowFullScreen
    allow="clipboard-write"
    className="fp-iframe"
    style={{
      border: '1px solid lightgray',
      width,
      height
    }}
    src={src}
    title="Heyzine Flip Book"
  ></iframe>
);

export default FlipbookIframeCatalog;
