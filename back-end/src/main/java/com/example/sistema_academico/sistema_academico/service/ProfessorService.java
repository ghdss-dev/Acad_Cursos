package com.example.sistema_academico.sistema_academico.service;

import com.example.sistema_academico.sistema_academico.dto.request.ProfessorRequest;
import com.example.sistema_academico.sistema_academico.dto.response.ProfessorResponse;
import com.example.sistema_academico.sistema_academico.model.Professor;
import com.example.sistema_academico.sistema_academico.repository.ProfessorRepository;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ProfessorService {

    @Autowired
    private ProfessorRepository repository;

    public void cadastrarProfessor(ProfessorRequest request) {

        repository.save(Professor.of(request));
    }

    public List<ProfessorResponse> buscarProfessores() {

        return  ProfessorResponse.of(repository.findAll());
    }

    public Professor buscarPorid(Integer id) {

        return repository.findById(id).get();
    }

    @Transactional
    public ProfessorResponse atualizarProfessor(ProfessorRequest request, Integer id) {

        var professor = buscarPorid(id);
        BeanUtils.copyProperties(Professor.of(request), professor, "id");

        return ProfessorResponse.of(repository.save(professor));
    }

    public void deletarProfessor(Integer id) {

        var professor = buscarPorid(id);
        repository.delete(professor);
    }
}
