package com.example.sistema_academico.sistema_academico.dto.request;

import com.example.sistema_academico.sistema_academico.model.Aluno;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
public class TurmaRequest {

    private String nome;
    private Double valor;
}
