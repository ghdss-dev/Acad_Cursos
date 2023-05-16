package com.example.sistema_academico.sistema_academico.repository;

import com.example.sistema_academico.sistema_academico.model.Turma;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TurmaRepository extends JpaRepository<Turma, Integer> {

    List<Turma> findByValor(Double valor);
}
