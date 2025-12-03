var options1 = {
  series: [84], // Chỉ cần 1 giá trị cho RadialBar
  chart: {
    height: 200, // Phải khớp với CSS
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "50%", // Kích thước vòng tròn rỗng
      },
      dataLabels: {
        show: true,
        name: {
          show: false, // Tắt nhãn tên
        },
        value: {
          show: true,
          fontSize: "18px",
          fontWeight: 600,
          offsetY: 5,
          formatter: function (val) {
            return val + "%"; // Hiển thị giá trị phần trăm
          },
        },
      },
    },
  },
  fill: {
    colors: ["#00E396"], // Màu Xanh lá cây
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["Completed"],
  // Quan trọng: Tắt legend của ApexChart
  legend: {
    show: false,
  },
};
var options2 = {
  series: [84], // Chỉ cần 1 giá trị cho RadialBar
  chart: {
    height: 200, // Phải khớp với CSS
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "50%", // Kích thước vòng tròn rỗng
      },
      dataLabels: {
        show: true,
        name: {
          show: false, // Tắt nhãn tên
        },
        value: {
          show: true,
          fontSize: "14px",
          fontWeight: 600,
          offsetY: 5,
          formatter: function (val) {
            return val + "%"; // Hiển thị giá trị phần trăm
          },
        },
      },
    },
  },
  fill: {
    colors: ["#0077ff"], // Màu Xanh lá cây
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["Completed"],
  // Quan trọng: Tắt legend của ApexChart
  legend: {
    show: false,
  },
};

// Tương tự, bạn tạo options2, options3 cho #chart2 và #chart3 với series và màu sắc khác nhau (46% Blue, 13% Red).
var options3 = {
  series: [84], // Chỉ cần 1 giá trị cho RadialBar
  chart: {
    height: 200, // Phải khớp với CSS
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "50%", // Kích thước vòng tròn rỗng
      },
      dataLabels: {
        show: true,
        name: {
          show: false, // Tắt nhãn tên
        },
        value: {
          show: true,
          fontSize: "14px",
          fontWeight: 600,
          offsetY: 5,
          formatter: function (val) {
            return val + "%"; // Hiển thị giá trị phần trăm
          },
        },
      },
    },
  },
  fill: {
    colors: ["#ff4560"], // Màu Xanh lá cây
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["Completed"],
  // Quan trọng: Tắt legend của ApexChart
  legend: {
    show: false,
  },
};
var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
chart1.render();

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();

var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();
