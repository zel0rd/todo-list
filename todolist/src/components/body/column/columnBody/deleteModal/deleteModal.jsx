import React from "react";
import DeleteModalTitle from "./deleteModalTitle.jsx";
import DeleteModalCancelButton from "./deleteModalCancelButton.jsx";
import DeleteModalDeleteButton from "./deleteModalDeleteButton.jsx";
import {
  DeleteModalDiv,
  DeleteModalButtonWraaper,
} from "./deleteModal.style.jsx";

const DeleteModal = (props) => {
  return (
    <DeleteModalDiv>
      <DeleteModalTitle />
      <DeleteModalButtonWraaper>
        <DeleteModalCancelButton handleModalFlag={props.handleModalFlag} />
        <DeleteModalDeleteButton handleModalFlag={props.handleModalFlag} />
      </DeleteModalButtonWraaper>
    </DeleteModalDiv>
  );
};

export default DeleteModal;
