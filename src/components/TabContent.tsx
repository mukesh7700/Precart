import { useTheme } from "@/context/ThemeContext";
import { Card, CardContent } from "@jamsr-ui/react";
import React, { ReactNode } from "react";


type OrderItem = {
    heading: string;
    value: string;
  };

  type TabContentProps = {
    orderData: OrderItem[];
    children?: ReactNode; // Optional slot for any content
  };
const TabContent: React.FC<TabContentProps> = ({ orderData, children }) => {
  const { theme } = useTheme();
  return (
    <div>
      <Card
        className={`px-0  border-none shadow-none ${
          theme === "light" ? "bg-neutral-100" : "bg-neutral-800"
        }`}
      >
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 py-2 gap-2">
            {orderData.map((item, index) => (
              <div key={index}>
                <p className="text-sm ">{item.heading}</p>
                <p className="text-sm text-neutral-500 font-semibold">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div>
          {children && <div className="mt-4">{children}</div>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TabContent;
