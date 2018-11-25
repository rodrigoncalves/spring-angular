package com.globalweb.springapp.model;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@Getter
public abstract class AbstractEntity {

    @Id
    @GeneratedValue
    Long id;

    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    Date createdAt;

    @LastModifiedDate
    @Temporal(TemporalType.TIMESTAMP)
    Date modifiedAt;

    @PrePersist
    void onCreate() {
        createdAt = modifiedAt = new Date();
    }

    @PreUpdate
    void onUpdate() {
        modifiedAt = new Date();
    }

}
