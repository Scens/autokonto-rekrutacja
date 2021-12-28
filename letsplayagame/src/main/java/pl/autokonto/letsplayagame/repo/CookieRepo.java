package pl.autokonto.letsplayagame.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.autokonto.letsplayagame.model.Cookie;

public interface CookieRepo extends JpaRepository<Cookie, Long>{
    List<Cookie> findCookieByUserId(Long userId);
}