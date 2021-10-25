import React from 'react';
import AdminLayout from 'layout/Admin/AdminLayout';
import TableComponent from 'components/Admin/TableCompnent';

const AdminPage = () => {
    return (
        <AdminLayout>
            <TableComponent />
        </AdminLayout>
    );
};

export default AdminPage;
