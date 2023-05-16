package com.example.sistema_academico.sistema_academico.dto.request;

import lombok.Data;

@Data
public class AlunoRequest {

    private String nome;
    private String telefone;
    private String endereco;
    private String cpf;
    private Integer turmaId;
}
