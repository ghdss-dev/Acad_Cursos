package com.example.sistema_academico.sistema_academico.service;

import com.example.sistema_academico.sistema_academico.dto.request.CursoRequest;
import com.example.sistema_academico.sistema_academico.dto.response.CursoResponse;
import com.example.sistema_academico.sistema_academico.model.Curso;
import com.example.sistema_academico.sistema_academico.repository.CursoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class CursoService {

    @Autowired
    private CursoRepository repository;

    public void cadastrarCurso(CursoRequest request) {

        repository.save(Curso.of(request));
    }

    public List<CursoResponse> buscarCursos() {

        return CursoResponse.of(repository.findAll());
    }

    public Curso buscarPorid(Integer id) {

        return repository.findById(id).get();
    }

    @Transactional
    public CursoResponse atualizarCurso(CursoRequest request, Integer id) {

        var curso = buscarPorid(id);
        BeanUtils.copyProperties(Curso.of(request), curso, "id");

        return CursoResponse.of(repository.save(curso));
    }

    public void deletarCurso(Integer id) {

        var curso = buscarPorid(id);
        repository.delete(curso);
    }
}
