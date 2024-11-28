// import React from "react";

// const Validation = ({ email, password, onValidation }) => {
//   // Kiểm tra email
//   const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const isValidEmail = regexEmail.test(email);

//   // Kiểm tra mật khẩu
//   const regexPass =
//     /^(?=.*[A-Z])(?=.{7,40}$)(?=.*[ -\/:-@\[-\`{-~])(?=.*[0-9])/;
//   const isValidPass = regexPass.test(password);

//   // Gửi kết quả về cho component cha
//   React.useEffect(() => {
//     onValidation(isValidEmail, isValidPass);
//   }, [isValidEmail, isValidPass, onValidation]);

//   return null; // Không cần giao diện, chỉ xử lý logic
// };

// export default Validation;
