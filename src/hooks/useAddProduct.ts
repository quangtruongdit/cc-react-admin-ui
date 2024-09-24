import { useState } from 'react';
import { GridColDef } from "@mui/x-data-grid";

interface UseAddFormProps {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UseAddFormReturn {
    filteredColumns: GridColDef[];
    handleClose: () => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    formData: { [key: string]: any };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useAddProduct = ({ columns, setOpen }: UseAddFormProps): UseAddFormReturn => {
    const [formData, setFormData] = useState<{ [key: string]: any }>({});

    const filteredColumns = columns.filter(column => column.field !== 'id' && column.field !== 'img');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Submit ${JSON.stringify(formData)}`)
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return {
        filteredColumns,
        handleClose,
        handleSubmit,
        formData,
        handleChange,
    };
};

export default useAddProduct;
