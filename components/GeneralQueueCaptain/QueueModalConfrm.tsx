import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { BsExclamationOctagonFill } from "react-icons/bs";

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
            style={{
              backgroundColor: "#FCEAEA",
              borderColor: "#e0f2fe",
              color: "#0086c9",
            }}
          >
            <BsExclamationOctagonFill className="text-3xl text-red-600" />
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
        <DialogActions className="flex justify-center">
          <Button
            className="bg-gray-200 text-black w-[194px] font-semibold"
            onClick={onCancel}
          >
            إلغاء
          </Button>
          <Button
            className="bg-red-500 text-white w-[194px] font-semibold"
            onClick={onConfirm}
          >
            تأكيد
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default QueueModalConfirm;
