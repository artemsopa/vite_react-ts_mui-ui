import { useState } from 'react';
import { useDemoData } from '@mui/x-data-grid-generator';

import Header from '@/components/Header';
import Table from '@/components/Table';

const Home: React.FC = () => {
  const [headerHeight, setHeaderHeight] = useState<number | null>();

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header setHeight={setHeaderHeight} />
      {headerHeight
        && <Table headerHeight={headerHeight} data={data} />}
    </div>
  );
};

export default Home;
