import React from "react";
import AdminLayout from "../../layout/Admin/AdminLayout";
import SignInComponent from "../../components/Admin/SignInComponent";

const AdminPage = () => {
  return (
    <AdminLayout>
      <SignInComponent />
    </AdminLayout>
  );
};

export default AdminPage;
