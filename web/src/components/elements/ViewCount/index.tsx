import VisibilityIcon from '@mui/icons-material/Visibility';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';

export type ViewCountProps = {
  count: number;
  size?: 'small' | 'medium' | 'large';
};

const ViewCount: React.ForwardRefRenderFunction<HTMLDivElement, ViewCountProps> = ({
  count,
  size,
  ...props
}, forwardRef) => {
  const displayCount = useMemo(() => {
    if (10000 <= count) return `${(count / 1000).toLocaleString()}K`;
    return count.toLocaleString();
  }, [count]);

  return (
    <Stack {...props} ref={forwardRef} direction="row">
      <VisibilityIcon fontSize={size} />
      <Typography fontSize={size} ml={.5}>{displayCount}</Typography>
    </Stack>
  );
};

export default React.forwardRef(ViewCount);
