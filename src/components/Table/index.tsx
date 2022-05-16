import { columns, rows } from "../../constants/table.component";
import { DataGrid } from "@mui/x-data-grid";
import { Conteiner } from "./style";

const DataGridDemo = () => {
  return (
    <Conteiner>
      <header>
        <h1>List of NBA champions</h1>
      </header>
      <DataGrid
        data-testid="lixo"
        rows={rows}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[4]}
        disableSelectionOnClick
      />
    </Conteiner>
  );
};

export default DataGridDemo;
