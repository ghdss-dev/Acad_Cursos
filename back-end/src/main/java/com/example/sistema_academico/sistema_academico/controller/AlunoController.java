package com.example.sistema_academico.sistema_academico.controller;

import com.example.sistema_academico.sistema_academico.dto.request.AlunoRequest;
import com.example.sistema_academico.sistema_academico.dto.response.AlunoResponse;
import com.example.sistema_academico.sistema_academico.model.Aluno;
import com.example.sistema_academico.sistema_academico.service.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("aluno")
public class AlunoController {

    @Autowired
    private AlunoService service;

    @PostMapping
    public void cadastrar(@RequestBody AlunoRequest request){

        service.cadastrarAluno(request);
    }

    @GetMapping
    public List<AlunoResponse> listar() {

        return service.buscarAlunos();
    }

    @GetMapping("/{id}")
    Aluno getAlunoById(@PathVariable Integer id) {

       return service.buscarPorid(id);
    }

    @DeleteMapping("/{id}")
    public void deletarAluno(@PathVariable Integer id){

        service.deletarAluno(id);
    }

    @PutMapping("/{id}")
    public AlunoResponse atualizarAluno(@RequestBody AlunoRequest request, @PathVariable Integer id) {

        return service.atualizarAluno(request, id);
    }

}
