import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import {
  columnsClassification,
  columnsLastChampionship,
  rows,
} from "../../constants/table.component";
import { Conteiner } from "./style";

interface TeamsProps {
  teams?: Team[] | any;
  show?: Boolean;
  refresh?: Boolean;
}

interface Team {
  id?: Number;
  position?: Number;
  team?: String;
  wins?: Number | any;
}

const DataGridDemo = ({ show, teams, refresh }: TeamsProps) => {
  const [rowTable, setRowTable] = useState<any>([]);
  const [columnsTable, setColumnsTable] = useState<any>([]);

  useEffect(() => {
    if (refresh) {
      console.log(teams)
      if (show) {
        setColumnsTable(columnsClassification);
        setRowTable(teams);
      } else {
        setColumnsTable(columnsLastChampionship);
        setRowTable(rows);
      }
    }
  }, [refresh, show]);

  return (
    <Conteiner>
      <header>
        <h1>
          {show ? "Championship 2020": "List of NBA champions"}
        </h1>
      </header>
      <DataGrid
        data-testid="lixo"
        rows={rowTable}
        columns={columnsTable}
        pageSize={4}
        rowsPerPageOptions={[4]}
        disableSelectionOnClick
      />
    </Conteiner>
  );
};

export default DataGridDemo;
