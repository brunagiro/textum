import React from 'react';

export default function CommentAltPlus(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <path className="uim-primary" d="M15,9H13V7a1,1,0,0,0-2,0V9H9a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V11h2a1,1,0,0,0,0-2Z" />
      <path className="uim-tertiary" d="M19,2H5A3.00328,3.00328,0,0,0,2,5V15a3.00328,3.00328,0,0,0,3,3H16.58594l3.707,3.707A.99991.99991,0,0,0,22,21V5A3.00328,3.00328,0,0,0,19,2Zm-4,9H13v2a1,1,0,0,1-2,0V11H9A1,1,0,0,1,9,9h2V7a1,1,0,0,1,2,0V9h2a1,1,0,0,1,0,2Z" />
    </svg>
  );
}