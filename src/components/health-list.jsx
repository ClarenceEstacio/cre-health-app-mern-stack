import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

const Health = (props) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">{props.health.fullname}</td>
      <td className="px-4 py-3">{props.health.temperature} °C</td>
      <td className="px-4 py-3">{props.health.email}</td>
      <td className="px-4 py-3">{props.health.phonenumber}</td>
      <td className="px-4 py-3 text-center space-x-3">
        <Link
          to={"/edit/" + props.health._id}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Edit
        </Link>
        <button
          onClick={() => props.deleteHealth(props.health._id)}
          className="text-red-600 hover:text-red-800 font-medium"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

class Healthlist extends Component {
  constructor(props) {
    super(props);
    this.deleteHealth = this.deleteHealth.bind(this);
    this.state = { health: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/health/")
      .then((res) => {
        this.setState({ health: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteHealth(id) {
    axios
      .delete("http://localhost:5000/health/" + id)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    this.setState({
      health: this.state.health.filter((el) => el._id !== id),
    });
  }

  healthDeclarations() {
    return this.state.health.map((currentHealth) => {
      return (
        <Health
          health={currentHealth}
          deleteHealth={this.deleteHealth}
          key={currentHealth._id}
        />
      );
    });
  }

  render() {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Health Declarations
          </h1>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Full Name</th>
                  <th className="px-4 py-3 text-left">Temperature</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Phone Number</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {this.healthDeclarations()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Healthlist;
