export const about = [
  {
    id: 0,
    src: "https://res.cloudinary.com/dmpnxmwnr/image/upload/v1647246619/water_xl1d4g.png",
    title: "Water",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit dolorem rerum repellendus molestias iure quae et fuga nesciunt! Repellendus voluptates",
  },

  {
    id: 1,
    src: "https://res.cloudinary.com/dmpnxmwnr/image/upload/v1647246619/gender_zk8sps.png",
    title: "Gender",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit dolorem rerum repellendus molestias iure quae et fuga nesciunt! Repellendus voluptates",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dmpnxmwnr/image/upload/v1647246618/education_pjqcbk.png",
    title: "Education",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit dolorem rerum repellendus molestias iure quae et fuga nesciunt! Repellendus voluptates",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dmpnxmwnr/image/upload/v1647246619/medical_fyubkb.png",
    title: "Health",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit dolorem rerum repellendus molestias iure quae et fuga nesciunt! Repellendus voluptates",
  },
];

export const defualtEmail = {
  name: "",
  amount: "",
  email: "",
  campaignId: "",
  comment: "",
};

export const pie = {
  labels: ["LEFT MOVEMENT", "RIGHT MOVEMENT", "NO.OF SNORES", "NO. OF COUGHS"],
  datasets: [
    {
      label: "RATIO DISTRIBUTION OF MOVEMENTS IN SLEEP",
      data: [12, 19, 23, 30],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        // "rgba(153, 102, 255, 0.5)",
        // "rgba(255, 159, 64, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        // "rgba(153, 102, 255, 1)",
        // "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// LINE

const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const BarData = {
  labels,
  datasets: [
    {
      label: "Months wise Avg Sleep Distribution",
      data: [12, 19, 3, 5, 2, 3],

      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const categories = [
  {
    id: 0,
    name: "social",
  },
  {
    id: 4,
    name: "education",
  },
  {
    id: 1,
    name: "environment",
  },
  {
    id: 2,
    name: "bully",
  },
  {
    name: "food",
    id: 3,
  },
  {
    name: "water",
    id: 5,
  },
];

// INTENSITY
const N = 100;
export const intensity = Array.from({ length: 40 }, () =>
  Math.floor(Math.random() * 50)
);

export const base_url =
  "http://5c30-2409-4040-d27-8465-75f6-5131-793d-1a3.ngrok.io";
