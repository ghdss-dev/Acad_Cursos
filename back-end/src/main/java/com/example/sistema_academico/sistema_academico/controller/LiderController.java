package com.example.sistema_academico.sistema_academico.controller;

import com.example.sistema_academico.sistema_academico.dto.request.LiderRequest;
import com.example.sistema_academico.sistema_academico.dto.response.LiderResponse;
import com.example.sistema_academico.sistema_academico.model.Lider;
import com.example.sistema_academico.sistema_academico.service.LiderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("lider")
public class LiderController {

    @Autowired
    private LiderService service;

    @PostMapping
    public void cadastrar(@RequestBody LiderRequest request) {

        service.cadastrarLider(request);
    }

    @GetMapping
    public List<LiderResponse> listar() {

        return service.buscarLideres();
    }

    @GetMapping("/{id}")
    Lider getPacienteById(@PathVariable Integer id) {

        return service.buscarPorid(id);
    }

    @DeleteMapping("/{id}")
    public void deletarLider(@PathVariable Integer id) {

        service.deletarLider(id);
    }

    @PutMapping("/{id}")
    public LiderResponse atualizarLider(@RequestBody LiderRequest request, @PathVariable Integer id) {

        return service.atualizarLider(request, id);
    }
}
