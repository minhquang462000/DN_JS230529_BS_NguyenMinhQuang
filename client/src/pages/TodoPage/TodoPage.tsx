import React, { useEffect, useState } from "react";
import ListTodo from "../../components/Toto/ListTodo";
import HeaderTodo from "../../components/Toto/HeaderTodo";
import AddItem from "../../components/Toto/AddItem";
import axios from "axios";

const TodoPage = () => {
  const [dataFilled, setDataFilled] = useState<any[]>([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/v1/tasks");

      setDataFilled(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-[#e4205e]  flex flex-col justify-between shadow-[-15px_-15px_#D3D3D3] m-auto w-[450px] min-h-[500px] py-10 h-max  text-white shadow-xl ">
      <HeaderTodo />
      <ListTodo
        setDataFilled={setDataFilled}
        dataFilled={dataFilled}
        fetchData={fetchData}
      />
      <AddItem
        dataFilled={dataFilled}
        fetchData={fetchData}
        setDataFilled={setDataFilled}
      />
    </div>
  );
};

export default TodoPage;
