package com.example.Hotel.service.interfac;

import com.example.Hotel.dto.LoginRequest;
import com.example.Hotel.dto.Response;
import com.example.Hotel.entity.User;

public interface IUserService {

    Response register(User user);

    Response login(LoginRequest loginRequest);

    Response getAllUsers();

    Response getUserBookingHistory(String userId);

    Response deleteUser(String userId);

    Response getUserById(String userId);

    Response getMyInfo(String email);
}
