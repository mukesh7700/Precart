import { useTheme } from "@/context/ThemeContext";
import { Card, CardContent } from "@jamsr-ui/react";
import React, { ReactNode } from "react";


type OrderItem = {
    status: string;
    orderId: string;
    orderDate: string;
    total: string;
    children?: ReactNode;
  };

  
const TabContent: React.FC<OrderItem> = ({ orderDate, orderId, status, total, children }) => {
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
            
              <div >
                <p className="text-sm ">Status</p>
                <p className="text-sm text-neutral-500 font-semibold">
                  {status}
                </p>
              </div>
              <div >
                <p className="text-sm ">OrderId</p>
                <p className="text-sm text-neutral-500 font-semibold">
                  {orderId}
                </p>
              </div>
              <div >
                <p className="text-sm ">Order date</p>
                <p className="text-sm text-neutral-500 font-semibold">
                  {orderDate}
                </p>
              </div>
              <div >
                <p className="text-sm ">Total</p>
                <p className="text-sm text-neutral-500 font-semibold">
                  {total}
                </p>
              </div>
            
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
