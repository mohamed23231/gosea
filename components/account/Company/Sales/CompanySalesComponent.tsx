import React from "react";
import DeleteButton from "@components/utilities/DeleteButton";
import { API_BASE_URL } from "@configs/envs";
import axios from "axios";
import { Trip } from "@app_types/interfaces/forms_schemas/ShowTripsSchemaInterface";
import { ExportOrder } from "@app_types/interfaces/forms_schemas/RequestedOrderSales";
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
  data: ExportOrder[];
  onDeleteSuccess: () => void;
  selectedOrderHandler: (id: any) => void;
  // handleEditeClick: (id: any) => void; // Corrected function name
}

function CompanySalesComponent({
  data,
  onDeleteSuccess,
  selectedOrderHandler,
}: SalesOrders) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(""); // State to manage the selected status
  const [id, setId] = useState(""); // State to manage the selected status

  return (
    <>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((order: ExportOrder) => (
          <div
            onClick={() => {
              selectedOrderHandler(order.id);
            }}
            key={order.id}
            className="order-item hover:bg-green-200 border hover:border-green-500 rounded-xl cursor-pointer p-2 mx-2 mb-2"
          >
            <div> </div>
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
                    <p>{order.customer_name}</p>
                    <p>{order.created_at}</p>
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
}

export default CompanySalesComponent;
