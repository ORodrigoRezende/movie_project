package com.orodrigorezende.movie_project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.orodrigorezende.movie_project.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByEmail(String email);
	
}
