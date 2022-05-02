import { FC } from "react";
import { DocumentNode, useQuery } from "@apollo/client";

type Props = {
  exchangeRates: DocumentNode;
};
export const ExchangeRates: FC<Props> = ({ exchangeRates }) => {
  const { loading, error, data } = useQuery(exchangeRates);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.rates.map(
    ({ currency, rate }: { currency: string; rate: string }) => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    )
  );
};
