import React from 'react';

interface Props {
  src: string;
  title?: string;
  height?: number;
}

const AirtableForm = ({ src, title = 'Contact Form', height = 533 }: Props) => (
  <iframe
    className="airtable-embed w-full"
    src={src}
    frameBorder={0}
    width="100%"
    height={height}
    style={{ background: 'transparent', border: '1px solid #334155', borderRadius: '12px' }}
    title={title}
  />
);

export default AirtableForm;
