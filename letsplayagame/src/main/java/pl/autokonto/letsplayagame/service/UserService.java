package pl.autokonto.letsplayagame.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pl.autokonto.letsplayagame.repo.UserRepo;
import pl.autokonto.letsplayagame.exception.UserNotFoundException;
import pl.autokonto.letsplayagame.model.User;

@Service
@Transactional
public class UserService {
    private final UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User addUser(User user) {
        List<User> list = findUserByNameIgnoreCase(user.getName());
        if (list.isEmpty())
            return userRepo.save(user);
        return userVisit(list.get(0).getId());
    }

    public User updateUser(User user) {
        return userRepo.save(user);
    }

    public List<User> findUserByNameIgnoreCase(String name) {
        return userRepo.findUserByNameIgnoreCase(name);
    }

    public User getUserByName(String name) {
        List<User> list = findUserByNameIgnoreCase(name);
        if (list.isEmpty())
            throw new UserNotFoundException("Username " + name + " was not found");
        return list.get(0);
    }

    public User findUserById(Long id) {
        return userRepo.findUserById(id);
    }

    public User userVisit(Long userId) {
        User user = findUserById(userId);
        user.setVisits(user.getVisits() + 1);
        return updateUser(user);
    }
}