package com.example.sistema_academico.sistema_academico.service;

import com.example.sistema_academico.sistema_academico.dto.request.TurmaRequest;

import com.example.sistema_academico.sistema_academico.model.Turma;
import com.example.sistema_academico.sistema_academico.repository.TurmaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;

@Service
public class TurmaService {

    @Autowired
    private TurmaRepository repository;

    public void cadastrarTurma(TurmaRequest request){

        repository.save(Turma.of(request));
    }

    public List<Turma> buscarTurmas(){

        return repository.findAll();
    }

    public List<Turma> buscarPorValor(Double valor) {

        return repository.findByValor(valor);
    }

    public Turma buscarPorId(Integer id) {

        return repository.findById(id).get();
    }
    @Transactional
    public Turma atualizarTurma(TurmaRequest request, Integer id) {

        var turma = buscarPorId(id);
        //BeanUtils.copyProperties(Turma.of(request), turma, "id");
        turma.setValor(request.getValor());
        return repository.save(turma);
    }

    public void deletarTurma(Integer id) {

        var turma = buscarPorId(id);
        repository.delete(turma);
    }


}
