import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useFormErrorHandler from "../../hooks/useFormErrorHandler";
import GenericFormControl from "@components/form/GenericInput";
import { Spinner } from "@nextui-org/spinner";
import { MainHomeEditeInvoice } from "@app_types/interfaces/forms_schemas/goSea/MainHomeEditeInvoice";
import { MainHomeEditeInvoiceSchema } from "@zod_schemas/goSea/MainHomeEditeInvoiceSchema";
import axios from "axios";
import { API_BASE_URL } from "@configs/envs";
const EditeInvoiceModal = ({
  handleModalClick,
  openModal,
  closeModal,
}: any) => {
  const {
    register,
    setError,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<MainHomeEditeInvoice>({
    resolver: zodResolver(MainHomeEditeInvoiceSchema),
  });
  const formErrorHandler = useFormErrorHandler<MainHomeEditeInvoice>(setError);
  const [captainsList, setCaptainsList] = useState<any[]>([]);
  const [filteredBoats, setFilteredBoats] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCaptainsInfo = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${API_BASE_URL}/admin_marsa/ChangeInvoiceCaptain`
        );
        setCaptainsList(response.data);
      } catch (error: any) {
        console.log("error from fetching captains data", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (openModal) {
      getCaptainsInfo();
    }
  }, [openModal]);

  const handleBoatTypeChange = (selectedType: string) => {
    const filtered = captainsList.filter(
      (captain) => captain.boat_type === selectedType
    );
    setFilteredBoats(filtered);
    setValue("boat", ""); // Clear boat selection when boat_type changes
  };

  const onSubmit = async (data: MainHomeEditeInvoice) => {
    try {
      setIsLoading(true);
      // Forming the data object to send
      const requestData = {
        barcode: data.barecode,
        captain: data.boat, // Assuming 'boat' holds the captain id based on your structure
      };

      // Example Axios request
      const response = await axios.post(
        `${API_BASE_URL}/ChangeInvoiceCaptain`,
        requestData
      );
      console.log("Axios response:", response);
      // Handle success or further actions
    } catch (error) {
      console.error("Error submitting form:", error);
      formErrorHandler(error);
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      onClick={handleModalClick}
      id="middle-center-modal"
      data-modal-placement="middle-center"
      tabIndex={-1}
      className={`fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ${
        openModal ? "block" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-medium text-gray-900">Add Employee</h3>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="input-containers flex flex-wrap">
            <div className="w-full p-2">
              <GenericFormControl<any>
                label={"الباركود"}
                name="barecode"
                placeholder={"الباركود"}
                type="string"
                register={register}
                errors={
                  errors.barecode?.message ? [errors.barecode.message] : []
                }
                valueAsNumber={false}
              />
            </div>

            <div className="w-full p-2">
              <label
                htmlFor="boatType"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Boat Type
              </label>
              <select
                id="boatType"
                {...register("boatType")}
                onChange={(e) => handleBoatTypeChange(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Select Boat Type</option>
                {Array.isArray(captainsList) ? (
                  captainsList.map((captain) => (
                    <option key={captain.id} value={captain.boat_type}>
                      {captain.boat_type}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No captains available
                  </option>
                )}
              </select>
            </div>

            <div className="w-full p-2">
              <label
                htmlFor="boat"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Boat
              </label>
              <select
                id="boat"
                {...register("boat")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Select Boat</option>
                {filteredBoats.map((captain) => (
                  <option key={captain.id} value={captain.id}>
                    {captain.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Spinner size="sm" color="success" /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditeInvoiceModal;
