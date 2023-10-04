import Swal from "sweetalert2";

import { CallAlert, CallSuccessAlert, CallErrorAlert } from "../domain-types";

const styledSwal = Swal.mixin({
  buttonsStyling: true,
  confirmButtonColor: "#fff",
  showConfirmButton: false,
});

export const call: CallAlert = ({ type, title, description, onConfirm }) => {
  void styledSwal
    .fire({
      icon: type,
      title,
      text: description,
      allowOutsideClick: true,
      returnFocus: false,
    })
    .then((isConfirm) => {
      if (isConfirm) {
        if (onConfirm) {
          onConfirm();
        }
      }
    });
};

export const callSuccess: CallSuccessAlert = (input) => {
  return call({ type: "success", ...input });
};

export const callError: CallErrorAlert = (input) => {
  return call({ type: "error", ...input });
};
