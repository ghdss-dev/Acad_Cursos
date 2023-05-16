package com.example.sistema_academico.sistema_academico.service;

import com.example.sistema_academico.sistema_academico.dto.request.Dia_Aula_Request;
import com.example.sistema_academico.sistema_academico.dto.response.Dia_Aula_Response;
import com.example.sistema_academico.sistema_academico.model.Dia_Aula;
import com.example.sistema_academico.sistema_academico.repository.Dia_Aula_Repository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class Dia_Aula_Service {

    @Autowired
    private Dia_Aula_Repository repository;

    public void cadastrarDia_Aula(Dia_Aula_Request request) {

        repository.save(Dia_Aula.of(request));

    }

    public List<Dia_Aula_Response> buscarDias_Aulas() {

        return Dia_Aula_Response.of(repository.findAll());
    }

    public Dia_Aula buscarPorid(Integer id) {

        return repository.findById(id).get();
    }

    @Transactional
    public Dia_Aula_Response atualizar_Dia_Aula(Dia_Aula_Request request, Integer id) {

        var dia_aula = buscarPorid(id);
        //BeanUtils.copyProperties(Dia_Aula.of(request), dia_aula, "id");

        dia_aula.setData_aula(request.getData_aula());
        return Dia_Aula_Response.of(repository.save(dia_aula));
    }

    public void deletarDia_Aula(Integer id) {

        var dia_aula = buscarPorid(id);
        repository.delete(dia_aula);
    }
}
