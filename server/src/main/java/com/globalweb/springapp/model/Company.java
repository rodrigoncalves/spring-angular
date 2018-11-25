package com.globalweb.springapp.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Company extends AbstractEntity {

    @Column
    @NotNull
    private String name;

    @OneToMany(mappedBy = "company")
    private List<Product> products;

    public Company(String name) {
        this.name = name;
    }

}
