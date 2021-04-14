import React from "react";
import DeleteModalTitle from "./deleteModalTitle.jsx";
import DeleteModalCancelButton from "./deleteModalCancelButton.jsx";
import DeleteModalDeleteButton from "./deleteModalDeleteButton.jsx";
import {
  DeleteModalDiv,
  DeleteModalButtonWraaper,
} from "./deleteModal.style.jsx";

const DeleteModal = () => {
  return (
    <DeleteModalDiv className="delete-modal">
      <DeleteModalTitle />
      <DeleteModalButtonWraaper>
        <DeleteModalCancelButton />
        <DeleteModalDeleteButton />
      </DeleteModalButtonWraaper>
    </DeleteModalDiv>
  );
};

export default DeleteModal;
