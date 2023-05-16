package com.example.sistema_academico.sistema_academico.dto.request;

import lombok.Data;

@Data
public class ProfessorRequest {

    private String nome;
    private String telefone;
    private Double valorhoraaula;
    private Integer turmaId;

}
