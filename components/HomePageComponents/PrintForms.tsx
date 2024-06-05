import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PringInputInterFace } from "@app_types/interfaces/forms_schemas/PringInputInterFace";
import { PrintSchema } from "@zod_schemas/PrintSchema";
import GenericFormControl from "@components/form/GenericInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "@nextui-org/spinner";
const PrintForms = ({ formName, formSubmit }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<PringInputInterFace>({
    resolver: zodResolver(PrintSchema),
  });

  return (
    <div className="bg-white border rounded-lg p-2">
      <div className="info">{/* <div className="name">{formName}</div> */}</div>
      <form
        noValidate
        onSubmit={handleSubmit(() => {
          formSubmit();
        })}
      >
        <div className="mb-6">
          <div className="input-info py-7">
            <div className="flex justify-between ">
              <label
                htmlFor={formName}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {formName}
              </label>
              <span
                style={{
                  backgroundColor: "#0086C9",
                  borderColor: "#B9E6FE",
                  //   fontSize: "16px",
                }}
                className={
                  " h-7	w-7   border-4 rounded-full flex justify-center items-center "
                }
              >
                <FontAwesomeIcon className="block" icon={faFile} />
              </span>
            </div>
          </div>
          <input
            {...register("barcode")}
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-2 ">
          <button
            className="w-full text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-600"
            type="submit"
          >
            {isLoading ? <Spinner size="sm" color="success" /> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PrintForms;
