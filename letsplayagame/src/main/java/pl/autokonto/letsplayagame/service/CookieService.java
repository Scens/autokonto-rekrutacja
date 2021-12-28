package pl.autokonto.letsplayagame.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import pl.autokonto.letsplayagame.model.Cookie;
import pl.autokonto.letsplayagame.repo.CookieRepo;

@Service
@Transactional
public class CookieService {
    private final CookieRepo cookieRepo;

    @Autowired
    public CookieService(CookieRepo cookieRepo) {
        this.cookieRepo = cookieRepo;
    }

    public Cookie addCookie(Cookie cookie) {
        return cookieRepo.save(cookie);
    }

    public List<Cookie> findCookieByUserId(Long userId) {
        return cookieRepo.findCookieByUserId(userId);
    }
}