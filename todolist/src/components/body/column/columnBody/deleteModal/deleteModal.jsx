import React from "react";
import DeleteModalTitle from "./deleteModalTitle.jsx";
import DeleteModalCancelButton from "./deleteModalCancelButton.jsx";
import DeleteModalDeleteButton from "./deleteModalDeleteButton.jsx";
import {
  DeleteModalBackground,
  DeleteModalDiv,
  DeleteModalButtonWraaper,
} from "./deleteModal.style.jsx";

const DeleteModal = (props) => {
  return (
    <>
      <DeleteModalBackground />
      <DeleteModalDiv>
        <DeleteModalTitle />
        <DeleteModalButtonWraaper>
          <DeleteModalCancelButton handleModalFlag={props.handleModalFlag} />
          <DeleteModalDeleteButton
            handleModalDeleteButton={props.handleModalDeleteButton}
            handleModalFlag={props.handleModalFlag}
          />
        </DeleteModalButtonWraaper>
      </DeleteModalDiv>
    </>
  );
};

export default DeleteModal;
