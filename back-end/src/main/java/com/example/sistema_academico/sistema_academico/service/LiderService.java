package com.example.sistema_academico.sistema_academico.service;

import com.example.sistema_academico.sistema_academico.dto.request.LiderRequest;
import com.example.sistema_academico.sistema_academico.dto.response.LiderResponse;
import com.example.sistema_academico.sistema_academico.model.Lider;
import com.example.sistema_academico.sistema_academico.repository.LiderRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
public class LiderService {

    @Autowired
    private LiderRepository repository;

    public void cadastrarLider(LiderRequest request) {

        repository.save(Lider.of(request));
    }

    public List<LiderResponse> buscarLideres() {

       return LiderResponse.of(repository.findAll());
    }

    public Lider buscarPorid(Integer id) {

        return repository.findById(id).get();
    }

    @Transactional
    public LiderResponse atualizarLider(LiderRequest request, Integer id) {

        var lider = buscarPorid(id);
        BeanUtils.copyProperties(Lider.of(request), lider, "id");

        return LiderResponse.of(repository.save(lider));
    }

    public void deletarLider(Integer id) {

        var lider = buscarPorid(id);
        repository.delete(lider);
    }
}
