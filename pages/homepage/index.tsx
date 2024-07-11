import MainHome from "@components/HomePageComponents/MainHome";
import { API_BASE_URL } from "@configs/envs";
import router from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Homepage = () => {
  const [mainHomeData, setMainHomeData] = useState([]);

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const mainHomeMainData = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/admin_marsa/HomePageApi`
      );
      console.log(response);
      setMainHomeData(response.data);
    } catch (error: any) {
      console.log("error from fetching home data", error);
    } finally {
    }
  };

  const BtnsClick = async (type: any, number: any) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/admin_marsa/CreateSpecialInvoice`,
        {
          type: type,
          number: number,
        }
      );
      // mainHomeMainData();
      console.log(response);
      const printData = response.data;
      console.log(printData);
      router.push({
        pathname: "/print",
        query: { printInvoiceForm: JSON.stringify(printData) },
      });
    } catch (error: any) {
      if (error.response.status != 200) {
        setDialogMessage("لا يوجد كباتن متاحين بالوقت الحالي");
        setDialogOpen(true);
      }

      console.log("error from fetching home data", error);
    } finally {
    }
  };

  useEffect(() => {
    mainHomeMainData();
  }, []);
  return (
    <div className="w-full">
      <div className=" custom-container">
        <MainHome
          mainData={mainHomeData}
          BtnsClick={BtnsClick}
          setDialogMessage={setDialogMessage}
          setDialogOpen={setDialogOpen}
          isDialogOpen={isDialogOpen}
          dialogMessage={dialogMessage}
        />
      </div>
    </div>
  );
};

export default Homepage;
