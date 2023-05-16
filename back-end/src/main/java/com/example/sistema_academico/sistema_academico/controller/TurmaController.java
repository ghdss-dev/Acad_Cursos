package com.example.sistema_academico.sistema_academico.controller;
import com.example.sistema_academico.sistema_academico.dto.request.TurmaRequest;
import com.example.sistema_academico.sistema_academico.dto.response.TurmaResponse;
import com.example.sistema_academico.sistema_academico.model.Aluno;
import com.example.sistema_academico.sistema_academico.model.Turma;
import com.example.sistema_academico.sistema_academico.service.TurmaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.JsonPath;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("turma")
public class TurmaController {

    @Autowired
    private TurmaService service;

    @PostMapping
    public void cadastrar(@RequestBody TurmaRequest request){

        service.cadastrarTurma(request);
    }

    @GetMapping
    public List<TurmaResponse> listarValor(@PathParam("valor") Double valor){

        if (valor != null) {

            return TurmaResponse.of(service.buscarPorValor(valor));
        }

        return TurmaResponse.of(service.buscarTurmas());
    }

    @GetMapping("/{id}")
    Turma getTurmaById(@PathVariable Integer id) {

        return service.buscarPorId(id);
    }

    @DeleteMapping("/{id}")
    public void deletarTurma(@PathVariable Integer id) {

        service.deletarTurma(id);
    }

    @PutMapping("/{id}")
    public TurmaResponse atualizarTurma(@RequestBody TurmaRequest request, @PathVariable Integer id) {

        return TurmaResponse.of(service.atualizarTurma(request, id));
    }

}
