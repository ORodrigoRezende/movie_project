package com.orodrigorezende.movie_project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.orodrigorezende.movie_project.entities.Score;
import com.orodrigorezende.movie_project.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{
	
}
