package com.example.sistema_academico.sistema_academico.dto.request;

import lombok.Data;

import java.time.LocalDate;
@Data
public class LiderRequest {

    private String nome;
    private String telefone;
    private String status_2;
    private String observacao;
}
