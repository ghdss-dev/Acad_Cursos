package com.example.sistema_academico.sistema_academico.repository;

import com.example.sistema_academico.sistema_academico.model.Lider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LiderRepository extends JpaRepository<Lider, Integer> {

}
