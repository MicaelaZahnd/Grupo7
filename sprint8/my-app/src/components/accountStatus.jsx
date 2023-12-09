import React, { useEffect, useRef } from "react";
import NavBar from "./navHB";
import Header from "./headerHB";
import Footer from "./footerHB";
import Chart from "chart.js/auto"; // Importar Chart.js si aún no lo has hecho

function AccountStatus() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Código JavaScript aquí
    function generateRandomData() {
      var data = [];
      for (var i = 0; i < 5; i++) {
        data.push(Math.floor(Math.random() * 1000));
      }
      return data;
    }

    function drawChart() {
      if (chartRef.current) {
        // Destruir el gráfico existente si existe
        chartRef.current.destroy();
      }

      var data = generateRandomData();
      var chart = new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: {
          labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5'],
          datasets: [{
            label: 'Balances',
            data: data,
            backgroundColor: 'rgba(53, 16, 61, 0.7)',
            borderColor: 'rgba(53, 16, 61, 0.5)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      // Asignar el gráfico al ref para su posterior destrucción
      chartRef.current = chart;
    }

    drawChart();
  }, []); // El segundo argumento vacío [] asegura que se ejecute solo una vez después del montaje inicial

  return (
    <div className="container">
      <NavBar></NavBar>
      <div className="sub-container">
        <Header></Header>
        <div className="main-container">
          <main>
            {/* Current balance */}
            <h1>Estado de cuenta</h1>
            <p>
              Desde el panel de control, podés administrar tus finanzas de manera sencilla y segura.
            </p>
            <div className="card">
              <h2>Saldo Actual</h2>
              <p>Saldo: $1,234.56</p>
              <p>Nuevo Cobro: 03/09/23</p>
            </div>

            <div className="card">
              <h2>Comparación de Balances</h2>
              <canvas id="barChart" className="chart"></canvas>
            </div>
          </main>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default AccountStatus;
