import {ReactElement} from 'react';
import {Box, Breadcrumbs, Link, Typography} from '@mui/material';
import {ItemWithIDType} from '@/utils/arrayFormaters/getTransformedArrayWithIDs';
import {UseBreadcrumbsReturnValues} from '@/hooks/global/useBreadcrumbs';

interface BreadcrumbsBlockProps {
  breadcrumbs: ItemWithIDType<UseBreadcrumbsReturnValues>[];
}

const BreadcrumbsBlock = ({breadcrumbs}: BreadcrumbsBlockProps): ReactElement => {
  const lastBreadcrumbIndex = breadcrumbs.length - 1;

  return (
    <Box className="py-3 sm:py-4">
      <Breadcrumbs aria-label="breadcrumb" className="text-xs text-primary-400 sm:text-base">
        {breadcrumbs.map(({id, value: {name, href}}, index) =>
          index !== lastBreadcrumbIndex ? (
            <Link key={id} className="flex items-center text-primary-300 no-underline hover:underline" href={href}>
              {name}
            </Link>
          ) : (
            <Typography key={id} className="text-xs text-primary sm:text-base">
              {name}
            </Typography>
          )
        )}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsBlock;
