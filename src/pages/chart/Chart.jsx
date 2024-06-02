import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./Chart.css";
import axios from "axios";
import { MdOutlineArrowBackIos, MdOutlineNavigateNext } from "react-icons/md";

ChartJS.register(ArcElement, Tooltip, Legend);


const Chart = () => {
    const [products, setProducts] = useState(null)
    const [offset, setOffset] = useState(0)
    const PAGE_COUNT = 5
    useEffect(() => {
        axios
        .get("https://dummyjson.com/products", {
            params: {
                limit : PAGE_COUNT,
                skip : PAGE_COUNT * offset
            }
        })
        .then(res => setProducts(res.data.products))
    }, [offset])

    const data = {
      labels: products?.map(pro => pro.title.slice(0, 20)),
      datasets: [
        {
          label: "Qoldi",
          data: products?.map(pro => pro.stock),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

  return (
    <main>
      <section className="hero">
        <div className="container hero__cont">
          <div>
            <Pie data={data} />
          </div>
          <div className="hero__btns">
            <button onClick={() => setOffset((p) => p - 1)}>
              <MdOutlineArrowBackIos size={11}/>
              Back
            </button>
            <button onClick={() => setOffset((p) => p + 1)}>
              Next <MdOutlineNavigateNext size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Chart;
