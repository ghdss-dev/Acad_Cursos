package com.example.sistema_academico.sistema_academico.controller;

import com.example.sistema_academico.sistema_academico.dto.request.CursoRequest;
import com.example.sistema_academico.sistema_academico.dto.response.CursoResponse;
import com.example.sistema_academico.sistema_academico.model.Aluno;
import com.example.sistema_academico.sistema_academico.model.Curso;
import com.example.sistema_academico.sistema_academico.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("curso")
public class CursoController {

    @Autowired
    private CursoService service;

    @PostMapping
    public void cadastrar(@RequestBody CursoRequest request) {

        service.cadastrarCurso(request);
    }

    @GetMapping
    public List<CursoResponse> listar() {

        return service.buscarCursos();
    }

    @GetMapping("/{id}")
    Curso getCursoById(@PathVariable Integer id) {

        return service.buscarPorid(id);
    }

    @DeleteMapping("/{id}")
    public void deletarCurso(@PathVariable Integer id){

        service.deletarCurso(id);
    }

    @PutMapping("/{id}")
    public CursoResponse atualizarCurso(@RequestBody CursoRequest request, @PathVariable Integer id) {

        return service.atualizarCurso(request, id);
    }
}
