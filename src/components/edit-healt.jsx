import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditHealth() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    temperature: "",
    email: "",
    phonenumber: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/health/" + id)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const onValueChange = (e) => {
    setFormData({
      ...formData,
      [e.target.dataset.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/health/update/" + id, formData)
      .then(() => navigate("/"))
      .catch((err) => console.log("Error: " + err));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Update List
        </h1>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Fullname
            </label>
            <input
              type="text"
              data-name="fullname"
              value={formData.fullname}
              onChange={onValueChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Temperature
            </label>
            <input
              type="number"
              data-name="temperature"
              value={formData.temperature}
              onChange={onValueChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              data-name="email"
              value={formData.email}
              onChange={onValueChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              data-name="phonenumber"
              value={formData.phonenumber}
              onChange={onValueChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
