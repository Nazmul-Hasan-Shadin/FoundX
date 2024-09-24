import React, { ReactNode } from "react";

const layout = ({
  children,
  recentPosts,
}: {
  children: ReactNode;
  recentPosts: ReactNode;
}) => {
  return (
    <div>
      <h2>This is indside home</h2>
      {children}

      <>{recentPosts}</>
    </div>
  );
};

export default layout;
