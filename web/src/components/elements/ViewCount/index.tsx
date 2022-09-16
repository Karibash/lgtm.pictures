import VisibilityIcon from '@mui/icons-material/Visibility';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useMemo } from 'react';

export type ViewCountProps = {
  count: number;
  size?: 'small' | 'medium' | 'large';
};

const ViewCount: React.FC<ViewCountProps> = ({
  count,
  size,
}) => {
  const displayCount = useMemo(() => {
    if (10000 <= count) return `${(count / 1000).toLocaleString()}K`;
    return count.toLocaleString();
  }, [count]);

  return (
    <Stack direction="row">
      <VisibilityIcon fontSize={size} />
      <Typography fontSize={size} ml={.5}>{displayCount}</Typography>
    </Stack>
  );
};

export default ViewCount;
