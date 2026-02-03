package com.orodrigorezende.movie_project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.orodrigorezende.movie_project.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{
	
}
