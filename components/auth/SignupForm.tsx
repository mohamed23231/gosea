import {
  FieldErrors,
  UseFormRegister,
  UseFormHandleSubmit,
} from "react-hook-form";
import Link from "next/link";
import { Spinner } from "@nextui-org/spinner";
import GenericFormControl from "@components/form/GenericInput";
import { SignupSchemaInterface } from "@app_types/interfaces/forms_schemas/SingupSchemaInterface";
import { UserIcon } from "@heroicons/react/outline";

interface SignupFormProps {
  isLoading: boolean;
  errors: FieldErrors<SignupSchemaInterface>;
  register: UseFormRegister<SignupSchemaInterface>;
  handleSubmit: UseFormHandleSubmit<SignupSchemaInterface, undefined>;
  signupSubmitHandler: (data: SignupSchemaInterface) => void;
}

export default function SignupForm({
  signupSubmitHandler,
  register,
  handleSubmit,
  errors,
  isLoading,
}: SignupFormProps) {
  return (
    <div className=" flex justify-center items-center flex-col">
      <div className="main-img mt-1">
        <div className="img-container">
          <img src="/favicon1.jpg" alt="" />
        </div>
      </div>

      <form
        noValidate
        className="max-w-sm mx-auto grow w-full"
        onSubmit={handleSubmit(signupSubmitHandler)}
      >
        <div className="text-center my-5 text-gray-700 text-lg">
          <p>Nice to meet you &#128075;</p>
        </div>
        <h3 className="mt-5 mb-12 font-semibold text-4xl text-center">
          Sign Up
        </h3>

        <GenericFormControl<SignupSchemaInterface>
          label="Enter your email"
          name="email"
          placeholder="email@y.com"
          type="email"
          register={register}
          errors={errors.email?.message ? [errors.email.message] : []}
          valueAsNumber={false}
        />
        <div className="mb-5">
          <label
            htmlFor="role"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Role
          </label>
          <select
            id="role"
            {...register("role")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected disabled hidden>
              Choose here
            </option>

            <option value="company"> Company</option>
            <option value="manager">Manager</option>
            <option value="driver">Driver </option>
          </select>
        </div>

        <GenericFormControl<SignupSchemaInterface>
          label="Enter your password"
          name="password"
          placeholder="******"
          type="password"
          register={register}
          errors={errors.password?.message ? [errors.password.message] : []}
          valueAsNumber={false}
        />

        <GenericFormControl<SignupSchemaInterface>
          label="Repeat your password"
          name="confirmPassword"
          placeholder="******"
          type="password"
          register={register}
          errors={
            errors.confirmPassword?.message
              ? [errors.confirmPassword.message]
              : []
          }
          valueAsNumber={false}
        />

        <button className="text-white bg-mainColor hover:bg-mainColor focus:ring-4 focus:outline-none focus:ring-green-500 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 my-2.5">
          {isLoading ? <Spinner size="sm" color="success" /> : "Submit"}
        </button>

        <div className="text-center">
          Already have an Account?{" "}
          <Link href="/login" className="underline font-bold text-mainColor">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
