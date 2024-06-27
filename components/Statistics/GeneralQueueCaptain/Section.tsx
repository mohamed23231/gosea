import React from "react";

interface SectionProps {
  title: string;
  bgColor: string;
  pad?: string;
  width?: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  bgColor,
  children,
  pad,
  width,
}: any) => {
  return (
    <div className={`mb-6 p-4 ${width}`}>
      <h2
        className={`${bgColor}  ${pad}  text-right text-white font-bold w-full`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
};

export default Section;
