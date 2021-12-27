package pl.autokonto.letsplayagame.resource;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.autokonto.letsplayagame.model.Cookie;
import pl.autokonto.letsplayagame.service.CookieService;

@RestController
@RequestMapping("/cookie")
public class CookieResource {
    private final CookieService cookieService;

    public CookieResource(CookieService cookieService) {
        this.cookieService = cookieService;
    }

    @PostMapping("/add")
    public ResponseEntity<Cookie> addUser(@Valid @RequestBody Cookie cookie, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(cookie, HttpStatus.PRECONDITION_FAILED);
        }
        Cookie newCookie = cookieService.addCookie(cookie);
        return new ResponseEntity<>(newCookie, HttpStatus.CREATED);
    }
}