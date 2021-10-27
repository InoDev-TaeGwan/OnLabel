import React from "react";
import Table from "./Table";

const ContactTableComponent = () => {
  /*
  * id, 이름, 이메일, 등록날짜, 답변확인 여부,답변확인버튼, 삭제버튼
  * 클릭시 내용은 펼쳐줄 것.
  */


  return (
      <div className="AdminMainContainer">
        <span className="title">Contact Table</span>
        <Table  />
      </div>
  );
};

export default ContactTableComponent;
