import React, { Suspense } from "react";
import { importRemote } from "@module-federation/utilities";

interface DynamicButtonProps {
  button: {
    url?: string;
    scope?: string;
    module?: string;
  };
}

const DynamicButton: React.FC<DynamicButtonProps> = ({
  button: { url, scope, module },
}) => {
  if (!url || !scope || !module) {
    return null;
  }

  const Component = React.lazy(() => importRemote({ url, scope, module }));

  return (
    <Suspense fallback="...loading">
      <Component />
    </Suspense>
  );
};

export default DynamicButton;
