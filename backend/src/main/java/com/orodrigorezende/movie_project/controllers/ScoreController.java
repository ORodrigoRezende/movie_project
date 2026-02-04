package com.orodrigorezende.movie_project.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.orodrigorezende.movie_project.dto.MovieDTO;
import com.orodrigorezende.movie_project.dto.ScoreDTO;
import com.orodrigorezende.movie_project.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired
	private ScoreService service;
	
	@PutMapping
	public MovieDTO saveScore(@RequestBody ScoreDTO sto){
		MovieDTO movieDTO = service.saveScore(sto);
		return movieDTO;
	}
	
} 
