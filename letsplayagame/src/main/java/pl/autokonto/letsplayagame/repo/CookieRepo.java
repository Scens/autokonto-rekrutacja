package pl.autokonto.letsplayagame.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.autokonto.letsplayagame.model.Cookie;

public interface CookieRepo extends JpaRepository<Cookie, Long>{
    
}