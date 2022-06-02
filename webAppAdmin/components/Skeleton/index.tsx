import React from "react";
import { Skeleton } from "@mui/material";

export const SkeletonProduct = () => {
  return (
    <div>
      <Skeleton variant="rectangular" className="rounded-lg" width={280} height={158} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={20} height={20} />
    </div>
  );
};
