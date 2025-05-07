import React from 'react';

export default function VsCode() {
  return (
    <>
      <iframe
        src="https://github1s.com/vivek9patel/vivek9patel.github.io/blob/HEAD/components/ubuntu.js"
        frameBorder="0"
        title="VsCode"
        className="h-full w-full bg-ub-cool-grey"
        style={{ height: '100vh', width: '100%' }}
      ></iframe>

      {/* this is not my work, but it's amazing! */}
      {/* Original repo: https://github.com/conwnet/github1s */}
    </>
  );
}

// This function does nothing and won’t render anything.
// You should use <VsCode /> directly inside your JSX tree instead.
export const displayVsCode = () => {
  return <VsCode />;
};
