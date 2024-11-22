import { MapPin } from "lucide-react";
import { Circle } from "lucide-react";

const LocationAndAvailability = () => (
  <div className="py-12">
    <Item innerText="Málaga, Spain">
      <MapPin className="mr-2" color="#4b5563" size={24} />
    </Item>
    <Item innerText="Available for new projects">
      <Circle
        className="mr-4 ml-1 self-center"
        color="white"
        fill="#10B981"
        size={12}
      />
    </Item>
  </div>
);

import React, { ReactNode } from "react";

interface ItemProps {
  children: ReactNode;
  innerText: string;
}

const Item: React.FC<ItemProps> = (props) => (
  <div className="flex mt-2">
    {props.children}
    <p className="text-base font-normal text-gray-600">{props.innerText}</p>
  </div>
);

export default LocationAndAvailability;
