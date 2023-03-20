import RequireAuth from "../../../components/Wrapper/index.js";
import Transfer from "../../../components/Transfer/index.js";

function index() {
  return (
    <>
      <Transfer  />
    </>
  );
}

export default RequireAuth(index);


