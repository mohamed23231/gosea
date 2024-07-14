import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { RxExclamationTriangle } from "react-icons/rx";

interface ConfirmDialogProps {
  open: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const QueueModalConfirm: React.FC<ConfirmDialogProps> = ({
  open,
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <Dialog open={open} onClose={onCancel}>
      <div className="w-[570px] p-[24px]">
        <div className="text-center flex justify-center p-2">
          <span
            className="p-3 rounded-full"
            // style={{
            //   backgroundColor: "#FEDF89",
            //   borderColor: "#FEF0C7",
            //   color: "#B54708",
            // }}
          >
            <RxExclamationTriangle
              className={" mx-1  p-2 text-5xl rounded-full  border-3 "}
              // className="text-3xl "
              style={{
                color: "#B54708",
                backgroundColor: "#FEDF89",
                borderColor: "#FEF0C7",
              }}
            />
          </span>
        </div>
        <DialogTitle className="text-center mb-[11px] ">
          <span className="font-semibold text-2xl">تأكيد العملية</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="text-center">
            <span style={{ color: "#667085" }}>{message}</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="flex justify-between">
          <div className="flex justify-around w-full">
            <Button
              style={{
                color: "#344054",
                borderWidth: "2px", // Adjust the border width as needed
                borderColor: "#000000", // Black border color
                backgroundColor: "#FFFFFF", // White background color
              }}
              className="w-[194px] font-semibold border border-black rounded-lg"
              onClick={onCancel}
            >
              إلغاء
            </Button>
            <Button
              style={{
                backgroundColor: "#273647",
                color: "#FFFFFF",
                borderColor: "#D0D5DD",
              }}
              className="text-white w-[194px] font-semibold border border-gray-400 rounded-lg block"
              onClick={onConfirm}
            >
              تغيير
            </Button>
          </div>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default QueueModalConfirm;
