package com.example.sistema_academico.sistema_academico.controller;

import com.example.sistema_academico.sistema_academico.dto.request.Dia_Aula_Request;
import com.example.sistema_academico.sistema_academico.dto.response.Dia_Aula_Response;
import com.example.sistema_academico.sistema_academico.model.Dia_Aula;
import com.example.sistema_academico.sistema_academico.model.Feriado;
import com.example.sistema_academico.sistema_academico.service.Dia_Aula_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("dia_aula")
public class Dia_Aula_Controller {

   @Autowired
    private Dia_Aula_Service service;

   @PostMapping
    public void cadastrar(@RequestBody Dia_Aula_Request request) {

       service.cadastrarDia_Aula(request);
   }

   @GetMapping
    public List<Dia_Aula_Response> listar() {

       return service.buscarDias_Aulas();
   }

    @GetMapping("/{id}")
    Dia_Aula getDia_AulaById(@PathVariable Integer id) {

        return service.buscarPorid(id);
    }

    @DeleteMapping("/{id}")
    public void deletarDia_Aula(@PathVariable Integer id) {

       service.deletarDia_Aula(id);
   }

    @PutMapping("/{id}")
    public Dia_Aula_Response atualizarDia_Aula(@RequestBody Dia_Aula_Request request, @PathVariable Integer id) {

       return service.atualizar_Dia_Aula(request, id);
   }
}
