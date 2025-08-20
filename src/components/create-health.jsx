import axios from "axios";
import { Component } from "react";

export default class CreateHealth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      temperature: "",
      email: "",
      phonenumber: "",
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(e) {
    this.setState({
      [e.target.dataset.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const health = {
      fullname: this.state.fullname,
      temperature: this.state.temperature,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
    };

    axios
      .post("http://localhost:5000/health/add", health)
      .then((res) => (window.location = "/"))
      .catch((err) => console.log("Error: " + err));

    // clear form after submit
    this.setState({
      fullname: "",
      temperature: "",
      email: "",
      phonenumber: "",
    });
  }

  render() {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Create List
          </h1>

          <form onSubmit={this.onSubmit} className="space-y-5">
            {/* Fullname */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Fullname
              </label>
              <input
                type="text"
                data-name="fullname"
                value={this.state.fullname}
                onChange={this.onValueChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter full name"
              />
            </div>

            {/* Temperature */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Temperature
              </label>
              <input
                type="number"
                data-name="temperature"
                value={this.state.temperature}
                onChange={this.onValueChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter temperature"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                data-name="email"
                value={this.state.email}
                onChange={this.onValueChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter email"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                data-name="phonenumber"
                value={this.state.phonenumber}
                onChange={this.onValueChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter phone number"
              />
            </div>

            {/* Submit */}
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
}
