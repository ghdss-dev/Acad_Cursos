package com.example.sistema_academico.sistema_academico.service;

import com.example.sistema_academico.sistema_academico.dto.request.FeriadoRequest;
import com.example.sistema_academico.sistema_academico.dto.response.FeriadoResponse;
import com.example.sistema_academico.sistema_academico.model.Feriado;
import com.example.sistema_academico.sistema_academico.repository.FeriadoRepository;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class FeriadoService {

    @Autowired
    private FeriadoRepository repository;

    public void cadastrarFeriado(FeriadoRequest request) {

        repository.save(Feriado.of(request));
    }

    public List<FeriadoResponse> buscarFeriados() {

        return FeriadoResponse.of(repository.findAll());
    }

    public Feriado buscarPorid(Integer id) {

        return repository.findById(id).get();
    }

    @Transactional
    public FeriadoResponse atualizarFeriado(FeriadoRequest request, Integer id) {

        var feriado = buscarPorid(id);
        BeanUtils.copyProperties(Feriado.of(request), feriado, "id");

        return FeriadoResponse.of(repository.save(feriado));
    }

    public void deletarFeriado(Integer id) {

        var feriado = buscarPorid(id);
        repository.delete(feriado);
    }
}
