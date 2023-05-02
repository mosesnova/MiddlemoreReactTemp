import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { FetchCustomer } from "./components/Employee/FetchCustomer";
import { FetchCustomerClassic } from "./components/Employee/FetchCustomerClassic";
import { FetchCustomerHook } from "./components/Employee/FetchCustomerHook";
const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
    },
    {
        path: 'fetch-Customer',
        element: <FetchCustomer />
    },
    {
        path: 'fetch-CustomerClassic',
        element: <FetchCustomerClassic />
    },
    {
        path: 'fetch-CustomerHook',
        element: <FetchCustomerHook />
    }
];

export default AppRoutes;
