package com.example.sistema_academico.sistema_academico.controller;

import com.example.sistema_academico.sistema_academico.dto.request.FeriadoRequest;
import com.example.sistema_academico.sistema_academico.dto.response.FeriadoResponse;
import com.example.sistema_academico.sistema_academico.model.Feriado;
import com.example.sistema_academico.sistema_academico.model.Lider;
import com.example.sistema_academico.sistema_academico.service.FeriadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("feriado")
public class FeriadoController {

    @Autowired
    private FeriadoService service;

    @PostMapping 
    public void cadastrar(@RequestBody FeriadoRequest request) {

        service.cadastrarFeriado(request);
    }

    @GetMapping
    public List<FeriadoResponse> listar() {

        return service.buscarFeriados();
    }

    @GetMapping("/{id}")
    Feriado getFeriadoById(@PathVariable Integer id) {

        return service.buscarPorid(id);
    }

    @DeleteMapping("/{id}")
    public void deletarFeriado(@PathVariable Integer id) {

        service.deletarFeriado(id);
    }

    @PutMapping("/{id}")
    public FeriadoResponse atualizarFeriado(@RequestBody FeriadoRequest request, @PathVariable Integer id) {

        return service.atualizarFeriado(request, id);
    }
}
