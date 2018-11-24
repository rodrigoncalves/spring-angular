package com.globalweb.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
public class Company extends AbstractEntity {

    @Column
    @NotNull
    private String name;

}
