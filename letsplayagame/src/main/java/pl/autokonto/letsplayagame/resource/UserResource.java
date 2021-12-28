package pl.autokonto.letsplayagame.resource;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.autokonto.letsplayagame.model.Cookie;
import pl.autokonto.letsplayagame.model.User;
import pl.autokonto.letsplayagame.service.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/user")
public class UserResource {
    private final UserService userService;

    public UserResource(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@Valid @RequestBody User user, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(user, HttpStatus.PRECONDITION_FAILED);
        }
        User newUser = userService.addUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }

    @GetMapping("/find/{name}")
    public ResponseEntity<User> getUserByName(@PathVariable("name") String name) {
        User user = userService.getUserByName(name);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllEmployees() {
        List<User> employees = userService.findAllUsers();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/all-info")
    public ResponseEntity<Map<User, List<Cookie>>> getAllInfo() {
        Map<User, List<Cookie>> map = userService.getAllInfo();
        System.out.println(map.toString());
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
}