package pl.autokonto.letsplayagame.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.autokonto.letsplayagame.model.User;

public interface UserRepo extends JpaRepository<User, Long>{
    List<User> findUserByNameIgnoreCase(String name);
    User findUserById(Long id); 
}