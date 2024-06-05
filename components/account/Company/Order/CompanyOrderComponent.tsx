import React from "react";
import DeleteButton from "@components/utilities/DeleteButton";
import { API_BASE_URL } from "@configs/envs";
import axios from "axios";
import { RequestedOrder } from "@app_types/interfaces/forms_schemas/SalesInfoSchemaInterface";
import { Status } from "@app_types/interfaces/forms_schemas/SalesInfoSchemaInterface";
import { Spinner } from "@nextui-org/spinner";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import useFormErrorHandler from "../../../../hooks/useFormErrorHandler";
import { useForm } from "react-hook-form";
import { statusSchema } from "@zod_schemas/OrderStatusSalesSchema";
import GenericFormControl from "@components/form/GenericInput";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface SalesOrders {
  isLoading: boolean;
  data: RequestedOrder[];
  onDeleteSuccess: () => void;
  selectedOrderHandler: (id: any) => void;
  // handleEditeClick: (id: any) => void; // Corrected function name
}
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

const CompanyOrderComponent = ({
  data,
  onDeleteSuccess,
  selectedOrderHandler,
}: SalesOrders) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(""); // State to manage the selected status
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(""); // State to manage the selected status

  async function statusChangeHandler(data: any) {
    if (id) {
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
          {
            status: data.status,
          },
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        onDeleteSuccess();
        setIsModalOpen(false);

        router.push(`/order/myorders`);

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
  console.log("order", data);
  return (
    // <div>
    //   <div className="flex flex-wrap ">
    //     {Array.isArray(data) && data.length > 0 ? (
    //       // Render address items if data is an array and not empty
    //       data.map((order: RequestedOrder) => (
    //         <div
    //           className={`w-2/3 rounded-md border-solid border-2 container mx-auto p-2 shadow-xl mt-2 transition-transform duration-300 hover:shadow-md   ${
    //             order.status === "accepted"
    //               ? "border-green-500"
    //               : order.status === "rejected"
    //               ? "border-red-500"
    //               : order.status === "cancelled"
    //               ? "border-red-900 "
    //               : "border-black-500"
    //           }`}
    //           key={order.id}
    //         >
    //           <h2 className="font-semibold		my-2 text-xl	">Order Details</h2>
    //           <ul>
    //             <div className="group flex flex-wrap font-bold">
    //               <li className="w-1/2 my-1 ">
    //                 <span className="text-gray-400		">Customer: </span>
    //                 {order.customer_name}
    //               </li>
    //               <li className="w-1/2 my-1">
    //                 <span className="text-gray-400		">Product: </span>
    //                 {order.product}
    //               </li>
    //               <li className="w-1/2 my-1">
    //                 <span className="text-gray-400		">Quantity: </span>
    //                 {order.quantity}
    //                 {order.unit}
    //               </li>
    //               <li className="w-1/2 my-1 text-green-800	">
    //                 <span className="text-gray-400		">Created At: </span>
    //                 {formatDate(order.created_at)}
    //               </li>
    //               <li className="w-1/2 my-3">
    //                 <span className="text-gray-400		">Note: </span>
    //                 {order.note}
    //               </li>
    //               <li className="w-1/2 my-3">
    //                 <span className="text-gray-400		">trip count: </span>
    //                 {order.trip_count}
    //               </li>

    //               {order.status == "in_progress" && (
    //                 <li className="w-1/2 my-3 hover:text-green-500">
    //                   <span className="text-gray-400		">Track Order: </span>
    //                   <Link href={`/order/trackorder/${order.id}`}>
    //                     {" "}
    //                     Click Here
    //                   </Link>
    //                 </li>
    //               )}
    //               <li
    //                 className={`w-1/2 my-1 cursor-pointer ${
    //                   order.status === "cancelled"
    //                     ? "text-red-600 font-bold"
    //                     : order.status === "accepted"
    //                     ? "text-green-400 font-bold"
    //                     : order.status === "in_progress"
    //                     ? "text-blue-700 font-bold"
    //                     : ""
    //                 }`}
    //                 onClick={() => {
    //                   setIsModalOpen(true);
    //                   setId(order.id);
    //                 }}
    //               >
    //                 <span className="text-gray-400	">Status: </span>
    //                 <FontAwesomeIcon icon={faGauge} />

    //                 {order.status}
    //               </li>
    //             </div>
    //           </ul>
    //           <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
    //             <FontAwesomeIcon icon={faAddressCard} />
    //             {order.customer_location.type} Location:
    //           </h2>
    //           <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
    //             <li>Address Title ({order.customer_location.title})</li>
    //             <li>Address({order.customer_location.address}) </li>
    //             <li>Details({order.customer_location.details})</li>
    //           </ul>

    //           {isModalOpen && (
    //             <div
    //               onClick={handleModalClick}
    //               id="middle-center-modal"
    //               data-modal-placement="middle-center"
    //               tabIndex={-1}
    //               className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-30"
    //             >
    //               <div className="bg-white rounded-lg shadow p-6 w-1/2">
    //                 <h3 className="text-xl font-medium text-gray-900">
    //                   Order Request
    //                 </h3>
    //                 <form
    //                   noValidate
    //                   onSubmit={handleSubmit(statusChangeHandler)}
    //                   // onClick={}
    //                 >
    //                   <div className="input-containers flex ">
    //                     <div className="m-2 w-full">
    //                       <label htmlFor="status">Order Status</label>
    //                       <select
    //                         id="status"
    //                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
    //                         {...register("status", {
    //                           onChange: (e) =>
    //                             setSelectedStatus(e.target.value),
    //                         })}
    //                       >
    //                         <option selected disabled hidden>
    //                           Choose here
    //                         </option>

    //                         <option value={"cancelled"}>Cancelled</option>
    //                       </select>
    //                     </div>
    //                   </div>
    //                   <div className="flex justify-end">
    //                     <button
    //                       className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //                       type="submit"
    //                     >
    //                       {isLoading ? (
    //                         <Spinner size="sm" color="primary" />
    //                       ) : (
    //                         "Submit"
    //                       )}
    //                     </button>
    //                   </div>
    //                 </form>
    //               </div>
    //             </div>
    //           )}
    //         </div>
    //       ))
    //     ) : (
    //       // Render a message when data is not available
    //       <div>No data available</div>
    //     )}
    //   </div>
    // </div>
    <>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((order: RequestedOrder) => (
          <div
            onClick={() => {
              selectedOrderHandler(order.id);
            }}
            key={order.id}
            className="order-item hover:bg-green-200 border hover:border-green-500 rounded-xl cursor-pointer p-2 mx-2 mb-2"
          >
            <div className="order-item-head flex justify-between ">
              <div className="flex">
                <div className="order-item-head-img flex mb-2 ">
                  <div className="w-20 h-20 rounded-full mr-2 overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src="/favicon1.jpg"
                      alt="Circular Image"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p>{order?.company_name}</p>
                    <p>{order?.created_at}</p>
                  </div>
                </div>
              </div>
              <div className="status flex items-center">
                <div
                  className={`flex justify-center min-w-24 ${
                    order.status == "accepted"
                      ? "bg-cyan-400 text-blue-700"
                      : order.status == "in_progress"
                      ? "bg-amber-300 text-yellow-700"
                      : order.status == "rejected"
                      ? "bg-red-400 text-red-800"
                      : order.status == "cancelled"
                      ? "bg-red-500 text-black"
                      : order.status == "completed"
                      ? "bg-lime-400 text-green-900"
                      : "bg-gray-400"
                  } p-1 rounded-lg`}
                >
                  <p>{order.status}</p>
                </div>
              </div>
            </div>
            <div className="info flex">
              <div className="w-1/4">
                <p className="text-zinc-400">Product</p>
                <p>{order.product}</p>
              </div>
              <div className="w-1/4">
                <p className="text-zinc-400">Quantity</p>
                <p>
                  {order.quantity} {order.unit}
                </p>
              </div>
              <div className="w-2/4">
                <p className="text-zinc-400">Date Of Start Date</p>
                <p>{order.delivery_start_date}</p>
              </div>
              <div className="w-1/4"></div>
            </div>
          </div>
        ))
      ) : (
        <p>No orders available</p>
      )}
    </>
  );
};

export default CompanyOrderComponent;
