import axios from "axios";
import { useEffect, useState } from "react";

const useLoadServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios("../services.json")
      .then((data) => setServices(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { services, loading, error };
};

export default useLoadServices;
