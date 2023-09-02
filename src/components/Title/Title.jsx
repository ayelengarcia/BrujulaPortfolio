import { Title } from "./Title.styled";

const title = () => {
  return (
    <Title
      id="title"
      className="d-flex justify-content-center fondo-presentacion m-0 py-5"
    >
      <div className="col-12 presentacion d-flex flex-column align-items-center mt-4 px-1 py-5">
        <h1 className="d-flex justify-content-center py-5">Soledad & Brian</h1>
      </div>
    </Title>
  );
};

export default title;
