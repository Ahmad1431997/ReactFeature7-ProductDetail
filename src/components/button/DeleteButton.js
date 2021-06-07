import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  return (
    <DeleteButtonStyled onClick={() => props.deleteProduct(props.product.id)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;
