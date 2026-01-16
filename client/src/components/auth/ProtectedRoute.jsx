import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    return userInfo && userInfo.token ? <Outlet /> : <Navigate to="/admin" replace />;
};

export default ProtectedRoute;
