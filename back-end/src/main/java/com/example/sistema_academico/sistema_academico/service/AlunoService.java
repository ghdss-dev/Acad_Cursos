package com.example.sistema_academico.sistema_academico.service;

import com.example.sistema_academico.sistema_academico.dto.request.AlunoRequest;
import com.example.sistema_academico.sistema_academico.dto.response.AlunoResponse;


import com.example.sistema_academico.sistema_academico.model.Aluno;
import com.example.sistema_academico.sistema_academico.repository.AlunoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository repository;

    public void cadastrarAluno(AlunoRequest request){

       repository.save(Aluno.of(request));
    }

    public List<AlunoResponse> buscarAlunos() {

        return AlunoResponse.of(repository.findAll());
    }

    public Aluno buscarPorid(Integer id) {

        return repository.findById(id).get();
    }

    @Transactional
    public AlunoResponse atualizarAluno(AlunoRequest request, Integer id) {

       var aluno = buscarPorid(id);

        BeanUtils.copyProperties(Aluno.of(request), aluno, "id");

        return AlunoResponse.of(repository.save(aluno));

    }

    public void deletarAluno(Integer id) {

        var aluno = buscarPorid(id);
        repository.delete(aluno);
    }

}
