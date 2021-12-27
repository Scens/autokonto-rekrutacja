package pl.autokonto.letsplayagame.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class User implements Serializable {
    @Id
    @GeneratedValue

    private Long id;

    @NotBlank
    @Size(max=8)
    private String name;

    private Long visits;

    public User() {}

    public User(Long id, String name, Long visits) {
        this.id = id;
        this.name = name;
        this.visits = visits;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getVisits() {
        return visits;
    }

    public void setVisits(Long visits) {
        this.visits = visits;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", name='" + getName() + "'" +
            ", visits='" + getVisits() + "'" +
            "}";
    }

}