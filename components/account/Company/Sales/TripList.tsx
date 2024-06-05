import { Trip } from "@app_types/interfaces/forms_schemas/ShowTripsSchemaInterface";
import { TripStatusInterface } from "@app_types/interfaces/forms_schemas/TripStatusInterface";
import { useRouter } from "next/router";
import axios from "axios";
import { API_BASE_URL } from "@configs/envs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Spinner } from "@nextui-org/spinner";
import { useForm } from "react-hook-form";
import useFormErrorHandler from "../../../../hooks/useFormErrorHandler";
import { zodResolver } from "@hookform/resolvers/zod";
import { TripStatusSchema } from "@zod_schemas/tripStatusSchema";
import { useEffect, useState } from "react";

interface MyServicesProp {
  isLoading: boolean;
  data: Trip[] | null;
  //   showDrivers: boolean;
  //   showManagers: boolean;
  onStatusChangeSuccess: () => void;
}

const TripList = ({
  isLoading,
  onStatusChangeSuccess,
  data,
}: //

MyServicesProp) => {
  const router = useRouter();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<TripStatusInterface>({
    resolver: zodResolver(TripStatusSchema),
  });
  const formErrorHandler = useFormErrorHandler<TripStatusInterface>(setError);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Tid, setTId] = useState(""); // State to manage the selected status
  const { id } = router.query;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  async function statusChangeHandler(data: any) {
    console.log(Tid);
    console.log(data);
    try {
      //   setIsLoading(true);
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        router.push("/auth/login");
        throw new Error("Access token not found in local storage");
      }

      const res = await axios.patch(
        `${API_BASE_URL}/trips/change-status/${Tid}/`,
        {
          status: data.status,
          rejection_reason: "string",
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      onStatusChangeSuccess();

      console.log(res);
    } catch (error: any) {
      console.log("error from add loading errors", error);
      formErrorHandler(error);
    } finally {
      //   setIsLoading(false);
    }
  }

  return (
    <>
      {/* Show Drivers Data */}

      {data && (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto text-gray-500">
          <h3 className=" text-gray-900	font-semibold text-2xl m-4 bg-gray-50">
            <FontAwesomeIcon className="mx-2" icon={faFile} />
            Trip List
          </h3>

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="text-center bg-stone-200	">
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Driver
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Trip Details
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  License Number
                </th>
                <th scope="col" className="px-6 py-3">
                  License Expiry Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th> */}
              </tr>
            </thead>
            <tbody>
              {data.map((trip: Trip) => (
                <tr
                  key={trip.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-center"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {trip.product}
                  </td>
                  <td className="px-6 py-4">
                    {trip.quantity} {trip.unit}
                  </td>
                  <td className="px-6 py-4">{trip.driver}</td>
                  <td
                    className="px-6 py-4 flex text-center justify-center cursor-pointer"
                    onClick={() => {
                      setIsModalOpen(true);
                      setTId(`${trip.id}`);
                    }}
                  >
                    <div className="mx-2">
                      <FontAwesomeIcon icon={faGauge} />
                    </div>
                    <div className=""> {trip.status}</div>
                  </td>
                  <td className="px-6 py-4">{trip.delivery_date}</td>
                  <td className="px-6 py-4 cursor-pointer">
                    <Link
                      href={{
                        pathname: "/trips/tripdetails/[id]",
                        query: { id: trip.id, triplist: id }, // Add additional parameters here
                      }}
                    >
                      Click Here
                    </Link>
                  </td>
                  {/* <td
                    className="px-6 py-4 cursor-pointer	"
                    onClick={() => {
                      handleDelete("drivers", employee.id);
                    }}
                  >
                    <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline ">
                      Delete
                    </span>
                  </td> */}
                  {isModalOpen && (
                    <div
                      onClick={handleModalClick}
                      id="middle-center-modal"
                      data-modal-placement="middle-center"
                      tabIndex={-1}
                      className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-30"
                    >
                      <div className="bg-white rounded-lg shadow p-6 w-1/2">
                        <h3 className="text-xl font-medium text-gray-900">
                          Trip Status
                        </h3>
                        <form
                          noValidate
                          onSubmit={handleSubmit(statusChangeHandler)}
                        >
                          <div className="input-containers flex ">
                            <div className="m-2 w-full">
                              <label htmlFor="status">Trip Status</label>
                              <select
                                id="status"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                                {...register("status")}
                              >
                                <option selected disabled hidden>
                                  Choose here
                                </option>

                                <option value={"pending"}>pending</option>
                                <option value={"loading"}>loading</option>
                                <option value={"in_way"}>in way</option>
                                <option value={"completed"}>completed</option>
                                <option value={"rejected"}>rejected</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <button
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              type="submit"
                            >
                              {isLoading ? (
                                <Spinner size="sm" color="success" />
                              ) : (
                                "Submit"
                              )}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TripList;
