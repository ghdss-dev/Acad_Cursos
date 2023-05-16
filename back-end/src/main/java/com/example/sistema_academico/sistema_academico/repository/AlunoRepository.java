package com.example.sistema_academico.sistema_academico.repository;

import com.example.sistema_academico.sistema_academico.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Integer> {


}
