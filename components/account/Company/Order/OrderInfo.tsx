import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { API_BASE_URL } from "@configs/envs";
import { RequestedOrder } from "@app_types/interfaces/forms_schemas/SalesInfoSchemaInterface";
import axios from "axios";
import { Spinner } from "@nextui-org/spinner";
import TripListComponent from "./TripListComponent";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Status } from "@app_types/interfaces/forms_schemas/SalesInfoSchemaInterface";
import { statusSchema } from "@zod_schemas/OrderStatusSalesSchema";
import useFormErrorHandler from "../../../../hooks/useFormErrorHandler";
import GenericFormControl from "@components/form/GenericInput";

export type OrderInfoHandle = {
  updateId: (newId: number) => void;
};

//  Define the component and its props
interface OrderInfoProps {
  initialId: number | null;
  isSales?: boolean;
  onDeleteSuccess: () => void;
}

const OrderInfo = forwardRef<OrderInfoHandle, OrderInfoProps>(
  ({ initialId, isSales, onDeleteSuccess }, ref) => {
    const [isLoading, setIsLoading] = useState(false);
    const [id, setId] = useState(initialId);
    const [service, setService] = useState<RequestedOrder | null>(null);
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState(""); // State to manage the selected status

    useImperativeHandle(ref, () => ({
      updateId(newId: number) {
        setId(newId);
      },
    }));

    const fetchOrderDetails = async () => {
      if (!id) return;

      try {
        setIsLoading(true);
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          router.push("/auth/login");
          throw new Error("Access token not found in local storage");
        }

        const response = await axios.get(
          `${API_BASE_URL}/orders/details/${id}`,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setService(response.data);
      } catch (error) {
        console.error("Error fetching service details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      fetchOrderDetails();
    }, [id]);

    async function statusChangeHandler(data: any) {
      if (id) {
        let responsData: any;
        if (data.status == "accepted") {
          responsData = { status: data.status };
        } else if (data.status == "rejected") {
          responsData = {
            status: data.status,
            reject_reason: data.rejection_reason,
          };
        }
        try {
          console.log(id);
          setIsLoading(true);
          const accessToken = localStorage.getItem("accessToken");
          if (!accessToken) {
            router.push("/auth/login");
            throw new Error("Access token not found in local storage");
          }

          const res = await axios.patch(
            `${API_BASE_URL}/orders/change-status/${id}/`,
            responsData,
            {
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
              },
            }
          );
          setId((prevId) => {
            return prevId;
          });

          setIsModalOpen(false);
          onDeleteSuccess();
          router.push(`/order/sales`);

          console.log(res);
        } catch (error: any) {
          console.log("error from add loading errors", error);
          formErrorHandler(error);
        } finally {
          setIsLoading(false);
        }
      }
    }
    const {
      register,
      setError,
      handleSubmit,
      formState: { errors },
    } = useForm<Status>({
      resolver: zodResolver(statusSchema),
    });
    const formErrorHandler = useFormErrorHandler<Status>(setError);
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

    return (
      <>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <Spinner color="success" />
          </div>
        ) : id ? (
          <div className="main-info w-full">
            <div className="border rounded p-2 my-4 flex justify-between">
              <div className="flex">
                <div className="order-item-head-img flex mb-2 ">
                  <div className="w-16 h-16 rounded-full mr-2 overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src="/favicon1.jpg"
                      alt="Circular Image"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p>Company Name</p>
                    <p>
                      {" "}
                      {service?.company_name !== undefined &&
                      service.company_name !== null
                        ? service.company_name
                        : service?.customer_name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div
                  onClick={
                    isSales
                      ? () => {
                          setIsModalOpen(true);
                        }
                      : undefined
                  }
                  className={`${
                    isSales ? "cursor-pointer" : ""
                  } flex justify-center min-w-24 ${
                    service?.status == "accepted"
                      ? "bg-cyan-400 text-blue-700"
                      : service?.status == "in_progress"
                      ? "bg-amber-300 text-yellow-700"
                      : service?.status == "rejected"
                      ? "bg-red-400 text-red-800"
                      : service?.status == "cancelled"
                      ? "bg-red-500 text-black"
                      : service?.status == "completed"
                      ? "bg-lime-400 text-green-900"
                      : "bg-gray-400"
                  } p-1 rounded-lg`}
                >
                  <div>{service?.status}</div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="w-1/2 border rounded p-2 mr-4">
                <p className="font-semibold mb-4 mt-2">Order Details</p>
                <div className="cx-info flex w-1/2 justify-between mb-3">
                  <div className="cx-name w-2/3">
                    <p className="text-gray-400 mr-10">Company Name</p>
                    {service?.company_name !== undefined &&
                    service.company_name !== null
                      ? service.company_name
                      : service?.customer_name}
                  </div>
                  <div className="cx-id w-1/3">
                    <p className="text-gray-400">Company ID</p>
                    <p className="font-semibold">
                      {" "}
                      {service?.company_id !== undefined &&
                      service.company_id !== null
                        ? service.company_id
                        : service?.customer_id}
                    </p>
                  </div>
                </div>
                <div className="produxt-info flex w-1/2 justify-between mb-3">
                  <div className="product-name w-2/3">
                    <p className="text-gray-400 ">Product</p>
                    <p className="font-semibold"> {service?.product}</p>
                  </div>
                  <div className="product-quantity w-1/3">
                    <p className="text-gray-400 mr-10">Quantity</p>
                    <p className="font-semibold">
                      {" "}
                      {service?.quantity} {service?.unit}
                    </p>
                  </div>
                </div>
                <div className="date-info flex w-1/2 justify-between mb-3">
                  <div className="start-date w-2/3">
                    <p className="text-gray-400 mr-10">Start Date</p>
                    <p className="font-semibold">
                      {service?.delivery_start_date}
                    </p>
                  </div>
                  <div className="end-date w-1/3">
                    <p className="text-gray-400 mr-10">End Date</p>
                    <p className="font-semibold">
                      {service?.delivery_end_date}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 border rounded p-2">
                <p className="font-semibold mb-4 mt-2">Unloading Location</p>
                <div className="contact-info justify-between mb-3 mx-2">
                  <div className="">
                    <p className="text-gray-400 mr-10">Contact Number</p>
                    <div className="flex justify-between">
                      <div className="font-semibold">
                        {service?.customer_location.phone}
                      </div>
                      <div className="w-9 h-9 rounded-full bg-slate-300 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-white "
                          icon={faPhone}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact-info justify-between mb-3 mx-2">
                  <div className="">
                    <p className="text-gray-400 mr-10">Address</p>
                    <div className="flex justify-between">
                      <div className="font-semibold">
                        {service?.customer_location.address}
                      </div>
                      <div className="w-9 h-9 rounded-full bg-slate-300 flex justify-center items-center">
                        <FontAwesomeIcon
                          className="text-white "
                          icon={faMapMarkerAlt}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact-info justify-between mb-3 mx-2">
                  <div className="">
                    <p className="text-gray-400 mr-10">Gate</p>
                    <div className="flex justify-between">
                      <div className="font-semibold">
                        {service?.customer_location.gate}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact-info justify-between mb-3 mx-2">
                  <div className="">
                    {/* <Link
                      href={{
                        pathname: "/trips/tripdetails/[id]",
                        query: { id: trip.id, triplist: id }, // Add additional parameters here
                      }}
                    >
                      Click Here
                    </Link> */}

                    <p className="text-gray-400 mr-10">Details</p>
                    <div className="flex justify-between">
                      <div className="font-semibold">
                        {service?.customer_location.details}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <></>
            <div className="order-trips">
              <TripListComponent
                status={service?.status}
                product={service?.product}
                unit={service?.unit}
                isSales={isSales ? true : false}
                id={id}
              />
            </div>
            {isModalOpen && (
              <div
                onClick={handleModalClick}
                id="middle-center-modal"
                data-modal-placement="middle-center"
                tabIndex={-1}
                className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-30"
              >
                <div className="bg-white rounded-lg shadow p-6 w-1/2 ">
                  <h3 className="text-xl font-medium text-gray-900">
                    Order Request
                  </h3>
                  <form noValidate onSubmit={handleSubmit(statusChangeHandler)}>
                    <div className="input-containers flex ">
                      <div className="m-2 w-full">
                        <label htmlFor="status">Order Status</label>
                        <select
                          // onClick={() => setId(service?.id)}
                          id="status"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                          {...register("status", {
                            onChange: (e) => setSelectedStatus(e.target.value),
                          })}
                        >
                          <option selected disabled hidden>
                            Choose here
                          </option>

                          <option value={"accepted"}>Accepted</option>
                          <option value={"rejected"}>Rejected</option>
                        </select>
                        {selectedStatus === "rejected" && (
                          <GenericFormControl
                            label="Enter rejection reason"
                            name="rejection_reason"
                            valueAsNumber={false}
                            placeholder="Rejection reason"
                            type="string"
                            register={register}
                            errors={
                              errors.rejection_reason?.message
                                ? [errors.rejection_reason.message]
                                : []
                            }
                          />
                        )}
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
          </div>
        ) : (
          <div>
            <div className="main-container flex justify-center items-center flex-col">
              <img className="" src="/favicon1.jpg" alt="" />
              <h2 className="text-3xl font-medium">Select An Order</h2>
            </div>
          </div>
        )}
      </>
    );
  }
);
export default OrderInfo;
