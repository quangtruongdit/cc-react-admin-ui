import DataTable from '../../components/dataTable/DataTable';
import { GridColDef } from '@mui/x-data-grid';
import './Orders.scss';
import { orders } from '../../data';

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
        },
    },
    {
        field: "title",
        type: "string",
        headerName: "Title",
        width: 250,
    },
    {
        field: "color",
        type: "string",
        headerName: "Color",
        width: 150,
    },
    {
        field: "price",
        type: "string",
        headerName: "Price",
        width: 200,
    },
    {
        field: "producer",
        headerName: "Producer",
        type: "string",
        width: 200,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 200,
        type: "string",
    }
];

const Orders = () => {
    return (
        <div className="orders">
            <div className='info'>
                <h1>Orders</h1>
            </div>
            <DataTable hasAction={false} slug='' columns={columns} rows={orders}></DataTable>
        </div>
    )
}

export default Orders