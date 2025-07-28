import React from 'react';

type FlipbookIframeProps = {
  src?: string;
  height?: string | number;
  width?: string | number;
};

const FlipbookIframe: React.FC<FlipbookIframeProps> = ({
  src = "https://heyzine.com/flip-book/ae5f21cc8c.html",
  height = 800,
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
