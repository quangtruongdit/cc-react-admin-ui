import { useNavigate } from "react-router-dom";
import Auth from "../Auth";
import "./verify_code.scss";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormInput {
    code: string;
}
const schema = yup.object({
    code: yup
        .string()
        .length(4, 'Code must have 4 characters long')
        .required('Code is required'),

}).required();

const VerifyCode = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(schema), // Integrate Yup schema with React Hook Form
    });

    const navigate = useNavigate();

    const onSubmit = (data: IFormInput) => {
        console.log('Form Submitted', data);
        // handle login logic here (e.g., API call)
        navigate('/');
    };

    return (
        <>
            <Auth title="Verification" subtitle="Please enter verification code">
                <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input
                            type="text"
                            id="code"
                            {...register('code')}
                            placeholder="Enter your code"
                        />
                        {/* Show error message inside a div below the input field */}
                        {errors.code && <div className="error-message">{errors.code.message}</div>}
                    </div>
                </form>
            </Auth>
        </>
    )
}

export default VerifyCode;