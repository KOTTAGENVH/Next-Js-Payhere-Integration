// Layout.tsx

import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
return (
<div>
{/* Your other layout components /}
{children}
{/ Place the container element here */}
<div id="payhere-modal"></div>
</div>
);
};

export default Layout;