package com.orodrigorezende.movie_project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.orodrigorezende.movie_project.dto.MovieDTO;
import com.orodrigorezende.movie_project.dto.ScoreDTO;
import com.orodrigorezende.movie_project.entities.Movie;
import com.orodrigorezende.movie_project.entities.Score;
import com.orodrigorezende.movie_project.entities.User;
import com.orodrigorezende.movie_project.repositories.MovieRepository;
import com.orodrigorezende.movie_project.repositories.ScoreRepository;
import com.orodrigorezende.movie_project.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		if(user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);
		}
		
		Movie movie = movieRepository.findById(dto.getMovieId()).get();
	
		Score score = new Score();
		
		score.setMovie(movie);
		score.setUser(user);
		score.setValor(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double sum = 0.0;
		for(Score s : movie.getScores()) {
			sum += s.getValor();
		}
		
		double avg = sum / movie.getScores().size();
		
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		
		movie = movieRepository.save(movie);
		
		return new MovieDTO(movie);
	}
}
