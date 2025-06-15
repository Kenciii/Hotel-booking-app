import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './component/home/HomePage';
import AllRoomsPage from './component/booking_rooms/AllRoomsPage';
import RoomDetailsPage from './component/booking_rooms/RoomDetailsPage';
import LoginPage from './component/auth/LoginPage';
import Navbar from './component/common/Navbar';
import Footer from './component/common/Footer';
import RegisterPage from './component/auth/RegisterPage';
import ProfilePage from './component/profile/ProfilePage';
import EditProfilePage from './component/profile/EditProfilePage';
import { ProtectedRoute, AdminRoute } from './service/guard.jsx';
import AdminPage from './component/admin/AdminPage';
import ManageRoomPage from './component/admin/ManageRoomPage';
import ManageBookingsPage from './component/admin/ManageBookingsPage';
import AddRoomPage from './component/admin/AddRoomPage';
import EditRoomPage from './component/admin/EditRoomPage';
import EditBookingPage from './component/admin/EditBookingPage';
import FindBookingPage from './component/booking_rooms/FindBookingPage';

function App() {
  
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
        <div className='content'>
          <Routes>

            {/* Public Routes */}
            <Route exact path='/home' element={<HomePage/>}/>
            <Route exact path='/rooms' element={<AllRoomsPage/>}/>
            <Route path='/find-booking' element={<FindBookingPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>

            {/* Protected Routes */}
            <Route path='/room-details-book/:roomId' element={ <ProtectedRoute element={<RoomDetailsPage/>} /> }/>
            <Route path='/profile' element={ <ProtectedRoute element={<ProfilePage/>} /> }/>
            <Route path='/edit-profile' element={ <ProtectedRoute element={<EditProfilePage/>} /> }/>

            {/* admin routes */}
            <Route path='/admin' element={ <AdminRoute element={<AdminPage/>} /> }/>
            <Route path='/admin/manage-rooms' element={ <AdminRoute element={<ManageRoomPage/>} /> }/>
            <Route path='/admin/manage-bookings' element={ <AdminRoute element={<ManageBookingsPage/>} /> }/>
            <Route path='/admin/add-room' element={ <AdminRoute element={<AddRoomPage/>} /> }/>

            <Route path='/admin/edit-room/:roomId' element={ <AdminRoute element={<EditRoomPage/>} /> }/>
            <Route path='/admin/edit-booking/:bookingCode' element={ <AdminRoute element={<EditBookingPage/>} /> }/>


            <Route path='*' element={<Navigate to="/home"/>}/>

          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
