package pl.autokonto.letsplayagame.validator;

import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;

import pl.autokonto.letsplayagame.model.User;

public class UserValidator {
    public boolean supports(Class<?> c) {
        return User.class.equals(c);
    }

    public void validate(Object obj, Errors e) {
        ValidationUtils.rejectIfEmpty(e, "name", "name.empty");
        User user = (User) obj;
        if (user.getName().length() > 8) {
            e.rejectValue("name", "too.long.name");
        }
    }
}