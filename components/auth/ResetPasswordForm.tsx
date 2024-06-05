import { EmailSchemaInterface } from "@app_types/interfaces/forms_schemas/EmailSchemaInterface";
import { Spinner } from "@nextui-org/spinner";
import GenericFormControl from "@components/form/GenericInput";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface ResetPwFormProps {
  mailSent: boolean;
  isLoading: boolean;
  genericErrorMessage: string;
  register: UseFormRegister<EmailSchemaInterface>;
  resetPwSubmitHandler: (data: EmailSchemaInterface) => void;
  handleSubmit: UseFormHandleSubmit<EmailSchemaInterface, undefined>;
  errors: any;
}

export default function ResetPasswordForm({
  resetPwSubmitHandler,
  register,
  handleSubmit,
  genericErrorMessage,

  isLoading,
  mailSent,
}: ResetPwFormProps) {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <form
          noValidate
          className="max-w-sm mx-auto grow"
          onSubmit={handleSubmit(resetPwSubmitHandler)}
        >
          <h2 className="font-semibold text-4xl mb-7 text-center">
            Forget Password ?
          </h2>
          <div className="text-center my-5 text-gray-400	">
            <p>
              Please enter the email address associated with your account, and
              we will help you reset your password.
            </p>
          </div>

          {genericErrorMessage ? (
            <div className="bg-red-500 text-white py-2.5 mb-5 font-bold text-center">
              {genericErrorMessage}
            </div>
          ) : null}

          <GenericFormControl<EmailSchemaInterface>
            label="your email"
            name="email"
            placeholder="email@y.com"
            type="email"
            register={register}
            errors={false ? [""] : [""]}
            valueAsNumber={false}
          />
          <button
            disabled={isLoading}
            className="text-white bg-mainColor hover:bg-mainColor focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2.5"
          >
            {isLoading ? (
              <Spinner size="sm" color="success" />
            ) : (
              "Reset Password"
            )}
          </button>
          {mailSent && (
            <div className=" mt-3 bg-green-400 text-sm text-center p-5 border rounded-lg">
              We have sent you a link to reset your password
            </div>
          )}
        </form>
      </div>

      {/* <div className="mt-20 flex justify-center items-center">
                <form className="max-w-sm mx-auto grow" >
                    <h2 className="font-semibold text-4xl mb-7 text-center">Forget Password</h2>
                    <div className="text-center my-5 text-gray-400	">
                        <p >Enter your email address and we will send you a link to reset your password</p>
                    </div>
                    <div className="mb-5 ">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input onChange={handleChange} name="email" value={formData.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com" required />
                        {formErrors?.email && <p className="text-red-500 text-sm">{formErrors?.email}</p>}
                    </div>

                    {formErrors?.serverError && <div className="text-center border bg-red-600 text-white rounded-lg mb-5 p-3"> {formErrors?.serverError}</div>}
                    <button disabled={isLoading} onClick={handleSubmite} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {isLoading ? <Spinner color="white" size="sm" /> : 'Reset Password'}
                    </button>
                    {mailSent && <div className=" mt-3 bg-green-400 text-sm text-center p-5 border rounded-lg">We have sent you a link to reset your password</div>}
                </form>
            </div> */}
    </>
  );
}
