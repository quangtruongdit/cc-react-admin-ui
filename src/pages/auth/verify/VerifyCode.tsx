import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Auth from "../Auth";
import "./verify_code.scss";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useVerifyMutation } from '../../../services/apis/auth';
import Loader from "../../../components/loader/Loader";

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
    const location = useLocation();
    const fromLogin = location.state?.fromLogin;

    const [verify, { isLoading }] = useVerifyMutation();

    const onSubmit = async (data: IFormInput) => {
        console.log('Form Submitted', data);
        try {
            const result = await verify({ code: data.code }).unwrap();
            // If successful, you can handle the token or navigate

            if (result.status == 200) {
                navigate('/');
            } else {
                alert(result.message)
            }
        } catch (err) {
            // The error will be handled automatically by the "error" state returned by the mutation
            console.error('Verify failed:', err);
        }
    };

    if (!fromLogin) {
        // Redirect back to login if not coming from the login screen
        return <Navigate to="/login" replace />;
    }

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
                    <button type="submit" className="submit-btn">Submit</button>
                    {isLoading && <Loader />}
                    {/* {<div>
                        {JSON.stringify(error)}
                    </div>} */}
                </form>
            </Auth>
        </>
    )
}

export default VerifyCode;