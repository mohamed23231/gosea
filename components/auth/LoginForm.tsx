import { LoginSchemaInterface } from "@app_types/interfaces/forms_schemas/LoginSchemaInterface";
import GenericFormControl from "@components/form/GenericInput";
import { Spinner } from "@nextui-org/spinner";
import Link from "next/link";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface LoginFormProps {
  mailSent: boolean;
  isLoading: boolean;
  emailVerified: boolean;
  genericErrorMessage: string;
  errors: FieldErrors<LoginSchemaInterface>;
  register: UseFormRegister<LoginSchemaInterface>;
  loginSubmitHandler: (data: LoginSchemaInterface) => void;
  handleSubmit: UseFormHandleSubmit<LoginSchemaInterface, undefined>;
  requestVerifyCode: () => {};
}

export default function LoginForm({
  errors,
  register,
  handleSubmit,
  loginSubmitHandler,
  isLoading,
  emailVerified,
  mailSent,
  genericErrorMessage,
  requestVerifyCode,
}: LoginFormProps) {
  return (
    <div className="mt-5 flex justify-center items-center flex-col">
      <div className="main-img">
        <div className="img-container">
          <img src="/favicon1.jpg" alt="" />
        </div>
      </div>
      <form
        noValidate
        className="max-w-sm mx-auto grow w-full"
        onSubmit={handleSubmit(loginSubmitHandler)}
      >
        <h3 className="mt-5 mb-12 font-semibold text-4xl text-center">
          Welcome
        </h3>

        {genericErrorMessage ? (
          <div className="bg-red-500 text-white py-2.5 mb-5 font-bold text-center">
            {genericErrorMessage}
          </div>
        ) : null}

        <GenericFormControl<LoginSchemaInterface>
          label="Enter your email"
          name="email"
          placeholder="email@y.com"
          type="email"
          register={register}
          errors={errors.email?.message ? [errors.email.message] : []}
          valueAsNumber={false}
        />

        <GenericFormControl<LoginSchemaInterface>
          label="Enter your password"
          name="password"
          placeholder="******"
          type="password"
          register={register}
          errors={errors.password?.message ? [errors.password.message] : []}
          valueAsNumber={false}
        />

        <Link
          href="/auth/resetPassword"
          className="hover:text-mainColor pb-5 flex justify-end"
        >
          <p>Reset Password</p>
        </Link>

        <button
          disabled={isLoading}
          className="text-white bg-mainColor hover:bg-mainColor focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2.5"
        >
          {isLoading ? <Spinner size="sm" color="success" /> : "Login"}
        </button>

        {emailVerified && (
          <div className="mt-5 text-sm text-center p-5 border rounded-lg">
            <p>Please Check your mailbox to verify your account</p>
            <p className="mt-3">
              If you didn't receive a verification email, click{" "}
              <span
                onClick={requestVerifyCode}
                className="font-bold cursor-pointer"
              >
                here
              </span>{" "}
              and check your mail.
            </p>
          </div>
        )}

        {mailSent && (
          <div className="mt-3 bg-green-600 text-sm text-white text-center p-4 border rounded-sm">
            We have sent you a mail please check your mail box
          </div>
        )}
      </form>
    </div>
  );
}
