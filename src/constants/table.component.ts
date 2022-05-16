import { GridColDef } from '@mui/x-data-grid';

export const rows = [
    { id: 1, season: 2019, champion: 'Toronto Raptors', points: 45 },
    { id: 2, season: 2018, champion: 'Golden State Warriors', points: 16 },
    { id: 3, season: 2017, champion: 'Golden State Warriors', points: 54 },
    { id: 4, season: 2016, champion: 'Cleveland Cavaliers', points: 150 },
    { id: 5, season: 2015, champion: 'Golden State Warriors', points: 44 },
    { id: 6, season: 2014, champion: 'San Antonio Spurs', points: 36 },
    { id: 7, season: 2013, champion: 'Miami Heat', points: 65 },
];

export const columns: GridColDef[] = [
    { 
      field: 'season', 
      headerName: 'season', 
      width: 130, 
      align: 'center', 
      headerAlign: "center"},
    {
      field: 'champion',
      headerName: 'champion',
      width: 130,
      align: 'center' , 
      headerAlign: "center",
      editable: true,
    },
    {
      field: 'points',
      headerName: 'points',
      type: 'number',
      width: 130,
      align: 'center' , 
      headerAlign: "center",
      editable: true,
    }
  ];