import { useSelector } from "react-redux";
import { selectEmail } from "@/redux/slice/authSlice";
import { Link } from "react-router-dom";
import styles from "@/style";
const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "bryan@gmail.com") {
    return children;
  }
  return (
    <section style={{ height: "80vh" }} className="pt-40">
      <div className="flex items-center justify-center">
        <h2>Permisos Denegados</h2>
        <p>Esta pagina necesita permisos de administrador</p>
        <hr />
        <Link to="/">
          <button className={`${styles.button}`}> &larr; Back To Home</button>
        </Link>
      </div>
    </section>
  );
};
export const AdminOnlyLink = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "bryan@gmail.com") {
    return children;
  }
  return null;
};

export default AdminOnlyRoute;
