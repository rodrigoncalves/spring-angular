package com.globalweb.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
public class PhysicalProduct extends Product {

    @Column
    @NotNull
    private Integer stock = 0;

}

