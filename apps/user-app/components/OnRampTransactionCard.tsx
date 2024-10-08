import { Card } from "@repo/ui/card";
import { $Enums } from "@repo/db";
import { OnRampTxnItem } from "./OnRampTxnItem";

export const OnRampTransactionCard = ({
  transactions,
}: {
  transactions?: {
    amount: number;
    status: $Enums.OnRampStatus;
    time: Date;
  }[];
}) => {
  if (!transactions?.length)
    return (
      <Card title="Recent Transactions">
        <div className="text-center py-3">No Recent Transactions</div>
      </Card>
    );
  else
    return (
      <Card title="Recent Transactions">
        <div className="pt-2">
          {transactions?.map((t, index) => (
            <OnRampTxnItem key={index} txn={t} />
          ))}
        </div>
      </Card>
    );
};
