import { cssObj } from '@fuel-ui/css';
import { Box, FuelLogo, Link } from '@fuel-ui/react';
import type { NavOrder, Versions } from '~/src/types';

import { Sidebar } from './Sidebar';

interface SidebarContainerProps {
  allNavs?: NavOrder[];
  versions?: Versions;
  isNightly: boolean;
}

export function SidebarContainer({
  allNavs,
  versions,
  isNightly,
}: SidebarContainerProps) {
  return (
    <Box css={styles.sidebar}>
      <Box css={styles.logo}>
        <Link href="/" className="logo">
          <FuelLogo size={30} />
        </Link>
      </Box>

      <Box>
        <Sidebar allNavs={allNavs} versions={versions} isNightly={isNightly} />
      </Box>
    </Box>
  );
}

export const styles = {
  sidebar: cssObj({
    display: 'none',
    borderRight: '1px solid $border',
    padding: '$8',
    height: 'calc(100vh - 64px)',
    overflowY: 'auto',
    '@lg': {
      display: 'block',
    },
  }),
  logo: cssObj({
    mb: '$8',
    px: '$4',
  }),
};
