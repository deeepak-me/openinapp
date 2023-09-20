import { Card, Title, DonutChart } from "@tremor/react";

const cities = [
  {
    name: "Basic Tees",
    sales: 55,
  },
  {
    name: "Custom Short Pants",
    sales: 31,
  },
  {
    name: "Super Hoodies",
    sales: 14,
  },
];

const valueFormatter = (number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export default DonutChart = () => (
  <Card className="max-w-lg">
    <Title>Sales</Title>
    <DonutChart
      className="mt-6"
      data={cities}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
  </Card>
);
