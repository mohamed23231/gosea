import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, IconName } from "@fortawesome/fontawesome-svg-core";

interface ButtonProps {
  onClick: () => void;
  buttonName: string;
  className: string;
  iconName?: IconProp; // Corrected type

  // onDeleteSuccess: () => void;
  // handleEditeClick: (id: any) => void;
  //   cardId: string | number;
}

const ButtonsComponent = ({
  onClick,
  buttonName,
  className,
  iconName,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" className={`p-20 ${className}`} {...props}>
      {iconName && <FontAwesomeIcon icon={iconName} />}{" "}
      {/* No need for prefix here */}
      {buttonName}
    </button>
  );
};

export default ButtonsComponent;
