import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(10);
  useEffect(() => {
    setInterval(() => {
      setTime(pre => {
        if (pre < 0) navigate("/");
        return --pre;
      });
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center pt-44 text-center">
      <div className="text-primary">Payment success</div>
      <div className="mt-20">Back to home after: {time / 2}</div>
      <Link to="/">Continue shopping</Link>
    </div>
  );
};

export default PaymentSuccess;
