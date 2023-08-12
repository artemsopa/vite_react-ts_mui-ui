import { DataGrid } from '@mui/x-data-grid';
import { DemoTreeDataValue } from '@mui/x-data-grid-generator/services/tree-data-generator';

interface Props {
  headerHeight: number;
  data: DemoTreeDataValue,
}

const Table: React.FC<Props> = ({ headerHeight, data }) => (
  <DataGrid
    sx={{ height: `calc(100vh - ${headerHeight}px)`, width: '100%' }}
    rows={data.rows}
    columns={data.columns}
    initialState={{
      pagination: {
        paginationModel: {
          pageSize: 10,
        },
      },
    }}
    pageSizeOptions={[10]}
    checkboxSelection
    disableRowSelectionOnClick
  />
);

export default Table;
