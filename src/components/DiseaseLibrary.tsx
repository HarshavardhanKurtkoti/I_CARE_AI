import React from "react";
import { Link } from "react-router-dom";

interface Disease {
  name: string;
  description: string;
  link: string;
  imageUrl: string;
}

const diseases: Disease[] = [
  {
    name: "Cataracts",
    description:
      "A clouding of the eye's natural lens, often related to aging. Symptoms include blurred vision and difficulty with bright lights.",
    link: "/cataracts",
    imageUrl:
      "https://th.bing.com/th/id/OIP.XHX4WN2rLIUmH_h4fOnkFwHaE7?rs=1&pid=ImgDetMain",
  },
  {
    name: "Glaucoma",
    description:
      "A group of diseases that damage the optic nerve, often due to high eye pressure. Can lead to vision loss if untreated.",
    link: "/glaucoma",
    imageUrl:
      "https://ivisionhealthgroup.com/wp-content/uploads/2019/07/glaucoma1.jpg",
  },
  {
    name: "Macular Degeneration",
    description:
      "A condition affecting the central part of the retina, leading to loss of central vision, commonly seen in older adults.",
    link: "/macular-degeneration",
    imageUrl:
      "https://th.bing.com/th/id/OIP.3soMb6zz_sEt_istfTQU2QHaGS?rs=1&pid=ImgDetMain",
  },
  {
    name: "Diabetic Retinopathy",
    description:
      "A diabetes complication affecting the eyes, caused by damage to the blood vessels in the retina. Can lead to vision loss if not managed.",
    link: "/diabetic-retinopathy",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Fundus_-_diabetic_retinopathy.png/220px-Fundus_-_diabetic_retinopathy.png",
  },
  {
    name: "Hypertensive Retinopathy",
    description:
      "High blood pressure that can lead to complications such as vision problems, heart disease, and stroke.",
    link: "/hypertension",
    imageUrl:
      "https://decisionmakerplus.net/wp-content/uploads/DG36211Pic03a1.jpg",
  },
  {
    name: "Pathological Myopia",
    description:
      "A severe form of nearsightedness that worsens over time, leading to potential vision loss and structural changes in the eye.",
    link: "/pathological-myopia",
    imageUrl:
      "https://th.bing.com/th/id/OIP.8b37mTPqYq9EsapKUwrinQHaGV?rs=1&pid=ImgDetMain",
  },
];

export const DiseaseLibrary: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {diseases.map((disease) => (
          <div
            key={disease.name}
            className="relative rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.2)",
              boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Background Image with 3D Effect */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90"
              style={{
                backgroundImage: `url(${disease.imageUrl})`,
                filter: "brightness(80%)",
              }}
            ></div>
            {/* Dark Overlay for Enhanced Text Visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            {/* Text Content */}
            <div className="relative p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {disease.name}
              </h3>
              <p className="text-gray-300 mb-6">{disease.description}</p>
              <Link
                to={disease.link}
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md shadow hover:bg-blue-400 hover:shadow-lg focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
