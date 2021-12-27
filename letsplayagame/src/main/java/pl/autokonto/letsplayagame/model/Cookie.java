package pl.autokonto.letsplayagame.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Pattern;

@Entity
public class Cookie implements Serializable{
    @Id
    @GeneratedValue
    private Long id;

    private Long userId;

    @Pattern(regexp = "^[a-zA-Z0-9]+$")
    private String name;

    @Min(1)
    @Max(18)
    private Long quantity;

    private Date bakingDate;

    private boolean veganFriendly;

    @Lob
    private String imgSrc;

    public Cookie() {
    }

    public Cookie(Long id, Long userId, String name, Long quantity, Date bakingDate, boolean veganFriendly, String imgSrc) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.quantity = quantity;
        this.bakingDate = bakingDate;
        this.veganFriendly = veganFriendly;
        this.imgSrc = imgSrc;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return this.userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getQuantity() {
        return this.quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }

    public Date getBakingDate() {
        return this.bakingDate;
    }

    public void setBakingDate(Date bakingDate) {
        this.bakingDate = bakingDate;
    }

    public boolean isVeganFriendly() {
        return this.veganFriendly;
    }

    public boolean getVeganFriendly() {
        return this.veganFriendly;
    }

    public void setVeganFriendly(boolean veganFriendly) {
        this.veganFriendly = veganFriendly;
    }

    public String getImgSrc() {
        return this.imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", userId='" + getUserId() + "'" +
            ", name='" + getName() + "'" +
            ", quantity='" + getQuantity() + "'" +
            ", bakingDate='" + getBakingDate() + "'" +
            ", veganFriendly='" + isVeganFriendly() + "'" +
            ", imgSrc='" + getImgSrc() + "'" +
            "}";
    }
}