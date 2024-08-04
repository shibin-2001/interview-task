import { CiShoppingBasket } from "react-icons/ci";
import { IoMdTrendingDown } from "react-icons/io";
import { TbShoppingBagCheck, TbShoppingBagX } from "react-icons/tb";

export  const data1 = [
    {
        name:'Total Orders',
        value:'75',
        percentage:'3%',
        type:'increment',
        icon:<CiShoppingBasket size={40} color="rgb(64 99 253)" style={{background:'rgb(41 51 104)',borderRadius:5,padding:5}} />
    },
    {
        name:'Total Delivered',
        value:'70',
        percentage:'3%',
        type:'decrement',
        icon:<TbShoppingBagCheck size={40} color="rgb(0 201 141)" style={{background:'rgb(21 83 69)',borderRadius:5,padding:5}} />
    },
    {
        name:'Total Cancelled',
        value:'5',
        percentage:'3%',
        type:'increment',
        icon:<TbShoppingBagX size={40} color="rgb(243 94 93)" style={{background:'rgb(92 49 57)',borderRadius:5,padding:5}} />
    },
    {
        name:'Total Revenue',
        value:'$12k',
        percentage:'3%',
        type:'decrement',
        icon:<IoMdTrendingDown size={40} color="rgb(223 64 160)" style={{background:'rgb(93 42 76)',borderRadius:5,padding:5}} />
    },
]

export const graphData = [
    {
      name: "1",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "2",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "3",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "4",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "5",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "6",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "7",
      uv: 3490,
      pv: 4300,
      amt: 2100
    },
    {
        name: "8",
        uv: 3490,
        pv: 4300,
        amt: 2100
      },
      {
        name: "9",
        uv: 4000,
        pv: 2400,
        amt: 2400
      },
      {
        name: "10",
        uv: 3000,
        pv: 1398,
        amt: 2210
      },
      {
        name: "11",
        uv: 2000,
        pv: 9800,
        amt: 2290
      }
  ];


  export const OrderDetails = [
    {
        customer:'Wade Warren',
        customerimage:'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
        orderNo:'15478256',
        amount:'$ 124.00',
        status:'Delivered',
    },
    {
        customer:'Jane Cooper',
        customerimage:'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
        orderNo:'47825615',
        amount:'$ 128.00',
        status:'Cancelled',
    },
    {
        customer:'Guy Hawkins',
        customerimage:'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
        orderNo:'71542568',
        amount:'$ 14.00',
        status:'Cancelled',
    },
    {
        customer:'Cody Fisher',
        customerimage:'https://api.dicebear.com/7.x/miniavs/svg?seed=4',
        orderNo:'51547826',
        amount:'$ 24.00',
        status:'Delivered',
    },
  ]