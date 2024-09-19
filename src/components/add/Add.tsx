import React from 'react';
import { GridColDef } from "@mui/x-data-grid";
import useAddProduct from '../../hooks/useAddProduct';
import "./add.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = ({ slug, columns, setOpen }: Props) => {
  const { filteredColumns, handleClose, handleSubmit, formData, handleChange } = useAddProduct({ slug, columns, setOpen });

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={handleClose}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
          {filteredColumns.map((column) => (
            <div className="item" key={column.field}>
              <label>{column.headerName}</label>
              <input
                type={column.type || 'text'}
                name={column.field}
                placeholder={column.field}
                value={formData[column.field] || ''}
                onChange={handleChange}
              />
            </div>
          ))}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
