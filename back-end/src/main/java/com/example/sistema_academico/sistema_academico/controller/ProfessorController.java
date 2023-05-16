package com.example.sistema_academico.sistema_academico.controller;

import com.example.sistema_academico.sistema_academico.dto.request.ProfessorRequest;
import com.example.sistema_academico.sistema_academico.dto.response.ProfessorResponse;
import com.example.sistema_academico.sistema_academico.model.Aluno;
import com.example.sistema_academico.sistema_academico.model.Professor;
import com.example.sistema_academico.sistema_academico.service.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("professor")
public class ProfessorController {

    @Autowired
    private ProfessorService service;

    @PostMapping
    public void cadastrar(@RequestBody ProfessorRequest request) {

        service.cadastrarProfessor(request);
    }

    @GetMapping
    public List<ProfessorResponse> listar() {

        return service.buscarProfessores();
    }

    @GetMapping("/{id}")
    Professor getProfessorById(@PathVariable Integer id) {

        return service.buscarPorid(id);
    }

    @DeleteMapping("/{id}")
    public void deletarProfessor(@PathVariable Integer id) {

        service.deletarProfessor(id);
    }

    @PutMapping("/{id}")
    public ProfessorResponse atualizarProfessor(@RequestBody ProfessorRequest request,  @PathVariable Integer id) {

        return service.atualizarProfessor(request, id);
    }
}
