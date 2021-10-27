import React from 'react';
import AdminLayout from 'layout/Admin/AdminLayout';
import ContactTableComponent from 'components/Admin/ContactTableComponent';

const AdminPage = () => {
    return (
        <AdminLayout>
            <ContactTableComponent />
        </AdminLayout>
    );
};

export default AdminPage;
