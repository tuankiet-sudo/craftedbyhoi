import React from 'react';

type FlipbookIframeProps = {
  src?: string;
  height?: string | number;
  width?: string | number;
};

const FlipbookIframe: React.FC<FlipbookIframeProps> = ({
  src = "https://heyzine.com/flip-book/2e1b7dba53.html",
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

export default FlipbookIframe;
